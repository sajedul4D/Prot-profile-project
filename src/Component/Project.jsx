import { FaLongArrowAltDown } from "react-icons/fa";
import Projects from '../../public/Screenshot 2024-10-04 130158.png';
import project2 from '../../public/Screenshot 2024-10-05 010001.png'
import project3 from '../../public/Screenshot 2024-10-05 005042.png'

import { Link } from "react-router-dom";

const Project = () => {
    return (
        <div>
           <Link to='/'> <button  className='btn btn-outline h-[15px] w-[80px]'>Back</button></Link>
            <small className="font-serif"> <FaLongArrowAltDown></FaLongArrowAltDown> TAKE A LOOK AT MY
            </small> <br />
            <h2 className="font-serif">Project</h2>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content  ">
    <img
      src={Projects}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-xl font-bold">Speech-To-Text</h1>
      <h2>Technologies Used: <span>JavaScript, HTML, CSS,React ,Firebase</span></h2>
      <ol className="py-6 p-8 border font-serif">
        <li> i. Completely built with HTML,CSS,JavaScript,React js,Firebase
</li>
        <li>ii. A Good Looking UI
      </li>
        <li>iii.  Real-time Listen The Voice</li>
        
      </ol>
     <div className="flex gap-10">
      <a href="https://auth-path-project.web.app/" className="text underline text-red-300">Live</a>
      <Link to='' className="text underline">Repo</Link>
     </div>
    </div>
  </div>
</div>
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content  ">
    <img
      src={project3}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-xl font-bold">Speech-To-Text</h1>
      <h2>Technologies Used: <span>JavaScript, HTML, CSS,React ,Firebase,express,mongodb</span></h2>
      <ol className="py-6 border p-8 font-serif">
        <li> i. Completely built with HTML,CSS,JavaScript,React js,Firebase
</li>
        <li>ii. A Good Looking UI
      </li>
        <li>iii.  Real-time Listen The Voice</li>
        
      </ol>
     <div className="flex gap-10">
      <a href="https://auth-path-project.web.app/" className="text underline text-red-300">Live</a>
      <Link to='' className="text underline">Repo</Link>
     </div>
    </div>
  </div>
</div>
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content  ">
    <img
      src={project2}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-xl font-bold">Speech-To-Text</h1>
      <h2>Technologies Used: <span>JavaScript, HTML, CSS,React ,Firebase.,express,mongodb</span></h2>
      <ol className="py-6 border p-8 font-serif">
        <li> i. Completely built with HTML,CSS,JavaScript,React js,Firebase,express,mongodb
</li>
        <li>ii. A Good Looking UI
      </li>
        <li>iii.  Real-time Listen The Voice</li>
        
      </ol>
     <div className="flex gap-10">
      <a href="https://auth-path-project.web.app/" className="text underline text-red-300">Live</a>
      <Link to='' className="text underline">Repo</Link>
     </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Project;
