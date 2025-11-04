
import { Route, Routes } from 'react-router-dom';
import Register from './newpages/register';
import Home from './Home';
import Contactus from './newpages/contactus';
import Shop from './newpages/shop';
import Blog from './newpages/blog';
import Error from './newpages/errorpage';


function App()  
{
   return(
    <>
       <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Register/>} />
        <Route path='/contactus' element={<Contactus></Contactus>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/error' element={<Error></Error>}></Route>
      </Routes>
     </>
   )
}
export default App;