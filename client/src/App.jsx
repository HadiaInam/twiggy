import { useState } from 'react'

import './App.css'
import Home from './pages/Home.jsx'
import { Route, Routes, useLocation } from 'react-router-dom'
import Sign from './pages/Sign.jsx'
import NavBar from './components/NavBar.jsx'
import Levels from './pages/Levels.jsx'
import OneLevel from './pages/OneLevel.jsx'
import Leaderboard from './pages/Leaderboard.jsx'
import BlackMarket from './pages/BlackMarket.jsx'
import Friends from './pages/Friends.jsx'
import BackStory from './pages/BackStory.jsx'
import AddFriend from './pages/AddFriend.jsx'

function App() {

  const location = useLocation()


  return (
    <>
    {location.pathname ==='/black-market' ? <></> : <NavBar />}
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign' element={<Sign />} />
      <Route path='/levels' element={<Levels />} />
      <Route path='/one-level' element={<OneLevel />} />
      <Route path='/leaderboard' element={<Leaderboard />} />
      <Route path='/black-market' element={<BlackMarket />} />
      <Route path='/friends' element={<Friends />} />
      <Route path='/backstory' element={<BackStory />} />
      <Route path='/add-friend' element={<AddFriend />} />
    </Routes>
    </>
  )
}

export default App
