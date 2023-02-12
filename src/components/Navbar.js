// import React from 'react';
// import {Link} from "react-router-dom";
// import logo from "../media/logo.png";
// import menu from "../media/hamburger icon.png";
// import Close from "../media/close icon.png";

// function Navbar(props) {
    // const showMenu=()=>{
    //     const navMenu=document.querySelector('.nav-menu')
    //     navMenu.style.display="block";
    // }
    // const close=()=>{
    //     const navMenu=document.querySelector('.nav-menu')
    //     navMenu.style.display="none";
    // }
    // const about=()=>{
    //     close();
    //     document.querySelector('#about').scrollIntoView();
    // }
    // const contacts=()=>{
    //     close();
    //     document.querySelector('#contacts').scrollIntoView();
    // }
    // const news=()=>{
    //     close();
    //     document.querySelector('#news').scrollIntoView();
    // }
    // const services=()=>{
    //     close();
    //     document.querySelector('#services').scrollIntoView();
    // }
    // const top=()=>{
    //     close();
    //     document.querySelector('.Hero').scrollIntoView();
    // }
    // const add=()=>{
    //     const nav=document.querySelector('nav');
    //     if(window.scrollY>0){
    //         nav.classList.add('add-shadow');
    //     } else{
    //         nav.classList.remove('add-shadow');
    //     }
    // }
//     return (
//         <>
//             <nav className="navbar" onMouseOver={add}>
//                 <div className="brand">
//                     <Link to='/' className="navbar-brand"><img className='logo' src={logo} alt="Kiri"/></Link>
//                 </div>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
//                         <li className="nav-item">
//                             <Link to='/' onClick={top} className="nav-link active" aria-current="page" >Home</Link>
//                         </li>
//                         <li className="nav-item">
                            // <Link to='/' onClick={about} className="nav-link" >About</Link>
//                         </li>
//                         <li className="nav-item">
                            // <Link to='/' onClick={services} className="nav-link" >Services</Link>
//                         </li>
//                         <li className="nav-item">
                            // <Link to='/' onClick={news} className="nav-link" >News</Link>
//                         </li>
//                         <li className="nav-item" style={{marginRight:'80px'}}>
                            // <Link to='/' onClick={contacts} className="nav-link">Contacts</Link>
//                         </li> 
//                     </ul>
//                     <img src={menu} alt='menu' className='ham' onClick={showMenu}/>
//                 </div>
//             </nav>

//             <div className='nav-menu'>
//                 <img src={Close} alt='close' onClick={close}/><br/><br/>
//                 <ul>
//                     <li><Link to='/' onClick={close} className="nav-link active" aria-current="page" >Home</Link></li><br/>
//                     <li><Link to='/' onClick={about} className="nav-link" >About</Link></li><br/>
//                     <li><Link to='/' onClick={services} className="nav-link" >Services</Link></li><br/>
//                     <li> <Link to='/' onClick={news} className="nav-link" >News</Link></li><br/>
//                     <li><Link to='/' onClick={contacts} className="nav-link">Contacts</Link></li><br/>
//                 </ul>
//             </div>
//         </>
//     );
// }

// export default Navbar;
import { useState } from "react";
import {Link} from "react-router-dom";
import logo from "../media/logo.png";

export default function NavBar() {

    const [navbar, setNavbar] = useState(false);

    // const showMenu=()=>{
    //     const navMenu=document.querySelector('.nav-menu')
    //     navMenu.style.display="block";
    // }
    const close=()=>{
        const navMenu=document.querySelector('.nav-menu')
        navMenu.style.display="none";
    }
    const about=()=>{
        document.querySelector('#about').scrollIntoView();
    }
    const contacts=()=>{
        document.querySelector('#contacts').scrollIntoView();
    }
    const news=()=>{
        document.querySelector('#news').scrollIntoView();
    }
    const services=()=>{
        document.querySelector('#services').scrollIntoView();
    }
    const top=()=>{
        document.querySelector('.Hero').scrollIntoView();
    }

    return (
        <nav className="w-full -mt-14 bg-white shadow fixed kiri-navbar">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to='/' onClick={top} className="navbar-brand"><img className='logo' src={logo} alt="Kiri"/></Link>

                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link to='/' onClick={top} className="nav-link active" aria-current="page" >Home</Link>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link to='/' onClick={about} className="nav-link" >About</Link>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link to='/' onClick={services} className="nav-link" >Services</Link>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link to='/' onClick={news} className="nav-link" >News</Link>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link to='/' onClick={contacts} className="nav-link">Contacts</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}