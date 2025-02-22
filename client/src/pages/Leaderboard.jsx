import React, { useEffect, useState } from 'react'
import assets from '../assets/assets.js'
import axios from 'axios'

const Leaderboard = () => {
   const [leaderboard, setLeaderboard] = useState([])

   const list = async () => {
    try{
        const response = await axios.post('http://localhost:4000/api/user/leaderboard')
        if(response.data.success){
            setLeaderboard(response.data.topUsers)
        }
    }catch(error){
        console.log(error)
    }
   }

   useEffect(() => {
    list()
   }, [])


return (
<div className='flex flex-col mt-[8vw] justify-center align-middle items-center'>
    <div className="text-2xl">Leaderboard</div>
    {leaderboard.map((item) => (
        <div className="border my-[1vw] rounded-2xl flex flex-row p-[3vw] w-[60vw] align-middle items-center justify-center">
            <img src={assets.twiggy} className='w-[8vw]' />
            <div className="ml-[3vw]">{item.username}</div>
            <div className="ml-[35vw]">{item.treeCoins}</div>
        </div>
    ))}
</div>
)
}

export default Leaderboard