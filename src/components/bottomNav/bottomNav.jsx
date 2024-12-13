import { Box, Grid2 as Grid, Typography } from "@mui/material";
import React from "react";
import { StyledBottomNav } from "./bottomStyles";

export default function BottomNav() {
  const styles = StyledBottomNav();
  return (
    <Grid
      sx={styles.bottomNavFirstGrid}
    >
      <Box
        sx={styles.bottomNavFirstBox}
      >
        <Typography
          sx={{...styles.bottomNavFirstText,width: { lg: "1145px", md: "774px" },}}
        >
          COPYRIGHT © Veridian 2024. All rights reserved. Any and all content
          included on this website or incorporated by reference is protected by
          international copyright laws.
        </Typography>
        <Typography
          sx={styles.bottomNavFirstText}
        >
          Term of use
        </Typography>
      </Box>
    </Grid>
  );
}
