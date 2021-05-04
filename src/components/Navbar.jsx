import React from 'react'
import {NavLink} from "react-router-dom"
import {SocialIcon} from 'react-social-icons'

const Navbar = () => {
    return (
     <header className="bg-red-500">
         <div className="container mx-auto flex justify-between">
             <nav className="flex">
                 <NavLink to="/" exact activeClassName="text-white" className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"> 
                     Christian
                 </NavLink>
                 <NavLink to="/post" activeClassName="text-red-100 bg-red-700" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 cursive tracking-widest text-xl">
                     Blog Post
                 </NavLink>
                 <NavLink to="/project" activeClassName="text-red-100 bg-red-700" className="inline-flex items-center py-3 px-3 my-6 text-red-200 hover:text-green-800 cursive tracking-widest text-xl">
                     Projects
                 </NavLink>
                 <NavLink to="/about" activeClassName="text-red-100 bg-red-700" className="inline-flex items-center py-3 px-3 my-6 text-red-200 hover:text-green-800 cursive tracking-widest text-xl">
                     About Me!
                 </NavLink>
                 <div className="inline-flex py-3 my-6 px-3">
                    <SocialIcon url="twitter.com" className="mr-4" target="_blank" fgColor="fff" style={{heigh:35, width:35}}/>
                    <SocialIcon url="linkedin.com" className="mr-4" target="_blank" fgColor="fff" style={{heigh:35, width:35}}/>
                    <SocialIcon url="facebook.com" className="mr-4" target="_blank" fgColor="fff" style={{heigh:35, width:35}}/>
                 </div>
             </nav>
         </div>
     </header>
    )
}

export default Navbar
