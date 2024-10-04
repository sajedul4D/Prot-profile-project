import './App.css'
import About from './Component/About'
import Banner from './Component/Banner'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import Header from './Component/Header'
import Project from './Component/Project'
import Skill from './Component/Skill'

function App() {
  

  return (
    <>
     
     <div>
      <div className='flex ml-10 mt-10 fixed'>
      <Header></Header>
      </div>
     <div className='ml-40 '> 
      <Banner  ></Banner></div> <br /> <br />
      <div className='ml-40 mt-20 '>
        <About> </About>
      </div>
      <div className='ml-40 mt-20 '>
        <Skill></Skill>
      </div>
      <div className='flex  ml-40 mt-20' >
     <Project></Project>
      </div>
      <div className='ml-40 mt-20 '>
        <Contact></Contact>
      </div>
      <div className='ml-40 mt-20 '>
        <Footer></Footer>
      </div>
      
     </div>
      
    
     
    </>
  )
}

export default App
