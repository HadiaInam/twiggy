import React, { useEffect, useState } from 'react'
import axios from 'axios'
import assets from '../assets/assets.js'

const AddFriend = () => {

    const [users,setUsers] = useState([])
    const token = localStorage.getItem('token')

    const getUsers = async () => {
        const response = await axios.post('http://localhost:4000/api/user/get-users')
        if(response.data.success){
            setUsers(response.data.users)
        }
    }

    const addFriend = async (friend) => {
        const response = await axios.post('http://localhost:4000/api/user/add-friend', {token, friend})
        if(response.data.success){
            console.log('Friend added')
        }
    }

    useEffect(() => {
        getUsers()
    }, [])
  return (
    <div className='flex flex-col mt-[8vw] justify-center align-middle items-center'>
        <div className="text-2xl">Add Friends</div>
        {users && users.map((item) => (
            <div className="border my-[1vw] rounded-2xl flex flex-row p-[3vw] w-[60vw] align-middle items-center justify-center">
                <img src={assets.twiggy} className='w-[8vw]' />
                <div className="ml-[3vw]">{item.username}</div>
                <div className="ml-[20vw]">{item.treeCoins}</div>
                <button onClick={() => addFriend(item)} className='bg-green-700 cursor-pointer text-white rounded-2xl ml-[8vw] w-20'>Add</button>
            </div>
        ))}
    </div>
  )
}

export default AddFriend