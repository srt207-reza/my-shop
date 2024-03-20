import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Box, Container } from "@mui/material";
import { useCookies } from "react-cookie";

import ProductItem from "@/components/product-item/product-item";
import Toast from "@/components/sweetalert";
import { useAppSelector } from "@/redux/hook";
import Header from "@/theme/layouts/header/header";
import {
  selectedProductsForStore,
  selectedRepeatProductsForStore,
} from "@/redux/store/selected";

const Store: NextPage = () => {
  const products = useAppSelector(selectedProductsForStore);
  const productsRepeat = useAppSelector(selectedRepeatProductsForStore);
  const [priceCounter, setPriceCounter] = useState(0);
  const [cookie] = useCookies();
  const router = useRouter();

  const productItems = products?.map((item: any) => {
    return <ProductItem counter={true} key={item.id} {...item} />;
  });

  const counterProducts = () => {
    products?.map((item: any) => {
      setPriceCounter((data) => data + item.price);
    });
  };

  useEffect(() => {
    if (!cookie?.userToken) {
      router.push("/");
    }

    counterProducts();

    if (!productsRepeat?.[0]) {
      Toast.fire({
        icon: "error",
        title: "کالایی یافت نشد !",
      });
    }
  }, []);

  return (
    <>
      <Header />
      {productsRepeat?.[0] ? (
        <Container>
          <Box sx={boxStyle}>
            <h3>
              <span style={spanStyle}>تعداد نوع کالا های انتخواب شده :</span>{" "}
              {products?.length}
            </h3>
            <h3>
              <span style={spanStyle}>تعداد تمامی کالا های انتخواب شده :</span>{" "}
              {productsRepeat?.length}
            </h3>
            <h3>
              <span style={spanStyle}>فاکتور نهایی :</span> {priceCounter} $
            </h3>
          </Box>
          <Box sx={productStyle}>{productItems}</Box>
        </Container>
      ) : (
        <Box sx={boxStyle}>
          <h2>کالایی یافت نشد !</h2>
        </Box>
      )}
    </>
  );
};

const spanStyle = { color: "#FF9800" };

const boxStyle = {
  border: "2px solid #393939",
  borderTop: "none",
  mb: "3rem",
  borderRadius: "0 0 1rem 1rem",
  display: "flex",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
  alignItems: "center",
};

const productStyle = {
  border: "2px solid #393939",
  mb: "3rem",
  borderRadius: "1rem",
  display: "flex",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
  alignItems: "center",
};

export default Store;
