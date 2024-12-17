import { useTheme } from "@mui/material"

export const StyledNavContents = () =>{
    const myTheme = useTheme()
    return{
        navContentsFirstGrid:{
            display: "flex",
            rowGap: { xs: "1.5rem", md: "0rem" },
          },
          navContentsFirstBox:{ display: "inline-flex" },
          navContentsSecondBox:{ marginLeft: "1.5rem" },
          navContentsFirstText:{
            cursor: "pointer",
            transition: "1.s ease",
            fontFamily: myTheme.typography.fontFamily.text1,
            
          },
          navContentsThirdBox:{
            height: "0.25rem",
            transition: "1s ease",
            display: { xs: "none", md: "block" },
          },

    }
}