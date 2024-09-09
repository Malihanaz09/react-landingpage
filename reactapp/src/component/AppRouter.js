import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Home from './Skills'
import About from './About';
import Contact from './Contact';

function AppRouter(){
    return(
<>
 <BrowserRouter>
 <div className='navbar'>
 <Link to="/">Home</Link>
    <Link to="/About">About</Link>
    <Link to="/Contact">Contact</Link>
</div>    
     <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}>About</Route>
        <Route path='/Contact' element={<Contact />}>Contact</Route>
     </Routes>
 </BrowserRouter>
</>
    )
}
export default AppRouter;