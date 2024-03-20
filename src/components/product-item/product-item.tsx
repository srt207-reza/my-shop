import { NextPage } from "next";
import Link from "next/link";
import { useLayoutEffect, useState } from "react";

import { useCookies } from "react-cookie";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  deleteSelectedProduct,
  selectedProductsForStore,
  updateSelectedProduct,
} from "@/redux/store/selected";
import Counter from "../counter/counter";

interface Props {
  key?: number;
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  counter?: boolean;
}

const ProductItem: NextPage<Props> = (props) => {
  const [cookie] = useCookies();
  const [select, setSelect] = useState(false);
  const products = useAppSelector(selectedProductsForStore);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    setSelect(checkItem());
  }, []);

  const addProductInStore = () => {
    if (select) dispatch(deleteSelectedProduct(props.id));
    else dispatch(updateSelectedProduct(props));
    setSelect(!select);
  };

  const checkItem = () => {
    const res = products?.some((item: any) => item.id === props.id);
    return res || false;
  };

  return (
    <Card sx={cardStyle}>
      <CardMedia
        component="img"
        width="345"
        height="340"
        sx={{ objectFit: "fill" }}
        image={props.image}
        alt={props.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom color={"GrayText"} variant="h5">
          {props.title.split(" ").slice(1, 3).join(" ")}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {props.description.split(" ").slice(1, 15).join(" ")} . . .
        </Typography>
      </CardContent>
      <CardActions sx={cardActionStyle}>
        <Typography sx={typographyStyle} color="inherit" variant="subtitle1">
          {props.price} $
        </Typography>
        {props.counter ? (
          <>
            <Counter {...props} />
          </>
        ) : (
          <Button sx={{ width: 1 }} color="warning" variant="contained">
            <Link href="/products/[id]" as={`/products/${props.id}`}>
              مشاهده
            </Link>
          </Button>
        )}
        <Button
          disabled={!cookie?.userToken}
          sx={{ width: 1, display: props.counter ? "none" : "block" }}
          onClick={addProductInStore}
          color={select ? "error" : "primary"}
          variant="contained"
        >
          {select ? "بازنشانی" : "افزودن"}
        </Button>
      </CardActions>
    </Card>
  );
};

const cardStyle = {
  m: 2,
  maxWidth: 345,
  direction: "ltr",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const cardActionStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  px: "0 8px 8px",
};

const typographyStyle = {
  p: "5px 1rem",
  width: 1,
  bgcolor: "#607D8B",
  borderRadius: "4px",
  textAlign: "center",
};

export default ProductItem;
