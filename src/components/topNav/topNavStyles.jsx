import { useTheme } from "@mui/material";

export const StyledTopNav = () => {
  const myTheme = useTheme();
  return {
    topNavFirstGrid: {
      display: "flex",
      alignItems: "center",
      flexGrow: 1,
      justifyContent: "space-between",
      padding: { md: "0.25rem 3.813rem", xs: "0.25rem 1rem" },
      borderBottom: "0.125rem solid #CACFDB",
      paddingBottom: "0.25rem",
     
    },
    topNavFirstImage: {
      width: { lg: "6.25rem", xs: "4rem" },
      height: { lg: "6.25rem", xs: "4rem" },
      borderRadius: 0,
    },
    topNavSecondImage: {
      height: { xs: "1.5rem", sm: "0rem" },
      width: { xs: "1.5rem", sm: "0rem" },
      display: { sm: "none" },
      ".MuiAvatar-img": { height: "1.5rem", width: "1.5rem" },
      cursor: "pointer",
      borderRadius: 0,
    },
    topNavSecondGrid: {
      display: { md: "flex", xs: "none" },
      justifyContent: "center",
    },
    topNavThirdImage: {
      height: { md: "0rem", sm: "1.5rem" },
      width: { md: "0rem", sm: "1.5rem" },
      display: { xs: "none", sm: "block" },
      borderRadius: 0,
      cursor: "pointer",
    },
    topNavThirdGrid: {
      position: "absolute",
      zIndex: 5,
      backgroundColor: myTheme.colors.white,
      width: "100%",
      padding: "1rem",
    },
  };
};
