import {  FaPowerOff } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full h-1/4 flex justify-around items-center">
        <Link to='/'>
            <FaPowerOff className="text-4xl text-white"/>
        </Link>
        <ul className="p-4 flex items-center justify-center">
            <li className="hover:text-white font-bold p-2 active:underline">
                <Link to='/'> 
                    Home
                </Link>
            </li>
            <li className="hover:text-white font-bold p-2">
                <Link to='/login'> 
                    Login
                </Link>
            </li>
            <li className="hover:text-white font-bold p-2">
                <Link to='/signUp'> 
                    Sign Up
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default Header