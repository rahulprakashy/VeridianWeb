import { Avatar, Box, Grid2 as Grid } from "@mui/material";
import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import NavContents from "../navContents/navContents";
import MenuIcon from "../../assets/images/Vector5.png";
import CloseIcon from "../../assets/images/Close.png";
import { StyledTopNav } from "./topNavStyles";

export default function TopNav({ onNavigate, sections }) {
  const styles = StyledTopNav();

  const [openNav, setOpenNav] = useState(false);

  function HandleOpenNavBar() {
    console.log(openNav);
    setOpenNav(!openNav);
  }

  return (
    <Grid>
      <Grid
        sx={styles.topNavFirstGrid}
      >
        <Avatar
          src={Logo}
          sx={styles.topNavFirstImage}
        />
        <Avatar
          src={openNav ? CloseIcon : MenuIcon}
          sx={styles.topNavSecondImage}
          onClick={HandleOpenNavBar}
        />
        <Grid
          sx={styles.topNavSecondGrid}
        >
          <NavContents
            onNavigate={onNavigate}
            sections={sections}
            fontSize="18px"
            fontWeight={500}
          />
        </Grid>
        <Avatar
          src={openNav ? CloseIcon : MenuIcon}
          sx={styles.topNavThirdImage}
          onClick={HandleOpenNavBar}
        />
      </Grid>
      <Grid
        sx={{...styles.topNavThirdGrid,display: openNav ? "block" : "none",}}
      >
        <NavContents
          onNavigate={onNavigate}
          sections={sections}
          fontSize="20px"
          fontWeight={600}
          flexDirection="column"
          openTopNav={HandleOpenNavBar}
        />
      </Grid>
    </Grid>
  );
}
