import { Box, Button, CardMedia, Container } from "@mui/material";
import { NextPage } from "next";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useRouter } from "next/router";

interface Props {
  image: string;
  title: string;
  price: number;
  description: string;
}

const ProductDetails: NextPage<Props> = ({
  image,
  title,
  price,
  description,
}) => {
  const route = useRouter();
  const backHandler = () => {
    route.back();
  };

  return (
    <Container>
      <Box sx={boxStyle}>
        <Box>
          <h1>مشخصات محصول</h1>
          <h3>
            <span style={spanStyle}>نام کالا :</span> {title}
          </h3>
          <h3>
            <span style={spanStyle}>مشخصات کالا :</span> {description}
          </h3>
          <h3>
            <span style={spanStyle}>قیمت کالا :</span> {price} $
          </h3>
          <Button onClick={backHandler} variant="outlined" color="warning">
            بازگشت
            <KeyboardBackspaceIcon sx={{ m: "0 .5rem 0 0" }} />
          </Button>
        </Box>

        <CardMedia
          component="img"
          height="500"
          sx={{ objectFit: "contain", width: 350 }}
          image={image}
          alt={title}
        />
      </Box>
    </Container>
  );
};

const boxStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  my: "10rem",
  flexDirection: { xs: "column-reverse", md: "row" },
};

const spanStyle = { color: "#FF9800" };

export default ProductDetails;
