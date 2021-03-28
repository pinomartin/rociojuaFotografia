import React from 'react'
import { Header } from './components/Header'
import { Divider } from './components/Divider'
import { ImagesContainer } from './components/ImagesContainer'

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Divider />
      <ImagesContainer />
    </div>
  );
}

export default App;
