import { useTheme } from "@mui/material"



export const StyledTeamPage = () => {
    const myTheme = useTheme()
    return{
        teamFirstGrid:{
            maxWidth: {lg:"1318px",md:"903px"},
            maxHeight: "925px",
            width: "100%",
            height:"100%",
            backgroundColor: myTheme.colors.primary.lite,
            margin: "0px auto",
            padding:{lg:"48px" , md:"16px"},
      
          },
          teamFirstText:{
            fontWeight:myTheme.typography.fontWeight.bolder,
            fontSize:myTheme.typography.fontSize.text32,
            lineHeight:"38px",
            textAlign:"center",
            fontFamily:myTheme.typography.fontFamily.text1,
          },
          teamFirstBox:{
            maxWidth:{lg:"1308px",md:"903px" , sm:"736px"},
            width:"100%",
            height:{lg:"450px" , xs:"925px"},
            paddingTop:"32px"
          },

    }
}