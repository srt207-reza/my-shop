"use client";
import { Box, Button } from "@mui/material";
import Link from "next/link";

interface Props {
  displayShow: object;
}

const NavItems: React.FC<Props> = ({ displayShow }) => {
  const sections: Array<object> = [
    { name: "خانه", link: "/" },
    { name: "توضیحات", link: "/#description" },
    { name: "محصولات", link: "/#products" },
    { name: "ارتباط با ما", link: "#about" },
  ];

  const boxStyle: object = { m: "0 auto", display: displayShow };

  const navItems = sections.map((item: any, index) => (
    <Button key={index} color="inherit" sx={{ mx: 2 }}>
      <Link href={item.link}>{item.name}</Link>
    </Button>
  ));

  return <Box sx={boxStyle}>{navItems}</Box>;
};

export default NavItems;
