import { Avatar, Box, Grid2 as Grid, Typography } from "@mui/material";
import React from "react";
import Group44 from "../../assets/images/group44.png";
import Group45 from "../../assets/images/group45.png";
import Vector4 from "../../assets/images/Vector4.png";
import { StyledContactUsPage } from "./contactUsStyles";

export default function ContactUs() {
  const styles = StyledContactUsPage()
  return (
    <Grid
      sx={styles.contactFirstGrid}
    >
      <Grid
        sx={styles.contactSecondGrid}
      >
        <Box
          sx={styles.contactFirstBox}
        >
          <Typography
            sx={styles.contactFirstText}
          >
            Contact Us
          </Typography>
          <Typography
            sx={styles.contactSecondText}
          >
            Have questions or need more information? Reach out to us at.
          </Typography>
          <Box
            sx={styles.contactSecondBox}
          >
            <Box
              sx={styles.contactThirdBox}
            >
              <Typography
                sx={styles.contactThirdText}
              >
                MAIL TO
              </Typography>
              <Typography
                sx={styles.contactFourthText}
              >
                info@veridian.com
              </Typography>
            </Box>
            <Avatar
              src={Vector4}
              sx={styles.contactFirstImage}
            />
          </Box>
          <Typography
            sx={styles.contactSecondText}
          >
            We're here to help
          </Typography>
        </Box>

        <Box>
          <Avatar
            src={Group44}
            sx={styles.contactSecondImage}
          />
        </Box>
        <Box>
          <Avatar
            src={Group45}
            sx={styles.contactThirdImage}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

