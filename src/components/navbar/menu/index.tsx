"use client";
import { Dispatch, ReactElement, SetStateAction } from "react";

import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

interface Props {
  close: Dispatch<SetStateAction<any | HTMLElement>>;
  open: Dispatch<SetStateAction<any | HTMLElement>>;
  displayClose: object;
  anchorNav: any | HTMLElement;
}

const NavMenu: React.FC<Props> = ({ close, displayClose, anchorNav, open }) => {
  const sections: Array<object> = [
    { name: "خانه", link: "/" },
    { name: "توضیحات", link: "/#description" },
    { name: "محصولات", link: "/#products" },
    { name: "ارتباط با ما", link: "#about" },
    { name: "ورود", link: "/login" },
  ];

  const boxStyle: object = {
    display: displayClose,
    flexGrow: 1,
    justifyContent: "start",
  };

  const menuItems: Array<ReactElement> = sections.map((item: any, index) => (
    <MenuItem key={index}>
      <Link href={item.link}>{item.name}</Link>
    </MenuItem>
  ));

  return (
    <Box sx={boxStyle}>
      <IconButton color="inherit" edge="start" aria-label="menu" onClick={open}>
        <MenuIcon sx={{ fontSize: 40 }} />
      </IconButton>

      <Menu
        open={Boolean(anchorNav)}
        sx={{ display: displayClose, left: "0 !important" }}
        style={{ left: "0 !important" }}
        onClose={close}
      >
        {menuItems}
      </Menu>
    </Box>
  );
};

export default NavMenu;
