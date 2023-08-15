import { useState } from 'react'
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa'

const Login = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div className='h-4/5 md:w-5/12 w-10/12 p-6 rounded-md flex flex-col border border-slate-950 bg-white mt-12'>
        <h1 className='flex items-center justify-center font-bold text-2xl md:text-4xl'>Login</h1>

        <form onSubmit={(e) => e.preventDefault()}>
            <div className='w-full'>
            <label htmlFor='username' className='font-medium text-sm md:text-xl'>Username</label>
            <input
                type="text"
                id='username'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder='username, email, phone number'
                required
                className='w-full p-4 rounded-sm placeholder:italic drop-shadow-2xl'
            />
            </div>

            <div className='w-full mt-4'>
            <label htmlFor='password' className='font-medium text-sm md:text-xl'>Password</label>
            <input
                type="text"
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='enter your password'
                required
                className='w-full p-4 rounded-sm placeholder:italic drop-shadow-2xl'
            />
            </div>

            <p className='font-medium flex items-center justify-center m-2'>or</p>

            <div className='w-full flex justify-evenly text-2xl items-center m-4'>
                <FaGoogle className='hover:text-red-600 cursor-pointer'/>
                <FaFacebook className='hover:text-blue-600 cursor-pointer'/>
                <FaTwitter className='hover:text-blue-400 cursor-pointer'/>
                <FaGithub className='hover:text-purple-600 cursor-pointer'/>
            </div>

            <button type='submit' className='rounded-md p-2 w-full bg-green-500 text-white font-semibold md:text-2xl drop-shadow-lg'>login</button>

        </form>
    </div>
  )
}

export default Login