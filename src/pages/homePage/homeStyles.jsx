import { useTheme } from "@mui/material/styles";

// import {  myTheme } from "../themes/theme"

export const StyledHome = () => {
  const myTheme = useTheme();
  return {
    homeMainGrid: {
      maxWidth: { lg: "1318px", md: "903px" },
      backgroundColor: "#00906D",
      margin: { lg: "0px auto 64px auto", md: "auto" },
      height: { lg: "520px", md: "498px", sm: "632px", xs: "680px" },
      position: "relative",
    },
    homeSecondGrid: {
      display: "flex",
      position: "relative",
      alignItems: "center",
      justifyContent: "center",
      height: "-webkit-fill-available",
      padding: {
        md: "86px 108px",
        xs: "0rem",
      },
    },
    homeFirstBox: {
      zIndex: 3,
      position: "relative",
      display: "flex",
      flexDirection: "column",
      rowGap: "15px",
      alignItems: "center",
    },
    homeSecondBox: {
      backgroundColor: "#F9C300",
      padding: "3px 10px",
    },
    homeHeading: {
      textTransform: "uppercase",
      fontFamily: myTheme.typography.fontFamily.text1,
      fontWeight: 800,
      fontSize: myTheme.typography.fontSize.text12,
      lineHeight: "15.62px",
      textAlign: "center",
      color: myTheme.colors.white,
    },
    homeThirdBox: { maxWidth: "976px" },
    homeFirstText: {
      fontFamily: myTheme.typography.fontFamily.text1,
      fontWeight: myTheme.typography.fontWeight.bolder,
      fontSize: myTheme.typography.fontSize.text48,
      lineHeight: "60px",
      textAlign: "center",
      color: myTheme.colors.white,
      letterSpacing: "0px",
    },
    homeFourthBox: {
      backgroundColor: myTheme.colors.primary.dark,
      display: "flex",
      placeItems: "center",
      padding: "16px 32px",
      columnGap: "10px",
      borderRadius: "4px",
      cursor:"pointer",
    },
    homeSecondText: {
      color: myTheme.colors.white,
      fontSize: myTheme.typography.fontSize.text18,
      fontFamily: myTheme.typography.fontFamily.text2,
      fontWeight: myTheme.typography.fontWeight.bold,
      lineHeight: "20px",
      textAlign: "center",
    },
    homeFirstImage: { maxHeight: "20px", maxWidth: "20px" },
    homeSecondImage: {
      maxWidth: "480px",
      borderRadius: 0,
      height: "100%",
      width: "100%",
      position: "absolute",
      top: "0rem",
      left: "0rem",
      bottom: "0rem",
    },
    homeThirdIamge: {
      maxWidth: "480px",
      borderRadius: 0,
      height: "100%", 
      width: "100%",
      position: "absolute",
      top: "0rem",
      right: "0rem",
      bottom: "0rem",
    },
  };
};
