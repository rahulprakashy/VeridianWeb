import { useTheme } from "@mui/material";

export const StyledScreen = () => {
  const myTheme = useTheme();
  return {
    screenFirstGrid: { padding: { lg: "4rem 0rem" }, margin: "7.5rem auto 0rem auto" },
  };
};
