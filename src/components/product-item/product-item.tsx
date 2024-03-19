import { NextPage } from "next";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const cardStyle = {
  maxWidth: 345,
  m: 2,
  direction: "ltr",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const cardActionStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};

const typographyStyle = {
  bgcolor: "#607D8B",
  p: "5px 1rem",
  width: 1,
  borderRadius: "4px",
  textAlign: "center",
};

interface Props {
  key: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

const ProductItem: NextPage<Props> = ({ title, price, description, image }) => {
  return (
    <Card sx={cardStyle}>
      <CardMedia
        component="img"
        width="345"
        height="340"
        sx={{ objectFit: "fill" }}
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography
          gutterBottom
          color={"GrayText"}
          variant="h5"
          component="div"
        >
          {title.split(" ").slice(1, 3).join(" ")}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description.split(" ").slice(1, 15).join(" ")}
        </Typography>
      </CardContent>
      <CardActions sx={cardActionStyle}>
        <Typography sx={typographyStyle} color="inherit" variant="subtitle1" component="div">
          {price} $
        </Typography>
        <Button sx={{ width: 1 }} variant="contained">
          افزودن
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
