import { NextPage, GetServerSideProps } from "next";

import Header from "@/theme/layouts/header/header";
import callApi from "@/auth/service";
import { Container } from "@mui/material";
import Footer from "@/theme/layouts/footer/footer";
import ProductDetails from "@/components/product-details";
import { useEffect } from "react";
import { useAppDispatch } from "@/redux/hook";
import { clickProduct } from "@/redux/store/products";

interface Props {
  image: string;
  title: string;
  price: number;
  description: string;
}

const SingleProduct: NextPage<Props> = (props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(clickProduct(false));
  }, []);

  return (
    <>
      <Header />
      <ProductDetails {...props} />

      <div className="custom-divider-bottom">
        <Container>
          <Footer />
        </Container>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const res = await callApi().get(`products/${ctx.query.id}`);

    if (res?.data) {
      return {
        props: { ...res.data },
      };
    }
  } catch {}

  return {
    notFound: true,
  };
};

export default SingleProduct;
