import { NextPage } from "next";

import { Box, Button } from "@mui/material";

interface Props {
  displayShow: object;
}

const NavItems: NextPage<Props> = ({ displayShow }) => {
  const sections:Array<string> = ["خانه", "توضیحات", "محصولات", "ارتباط با ما"];

  const boxStyle: object = { m: "0 auto", display: displayShow };

  const navItems = sections.map((item, index) => (
    <Button key={index} color="inherit" sx={{ mx: 2 }}>
      {item}
    </Button>
  ));

  return <Box sx={boxStyle}>{navItems}</Box>;
};

export default NavItems;
