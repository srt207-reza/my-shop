import { GetServerSideProps } from "next";
import { useEffect } from "react";

import { useAppDispatch } from "@/redux/hook";
import { updateProduct } from "@/redux/store/products";
import callApi from "@/auth/service";
import Dashboard from "./dashboard";
import type { ReactElement } from "react";

export default function Home(props: any) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const converToArry = Object.keys(props).map((key) => props[key]);
    dispatch(updateProduct(converToArry));
  }, [props]);

  return <Dashboard />;
}

Home.getLayout = function getLayout(page: ReactElement) {
  console.log(page);
  return { page };
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await callApi().get("products");
    
    return {
      props: { ...res.data },
    };
  } catch {}

  return {
    notFound: true,
  };
};
