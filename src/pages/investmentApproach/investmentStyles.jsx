import { useTheme } from "@mui/material";

export const StyledInvestment = () => {
  const myTheme = useTheme();
  return {
    investFirstGrid: {
      margin: "auto",
      backgroundColor: myTheme.colors.primary.lite,
      maxWidth: { lg: "1318px", md: "903px" },
      
    },
    investSecondGrid: { padding: "1rem 0rem 2rem 0rem" },
    investFirstText: {
      fontWeight: myTheme.typography.fontWeight.bolder,
      fontSize: myTheme.typography.fontSize.text32,
      lineHeight: "38px",
      textAlign: "center",
      fontFamily: myTheme.typography.fontFamily.text1,
    },
    investFirstBox: {
      padding: "32px",
      display: { sm: "grid", xs: "none" },
      columnGap: { md: "32px" },
      gridTemplateColumns: { md: "repeat(3,1fr)" },
      rowGap: { xs: "32px", md: "0px" },
    },
    investSecondBox: {
      backgroundColor: myTheme.colors.white,
      padding: "32px",
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "center",
      rowGap: { xs: "24px", md: "0px" },
    },
    investFirstImage: {
      height: { lg: "201px",  xs: "184px" },
      width: { lg: "318px", xs: "100%" },
      borderRadius: 0,
      ".MuiAvatar-img": { objectFit: "contain" },
    },
    investSecondText: {
      fontWeight: myTheme.typography.fontWeight.semiBold,
      fontFamily: myTheme.typography.fontFamily.text1,
      fontSize: myTheme.typography.fontSize.text18,
      lineHeight: "22px",
      paddingTop:"16px"
    },
    investThirdText: {
      fontWeight: myTheme.typography.fontWeight.medium,
      fontFamily: myTheme.typography.fontFamily.text2,
      fontSize: myTheme.typography.fontSize.text14,
      lineHeight: "20px",
      color: myTheme.textColor.tertiary,
    },
    investThirdGrid: { display: { xs: "block", sm: "none" } ,   },
     investThirdBox: {
      display: { xs: "flex ", lg: "none" },
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
        backgroundColor: myTheme.colors.primary.dark,
      },
    },
  };
};
