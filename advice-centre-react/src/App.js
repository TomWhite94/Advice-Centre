import './App.css';
import React from 'react'
import Sidebar from './Sidebar.js'
import HeroContainer from './Frontpage components/HeroContainer.js'
import MainView from './Frontpage components/MainView.js'
import Footer from './Frontpage components/Footer.js'

function App() {
  return (
    <div>
        <Sidebar />
        <HeroContainer />
        <MainView />
        <Footer />
    </div>    
  )
  }

export default App;

