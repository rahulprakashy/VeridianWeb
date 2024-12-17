import { createTheme } from "@mui/material";

export const myTheme = createTheme({
    textColor:{
        primary:"#091B29",
        secondary:"#51585E",
        tertiary:"#717B85",
    },
    line:{
        line1:"#A9AFBC",
        line2:"#CACFDB",
    },
    bgColor:{
        bgcolor1:"#EDEFF2",
        bgcolor2:"#F2F4F7",
        bgcolor3:"#F5F7FA",
    },
    colors:{
        white:"#FFFFFF",
        primary:{
            default:"#009065",
            dark:"#006547",
            lite:"#D9EFE9",
        },
        secondary:{
            default:"#DFD328",
            dark:"#666114",
            lite:"#EFE992",
        },
    },
    typography:{
           fontWeight:{
            bolder:700,
            semiBold:500,
            medium:400,
            regular:300,
            bold:600,
           },
           fontSize:{
                text14:"0.875rem",
                text12:"0.75rem",
                text16:"1rem",
                text26:"1.625rem",
                text20:"1.25rem",
                text18:"1.125rem",
                text48:"3rem",
                text40:"2.5rem",
                text32:"2rem",
            
           },

        fontFamily:{
                text1:"IBM Plex Serif",
                text2:"DM Sans",
            },


    }
})