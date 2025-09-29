import React, { useContext, useEffect, useState } from 'react'
import {assets} from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from "motion/react"
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

  const [state,setState] = useState('Login')
  const {setShowLogin , backendUrl , setToken ,setUser} = useContext(AppContext)

  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');

  useEffect(()=>{                               //when login window pops up ,should not be able to scroll
    document.body.style.overflow = 'hidden';    // runs when useEffect mounts

    return ()=>{
      document.body.style.overflow = 'unset';   //runs when useEffect unmounts
    }
  },[])

  const onSubmitHandler = async (e)=>{
    e.preventDefault();

    try{

      if(state == 'Login'){
        const {data} = await axios.post(backendUrl + '/api/user/login',{email , password})

        if(data.success){
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token' , data.token)
          setShowLogin(false)
        }
        else{
          toast.error(data.message)
        }

      }else{
        const {data} = await axios.post(backendUrl + '/api/user/register',{name , email , password})

        if(data.success){
          setToken(data.token)
          setUser(data.user)
          localStorage.getItem('token' , data.token)
          setShowLogin(false)
        }
        else{
          toast.error(data.message)
        }
      }

    }catch(error){
      toast.error(error.message);
    }

  }

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
      
      <motion.form onSubmit={onSubmitHandler}
      className='relative bg-white p-10 rounded-xl text-slate-500'
                initial={{ opacity: 0.2, y: 50 }}
                transition={{ duration: 0.3 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                >
        <h1 className='text-center text-2xl text-neutral-700 font-medium mb-1'>{state}</h1>
        <p className='text-sm'>Welcome back! Please sign in to continue </p>

        { state!== 'Login' && <div className='border px-6 py-2 flex items-cemter gap-2 rounded-full mt-5'>
            <img src={assets.profile_icon} className='w-8 h-7' alt="" />
            <input onChange={e => setName(e.target.value)} value={name} type='text' className='outline-none text-sm ' placeholder='Full Name' required/>
        </div>}

        <div onChange={e => setEmail(e.target.value)} value={email} className='border px-6 py-2 flex items-cemter gap-2 rounded-full mt-5'>
            <img src={assets.email_icon} className='ml-2' alt="" />
            <input type='email' className='outline-none text-sm ml-2' placeholder='Email id' required/>
        </div>

        <div onChange={e => setPassword(e.target.value)} value={password} className='border px-6 py-2 flex items-cemter gap-2 rounded-full mt-5'>
            <img src={assets.lock_icon} className='ml-2' alt="" />
            <input type='password' className='outline-none text-sm ml-3' placeholder='password' required/>
        </div>

        <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forgot password?</p>

        <button className='bg-blue-600 w-full text-white py-2 rounded-full'>{state == 'Login' ? 'login' : 'Create Account'}</button>

       { state === 'Login' ? <p className='mt-5 text-center'>Don't have an account?
        <span onClick={()=>setState('Sign Up')} className='text-blue-600 cursor-pointer'>Sign up</span>
        </p>
          :
        <p className='mt-5 text-center'>Already have an account?
        <span onClick={()=>setState('Login')} className='text-blue-600 cursor-pointer'>Login</span>
        </p>} 

        <img  onClick={()=>{setShowLogin(false)}} src={assets.cross_icon} className='absolute top-5 right-5 cursor-pointer' alt="" />
      </motion.form>
    </div>
  )
}

export default Login
