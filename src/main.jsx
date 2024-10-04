import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Component/Header.jsx';
import Banner from './Component/Banner.jsx';
import About from './Component/About.jsx';
import Skill from './Component/Skill.jsx';
import Project from './Component/Project.jsx';
import Contact from './Component/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    
   
  },
   
      {
        path:'/header',
        element:<Header></Header>
      },
      {
        path:'/banner',
        element:<Banner></Banner>
        
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:"/skill",
        element:<Skill></Skill>
      },
      {
        path:"/project",
        element:<Project></Project>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
  
  
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />
  </StrictMode>,
)
