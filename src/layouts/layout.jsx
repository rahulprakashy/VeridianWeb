import { Grid2 as Grid } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import TopNav from '../components/topNav/topNav'

export default function Layout() {
  return (
    <Grid>
      <TopNav/>
      <Grid >
        <Outlet/>
      </Grid>
    </Grid>
  )
}
