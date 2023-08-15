import { useState } from 'react'
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa'

const SignUp = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');

  return (
    <div className='h-4/5 md:w-5/12 w-10/12 p-6 rounded-md flex flex-col border border-slate-950 bg-white mt-12 mb-12'>
        <h1 className='flex items-center justify-center font-bold text-2xl md:text-4xl'>Create an account</h1>

        <form onSubmit={(e) => e.preventDefault()}>

            <div className='w-full'>
            <label htmlFor='name' className='font-medium text-sm md:text-xl'>name</label>
            <input
                type="text"
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='your name..'
                required
                className='w-full p-4 rounded-sm placeholder:italic drop-shadow-2xl'
            />
            </div>

            <div className='w-full'>
            <label htmlFor='email' className='font-medium text-sm md:text-xl'>email</label>
            <input
                type="email"
                id='email'
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                placeholder='username, email, phone number'
                required
                className='w-full p-4 rounded-sm placeholder:italic drop-shadow-2xl'
            />
            </div>

            <div className='w-full'>
            <label htmlFor='username' className='font-medium text-sm md:text-xl'>username</label>
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
            <label htmlFor='password' className='font-medium text-sm md:text-xl'>password</label>
            <input
                type="password"
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='enter your password'
                required
                className='w-full p-4 rounded-sm placeholder:italic drop-shadow-2xl'
            />
            </div>

            <p className='font-medium flex items-center justify-center m-2'>or sign up with</p>

            <div className='w-full flex justify-evenly text-2xl items-center m-4'>
                <FaGoogle className='hover:text-red-600 cursor-pointer'/>
                <FaFacebook className='hover:text-blue-600 cursor-pointer'/>
                <FaTwitter className='hover:text-blue-400 cursor-pointer'/>
                <FaGithub className='hover:text-purple-600 cursor-pointer'/>
            </div>

            <button type='submit' className='rounded-md p-2 w-full bg-green-500 text-white font-semibold md:text-2xl drop-shadow-lg'>sign up</button>

        </form>
    </div>
  )
}

export default SignUp