import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../layouts/layout'

import Screen1 from '../components/screens/screen'



export const Router =  {
  Home:"home",
  AboutUs:"aboutus",
  InvestmentApproach:"investmentapproach",
  OurTeam:"ourteam",
  ContactUs:"contactus",

}

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Screen1/>}>
          <Route path='/:id' index element={<Screen1/>} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}





