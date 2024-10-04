 import img from '../../public/HTML5_logo_and_wordmark.svg.png';
 import css from '../../public/CSS-Logo.png'
 import js from '../../public/js-logo.webp'
 import react from '../../public/react-1.svg'
 import rest from '../../public/rest api.jpg'
 import fire from '../../public/firebase5601.logowik.com.webp'
 import git from '../../public/git.png'
 import github from '../../public/github.png'
 import node from '../../public/node.png'
 import express from '../../public/express.jpg'
 import mongo from '../../public/mongo.png'
 import vs from '../../public/vs code.png'
 
 import ms from '../../public/Microsoft_Windows-Logo.wine.png'
 import network from '../../public/network.jpg';
 
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const Skill = () => {
    return (
        <div>
           <Link to='/'> <button  className='btn btn-outline h-[15px] w-[80px]'>Back</button></Link>
         <div >
           
        <sm className="flex  gap-6">  <GoArrowRight className="font-bold m-2"></GoArrowRight> CHECK OUT MY</sm> <br />
         </div>
        <h2 className="font-bold font-serif">   SKILLS </h2> <br /> <br /> <br />
 <div className="grid grid-cols-5 gap-5 mt-5">
 <div className="card card-compact bg-base-100 w-[70px] h-[140px] transform hover:bg-purple-200    transition duration-500 hover:scale-125 shadow-xl">
  <figure>
    <img
      src={img}
      alt="Shoes" />
  </figure>
  <div className="card-body ">
    <h6 className="card-title mr-2">htmL</h6>
   
    
  </div>
</div>
<div className="card card-compact bg-base-100 w-[70px] h-[140px]  transform hover:bg-purple-200     transition duration-500 hover:scale-125 shadow-xl">
  <figure>
    <img
      src={css}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title mr-2">css</h2>
    
  </div>
</div>
<div className="card card-compact bg-base-100 w-[70px] h-[140px]  transform hover:bg-purple-200     transition duration-500 hover:scale-125 shadow-xl">
  <figure>
    <img
      src={js}
      alt="javascript" />
  </figure>
  <div className="card-body">
    <h2 className="card-title mr-2">js</h2>
    
  </div>
</div>
<div className="card card-compact bg-base-100 w-[70px] h-[140px]  transform hover:bg-purple-200    transition duration-500 hover:scale-125 shadow-xl">
  <figure>
    <img
      src={react}
      alt="react" />
  </figure>
  <div className="card-body">
    <h2 className="card-title mr-2">React</h2>
    
  </div>
</div>
<div className="card card-compact bg-base-100 w-[70px] h-[140px]  transform hover:bg-purple-200    transition duration-500 hover:scale-125 shadow-xl">
  <figure>
    <img
      src={rest}
      alt="rest api" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Rest Api</h2>
   
  </div>
</div>
<div className="card card-compact bg-base-100 w-[70px] h-[140px]  transform hover:bg-purple-200    transition duration-500 hover:scale-125 shadow-xl">
  <figure>
    <img
      src={fire}
      alt="firebase" />
  </figure>
  <div className="card-body">
    <h2 className="card-title mr-2">Fire base</h2>
    
  </div>
</div>
<div className="card card-compact bg-base-100 w-[70px] h-[140px]  transform hover:bg-purple-200    transition duration-500 hover:scale-125 shadow-xl">
  <figure>
    <img
      src={node}
      alt="node js" />
  </figure>
  <div className="card-body">
    <h2 className="card-title mr-2">Node js</h2>
    
  </div>
</div>
<div className="card card-compact bg-base-100 w-[70px] h-[140px]  transform hover:bg-purple-200    transition duration-500 hover:scale-125 shadow-xl">
  <figure>
    <img
      src={express}
      alt="express js" />
  </figure>
  <div className="card-body">
    <h2 className="card-title mr-3">ex js</h2>
    
  </div>
</div>
<div className="card card-compact bg-base-100 w-[70px] h-[140px]  transform hover:bg-purple-200    transition duration-500 hover:scale-125 shadow-xl">
  <figure>
    <img
      src={mongo}
      alt="mongoDb" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title justify-start mr-3  ">Mdb</h2>
    
  </div>
</div>
<div className="card card-compact bg-base-100 w-[70px] h-[140px]  transform hover:bg-purple-200     transition duration-500 hover:scale-125 shadow-xl">
  <figure>
    <img
      src={git}
      alt="git" />
  </figure>
  <div className="card-body">
    <h2 className="card-title mr-2">Git</h2>
    
  </div>
</div>
<div className="card card-compact bg-base-100 w-[70px] h-[140px]  transform hover:bg-purple-200   transition duration-500 hover:scale-125 shadow-xl">
  <figure>
    <img
      src={github}
      alt="github" />
  </figure>
  <div className="card-body">
    <h2 className="card-title mr-2">git hub</h2>
    
  </div>
</div>
<div className="card card-compact bg-base-100 w-[70px] h-[140px]  transform hover:bg-purple-200    transition duration-500 hover:scale-125 opacity-1 shadow-xl">
  <figure>
    <img
      src={vs}
      alt="vs code" />
  </figure>
  <div className="card-body">
    <h2 className="card-title mr-2"> vs code</h2>
    
  </div>
</div>
<div className="card card-compact bg-base-100 w-[70px] h-[140px]  transform hover:bg-purple-200    transition duration-500 hover:scale-125 shadow-xl">
  <figure>
    <img
      src={network}
      alt="network" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-start items-start">net</h2>
    
  </div>
</div>
<div className="card card-compact bg-base-100 w-[70px] h-[140px]  transform hover:bg-purple-200    transition duration-500 hover:scale-125 shadow-xl">
  <figure>
    <img
      src={ms}
      alt="windows" />
  </figure>
  <div className="card-body">
    <h2 className="card-title  justify-start">Win
       </h2>
    
  </div>
</div>

 </div>
        </div>
    );
};

export default Skill;