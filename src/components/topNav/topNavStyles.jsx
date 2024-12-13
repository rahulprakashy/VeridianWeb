import { useTheme } from "@mui/material";

export const StyledTopNav = () => {
  const myTheme = useTheme();
  return {
    topNavFirstGrid: {
      display: "flex",
      alignItems: "center",
      flexGrow: 1,
      justifyContent: "space-between",
      padding: { md: "4px 61px", xs: "4px 16px" },
      borderBottom: "2px solid #CACFDB",
      paddingBottom: "4px",
    },
    topNavFirstImage: {
      width: { lg: "100px", xs: "64px" },
      height: { lg: "100px", xs: "64px" },
      borderRadius: 0,
    },
    topNavSecondImage: {
      height: { xs: "24px", sm: "0px" },
      width: { xs: "24px", sm: "0px" },
      display: { sm: "none" },
      ".MuiAvatar-img": { height: "24px", width: "24px" },
      cursor: "pointer",
      borderRadius: 0,
    },
    topNavSecondGrid: {
      display: { md: "flex", xs: "none" },
      justifyContent: "center",
    },
    topNavThirdImage: {
      height: { md: "0px", sm: "24px" },
      width: { md: "0px", sm: "24px" },
      display: { xs: "none", sm: "block" },
      borderRadius: 0,
      cursor: "pointer",
    },
    topNavThirdGrid: {
      position: "absolute",
      zIndex: 5,
      backgroundColor: myTheme.colors.white,
      width: "100%",
      padding: "16px",
    },
  };
};
