import { Grid2 as Grid } from '@mui/material'
import React, { useRef } from 'react'
import Home from '../../pages/homePage/home'
import AboutUs from '../../pages/aboutUsPage/aboutUs'
import InvestmentApproach from '../../pages/investmentApproach/investmentApproach'
import OurTeam from '../../pages/ourTeam/ourTeam'
import ContactUs from '../../pages/contactUs/contactUs'
import TopNav from '../topNav/topNav'
import BottomNav from '../bottomNav/bottomNav'
import { StyledScreen } from './screenStyles'






export default function Screen1() {
  const styles = StyledScreen()
      const HomeDiv = useRef(null);
      const AboutDiv = useRef(null);
      const TeamDiv = useRef(null);
      const InvestDiv = useRef(null);
      const ContactDiv = useRef(null);
    const screens =[
      {head:<Home/>, link:HomeDiv},
      {head:<AboutUs/> ,link:AboutDiv},
      {head:<OurTeam/> ,link:TeamDiv},
      {head:<InvestmentApproach/> ,link:InvestDiv},
      {head: <ContactUs/>,link:ContactDiv},
    ]
      
    

    const handleScrollTo = (ref) => {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    };
    
   
  return (
    <Grid >
      <TopNav onNavigate={(section)=>handleScrollTo(section)} sections={{
        section1 : HomeDiv,
        section2 : AboutDiv,
        section3 : TeamDiv,
        section4 : InvestDiv,
        section5 : ContactDiv,
      }}/>
      <Grid sx={styles.screenFirstGrid}   >
      {screens.map((element,index)=>{
        return(
          <Grid component="div" ref={element.link} key={index}>{element.head}</Grid>
        )
      })
      }
      </Grid>
      <Grid>
        <BottomNav/>
      </Grid>
    </Grid>
  )
}
