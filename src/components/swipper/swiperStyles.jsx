import { useTheme } from "@mui/material"

export const StyledSwiper = () =>{
    const myTheme = useTheme()
    return{
        swiperFirstGrid:{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            flexDirection: { lg: "row", xs: "column" },
            margin:"0px 16px",
          },
          swiperFirstImage:{
            position: "absolute",
            zIndex: 10,
            left: "0.625rem",
            height: "3.25rem",
            width: "3.25rem",
            ".MuiAvatar-img": { height: "0.938rem", width: "0.938rem" },
            cursor: "pointer",
            display: { lg: "flex", xs: "none" },
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#11423F",
          },
          swiperSecondImage:{
            position: "absolute",
            zIndex: 10,
            right: "0.625rem",
            height: "3.25rem",
            width: "3.25rem",
            ".MuiAvatar-img": { height: "0.938rem", width: "0.938rem" },
            cursor: "pointer",
            display: { lg: "flex", xs: "none" },
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#11423F",
          },
          swiperFirstBox:{
            display: { xs: "flex", lg: "none" },
            justifyContent: "center",
            padding: "2rem 0rem",
            ".swiper-pagination-bullet-active": {
              background: myTheme.colors.secondary.default,
              width: "1.813rem",
              height: "0.938rem",
              borderRadius: "0.625rem",
            },
            ".swiper-pagination-bullet:not(.swiper-pagination-bullet-active)": {
              height: "0.875rem",
              width: "0.875rem",
              backgroundColor:" #006547",
            },
          },
    }
}