import img1 from '../../public/images.png'
import img2 from '../../public/pngtree-vector-calendar-icon-png-image_318152.jpg'
import talk from '../../public/group-people-teamwork-with-speech-bubble_24877-56209.jpg';
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        
          
           <div>
         <Link to='/'> <button  className='btn btn-outline h-[15px] w-[80px]'>Back</button></Link>
           <div className="font-mono flex gap-5 ">
          
           <GoArrowRight ></GoArrowRight>
          <small>SAY HEllo</small> 
            <br /> <br />
            </div> 
            <h2 className="font-serif">CONTACT</h2> <br /><br />
          <div className='flex gap-[80px]'>
          <div className="border bg-purple-100 p-10 justify-center w-[280px] h-[170px]">
           <img className='ml-[100px]' src={img1}  width={30} alt="ff" /> <br />
            <h2 className='text-center underline font-bold'>sajedultasin17@gmail.com</h2> 
            <small className='text-center ml-[70px]'>Email me</small>
           </div>
           <div className="border bg-purple-100 p-10 justify-center w-[280px] h-[170px]">
           <img className='ml-[100px]' src={img2}  width={30} alt="ff" /> <br />
            <h2 className='text-center ml-9 underline font-bold'>Calendly
          </h2> <br />
            <small className='text-center ml-9 '>  Schedule a Meeting</small>
           </div>
          </div>
          <div>
          <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
	<div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
			<div className="dark:text-gray-600">Let's Talk about to deal.</div>
		</div>
		<img src={talk} alt="" className="p-6 h-52 md:h-64" />
	</div>
	<form noValidate="" className="space-y-6">
		<div>
			<label htmlFor="name" className="text-sm">Full name</label>
			<input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-100" />
		</div>
		<div>
			<label htmlFor="email" className="text-sm">Email</label>
			<input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-100" />
		</div>
		<div>
			<label htmlFor="message" className="text-sm">Message</label>
			<textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-100"></textarea>
		</div>
		<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50">Send Message</button>
	</form>
</div>
          </div>

        </div>
    );
};

export default Contact;