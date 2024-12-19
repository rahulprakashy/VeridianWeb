import { useTheme } from "@mui/material"

export const StyledAboutUs = () =>{
    const myTheme = useTheme()
    return{
        aboutFirstGrid:{
        
            backgroundColor: myTheme.colors.primary.lite,
            margin:{lg:"2rem auto 0rem auto",md:"auto"},
            maxWidth:{lg:"82.375rem",md:"56.438rem"},
          },
          aboutSecondGrid:{
            display: "flex",
            position: "relative",
            alignItems:"center",
            justifyContent:"center",
            height:"-webkit-fill-available",
            padding:{
              md:"3rem 5.375rem",
              xs:"3rem 1rem"
            }
          },
          aboutThirdGrid:{
            placeItems: "center",
            zIndex:3
          },
          aboutFirstText:{
            fontFamily: myTheme.typography.fontFamily.text1,
            fontWeight: myTheme.typography.fontWeight.bolder,
            fontSize: myTheme.typography.fontSize.text32,
            lineHeight: "2.375rem",
            textAlign: "center",
            color: myTheme.textColor.primary,
          },
          aboutFirstBox:{
            
            backgroundColor:myTheme.colors.white,
            padding: {md:"3rem",xs:"1rem"},
            display: "flex",
            columnGap:{md:"2.375rem"},
            margin:"2rem auto",
            flexDirection:{md:"row",xs:"column"},
            alignItems:"center",
            rowGap:{xs:"2rem",md:"0rem"}
            
            
          },
          aboutFirstImage:{
            width: { md: "9.25rem", xs: "9.188rem" },
            height: { md: "9.25rem", xs: "9.188rem" },
            borderRadius: 0,
            backgroundColor: "#CFE1DF",
            padding: { md: "1.75rem 6.25rem", xs: "1rem 4rem" , sm:"1.5rem 5.75rem" },
            justifyContent: "center",
          },
          aboutSecondText:{
            fontFamily: myTheme.typography.fontFamily.text2,
            fontWeight: myTheme.typography.fontWeight.medium,
            fontSize: myTheme.typography.fontSize.text14,
            lineHeight: "1.25rem",
            color: myTheme.textColor.secondary,
            letterSpacing: "0.047rem",
          },
          aboutSecondBox:{
            display: "grid",
            gridTemplateColumns: { md: "1fr 1fr" },
            gap: "1.5rem",
          },
          aboutThirdBox:{ backgroundColor: myTheme.colors.white, padding: "1.5rem" },
          aboutFourthBox:{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column-reverse", sm: "row" },
          },
          aboutFifthBox:{ display: "grid", rowGap: "0.625rem" },
          aboutThirdText:{
            fontWeight: myTheme.typography.fontWeight.semiBold,
            fontSize: myTheme.typography.fontSize.text18,
            fontFamily: myTheme.typography.fontFamily.text1,
            lineHeight: "1.375rem",
            color: myTheme.textColor.primary,
          },
          aboutFourthText:{
            fontFamily: myTheme.typography.fontFamily.text2,
            fontWeight: myTheme.typography.fontWeight.medium,
            fontSize: myTheme.typography.fontSize.text14,
            lineHeight: "1.25rem",
            color: myTheme.textColor.secondary,
            letterSpacing: "0rem",
          },
          aboutSecondImage:{
            borderRadius: 0,
            height: "6.25rem",
            width: "6.25rem",
            overflow: "visible",
            ".MuiAvatar-img": { objectFit: "scale-down" },
          },
          aboutThirdImage:{
            maxWidth: "100%",
            maxHeight: "33.75rem",
            borderRadius: 0,
            height: "33.75rem",
            width: "100%",
            position: "absolute",
            top: "0rem",
            left: "0rem",
            bottom: "0rem",
            display: {
              sm: "none",
              md: "block",
            },
          },
    }
}