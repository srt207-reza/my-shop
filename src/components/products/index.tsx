"use client";
import { Box, Link, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import { useAppSelector } from "@/redux/hook";
import { selectProducts } from "@/redux/store/products";
import ProductItem from "../product-item";

interface Props {}

const Products: React.FC<Props> = () => {
  const products = useAppSelector(selectProducts);
  const productItems = products?.map((item: any) => {
    return <ProductItem key={item.id} {...item} />;
  });

  return (
    <div id="products">
      <Box sx={{ ...boxStyle, justifyContent: "space-between" }}>
        <Typography color="inherit" variant="h4" component="div">
          محصولات
          <div style={labelStyle}></div>
        </Typography>
        <Typography variant="h4" component="div" sx={typographyStyle}>
          <Link href="#" color="inherit" underline="none">
            مشاهده همه
          </Link>
          <KeyboardBackspaceIcon sx={iconStyle} />
        </Typography>
      </Box>
      <Box sx={boxStyle}>{productItems}</Box>
    </div>
  );
};

const boxStyle = {
  display: "flex",
  flexWrap: "wrap",
  m: "2rem 0",
  justifyContent: "center",
};

const typographyStyle = { display: { xs: "none", md: "block" } };

const iconStyle = { m: "-5px 5px -5px 1rem", fontSize: "1.75rem" };

const labelStyle = {
  backgroundColor: "#1976d2",
  width: "100%",
  height: "5px",
  borderRadius: "0 0 1rem 1rem",
};

export default Products;
