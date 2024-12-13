import { useTheme } from "@mui/material";

export const StyledScreen = () => {
  const myTheme = useTheme();
  return {
    screenFirstGrid: { padding: { lg: "64px 0px" }, margin: "0px auto" },
  };
};
