import { useState } from 'react'
import './App.css'
import '@fontsource/ibm-plex-serif/300.css';
import '@fontsource/ibm-plex-serif/400.css';
import '@fontsource/ibm-plex-serif/500.css';
import '@fontsource/ibm-plex-serif/700.css';
import { Grid2, ThemeProvider } from '@mui/material';
import { myTheme } from './themes';
import RouterApp from './routers/router';
import '@fontsource/ibm-plex-serif';
import "@fontsource/dm-sans"; // Defaults to weight 400
import "@fontsource/dm-sans/500.css"; // For weight 500
import "@fontsource/dm-sans/700.css"; // For weight 700





function App() {

  return (
    <Grid2 >
      <ThemeProvider theme={myTheme} >
        <RouterApp/>
      </ThemeProvider>
    </Grid2>
    
  )
}

export default App
