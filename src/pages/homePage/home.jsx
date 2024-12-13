import { Avatar, Box, Grid2 as Grid, Typography } from "@mui/material";
import React from "react";
import HomeGroup1 from "../../assets/images/group1.png";
import HomeGroup2 from "../../assets/images/group2.png";
import DownArrow from "../../assets/images/downarrow.png";
import { StyledHome } from "./homeStyles";

export default function Home() {
  const styles = StyledHome();
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
