import React from 'react';
import Navbar from "./Navbar";

function HeroImage(props) {
    const contacts=()=>{
        document.querySelector('#contacts').scrollIntoView();
    }
    return (
        <div className='Hero'>
            <Navbar/>
                <div className='Hero-image'>
                    <div className='hero-text'>
                        <div class="grid max-w-screen-xl px-4 py-8 mx-auto sm:mt-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                            <div class="mr-auto place-self-center lg:col-span-7 content flex flex-col">
                                <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl xl:text-6xl Enhancing">Enhancing Brands, Enhancing Lives</h1>
                                <p class="max-w-2xl text-4xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl  text">We focus on deep customer insights to provide growth.</p>
                                <button onClick={contacts}>
                                    Contact Us
                                </button>
                            </div>
                            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex"></div>                
                        </div>
                        {/* <h1 className='Enhancing heading'>
                        Enhancing Brands,<br/>
                        Enhancing Lives
                        </h1>
                        <p className='text'>
                            We focus on deep customer insights to provide growth<br/> to our clients.
                        </p>
                        <button onClick={contacts}>
                            Contact Us
                        </button> */}
                    </div>
                </div> 
        </div>

    );
}

export default HeroImage;