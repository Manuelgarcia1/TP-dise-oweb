import React from 'react';
import Card1 from './components/Card1/Card1'
import Card2 from './components/Card2/Card2'
import NavbarComponent from './components/navbar/NavbarComponent'

function App() {

  return (
    <React.Fragment>
      <NavbarComponent></NavbarComponent>
      <Card1/>
      <Card2/>
    </React.Fragment>
  )
}


export default App
