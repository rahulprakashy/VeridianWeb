import { Box, Grid2 as Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledNavContents } from "./navContentsStyle";

export default function NavContents({
  onNavigate,
  sections,
  fontWeight,
  fontSize,
  flexDirection = "row",
}) {
  const styles = StyledNavContents();
  const navContents = [
    { head: "Home", link: "section1" , url:"home" },
    { head: "About Us", link: "section2" , url:"aboutus" },
    { head: "Our Team", link: "section3" , url:"ourteam" },
    { head: "Investment Approach", link: "section4" , url:"investmentapproach" },
    { head: "Contact Us", link: "section5" , url:"contactus" },
  ];
  const [navIndex, setNavIndex] = useState(0);

  const Navigate = useNavigate();

  function HandleIndex(index) {
    setNavIndex(index);
    const indexPage = navContents[index]?.url || "";
    if (indexPage) {
      Navigate(`/${indexPage}`);
    } else {
      Navigate(`/`);
    }
  }

  return (
    <Grid sx={{ ...styles.navContentsFirstGrid, flexDirection: flexDirection }}>
      {navContents.map((element, index) => {
        return (
          <Box sx={styles.navContentsFirstBox}>
            <Box key={index} sx={styles.navContentsSecondBox}>
              <Typography
                sx={{
                  ...styles.navContentsFirstText,
                  color: index === navIndex ? "#00906D" : "#51585E",
                  fontWeight: fontWeight,
                  fontSize: fontSize,
                }}
                onClick={() => {
                  HandleIndex(index);
                  onNavigate(sections[element.link]);
                }}
              >
                {element.head}
              </Typography>
              <Box
                sx={{
                  ...styles.navContentsThirdBox,
                  backgroundColor: index === navIndex ? "#00906D" : "#FFFFFF",
                }}
              />
            </Box>
          </Box>
        );
      })}
    </Grid>
  );
}
