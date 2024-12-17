import { useTheme } from "@mui/material"

export const StyledContactUsPage = () =>{
    const myTheme = useTheme()
    return{
        contactFirstGrid:{
            backgroundColor: myTheme.colors.primary.default,
            margin: "auto",
            height: "17.813rem",
            position: "relative",
            maxWidth: { lg: "82.375rem", md: "56.438rem" },
          },
          contactSecondGrid:{
            display: "flex",
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
          },
          contactFirstBox:{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            height: "17.813rem",
          },
          contactFirstText:{
            fontWeight: myTheme.typography.fontWeight.bolder,
            fontSize: myTheme.typography.fontSize.text32,
            lineHeight: "2.375rem",
            textAlign: "center",
            fontFamily: myTheme.typography.fontFamily.text1,
            color: myTheme.colors.white,
          },
          contactSecondText:{
            fontWeight: myTheme.typography.fontWeight.medium,
            fontSize: myTheme.typography.fontSize.text14,
            lineHeight: "1.25rem",
            textAlign: "center",
            fontFamily: myTheme.typography.fontFamily.text2,
            color: myTheme.colors.white,
          },
          contactSecondBox:{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#0000003d",
          },
          contactThirdBox:{
            display: "flex",
            alignItems: "center",
            padding: "14px 24px",
            columnGap: "0.625rem",
          },
          contactThirdText:{
            backgroundColor: "#F9C300",
            padding: "5px",
            fontWeight: myTheme.typography.fontWeight.bolder,
            fontFamily: myTheme.typography.fontFamily.text2,
            fontSize: myTheme.typography.fontSize.text12,
            lineHeight: "16px",
          },
          contactFourthText:{
            fontWeight: myTheme.typography.fontWeight.bold,
            fontSize: myTheme.typography.fontSize.text18,
            lineHeight: "1.25rem",
            textAlign: "center",
            fontFamily: myTheme.typography.fontFamily.text2,
            color: myTheme.colors.white,
          },
          contactFirstImage:{
            borderRadius: 0,
            ".MuiAvatar-img": {
              height: "0.938rem",
              width: "0.938rem",
              overflow: "visible",
            },
            backgroundColor: "#0000002d",
            padding: "0.625rem",
          },
          contactSecondImage:{
            borderRadius: 0,
            height: "17.813rem",
            width: "24.125rem",
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            display: { xs: "none", md: "block" },
          },
          contactThirdImage:{
            borderRadius: 0,
            height: "17.813rem",
            width: "24.125rem",
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            display: { xs: "none", md: "block" },
          },

    }
}