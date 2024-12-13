import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import TeamCards from "../teamCards/teamCards";
import LeftSlider from "../../assets/images/Vector6.png";
import RightSlider from "../../assets/images/Vector7.png";
import { Avatar, Box, Grid2 as Grid } from "@mui/material";
import { StyledSwiper } from "./swiperStyles";

export default function swipper(props) {
  const styles = StyledSwiper();
  const TeamData = props.TeamData;
  // console.log(TeamData)
  return (
    <Grid
      sx={styles.swiperFirstGrid}
    >
      <Swiper
        loop={true}
        pagination={{
          el: ".swipper-pagination",
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
        {TeamData.map((element, index) => {
          return (
            <SwiperSlide key={index}>
              <TeamCards TeamData={element}  />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Avatar
        src={LeftSlider}
        className="left-button"
        sx={styles.swiperFirstImage}
      />
      <Avatar
        src={RightSlider}
        className="right-button"
        sx={styles.swiperSecondImage}
      />
      <Box
        className="swipper-pagination"
        sx={styles.swiperFirstBox}
      ></Box>
    </Grid>
  );
}
