import React from 'react'
import assets from '../assets/assets.js'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const coins = 0
  return (
    <div className="flex flex-row mt-10 align-middle items-center justify-between mx-10">
        <Link to='/'> <img src={assets.logo} className='w-35 '/></Link>
        <div className="flex flex-row gap-6">
        <Link to='/levels' className="">Levels</Link>
        <Link to='/leaderboard' className="">Leaderboard</Link>
        <Link to='/friends' className="">Friends</Link>
        <Link to='/black-market' className="">Black Market</Link>
        </div>

        <div className="">Coins: {coins}</div>
    </div>
  )
}

export default NavBar