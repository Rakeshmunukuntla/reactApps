import { Link } from 'react-router-dom';
import '../App.css';
import safira from '../safiraImages/logo2.png';

function HeaderMid()
{
    return(
        <div className='headerMid'>
            <div className='mid1'>
                <input type='text' placeholder='search here...'></input>
                {/* <svg className='search-icon' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg> */}
        <svg className='search-icon'
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        
        height='12.5' width='12.5'
      >
        <path
          fill="white"
          d="M505 442.7L405.3 343c28.4-34.9 45.7-79.5 45.7-128C451 96.5 354.5 0 231 0S11 96.5 11 215s96.5 215 215 215c48.5 0 93.1-17.3 128-45.7l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l18.4-18.4c9.5-9.5 9.5-24.8 0-34.2zM231 370c-85.3 0-155-69.7-155-155S145.7 60 231 60s155 69.7 155 155-69.7 155-155 155z"
        />
      </svg>
            </div>

            <div className='mid2'>
                <a href='/'><img src={safira} alt='safira' /></a>
            </div>
            <div className='mid3'>
                
               <Link className='link' to='/register'><p>REGISTER</p></Link> 
                <p>/</p>
               <Link className='link' to='/login'><p>LOGIN</p></Link> 

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
                <button className='cart'>3</button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                <button className='cart'>2</button>
            </div>
        </div>
    )
}
export default HeaderMid;
