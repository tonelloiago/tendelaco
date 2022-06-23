import React from 'react'

import MainContainer from './components/NextEvents/Event'
import ResponsiveAppBar from './components/AppBar/AppBar'


const App = () => {
  return (
    <div>
        <ResponsiveAppBar></ResponsiveAppBar>
        <MainContainer ></MainContainer>
    </div>
  )
}

export default App