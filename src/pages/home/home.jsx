import React from 'react'
import { Cats, Hero, Navbar, Trending ,GetInspired, Footer} from './../../utils/export'
import { IoChatbubbleEllipses } from "react-icons/io5";
import './home.css'

const Home = () => {
  return <>
   <Navbar/>
   <Hero/>
   <Cats/>
   <Trending/>
   <GetInspired />
   <Footer/>

   <div className="flooting-chat">
       <div>
        <IoChatbubbleEllipses className='icon'/>
       </div>
       <div className="text">
        chat
       </div>
   </div>
  </>
}

export default Home