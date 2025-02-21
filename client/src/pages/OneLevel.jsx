import React from 'react'
import assets from '../assets/assets.js'

const OneLevel = () => {

    const level = [{
        level: 1,
        name: 'twiggy',
        description: 'get twiggy out of depression',
        coins: 5
    }]
    const points = null
  return (
    <div className=' mt-[8vw]'>
        {level.map((item) => [
            <div className="flex flex-col  items-center justify-center">
                <div className="text-[3vw]">Level {item.level}</div>
                <img src={assets.twiggy} className='mt-[2vw] w-[25vw]' />
                <div className="flex flex-row items-center justify-center gap-2">
                <input type="text" className="w-[60vw] border rounded-2xl p-[2vw] mt-[3vw]" placeholder='Enter a unique task' />
                <button className='bg-green-900 cursor-pointer text-white w-[8vw] p-[2vw]  rounded-2xl mt-[3vw]'>Add</button>
                </div>
                <div className="">Points: {points}</div>
            </div>
        ])}
    </div>
  )
}

export default OneLevel