import React from 'react'
import HeroImg from '../Assets/hero.png';
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineGithub} from "react-icons/ai";

export default function Hero() {
    const config = {
      subtitle:"I'm a Full-stack Developer & Designer",
      social:{
         twitter:'https://twitter.com',
         facebook:'https://facebook.com',
         linkedin:'https://www.linkedin.com/in/rkfsd',
         github:'https://github.com/Ruthrakotti42/rk-gitprofile'
      }
    }

  return <section className='flex md:flex-row flex-col px-5 py-32 bg-secondary justify-center'>
       <div className='md:w-1/2 py-10 flex-col'>
           <h1 className=' text-white text-5xl cinzel-hero'>Hi, <br/> I'm Ruthra kotti C
           <p className='text-2xl'>{config.subtitle}</p>
           </h1>   
           <div className='flex py-10  text-white '>
            <a href={config.social.twitter} className='pr-5  hover:text-black'><AiOutlineTwitter size={40} /></a>
            <a href={config.social.facebook} className='pr-5  hover:text-black' ><AiOutlineFacebook size={40} /></a>
            <a href={config.social.linkedin} className='pr-5  hover:text-black'><AiOutlineLinkedin size={40} /></a>
            <a href={config.social.github} className='pr-5  hover:text-black'><AiOutlineGithub size={40} /></a>
           </div>
           </div>
          
           <img className='md:w-1/3 ' src={HeroImg} alt=''/>
  </section>
  
}
