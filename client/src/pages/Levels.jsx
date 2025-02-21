import React from 'react'
import assets from '../assets/assets.js'
const Levels = () => {
    const levels = [
        {
            level: 1,
            name: 'twiggy',
            description: 'get twiggy out of depression',
            coins: 5
        },
        {
            level: 2,
            name: 'mom',
            description: 'get help',
            coins: 10
        }
    ]
  return (
    <div className='flex flex-col justify-center items-center mt-[5vw]'>
        <div className="text-2xl mb-[2vw]">levels</div>
        {levels.map((item) => (
            <div className="border flex flex-row rounded-2xl p-[2vw] gap-[6vw] my-[2vw] w-[50vw]">
                <div><img src={assets.twiggy} className='w-[18vw]' /></div>
                <div className='flex flex-col w-[6vw]'>
                    <h3>{item.name}</h3>
                    <h3>{item.description}</h3>
                </div>
                <div className="">{item.coins}</div>
            </div>
        ))}
    </div>
  )
}

export default Levels