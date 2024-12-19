import { Avatar, Box, Grid2 as Grid, Typography } from "@mui/material";
import React from "react";
import { StyledTeamCard } from "./teamCardStyles";


export default function TeamCards(props) {
    const styles = StyledTeamCard()
  const element = props.TeamData;
  return (
    <Grid sx={styles.teamCardFirstGrid}>
      <Box
        sx={styles.teamCardFirstBox}
      >
        <Grid
          sx={styles.teamCardSecondGrid}
        >
          <Box
            sx={styles.teamCardSecondBox}
          >
            <Avatar
              src={element.image}
              sx={styles.teamCardFirstImage}
            />
            <Box
              sx={styles.teamCardThirdBox}
            >
              <Box sx={{display:"flex" , alignItems:"flex-start" ,transform:{lg:"skew(35deg)" , xs:"skew(50deg)"},flexDirection:"column"}}>
              <Typography
                sx={styles.teamCardFirstText}
              >
                {element.head}
              </Typography>
              <Typography
                sx={styles.teamCardSecondText}
              >
                {element.design}
              </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={styles.teamCardFourthBox}
          >
            <Typography
              sx={styles.teamCardThirdText}
            >
              {element.body1}
            </Typography>

            <Typography
              sx={styles.teamCardThirdText}
            >
              {element.body2}
            </Typography>
          </Box>
        </Grid>
      </Box>
    </Grid>
  );
}

