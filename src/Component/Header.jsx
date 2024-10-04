
import    './Header.css';
import { FaHome,FaRegUser, FaLaptopCode,FaArrowDown  } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";

import { MdWork } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className=" w-[100px] p-5 transform hover:bg-amber-100  transition duration-500 hover:scale-125">
            <Link to={'/'} className="font-extrabold text-start ">ST</Link> <br /> <br />
           <div >
            <ul >
                <NavLink to='/'  ><FaHome></FaHome></NavLink> <br /> 
                <NavLink to="/about"  className='about'><FaRegUser></FaRegUser ></NavLink> <br />
                <NavLink to='/skill'><FaLaptopCode></FaLaptopCode></NavLink > <br /> 
                <NavLink  to='/project'><MdWork></MdWork></NavLink> <br /> 
                <NavLink to='contact'><MdAddCall></MdAddCall></NavLink> <br />
            </ul>
            
            </div> 
            <div className="">
                <h2><NavLink><FaArrowDown></FaArrowDown></NavLink></h2>
            </div>
        </div>
    );
};

export default Header;