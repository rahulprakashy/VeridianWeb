import { Avatar, Box, Grid2 as Grid, Typography } from "@mui/material";
import React from "react";
import Logo from "../../assets/images/logo.png";
import Vector from "../../assets/images/Vector.png";
import Vector1 from "../../assets/images/Vector1.png";
import Vector2 from "../../assets/images/Vector2.png";
import Vector3 from "../../assets/images/Vector3.png";
import HomeGroup2 from "../../assets/images/group3.png";
import { StyledAboutUs } from "./aboutUsStyles";

export default function AboutUs() {
  const AboutItems = [
    {
      head: "Excellence",
      body: "We strive for excellence by continuously honing our skills & expanding our knowledge. Our commitment to excellence drives innovation and quality, setting us apart as leaders in our field.",
      image: Vector,
    },
    {
      head: "Initiative",
      body: "We encourage a proactive mindset where our team is empowered to take initiative and pursue opportunities for growth. We drive creativity and transformative solutions.",
      image: Vector1,
    },
    {
      head: "Sustainability",
      body: "We are dedicated to sustainable practices that positively impact our community and environment. Our commitment to responsibility ensures we contribute to a better future for generations to come.",
      image: Vector2,
    },
    {
      head: "Integrity",
      body: "We operate with honesty and uphold the highest ethical standards. Integrity is the cornerstone of our business, guiding our actions and decisions to earn the trust of our clients and partners.",
      image: Vector3,
    },
  ];

  const styles = StyledAboutUs();
  return (
    <Grid sx={styles.aboutFirstGrid}>
      <Grid sx={styles.aboutSecondGrid}>
        <Grid sx={styles.aboutThirdGrid}>
          <Box>
            <Typography sx={styles.aboutFirstText}>About Us</Typography>
          </Box>
          <Box sx={styles.aboutFirstBox}>
            <Avatar
              src={Logo}
              sx={styles.aboutFirstImage}
            />
            <Box >
              <Typography
                sx={styles.aboutSecondText}
              >
                Veridian is an investment, management and development company
                based in Gibraltar. We create value in our investments by
                leveraging our own experience, using tried-and-true strategies
                and extensive industry expertise.
              </Typography>
              <Box component="br" />
              <Typography
                sx={styles.aboutSecondText}
              >
                We work with our business' management team to develop and
                implement tailored strategies focused on strong products with
                powerful sales, to develop profit generating growth models.
                Value creation is fundamental to our goal and we develop our
                businesses with this is mind.
              </Typography>
              <Box component="br" />
              <Typography
                sx={styles.aboutSecondText}
              >
                Veridian's expertise are delivered with a responsible approach
                to our business, our team, our local community, and the
                environment.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={styles.aboutSecondBox}
          >
            {AboutItems.map((element, index) => {
              return (
                <Box sx={styles.aboutThirdBox} key={index}>
                  <Box
                    sx={styles.aboutFourthBox}
                  >
                    <Box sx={styles.aboutFifthBox}>
                      <Typography
                        sx={styles.aboutThirdText}
                      >
                        {element.head}
                      </Typography>
                      <Typography
                        sx={styles.aboutFourthText}
                      >
                        {element.body}
                      </Typography>
                    </Box>
                    <Avatar
                      src={element.image}
                      sx={styles.aboutSecondImage}
                    />
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Grid>

        <Box>
          <Avatar
            sx={styles.aboutThirdImage}
            src={HomeGroup2}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
