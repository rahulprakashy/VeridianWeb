import { useTheme } from "@mui/material";

export const StyledTeamCard = () => {
  const myTheme = useTheme();
  return {
    teamCardFirstGrid: { margin: { lg: "0rem 7.53rem" } },
    teamCardFirstBox: {
      height: { lg: "25.438rem", xs:"870px"},
      width: { lg: "63.576rem", md: "26.563rem" },
      backgroundColor: myTheme.colors.white,
      transform: { lg: "skew(-30deg)" },
      overflow: "hidden",
      
    },
    teamCardSecondGrid: {
      display: "flex",
      justifyContent: { lg: "center", xs: "auto" },
      alignItems: { lg: "flex-end", xs: "center" },
      height: { lg: "-webkit-fill-available", md: "52.813rem" },
      flexDirection: { lg: "row", xs: "column" },
    },
    teamCardSecondBox: {
      position: "absolute",
      bottom: 0,
      display: { lg: "flex", xs: "block" },
      alignItems: { lg: "flex-end", xs: "unset" },
      left:{lg:"18px"}
    },
    teamCardFirstImage: {
      height: { lg: "fit-content", xs: "355px" },
      width: { lg: "fit-content", sm: "26.563rem", xs: "18rem" },
      transform: { lg: "skew(30deg)", xs: "none" },
      borderRadius: 0,
      zIndex: 3,
      ".MuiAvatar-img": { objectFit: "contain" },
    },
    teamCardThirdBox: {
      backgroundColor: myTheme.colors.primary.default,
      height: "4.25rem",
      alignItems: "center",
      display: "flex",
      position: "relative",
      bottom: 0,
      padding: { lg: "0rem 0rem", xs: "0rem 0.25rem 0rem 2.2rem" , sm:"0rem" },
      flexDirection: "column",
      justifyContent: "center",
      whiteSpace: "nowrap",
      right: { lg: "2.5rem", md: "2.5rem", sm: "5rem", xs: "6.875rem" },
      transform: { lg: "skew(-5deg)", xs: "skew(-50deg)" },
      width: { md: "95%", xs: "110%" , lg:"330px" },
      left:"18px",
      
    },
    teamCardFirstText: {
      transform: { lg: "skew(25deg)", xs: "skew(50deg)" },
      fontFamily: myTheme.typography.fontFamily.text1,
      fontWeight: myTheme.typography.fontWeight.semiBold,
      fontSize: myTheme.typography.fontSize.text18,
      lineHeight: "1.375rem",
      color: myTheme.colors.white,
    },
    teamCardSecondText: {
      transform: { lg: "skew(25deg)", xs: "skew(50deg)" },
      fontFamily: myTheme.typography.fontFamily.text2,
      fontWeight: myTheme.typography.fontWeight.medium,
      fontSize: myTheme.typography.fontSize.text14,
      lineHeight: "1.25rem",
      color: myTheme.colors.white,
    },
    teamCardFourthBox: {
      width: { lg: "674px", xs: "auto" },
      transform: { lg: "skew(30deg)", xs: "none" },
      position: "absolute",
      padding: { lg: "2.188rem 0rem", xs: "0.5rem 1rem" },
      rowGap: "0.625rem",
      display: "flex",
      height: { lg: "273px", xs: "auto" },
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "flex-start",
      right: { lg: "5.5rem", xs: "0rem" },
      top:{lg:0},
      
    },
    teamCardThirdText: {
      fontFamily: myTheme.typography.fontFamily.text2,
      fontWeight: myTheme.typography.fontWeight.medium,
      fontSize: myTheme.typography.fontSize.text16,
      lineHeight: "1.313rem",
      textAlign: "left",
      color: myTheme.textColor.tertiary,
    },
  };
};
