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
                        <h1 className='Enhancing heading'>
                        Enhancing Brands,<br/>
                        Enhancing Lives
                        </h1>
                        <p className='text'>
                            We focus on deep customer insights to provide growth<br/> to our clients.
                        </p>
                        <button onClick={contacts}>
                            Contact Us
                        </button>
                    </div>
                </div> 
        </div>

    );
}

export default HeroImage;