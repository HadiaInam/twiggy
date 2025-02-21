import React from 'react'
import assets from '../assets/assets.js'

const BlackMarket = () => {
  return (
    <div className='bg-gray-700 h-screen flex flex-col items-center'>
        <div className='text-black font-extrabold text-5xl mt-[10vw] ' >Black Market</div>
        <div className="flex flex-row gap-8 mt-5 justify-center items-center">
        <div>
            <img src={assets.twiggy} className='w-30'/>
            <div className="">Carl's twiggy</div>
            <div className="">Sell for 200</div>
        </div>
        <div>
            <img src={assets.twiggy} className='w-30'/>
            <div className="">Carl's twiggy</div>
            <div className="">Sell for 200</div>
        </div>
        <div>
            <img src={assets.twiggy} className='w-30'/>
            <div className="">Carl's twiggy</div>
            <div className="">Sell for 200</div>
        </div>
        <div>
            <img src={assets.twiggy} className='w-30'/>
            <div className="">Carl's twiggy</div>
            <div className="">Sell for 200</div>
        </div>
        <div>
            <img src={assets.twiggy} className='w-30'/>
            <div className="">Carl's twiggy</div>
            <div className="">Sell for 200</div>
        </div>

        </div>
    </div>
  )
}

export default BlackMarket