import { useTheme } from "@mui/material"

export const StyledBottomNav = () =>{
    const myTheme = useTheme()
    return{
        bottomNavFirstGrid:{
            padding: { md: "1.25rem 4rem", xs: "0.5rem 1rem" },
            borderTop: "0.125rem solid #CACFDB",
          },
          bottomNavFirstBox:{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { md: "row", xs: "column" },
            rowGap: "1rem",
          },
          bottomNavFirstText:{
            fontSize: myTheme.typography.fontSize.text14,
            fontWeight: myTheme.typography.fontWeight.medium,
            lineHeight: "1.125rem",
            fontFamily: myTheme.typography.fontFamily.text2,
            color: myTheme.textColor.tertiary,
            
          },
    }
}