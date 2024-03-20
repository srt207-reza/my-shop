"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useCookies } from "react-cookie";
import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAppSelector } from "@/redux/hook";
import { selectedProductsForStore } from "@/redux/store/selected";

interface Props {
  style: object;
}

const CustomButton: React.FC<Props> = ({ style }) => {
  const router = useRouter();
  const products = useAppSelector(selectedProductsForStore);
  const [cookie] = useCookies();
  const [session, setSession] = useState("");

  const goLoginPage = () => {
    router.push("/login");
  };

  const goStorePage = () => {
    router.push("/store");
  };

  useEffect(() => {
    setSession(cookie?.userToken);
  }, []);

  return (
    <>
      <Button
        color="inherit"
        onClick={session ? goStorePage : goLoginPage}
        sx={{ mx: 2, display: style }}
      >
        {session ? (
          <>
            <ShoppingCartIcon sx={{ mx: 1 }} />
            سبد خرید
            {products?.[0] && (
              <span className="product-label">{products?.length}</span>
            )}
          </>
        ) : (
          <>
            <LoginIcon sx={{ mx: 1 }} />
            ورود
          </>
        )}
      </Button>
    </>
  );
};

export default CustomButton;
