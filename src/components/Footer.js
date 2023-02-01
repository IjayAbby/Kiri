import React from 'react';
import { Link } from 'react-router-dom';
import location from '../media/LOCATION.svg';
import phone from '../media/PHONE.svg';
import mail from '../media/MAIL.svg';
import fb from '../media/facebook.png';
import insta from '../media/insta.png';
import twitter from '../media/twitter.png';
import linkedIn from '../media/linkdin.png';

function Footer(props) {
    const about=()=>{
        document.querySelector('#about').scrollIntoView();
    }
    
    const services=()=>{
        document.querySelector('#services').scrollIntoView();
    }
    const top=()=>{
        document.querySelector('.Hero').scrollIntoView();
    }
    return (
        <>
        <footer className='p-4 sm:p-6 dark:bg-gray-900'>
            <div class="md:flex md:justify-between content">
            <div class="mb-6 md:mb-0">
            <div>
                <h2 class="mb-6 text-sm font-bold text-white uppercase dark:text-white">Service</h2>
                <ul class="text-white dark:text-white">
                    <li class="mb-2">
                        <Link to='/' onClick={top}>Home</Link>
                    </li>
                    <li class="mb-2">
                        <Link to='/' onClick={about}>About</Link>
                    </li>
                    <li class="mb-2">
                        <Link to='/' onClick={services}>Service</Link>
                    </li>
                    <li class="mb-2">
                        <Link to='/blogs'>Blog</Link>
                    </li>
                    <li class="mb-2">
                        <Link to='/blog/add'>Add Blog</Link>
                    </li>
                </ul>
            </div>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Contact</h2>
                <ul class="text-white dark:text-white social-link">
                    <li class="mb-1 flex">
                        <p className='mr-4'>
                            <i class="fa fa-light fa-location-dot"></i>
                        </p>
                        <p>
                            <span>Office Address</span>
                            <br />
                            <span>Kisumu</span>
                        </p>
                    </li>
                    <li class="mb-1 flex">
                        <p className='mr-4'>
                            <i class="fa fa-sharp fa-solid fa-envelope"></i>
                        </p>
                        <p>
                            <span>Email Us</span>
                            <br />
                            <span>corporate@kiriconsultants.com</span>
                        </p>
                    </li>
                    <li class="flex">
                        <p className='mr-4'>
                        <i class="fa fa-thin fa-phone"></i>
                        </p>
                        <p>
                            <span>Call Us</span>
                            <br />
                            <span>+254 741 248643 | +254 719 297091</span>
                        </p>
                    </li>
                </ul>
            </div>
            </div>
            <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0 social-links">
                <a href="https://www.facebook.com/kirimarketingconsultants" target="_blank" class="text-white hover:text-gray-900 dark:hover:text-white" >
                    <i class="fa fa-brands fa-facebook-f"></i>
                </a>
                <a href='https://www.twitter.com/kiriconsultants' target='_blank' class="text-white hover:text-gray-900 dark:hover:text-white">
                    <i class="fa fa-brands fa-twitter"></i>
                </a>
                <a href='https://www.linkedin.com/company/kiri-consultants/' target='_blank' class="text-white hover:text-gray-900 dark:hover:text-white">
                    <i class="fa fa-brands fa-linkedin-in"></i>
                </a>
                <a href='https://www.instagram.com/kiriconsultants/' target='_blank' class="text-white hover:text-gray-900 dark:hover:text-white">
                    <i class="fa fa-brands fa-instagram"></i>
                </a>
            </div>
            <span class="block mt-4 text-sm text-white sm:text-center dark:text-gray-400">©2022 Kiri Marketing and PR Consultants 
            </span>
        </footer>
            {/* <footer class="p-4 sm:p-6 dark:bg-gray-900">
               <div className='content' style={{width:'100vw'}}>
                    <div>
                        <h2>Service</h2>
                        <ul style={{listStyle:'none', fontSize: '20px'}}>
                            <li><Link to='/' onClick={top}>Home</Link></li>
                            <li><Link to='/' onClick={about}>About</Link></li>
                            <li><Link to='/' onClick={services}>Service</Link></li>
                            <li><Link to='/blogs'>Blog</Link></li>
                            <li><Link to='/blog/add'>Add Blog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Contact</h2>
                        <ul style={{listStyle:'none'}}>
                            <li style={{display:'flex'}}>
                                <img src={location} alt='..'/>
                                <div style={{display:'inline-block', marginLeft:'20px'}}>
                                    <p>Office Address</p><h3>Kisumu</h3>
                                </div>
                            </li>
                            <li style={{display:'flex'}}>
                                <img src={mail} alt='..'/>
                                <div style={{display:'inline-block',marginLeft:'20px'}}>
                                    <p>Email Us</p><h3>corporate@kiriconsultants.com </h3>
                                </div>
                            </li>
                            <li style={{display:'flex'}}>
                                <img src={phone} alt='..'/>
                                <div style={{diplay:'inline-block',marginLeft:'20px'}}>
                                    <p>Call Us</p><h3> +254 741 248643 | +254 719 297091 </h3>
                                </div>
                            </li>
                        </ul>
                    </div>
               </div>
            <div className='social-icons'>
                <a href='https://www.facebook.com/kirimarketingconsultants' target='_blank'><img src={fb} alt="..."/></a>
                <a href='https://www.twitter.com/kiriconsultants' target='_blank'><img style={{marginLeft:'50px'}} src={twitter} alt="..."/></a>
                <a href='https://www.linkedin.com/company/kiri-consultants/' target='_blank'><img style={{marginLeft:'50px'}} src={linkedIn} alt="..."/></a>
                <a href='https://www.instagram.com/kiriconsultants/' target='_blank'><img style={{marginLeft:'50px'}} src={insta} alt="..."/></a>
            </div>
            <p className='last' align='center'>©2023 Kiri Marketing and PR Consultants </p>
            </footer> */}
        </>
    );
}

export default Footer;