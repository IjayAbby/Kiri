import React from 'react';
import {Link} from "react-router-dom";
import logo from "../media/logo.png";
import menu from "../media/hamburger icon.png";
import Close from "../media/close icon.png";

function Navbar(props) {
    const showMenu=()=>{
        const navMenu=document.querySelector('.nav-menu')
        navMenu.style.display="block";
    }
    const close=()=>{
        const navMenu=document.querySelector('.nav-menu')
        navMenu.style.display="none";
    }
    const about=()=>{
        close();
        document.querySelector('#about').scrollIntoView();
    }
    const contacts=()=>{
        close();
        document.querySelector('#contacts').scrollIntoView();
    }
    const news=()=>{
        close();
        document.querySelector('#news').scrollIntoView();
    }
    const services=()=>{
        close();
        document.querySelector('#services').scrollIntoView();
    }
    const top=()=>{
        close();
        document.querySelector('.Hero').scrollIntoView();
    }
    const add=()=>{
        const nav=document.querySelector('nav');
        if(window.scrollY>0){
            nav.classList.add('add-shadow');
        } else{
            nav.classList.remove('add-shadow');
        }
    }
    return (
        <>
            <nav className="navbar" onMouseOver={add}>
                <div className="brand">
                    <Link to='/' className="navbar-brand"><img className='logo' src={logo} alt="Kiri"/></Link>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                        <li className="nav-item">
                            <Link to='/' onClick={top} className="nav-link active" aria-current="page" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' onClick={about} className="nav-link" >About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' onClick={services} className="nav-link" >Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' onClick={news} className="nav-link" >News</Link>
                        </li>
                        <li className="nav-item" style={{marginRight:'80px'}}>
                            <Link to='/' onClick={contacts} className="nav-link">Contacts</Link>
                        </li> 
                    </ul>
                    <img src={menu} alt='menu' className='ham' onClick={showMenu}/>
                </div>
            </nav>

            <div className='nav-menu'>
                <img src={Close} alt='close' onClick={close}/><br/><br/>
                <ul>
                    <li><Link to='/' onClick={close} className="nav-link active" aria-current="page" >Home</Link></li><br/>
                    <li><Link to='/' onClick={about} className="nav-link" >About</Link></li><br/>
                    <li><Link to='/' onClick={services} className="nav-link" >Services</Link></li><br/>
                    <li> <Link to='/' onClick={news} className="nav-link" >News</Link></li><br/>
                    <li><Link to='/' onClick={contacts} className="nav-link">Contacts</Link></li><br/>
                </ul>
            </div>
        </>
    );
}

export default Navbar;