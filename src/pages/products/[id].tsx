import { NextPage, GetServerSideProps } from "next";

import Header from "@/theme/layouts/header/header";
import callApi from "@/auth/service";
import { Box, CardMedia, Container, Typography } from "@mui/material";
import Footer from "@/theme/layouts/footer/footer";

interface Props {
  image: string;
  title: string;
  price: number;
  description: string;
}

const SingleProduct: NextPage<Props> = (props) => {
  return (
    <>
      <Header />
      <Container>
        <Box sx={boxStyle}>
          <Box>
            <h1>مشخصات محصول</h1>
            <h3>
              <span style={spanStyle}>نام کالا :</span> {props.title}
            </h3>
            <h3>
              <span style={spanStyle}>مشخصات کالا :</span> {props.description}
            </h3>
            <h3>
              <span style={spanStyle}>قیمت کالا :</span> {props.price} $
            </h3>
          </Box>

          <CardMedia
            component="img"
            height="500"
            sx={{ objectFit: "contain", width: 350 }}
            image={props.image}
            alt={props.title}
          />
        </Box>
      </Container>
      <div className="custom-divider-bottom">
        <Container>
          <Footer />
        </Container>
      </div>
    </>
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await callApi().get(`products/${ctx.query.id}`);

  return {
    props: { ...res.data },
  };
};

export default SingleProduct;
