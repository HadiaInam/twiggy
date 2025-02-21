import React, { useState } from 'react'
import assets from '../assets/assets.js'


const Friends = () => {
    // const [friends, setFriends] = useState({})

    const friends = [{
        name: 'Baby Yoda',
        coins: 10
    }]

  return (
    <div className='flex flex-col mt-[8vw] justify-center align-middle items-center'>
        <div className="text-2xl">Your Friends</div>
        {friends.map((item) => (
            <div className="border my-[1vw] rounded-2xl flex flex-row p-[3vw] w-[60vw] align-middle items-center justify-center">
                <img src={assets.twiggy} className='w-[8vw]' />
                <div className="ml-[3vw]">{item.name}</div>
                <div className="ml-[35vw]">{item.coins}</div>
            </div>
        ))}
    </div>
  )
}

export default Friends