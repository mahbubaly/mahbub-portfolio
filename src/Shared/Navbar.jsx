import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import {  FaHome, FaMale, FaPhoenixFramework, FaPodcast,} from 'react-icons/fa';







const Navbar = () => {

    const navbar = <>

        <Link activeClass='active' className=' rounded-2xl  bg-gradient-to-r from-yellow-500 to-purple-600   text-lg text-black  font-semibold' activeStyle={{
            color: 'white',

            borderBottom: ' 4px solid red',
            // textDecoration: 'underline'
        }} to='/' spy={true} smooth={true} offset={50} duration={500}   >
            <div className='flex gap-1 justify-center items-center p-2'>
                <FaHome className='text-black' />
                <li >Home   </li>
            </div>

        </Link>


        <Link activeClass='active' className=' rounded-2xl bg-gradient-to-r from-yellow-500 to-purple-600 hover:shadow-2xl  text-lg text-black  font-semibold' activeStyle={{
            color: 'white',
            borderBottom: ' 4px solid red',

        }} to='skill' spy={true} smooth={true} offset={50} duration={500}   >
            <div className='flex gap-1 justify-center items-center p-2'>
                <FaHome className='text-black' />
                <li >Skills   </li>
            </div>

        </Link>


        <Link activeClass='active' className=' rounded-2xl bg-gradient-to-r from-yellow-500 to-purple-600 hover:shadow-2xl  text-lg text-black  font-semibold' activeStyle={{
            color: 'white',
            borderBottom: '4px solid red',

        }} to='portfolio' spy={true} smooth={true} offset={50} duration={500}   >
            <div className='flex gap-1 justify-center items-center p-2'>
                <FaPodcast lassName='text-black w-10 h-6' />
                <li >My Works</li>
            </div>

        </Link>




        <Link activeClass='active' className=' rounded-2xl bg-gradient-to-r from-yellow-500 to-purple-600 hover:shadow-2xl  text-lg text-black  font-semibold' activeStyle={{
            color: 'white',
            borderBottom: ' 4px solid red',
            // textDecoration: 'underline'
        }} to='contact' spy={true} smooth={true} offset={50} duration={500}   >
            <div className='flex gap-1 justify-center items-center p-2'>
                <FaPhoenixFramework className='text-black w-8 h-6' />
                <li >Contact   </li>
            </div>

        </Link>

        <Link activeClass='active' className=' rounded-2xl bg-gradient-to-r from-yellow-500 to-purple-600 hover:shadow-2xl  text-lg text-black  font-semibold' activeStyle={{
            color: 'white',
            borderBottom: ' 4px solid red',
            // textDecoration: 'underline'
        }} to='hired' spy={true} smooth={true} offset={50} duration={500}   >
            <div className='flex gap-1 justify-center items-center p-2'>
                <FaMale lassName='text-black w-8 h-6' />
                <li >Hired</li>
            </div>

        </Link>






    </>






    return (
        <>


            <div className="navbar z-10 fixed bg-opacity-70 bg-black text-white   lg:p-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>


                        <ul tabIndex={0} className="menu menu-sm gap-4 dropdown-content mt-3 z-[1] p-4 shadow bg-gradient-to-r from-sky-500 to-black rounded-box ">
                            {navbar}
                        </ul>
                    </div>
                    <div className='lg:ml-0 ml-[100%]'>
                        <Link to='/'> <a className="   w-full  font-bold lg:text-2xl text-xl  text-white"> Mahbubur <span className='text-yellow-500 italic'>Rahman</span></a></Link>
                    </div>
                </div>



                {/* Large */}

                <div className="navbar-end hidden lg:flex  gap-6 text-xl">
                    <ul className="flex gap-7  px-1">
                        {navbar}
                    </ul>
                </div>


            </div>




        </>
    );
};

export default Navbar;