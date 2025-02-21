import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Sign = () => {
    const [state, setState] = useState('Sign Up')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')
    const navigate = useNavigate()

    const onSubmiHandler = async () => {
        try {

            if (state === 'Sign Up'){
      
              const response = await axios.post('http://localhost:4000/api/user/register', {username, email, password})
              if(response.data.success){
                setToken(response.data.token)
                localStorage.setItem('token',response.data.token)
                navigate('/')
              } 
      
            } else {
      
              const response = await axios.post('http://localhost:4000/api/user/login', {email, password})
              if(response.data.success){
                setToken(response.data.token)
                localStorage.setItem('token',response.data.token)
                navigate('/')
              } 
       
            }
          } catch (error) {
            console.log(error)
    
          }
    }



  return (
    <div className='mt-[9vw] flex flex-col items-center'>
        <div className="flex text-[2.4vw]">
            <h1>{state}</h1>
        </div>
        <div className='flex flex-col mt-[2vw]'>
            <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Name' className={`border my-[1.2vw] p-[0.8vw] rounded-2xl w-[30vw] ${state === 'Sign In' ? 'hidden' : ''}`} />
            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' className="border my-[1.2vw] p-[0.8vw] rounded-2xl w-[30vw]" />
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' className="border my-[1.2vw] p-[0.8vw] rounded-2xl w-[30vw]" />
        </div>
        <div>{state === 'Sign Up' ? <div className='mb-[2vw]'>Already have an account? <span onClick={() => setState('Sign In')} className='text-green-900 cursor-pointer'>Sign In</span> </div> : <div className='mb-[2vw] cursor-pointer'>Don't have an account? <span onClick={() => setState('Sign Up')} className='text-green-900'>Sign Up</span></div>}</div>
        <button onClick={() => onSubmiHandler()} className='bg-green-900 cursor-pointer text-white p-[0.8vw] w-[15vw] rounded-2xl'>{state}</button>
    </div>
  )
}

export default Sign