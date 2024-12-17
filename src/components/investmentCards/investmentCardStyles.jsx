import { useTheme } from "@mui/material"

export const StyledInvestmentCard = () =>{
    const myTheme = useTheme()
    return{
        cardFirstBox:{
            backgroundColor: myTheme.colors.white,
            padding: "1rem",
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: { xs: "1.5rem", md: "0rem" },
            height: "594px",
          },
          cardFirstImage:{
            height: { lg: "11.5rem", md: "12.125rem", xs: "11.5rem" },
            width: { lg: "20.813rem", md: "11.5rem", xs: "100%" },
            borderRadius: 0,
            ".MuiAvatar-img": { objectFit: "contain" },
          },
          cardFirstText:{
            fontWeight: myTheme.typography.fontWeight.semiBold,
            fontFamily: myTheme.typography.fontFamily.text1,
            fontSize: myTheme.typography.fontSize.text18,
            lineHeight: "1.375rem",
          },
          cardSecondText:{
            fontWeight: myTheme.typography.fontWeight.medium,
            fontFamily: myTheme.typography.fontFamily.text2,
            fontSize: myTheme.typography.fontSize.text14,
            lineHeight: "1.25rem",
            color: myTheme.textColor.tertiary,
          },

    }
}