import { Avatar, Box, Grid2 as Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import HomeGroup1 from "../../assets/images/group1.png";
import HomeGroup2 from "../../assets/images/group2.png";
import DownArrow from "../../assets/images/downarrow.png";
import { StyledHome } from "./homeStyles";
import { useNavigate } from "react-router-dom";

export default function Home({onNavigate,
  sections ,
  }) {

  const styles = StyledHome();

  const navContents = [
    { head: "Home", link: "section1" , url:"home" },
    { head: "About Us", link: "section2" , url:"aboutus" },
    { head: "Our Team", link: "section3" , url:"ourteam" },
    { head: "Investment Approach", link: "section4" , url:"investmentapproach" },
    { head: "Contact Us", link: "section5" , url:"contactus" },
  ];

  const Navigate = useNavigate();

  function HandleIndex() {
    const indexPage = navContents[1]?.url || "";
    console.log(indexPage)
    if (indexPage) {
      Navigate(`/${indexPage}`);
    } else {
      Navigate(`/`);
    }
  }

  return (
    <Grid
      sx={styles.homeMainGrid}
    >
      <Grid
        sx={styles.homeSecondGrid}
      >
        
        <Box
          sx={styles.homeFirstBox}
        >
          <Box
            sx={styles.homeSecondBox}
          >
            <Typography
              sx={styles.homeHeading}
            >
              Investment management
            </Typography>
          </Box>
          <Box sx={styles.homeThirdBox}>
            <Typography
              sx={styles.homeFirstText}
            >
              Empowering Investments with Expertise
              <Box component="br"/>
               and Strategy
            </Typography>
          </Box>
          <Box
            sx={styles.homeFourthBox}
            onClick={() => {
              HandleIndex
              onNavigate(sections["section2"])
            }}
          >
            <Typography sx={styles.homeSecondText}>Know more</Typography>
            <Avatar
              src={DownArrow}
              sx={styles.homeFirstImage}
            />
          </Box>
        </Box>
        <Box>
          <Avatar
            sx={styles.homeSecondImage}
            src={HomeGroup2}
          />
        </Box>
        <Box>
          <Avatar
            sx={styles.homeThirdIamge}
            src={HomeGroup1}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
