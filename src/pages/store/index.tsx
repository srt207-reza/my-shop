import { NextPage } from "next";
import { useEffect, useState } from "react";

import { Box, Container } from "@mui/material";

import ProductItem from "@/components/product-item";
import { useAppSelector } from "@/redux/hook";
import Header from "@/theme/layouts/header/header";
import { selectedProductsForStore } from "@/redux/store/selected";

const Store: NextPage = () => {
  const products: Array<{}> = useAppSelector(selectedProductsForStore);
  const [priceCounter, setPriceCounter] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const productItems = products?.map((item: any) => {
    return <ProductItem counter={true} key={item?.id} {...item} />;
  });

  const counterProducts = async () => {
    let counter = 0;
    let price = 0;

    await products?.forEach((item: any) => {
      price += item?.price * item?.repeat;
    });

    await products?.forEach((item: any) => {
      counter += item?.repeat;
    });

    setTotalCount(counter);
    setPriceCounter(price);
  };

  useEffect(() => {
    counterProducts();
  }, [products]);

  return (
    <>
      <Header />
      {products?.[0] ? (
        <Container>
          <Box sx={boxStyle}>
            <h3>
              <span style={spanStyle}>تعداد نوع کالا های انتخواب شده :</span>{" "}
              {products?.length}
            </h3>
            <h3>
              <span style={spanStyle}>تعداد تمامی کالا های انتخواب شده :</span>{" "}
              {totalCount}
            </h3>
            <h3>
              <span style={spanStyle}>فاکتور نهایی :</span> {priceCounter.toFixed(2)} $
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
