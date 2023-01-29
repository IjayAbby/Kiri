import React, { useState } from 'react';
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import rect2 from '../media/Rectangle 2.svg';
import articleImage1 from "../media/articleImage1.png";
import articleImage2 from "../media/articleImage2.png";
import history from '../media/Our history background.svg';
import image4 from '../media/image 4.svg';
import image5 from '../media/image 5.svg';
import image7 from '../media/image 7.svg';
import image8 from '../media/image 8.svg';
import image9 from '../media/image 9.svg';
import image11 from '../media/image 11.svg';
import person from '../media/person.png';
import network from '../media/network.png';
import eye from '../media/eye.png';
import plane from '../media/aeroplane.png';
import profile1 from '../media/Profile1.png';
import profile2 from '../media/Profile2.png';
import profile3 from '../media/Profile3.png';
import profile4 from '../media/Profile4.png';
import toast from "react-hot-toast";

function Home(props) {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [number,setNumber]=useState(0);
    const [text,setText]=useState('');
    const [sendButton,setSendButton]=useState(<button>Send Message</button>);
    //send email
    const sendMail=async(e)=>{
        const form=document.querySelector('form');
        e.preventDefault();
        try {
            setSendButton(<><button><i>Sending...</i></button></>);
            const url='https://kiri-api.onrender.com/api/send';
            const response=await fetch(url,{
                method:'POST',
                body:JSON.stringify({
                    name,
                    email,
                    phone:number,
                    message:text
                }),
                headers:{
                    'content-type':'application/json'
                }
            })
            form.reset();
            const parseRes=await response.json();
            console.log(parseRes);
            setSendButton(<button>Sending message</button>);
        } catch (error) {
            form.reset();
            setSendButton(<button>Send Message</button>);
            toast.success('Email sent successfully');
            console.log(error.message);
        }
    }
    const showPublic=()=>{
        document.querySelector('.public-h3').style.display="none";
        document.querySelector('.public').style.display="block";
        dontShowBrand();
        dontShowDigital();
        dontShowTraining();
    }
   const showBrand=()=>{
    document.querySelector('.brand-h3').style.display="none";
    document.querySelector('.bran').style.display="block";
    dontShowDigital();
    dontShowTraining();
    dontShowPublic();
   }
   const showDigital=()=>{
    document.querySelector('.digital-h3').style.display="none";
    document.querySelector('.digital').style.display="block";
    dontShowPublic();
    dontShowBrand();
    dontShowTraining();
   }
   const showTraining=()=>{
    document.querySelector('.training-h3').style.display="none";
    document.querySelector('.training').style.display="block";
    dontShowBrand();
    dontShowPublic();
    dontShowDigital();
   }
   const dontShowPublic=()=>{
    document.querySelector('.public-h3').style.display="block";
    document.querySelector('.public').style.display="none"
   }
   const dontShowBrand=()=>{
    document.querySelector('.brand-h3').style.display="block";
    document.querySelector('.bran').style.display="none"
   }
   const dontShowDigital=()=>{
    document.querySelector('.digital-h3').style.display="block";
    document.querySelector('.digital').style.display="none"
   }
   const dontShowTraining=()=>{
    document.querySelector('.training-h3').style.display="block";
    document.querySelector('.training').style.display="none"
   }
   
   
    return (
        <>
            <HeroImage/>
            {/* about section */}
            <div className='about' id='about'>
                <div className='grid'>
                    <div className='grid-item'>
                        <h2 className='heading' style={{fontSize: '50px', lineHeight: 2, fontWeight: 500}}>ABOUT US</h2>
                            <p style={{fontWeight: 400 ,lineHeight: 1.2, fontSize: '20px'}}>
                                One thing that sets us apart from other digital marketing agencies is that we are mission-driven and deeply invested in our clients’ work. We believe that mission-driven companies and social enterprises play a significant role in supporting the economic development and sustainability of the country.<br/><br/>
                                Because you focus on changing the world, you deserve the best digital marketing, branding, and PR team to help you achieve your goals and increase impact work. One that understands the importance of telling your brand story, how to say it, and where to direct it.
                            </p><br/>
                        <h3 className="heading" style={{fontSize: '30px', fontWeight: 400}}>Mission Statement!</h3>
                        <h4 style={{fontWeight: 400 ,lineHeight: 1.2, fontSize: '20px'}}>
                        To contribute to client’s business growth through result oriented, innovative and creative strategies that will deliver the WOW factor.<br/><br/>
                        </h4>
                       

                        <h3 className='heading' style={{fontSize: '30px', fontWeight: 400}}>Core Values</h3>
                        <ul>
                            <li style={{fontWeight: 400 ,lineHeight: 1, fontSize: '20px'}}>Professionalism</li>
                            <li style={{fontWeight: 400 ,lineHeight: 1, fontSize: '20px'}}>Integrity</li>
                            <li style={{fontWeight: 400 ,lineHeight: 1, fontSize: '20px'}}>Passion driven</li>
                            <li style={{fontWeight: 400 ,lineHeight: 1, fontSize: '20px'}}>Authenticity</li>
                        </ul>
                    </div>
                    <div>
                        <img className='rectangle2' src={rect2} alt="about us"/>
                    </div>

                </div>
                <div style={{display:'flex',marginTop:'50px'}}>
                        <h1 className= 'heading' style={{fontSize: '60px', fontWeight: 100}}><span style={{color:'#CC2031',fontWeight: 500, fontSize:'60px'}}>Recreating</span> Stories and Experiences for manufacturing Industries</h1>
                    </div>

                <div className='vectorbuld2'>


                    <div style={{marginTop:'10px',lineHeight: '55px'}}>
                        <h3 className='heading' id='services'>SERVICES</h3>
                        <p style={{fontWeight: 400 ,lineHeight: 1.2, fontSize: '20px'}}>
                            We focus on deep customer insight to provide growth to our clients as we work on the principle of creativity, <br/> identity, innovation and inclusion and diversity.
                        </p>
                    </div>
                </div>
            </div>
            {/* picture section */}
            <div className='pic-grid'>
                <div className='grid-item-1' onClick={showPublic} onMouseOver={showPublic} onMouseLeave={dontShowPublic}>
                    <h3 className='public-h3 heading'>Public Relations</h3>
                    <div className='public' style={{marginTop:'45px',fontSize:'15px',display:'none'}}>
                        <h2 className='heading' style={{fontSize:'20px'}}>Public Relations</h2>
                        <p style={{padding:'25px', fontSize: '16px'}}>
                            You know you’re awesome. We know you’re awesome. Let us tell the world just how awesome you are. Because that’s what great PR is all about.
                            Connect with us!
                            Corporate communication
                            Social Media communication
                            PR events and engagements
                        </p>
                    </div>
                </div>
                <div className='grid-item-2' onClick={showBrand} onMouseOver={showBrand} onMouseLeave={dontShowBrand}>
                    <h3 className='brand-h3 heading'>Brand Management</h3>
                    <div className='bran' style={{marginTop:'25px',fontSize:'15px',display:'none'}}>
                        <h2 className='heading' style={{fontSize:'20px'}}>Brand Management</h2>
                        <p style={{padding:'25px', fontSize: '16px'}}>
                        Tell your story! We understand the importance of purpose- driven brand activation, we want you to sustain your brand visibility by showcasing it and telling your impact stories to the world and to the people that matter. Our brand activation strategies will drive results as they will be uniquely customized to exhibit the alignment of your company values and missions.
                        </p>
                    </div>
                </div>
                <div className='grid-item-3' onClick={showDigital} onMouseOver={showDigital} onMouseLeave={dontShowDigital}>
                    <h3 className='digital-h3 heading'>Digital Marketing</h3>
                    <div className='digital' style={{marginTop:'25px',fontSize:'15px',display:'none'}}>
                        <h2 className='heading' style={{fontSize:'20px'}}>Digital Marketing</h2>
                        <p style={{padding:'25px', fontSize: '16px'}}>
                        Yes, we get you. We fully understand that you’re not just doing business, You’re in the business of changing lives. You’re passionate about solving problems in your community and driving positive change. We are also passionate about helping you change the world. To succeed, you need to engage people online, your customers, partners, and supporters.
                        </p>
                    </div>
                </div>
                <div className='grid-item-4' onClick={showTraining} onMouseOver={showTraining} onMouseLeave={dontShowTraining}>
                    <h3 className='training-h3 heading'>Training</h3>
                    <div className='training' style={{marginTop:'25px',fontSize:'15px',display:'none'}}>
                        <h2 className='heading' style={{fontSize:'20px'}}>Training</h2>
                        <p style={{padding:'25px', fontSize: '16px'}}>
                        Yes, we get you. We fully understand that you’re not just doing business, You’re in the business of changing lives. You’re passionate about solving problems in your community and driving positive change. We are also passionate about helping you change the world. To succeed, you need to engage people online, your customers, partners, and supporters.
                        </p>
                    </div>
                </div>
            </div>
            {/* testimony section */}
            <div className='testimony'>
                <div style={{textAlign:"center"}}>
                    <h2 className='heading' style={{fontSize: '50px',fontWeight: 500}}>TESTIMONIALS</h2>
                    <p style={{fontSize: '20px',fontWeight: 400}}>Think we’re bluffing? See what people we’ve worked with think about us.</p>
                </div>
                {/* testimony cards */}
                <div className='testimony-cards'>
                    <div className='card-grid-1'>
                        <div className='grid-card'>
                            <p style={{fontWeight: 400, fontSize: '18px', lineHeight: 1}}>
                            Our brand has exponentially grown to explore social media avenues as it was operating offline. Choosing long term partnership with Kiri Marketing consultancy has broadened our relationship and sales growth experience. Her advice and expertise go a long way in enhancing brand needs & values.
                            </p>
                            <div className='card-footer'>
                                <img width="50" height="50" src={profile1} alt="..."/>
                                <p style={{fontSize: '16px', lineHeight: 1}}>
                                Annet Obat &amp; Anita Lukelesia<br/>
                                Co-Founders, Laette Closet
                                </p>
                            </div>
                        </div>
                        <div className='grid-card'>
                            <p style={{fontWeight: 400, fontSize: '18px', lineHeight: 1}}>
                            Kiri marketing Consultants is a perfect balance between professionalism and personality. They take their time to dig in and find out what the company needs to expand their market. Their strategies have helped us in aligning our company goals which has seen us grow and sign-up new clients.
                            </p>
                            <div className='card-footer'>
                            <img width="50" height="50" src={profile2} alt="..."/>
                                <p style={{fontSize: '16px', lineHeight: 1}}>
                                Evelyne Wandanda<br/>
                                Co-founder and managing partner, Innerblast Consultants
                                </p>
                            </div>
                        </div>

                        <div className='grid-card'>
                            <p style={{fontWeight: 400, fontSize: '18px', lineHeight: 1}}>
                            Talent Industry acknowledges the partnership offered by Kiri Marketing Consultants in the success of the 2022 East Africa Poetic Hour Battle on 20th May 2022. We would like to thank them for their outstanding service in event planning, marketing, branding and corporate ushering.
                            </p>
                            <div className='card-footer'>
                            <img width="50" height="50" src={profile3} alt="..."/>
                                <p style={{fontSize: '16px', lineHeight: 1}}> 
                                Godfrey Emoja<br/>
                                Managing Director, Talent Industry
                                </p>
                            </div>
                        </div>
                        <div className='grid-card'>
                            <p style={{fontWeight: 400, fontSize: '18px', lineHeight: 1}}>Recreating Stories and Experiences for manufacturing Industries Recreating Stories and Experiences for manufacturing IndustriesRecreating Stories and Experiences for manufacturing Industries</p>
                            <div className='card-footer'>
                            <img width="50" height="50" src={profile4} alt="..."/>
                                <p style={{fontSize: '16px', lineHeight: 1}}>
                                    Bryce Zeibu<br/>
                                    CTA, Spify
                                </p>
                            </div>
                        </div>
                    </div>

                
                    {/* percentage */}
                    <div className='grid-percentage'>
                        <div className='grid-percentage-1'>
                             <img src={person} alt='...'/><h1>37+</h1><br/>
                            <p style={{fontSize: '24px'}}>Happy Clients</p>
                        </div>
                        <div className='grid-percentage-2'>
                            <img src={network} alt='...'/><h1>98%</h1><br/>
                            <p style={{fontSize: '24px'}}>Positive Feedback</p>
                        </div>
                        <div className='grid-percentage-3'>
                            <img src={eye} alt='...'/><h1>835+</h1><br/>
                            <p style={{fontSize: '24px'}}>Loyal Followers</p>
                        </div>
                        <div className='grid-percentage-4'>
                            <img src={plane} alt='...'/><h1>50+</h1><br/>
                            <p style={{fontSize: '24px'}}>Projects Delivered</p>
                        </div>
                    </div>

                    {/* worked with */}
                    <div className='worked-with'>
                        <h4 className='heading' style={{fontSize: '50px',fontWeight: 500}}>we’ve worked with</h4>
                        <div className='company-image'>
                                <img src={image4} alt='...'/>
                                <img src={image5} alt='...'/>
                                <img src={image7} alt='...'/>
                                <img src={image8} alt='...'/>
                                <img src={image9} alt='...'/>
                                <img src={image11} alt='...'/>
                        </div>
                    </div>
                </div>
            </div>
            {/* history section */}
            <div className='history-section'>
                
                <div className='grid-history'>
                    <div className='grid-history-1'>
                        <img src={history} alt='...'/>
                    </div>
                    <div className='grid-history-2'>
                    <h1 className='heading' style={{fontSize: '50px',fontWeight: 500}}>Our history</h1>
                        <p style={{fontSize: '18px',fontWeight: 400}}>Kiri Marketing Consultants is a Private Limited company founded in 2020 during the Covid 19 pandemic.<br/><br/>

                            Our Founder has been a beneficiary of many missions driven projects especially ones that support women entrepreneurs for sustainable impact. She also has professional experience working for a Non-Profit organization. Her experiences and such initiatives have enabled her to harness her skills as a team leader and helped her gain a better perspective when it comes to mission-driven companies.<br/><br/>

                            “The company was initially a Social Media Management company for small entrepreneurs and start-up companies and was birthed out of passion. With time and through more experience and realization of the gap in the market, there was a need to re-strategize and rebrand to full Digital Marketing, Branding and PR Agency for mission driven companies, social enterprises and nonprofit organizations.”<br/><br/>

                            <em>Eileen, Founder/ CEO.</em>
                        </p>
                    </div>
                </div>
            </div>
            {/* recent article section */}
            <div className='recent-articles' id='news'>
                <h4 className='heading' style={{fontSize: '50px',fontWeight: 500, marginTop: '4vh'}}>RECENT ARTICLES</h4>
                <h2 className= 'heading' style={{fontSize: '40px', fontWeight: 50}}>Get Updated on the latest trends</h2>
                <div className='grid-article'>
                    <div className='grid-article-1'>
                        <img src={articleImage1} alt='..'/>
                        <h3>Marketing Made Easy</h3>
                        <p>Some concept examples to help you understand how marketing works.</p>
                    </div>
                    <div className='grid-article-1'>
                        <img src={articleImage2} alt='..'/>
                        <h3>Importance of Merchandise Planning</h3>
                        <p>The goal of merchandise planning is to meet customers’ needs by making products available at the right time, price and quantity.</p>
                    </div>
                </div>
            </div>


            {/* talk more section */}
            <div className='talk-more' id='contacts'>
                <div className='grid-talk-more'>
                    <div className='grid-talk-1'>
                        <h1>Let’s talk about<br></br> building your <br></br>reputation</h1>
                    </div>
                    <div className='grid-talk-2'>
                        <form onSubmit={sendMail}>
                            <h3 style={{marginBottom:"20px",width:"242px",height:"44px",fontSize:'40px',fontWeight:'bolder'}}>Get in touch</h3>
                            <label>Name</label><br/>
                            <input type="text" onChange={(e)=>setName(e.target.value)} required/><br/><br/>
                            <label>Email</label><br/>
                            <input type='email' onChange={(e)=>setEmail(e.target.value)} required/><br/><br/>
                            <label>Phone</label><br/>
                            <input type="number" onChange={(e)=>setNumber(e.target.value)} required/><br/><br/>
                            <label>Message</label><br/>
                            <textarea onChange={(e)=>setText(e.target.value)} required></textarea><br/>
                            {sendButton}
                        </form>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}

export default Home;