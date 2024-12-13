import { useTheme } from "@mui/material"

export const StyledInvestmentCard = () =>{
    const myTheme = useTheme()
    return{
        cardFirstBox:{
            backgroundColor: myTheme.colors.white,
            padding: "16px",
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: { xs: "24px", md: "0px" },
            height: "564px",
          },
          cardFirstImage:{
            height: { lg: "184px", md: "194px", xs: "184px" },
            width: { lg: "333px", md: "184px", xs: "100%" },
            borderRadius: 0,
            ".MuiAvatar-img": { objectFit: "contain" },
          },
          cardFirstText:{
            fontWeight: myTheme.typography.fontWeight.semiBold,
            fontFamily: myTheme.typography.fontFamily.text1,
            fontSize: myTheme.typography.fontSize.text18,
            lineHeight: "22px",
          },
          cardSecondText:{
            fontWeight: myTheme.typography.fontWeight.medium,
            fontFamily: myTheme.typography.fontFamily.text2,
            fontSize: myTheme.typography.fontSize.text14,
            lineHeight: "20px",
            color: myTheme.textColor.tertiary,
          },

    }
}