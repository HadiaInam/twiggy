import React, { useState } from 'react'
import assets from '../assets/assets.js'

const Home = () => {

    const [trees, setTrees] = useState()

  return (
    <div className='flex flex-col justify-center items-center mt-25'>
        <div className="text-2xl mb-10">Your Forest</div>

        <div className="grid grid-cols-4 gap-6">
        <div className="flex flex-col items-center justify-center">
            <img className='w-40' src={assets.twiggy} alt="" />
            <div>Twiggy</div>
            <div>The hero of the trees</div>
        </div>

        <div className="flex flex-col items-center justify-center">
            <img className='w-40' src={assets.twiggy} alt="" />
            <div>Twiggy</div>
            <div>The hero of the trees</div>
        </div>

        <div className="flex flex-col items-center justify-center">
            <img className='w-40' src={assets.twiggy} alt="" />
            <div>Twiggy</div>
            <div>The hero of the trees</div>
        </div>

        <div className="flex flex-col items-center justify-center">
            <img className='w-40' src={assets.twiggy} alt="" />
            <div>Twiggy</div>
            <div>The hero of the trees</div>
        </div>
        <div className="flex flex-col items-center justify-center">
            <img className='w-40' src={assets.twiggy} alt="" />
            <div>Twiggy</div>
            <div>The hero of the trees</div>
        </div>

        <div className="flex flex-col items-center justify-center">
            <img className='w-40' src={assets.twiggy} alt="" />
            <div>Twiggy</div>
            <div>The hero of the trees</div>
        </div>

        <div className="flex flex-col items-center justify-center">
            <img className='w-40' src={assets.twiggy} alt="" />
            <div>Twiggy</div>
            <div>The hero of the trees</div>
        </div>

        <div className="flex flex-col items-center justify-center">
            <img className='w-40' src={assets.twiggy} alt="" />
            <div>Twiggy</div>
            <div>The hero of the trees</div>
        </div>
        </div>
    </div>
  )
}

export default Home