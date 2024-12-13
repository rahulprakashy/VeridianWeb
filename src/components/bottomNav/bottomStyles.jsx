import { useTheme } from "@mui/material"

export const StyledBottomNav = () =>{
    const myTheme = useTheme()
    return{
        bottomNavFirstGrid:{
            padding: { md: "20px 64px", xs: "8px 16px" },
            borderTop: "2px solid #CACFDB",
          },
          bottomNavFirstBox:{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { md: "row", xs: "column" },
            rowGap: "16px",
          },
          bottomNavFirstText:{
            fontSize: myTheme.typography.fontSize.text14,
            fontWeight: myTheme.typography.fontWeight.medium,
            lineHeight: "18px",
            fontFamily: myTheme.typography.fontFamily.text2,
            color: myTheme.textColor.tertiary,
            
          },
    }
}