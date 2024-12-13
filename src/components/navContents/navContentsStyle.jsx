import { useTheme } from "@mui/material"

export const StyledNavContents = () =>{
    const myTheme = useTheme()
    return{
        navContentsFirstGrid:{
            display: "flex",
            rowGap: { xs: "24px", md: "0px" },
          },
          navContentsFirstBox:{ display: "inline-flex" },
          navContentsSecondBox:{ marginLeft: "24px" },
          navContentsFirstText:{
            cursor: "pointer",
            transition: "1.s ease",
            fontFamily: myTheme.typography.fontFamily.text1,
            
          },
          navContentsThirdBox:{
            height: "4px",
            transition: "1s ease",
            display: { xs: "none", md: "block" },
          },

    }
}