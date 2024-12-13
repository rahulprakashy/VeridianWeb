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
          },
          swiperFirstImage:{
            position: "absolute",
            zIndex: 10,
            left: "10px",
            height: "52px",
            width: "52px",
            ".MuiAvatar-img": { height: "15px", width: "15px" },
            cursor: "pointer",
            display: { lg: "flex", xs: "none" },
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#11423F",
          },
          swiperSecondImage:{
            position: "absolute",
            zIndex: 10,
            right: "10px",
            height: "52px",
            width: "52px",
            ".MuiAvatar-img": { height: "15px", width: "15px" },
            cursor: "pointer",
            display: { lg: "flex", xs: "none" },
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#11423F",
          },
          swiperFirstBox:{
            display: { xs: "flex", lg: "none" },
            justifyContent: "center",
            padding: "32px 0px",
            ".swiper-pagination-bullet-active": {
              background: myTheme.colors.secondary.default,
              width: "29px",
              height: "15px",
              borderRadius: "10px",
            },
            ".swiper-pagination-bullet:not(.swiper-pagination-bullet-active)": {
              height: "14px",
              width: "14px",
              backgroundColor: myTheme.colors.secondary.dark,
            },
          },
    }
}