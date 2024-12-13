import { useTheme } from "@mui/material"

export const StyledAboutUs = () =>{
    const myTheme = useTheme()
    return{
        aboutFirstGrid:{
        
            backgroundColor: myTheme.colors.primary.lite,
            margin:{lg:"32px auto 0px auto",md:"auto"},
            maxWidth:{lg:"1318px",md:"903px"},
          },
          aboutSecondGrid:{
            display: "flex",
            position: "relative",
            alignItems:"center",
            justifyContent:"center",
            height:"-webkit-fill-available",
            padding:{
              md:"48px 86px",
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
            lineHeight: "38px",
            textAlign: "center",
            color: myTheme.textColor.primary,
          },
          aboutFirstBox:{
            
            backgroundColor:myTheme.colors.white,
            padding: {md:"48px",xs:"16px"},
            display: "flex",
            columnGap:{md:"38px"},
            margin:"32px auto",
            flexDirection:{md:"row",xs:"column"},
            alignItems:"center",
            rowGap:{xs:"32px",md:"0px"}
            
            
          },
          aboutFirstImage:{
            width: { md: "148px", xs: "147px" },
            height: { md: "148px", xs: "147px" },
            borderRadius: 0,
            backgroundColor: "#CFE1DF",
            padding: { md: "28px 100px", xs: "16px 80px" },
            justifyContent: "center",
          },
          aboutSecondText:{
            fontFamily: myTheme.typography.fontFamily.text2,
            fontWeight: myTheme.typography.fontWeight.medium,
            fontSize: myTheme.typography.fontSize.text14,
            lineHeight: "20px",
            color: myTheme.textColor.secondary,
            letterSpacing: "0.75px",
          },
          aboutSecondBox:{
            display: "grid",
            gridTemplateColumns: { md: "1fr 1fr" },
            gap: "24px",
          },
          aboutThirdBox:{ backgroundColor: myTheme.colors.white, padding: "24px" },
          aboutFourthBox:{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column-reverse", sm: "row" },
          },
          aboutFifthBox:{ display: "grid", rowGap: "10px" },
          aboutThirdText:{
            fontWeight: myTheme.typography.fontWeight.semiBold,
            fontSize: myTheme.typography.fontSize.text18,
            fontFamily: myTheme.typography.fontFamily.text1,
            lineHeight: "22px",
            color: myTheme.textColor.primary,
          },
          aboutFourthText:{
            fontFamily: myTheme.typography.fontFamily.text2,
            fontWeight: myTheme.typography.fontWeight.medium,
            fontSize: myTheme.typography.fontSize.text14,
            lineHeight: "20px",
            color: myTheme.textColor.secondary,
            letterSpacing: "0px",
          },
          aboutSecondImage:{
            borderRadius: 0,
            height: "100px",
            width: "100px",
            overflow: "visible",
            ".MuiAvatar-img": { objectFit: "scale-down" },
          },
          aboutThirdImage:{
            maxWidth: "100%",
            maxHeight: "540px",
            borderRadius: 0,
            height: "540px",
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