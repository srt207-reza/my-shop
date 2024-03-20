import { NextPage } from "next";
import { useState, MouseEvent } from "react";

import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import DiamondIcon from "@mui/icons-material/Diamond";

import NavMenu from "@/components/navbar/menu/menu";
import NavItems from "@/components/navbar/items/item";
import CustomButton from "@/components/custom-button/custom-button";
import { useCookies } from "react-cookie";

interface Props {}

const Header: NextPage<Props> = ({}) => {
  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);

  const openMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorNav(null);
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: "#393939" }}>
      <Toolbar>
        <CustomButton style={displayShow} />

        <NavMenu
          close={closeMenu}
          open={openMenu}
          displayClose={displayClose}
          anchorNav={anchorNav}
        />

        <NavItems displayShow={displayShow} />

        <IconButton
          color="inherit"
          aria-label="logo"
          sx={{ display: displayShow }}
        >
          <DiamondIcon sx={{ fontSize: 40 }} />
        </IconButton>

        <Typography variant="h6">Top Dev</Typography>
      </Toolbar>
    </AppBar>
  );
};

const displayShow: object = { xs: "none", md: "flex" };
const displayClose: object = { xs: "flex", md: "none" };

export default Header;
