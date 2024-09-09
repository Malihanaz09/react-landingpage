import './App.css';
import Cards from './component/Card';
import { Container } from '@mui/material';
import Navbar from './component/Navbar';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './component/About'
import Skills from './component/Skills';
import Project from './component/Project';
import Contact from './component/Contact';

function App() {

const router = createBrowserRouter([
  {
    path:"/",
    element: <><Navbar/> </>
  },
  {
    path:"/",
    element: <><Navbar/> <Skills/> </>
  },
  {
    path:"/",
    element: <><Navbar/> <Project/> </>
  },
  {
    path:"/",
    element: <><Navbar/> <Contact/> </>
  }
])


  return (
    <>
  
    <Container style={{marginTop:"20px"}}>
    <RouterProvider router={router}/>
    <Cards />
    </Container>
    </>
  );
}

export default App;
