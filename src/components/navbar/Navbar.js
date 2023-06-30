import React from 'react'
import {logo} from '../../utils/Utility'
import { Link } from 'react-router-dom'
import Search from './Search'
const Navbar = () => {
  return (
    //create navbar using tailwindcss
    <div className="bg-white flex w-screen justify-between px-4 py-1 items-center sticky top-0" role="navigation">
        <Link to="/">
            <img src={logo} alt="logo" className="h-8 w-8"/>
        </Link>
        <Search/>
    </div>
  )
}

export default Navbar