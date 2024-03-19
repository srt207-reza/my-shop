import { NextPage } from "next";
import { useState, MouseEvent } from "react";

import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import DiamondIcon from "@mui/icons-material/Diamond";
import LoginIcon from "@mui/icons-material/Login";

import NavMenu from "@/components/navbar/menu/menu";
import NavItems from "@/components/navbar/items/item";

interface Props {}

const Header: NextPage<Props> = ({}) => {
  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);

  const displayShow: object = { xs: "none", md: "flex" };
  const displayClose: object = { xs: "flex", md: "none" };

  const openMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorNav(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#393939" }}>
      <Toolbar>
        <Button color="inherit" sx={{ mx: 2, display: displayShow }}>
          <LoginIcon sx={{ mx: 1 }} />
          ورود
        </Button>

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

export default Header;
