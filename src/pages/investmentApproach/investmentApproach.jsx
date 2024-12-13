import { Avatar, Box, Grid2 as Grid, Typography } from "@mui/material";
import React from "react";
import Image1 from "../../assets/images/image1.png";
import Image2 from "../../assets/images/image2.png";
import Image3 from "../../assets/images/image3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../components/swipper/styles.css";
import { Pagination, Navigation } from "swiper/modules";
import InvestmentCard from "../../components/investmentCards/investmentCard";
import { StyledInvestment } from "./investmentStyles";

export default function InvestmentApproach() {
  const styles = StyledInvestment();

  const GroupData = [
    {
      head: "Investment focus and strategy",
      body1:
        "Veridian focuses on companies across a number of different sectors, predominantly internet-based companies with long term growth potential, with the aim of releasing the potential of businesses, sustainably improving operations and generating significant growth and profitability.",
      body2:
        "Our investment strategy creates value at every stage of an investment. Utilizing the strengths of our industry experienced team, Veridian has crafted a streamlined process from identifying potential opportunities through due diligence and deal documentation and onward to integration and transformation. Veridian’s unique combination of people and processes is market-tested to generate and release significant value and growth.",
      image: Image1,
    },
    {
      head: "Portfolio",
      body1:
        "The central investment of Veridian is in the Pragmatic Play group of companies headed by Tamaris (Gibraltar) Limited. Pragmatic Play is a world-leading game developer providing player-favourites to the most successful global brands in the iGaming industry.",
      body2:
        "Powering up new possibilities of play through one single API, Pragmatic Play offers a multi-product portfolio of award-winning slots, live casino, bingo, virtual sports, sportsbook and more, available in all major regulated markets, languages and currencies. Driven by persistence to craft immersive experiences and responsible thrills, Pragmatic Play’s professional team consistently deliver best in class services to its partners worldwide with a dedication to creating games that players love time and time again.",
      image: Image2,
    },
    {
      head: "Corporate social responsibility",
      body1:
        "Veridian supports responsible investing and evaluates environmental, social and governance issues in its investments. Veridian believes that responsible investing and return on investment go together, and consideration of ESG issues improves portfolio company performance and investment results.",
      body2: "",
      image: Image3,
    },
  ];
  return (
    <Grid
      sx={styles.investFirstGrid}
    >
      <Grid sx={styles.investSecondGrid}>
        <Box>
          <Typography
            sx={styles.investFirstText}
          >
            Holistic Investment Approach
          </Typography>
        </Box>
        <Box
          sx={styles.investFirstBox}
        >
          {GroupData.map((element, index) => {
            return (
              <Box
                sx={styles.investSecondBox}
                key={index}
              >
                <Avatar
                  sx={styles.investFirstImage}
                  src={element.image}
                />
                <Box>
                  <Typography
                    sx={styles.investSecondText}
                  >
                    {element.head}
                  </Typography>
                  <Box component="br" />
                  <Box>
                    <Typography
                      sx={styles.investThirdText}
                    >
                      {element.body1}
                    </Typography>
                    <Box component="br" />
                    <Typography
                      sx={styles.investThirdText}
                    >
                      {element.body2}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Grid>
      <Grid sx={styles.investThirdGrid}>
        <Swiper
          loop={true}
          pagination={{
            el: ".swipper-pagination1",
            clickable: true,
          }}
          breakpoints={{
            1440: {
              spaceBetween: 180,
              slidesPerView: 1.33,
              pagination: false,
              height: "450px",
            },
            1024: {
              spaceBetween: 30,
              slidesPerView: 2,
              pagination: true,
            },
            768: {
              spaceBetween: 10,
              slidesPerView: 1.5,
            },
            0: {
              spaceBetween: 10,
              slidesPerView: 1,
              height: "845px",
            },
          }}
          navigation={{
            nextEl: ".right-button",
            prevEl: ".left-button",
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {GroupData.map((element, index) => {
            return (
              <SwiperSlide key={index}>
                <InvestmentCard GroupData={element} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Box
          className="swipper-pagination1"
          sx={styles.investThirdBox}
        ></Box>
      </Grid>
    </Grid>
  );
}
