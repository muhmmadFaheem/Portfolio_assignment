import React from 'react'
import { IoMdMenu } from "react-icons/io";




const Navbar = () => {
  return (
    <div className='container pt-9 '>
        <div
        className='flex justify-between items-center'>
            <div className='text-orange-500 text-xl font-medium text-[60px]'>Portfolio

            </div>

            <ul className='gap-10 lg:gap-16 hidden md:flex'>
              <li><a href="#hero" className='menulink'>Home</a>

              </li>

              <li><a href="#about" className='menulink'>About</a>
                
              </li>
              <li><a href="#projects" className='menulink'>Projects</a>
                
              </li>
              <li><a href="#skills" className='menulink'>Skills</a>
                
              </li>
              <li><a href="#contacts" className='menulink'>Contact</a>
                
              </li>

            </ul>


        </div>
      
    </div>
  )
}

export default Navbar
