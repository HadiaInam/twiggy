import React, { useDebugValue, useEffect, useState } from 'react'
import assets from '../assets/assets.js'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Friends = () => {
    const [friends, setFriends] = useState([])

    const getFriends = async () => {
        const token = localStorage.getItem('token')
        const response = await axios.post('http://localhost:4000/api/user/friends', {token})
        if(response.data.success){
            setFriends(response.data.friends)
        }
    }

    useEffect(() => {
        getFriends()
        
    },[])



  return (
    <div className='flex flex-col mt-[8vw] justify-center align-middle items-center'>
        <div className="text-2xl">Your Friends</div>
        <Link to='/add-friend' className='text-green-700'>Add a friend</Link>
        {friends && friends.map((item) => (
            <div className="border my-[1vw] rounded-2xl flex flex-row p-[3vw] w-[60vw] align-middle items-center justify-center">
                <img src={assets.twiggy} className='w-[8vw]' />
                <div className="ml-[3vw]">{item.username}</div>
                <div className="ml-[35vw]">{item.treeCoins}</div>
            </div>
        ))}
    </div>
  )
}

export default Friends