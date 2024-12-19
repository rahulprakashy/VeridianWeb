import { useTheme } from "@mui/material";

export const StyledTeamCard = () => {
  const myTheme = useTheme();
  return {
    teamCardFirstGrid: { margin: { lg: "0rem 7.53rem" } , height:"-webkit-fill-available" , display:{xs:"flex" , lg:"block"} },
    teamCardFirstBox: {
      height: { lg: "25.438rem"},
      width: { lg: "63.576rem", md: "26.563rem" },
      backgroundColor: myTheme.colors.white,
      transform: { lg: "skew(-30deg)" },
      overflow: "hidden",
     
      // margin:{xs:"0px 16px"}
      
    },
    teamCardSecondGrid: {
      display: "flex",
      justifyContent: { lg: "center", xs: "auto" },
      alignItems: { lg: "flex-end", xs: "center" },
      height: { lg: "-webkit-fill-available", md: "52.813rem" },
      flexDirection: { lg: "row", xs: "column" },
    },
    teamCardSecondBox: {
      position: {lg:"absolute" , xs:"relative"},
      bottom: 0,
      display: "flex",
      alignItems: { lg: "flex-end", xs: "center" },
      left:{lg:"18px"},
      flexDirection:{xs:"column" , lg:"row"}
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
      padding: { lg: "0rem 0rem", xs: "0rem 3.25rem 0rem 8.2rem" , sm:"0rem 8rem" , md:"0rem 7rem" },
      flexDirection: "column",
      justifyContent: "center",
      whiteSpace: "nowrap",
      right: { lg: "2.5rem", md: "4.5rem", sm: "5rem", xs: "5.2rem" },
      transform: { lg: "skew(-5deg)", xs: "skew(-50deg)" },
      width: { md:"fit-content", xs: "auto" , lg:"330px" },
      left:{lg:"18px",},
      
    },
    teamCardFirstText: {
      
      fontFamily: myTheme.typography.fontFamily.text1,
      fontWeight: myTheme.typography.fontWeight.semiBold,
      fontSize: myTheme.typography.fontSize.text18,
      lineHeight: "1.375rem",
      color: myTheme.colors.white,
    },
    teamCardSecondText: {
      
      fontFamily: myTheme.typography.fontFamily.text2,
      fontWeight: myTheme.typography.fontWeight.medium,
      fontSize: myTheme.typography.fontSize.text14,
      lineHeight: "1.25rem",
      color: myTheme.colors.white,
    },
    teamCardFourthBox: {
      width: { lg: "674px", xs: "auto" },
      transform: { lg: "skew(30deg)", xs: "none" },
      position: {lg:"absolute" , xs:"relative"},
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
