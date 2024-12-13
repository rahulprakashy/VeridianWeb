import { Box, Grid2 as Grid, Typography } from '@mui/material'
import React from 'react'
import Swipper from '../../components/swipper/swipper'
import Peter from '../../assets/images/Peter.png'
import Jarvis from '../../assets/images/Jarvis.png'
import Jackshon from '../../assets/images/Jackson.png'
import { StyledTeamPage } from './ourTeamStyles'


export default function OurTeam() {

  const TeamData = [
    {
        body1:"Peter Montegriffo KC has been closely involved in advising major financial services and e-commerce operators establishing a presence in Gibraltar and expanding their activities internationally. This has included working with investment groups and private client family offices.In his capacity as a Consultant at Hassans and member of the firm’s Corporate & Commercial team for over 35 years, Peter’s area of expertise is in Gibraltar and international commercial and private client matters.",
        body2:"Peter has worked on a number of public listings on the London Stock Exchange. He continues to advise on restructuring, merger and consolidation exercises. He has also been involved in drafting numerous changes to Gibraltar’s legislation in trusts, financial services and gaming. Peter was Gibraltar’s Minister for Trade and Industry, with responsibility for economic development and financial services, between May 1996 and February 2000.  Peter was appointed KC in Gibraltar in June 2014.",
        image:Peter,
        head:"Peter Montegriffo KC",
        design:""
    },
    {
      body1:"Grahame Jackson is a Fellow of the Chartered Institute of a Taxation and a member of the Chartered Institute of Taxation's prestigious International Taxes Committee. Grahame has advised numerous international gaming companies in matters of taxation and is a regular adviser to other industries on matters of both domestic Gibraltar taxation and international taxation. ",
      body2:"He has written extensively on international information exchange mechanisms, the current international taxation reform in the context of the rule of law and British Overseas Territories and constitutional relationships between BOTs and the United Kingdom, and is the Head of the Tax Advisory Team and partner at Hassans.",
      image:Jackshon,
      head:"Grahame Jackson",
      design:""
  },
  {
    body1:"Julian is an experienced lawyer, businessman and investor with over 25 years of start-up, private and public company experience. In the internet and iGaming industries – including America Online Inc., AOL Time Warner Inc., PartyGaming Plc and other companies. Julian has a focus on fast growth companies in emerging regulatory environments. Julian's current focus is as CEO and co-founder of Pragmatic Play, a leading multi-award winning supplier to the international iGaming and betting industries.",
    body2:"",
    image:Jarvis,
    head:"Julian Jarvis",
    design:"Chairman, Founder and CEO"
},
]

  const styles = StyledTeamPage()

  return (
    <Grid
    sx={styles.teamFirstGrid}
    >
      <Box>
        <Typography sx={styles.teamFirstText}>Our Team</Typography>
        <Box
        sx={styles.teamFirstBox}
        >
          <Swipper TeamData={TeamData}/>
          

        </Box>
      </Box>
    </Grid>
  )
}
