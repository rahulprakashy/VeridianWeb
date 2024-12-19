import { Avatar, Box, Grid2 as Grid, Typography } from "@mui/material";
import React from "react";
import { StyledInvestmentCard } from "./investmentCardStyles";

export default function InvestmentCard(props) {
  const styles = StyledInvestmentCard()
    const element = props.GroupData
  return (
    <Grid sx={styles.cardFirstGrid}>
    <Box
      sx={styles.cardFirstBox}
    >
      <Avatar
        sx={styles.cardFirstImage}
        src={element.image}
      />
      <Box>
        <Typography
          sx={styles.cardFirstText}
        >
          {element.head}
        </Typography>{" "}
        <Box component="br" />
        <Box>
          <Typography
            sx={styles.cardSecondText}
          >
            {element.body1}
          </Typography>
          <Box component="br" />
          <Typography
            sx={styles.cardSecondText}
          >
            {element.body2}
          </Typography>
        </Box>
      </Box>
    </Box>
    </Grid>
  );
}
