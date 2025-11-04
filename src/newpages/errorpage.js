import { useNavigate } from 'react-router-dom';
import FooterTop from '../footer/footertop';
import MainFooter from '../footer/mainfooter';
import HeaderBottom from '../header/headerBottom';
import HeaderMid from '../header/headerMid';
import HeaderTop from '../header/headerTop';
import './error.css';
function Error()
{
    const navigate=useNavigate();
    return(
        <div>
            <HeaderTop></HeaderTop>
            <HeaderMid></HeaderMid>
            <HeaderBottom></HeaderBottom>
            <div className='errorMid'>
                <div className='innererrormid'>
                    <div className='h1404'>404</div>
                    <div className='matterinerror'>
                       <h3>Opps! PAGE NOT BE FOUND</h3> 
                       <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <h4>Sorry but the page you are looking for does not exist, have been</h4>
                       <h4>removed, name changed or is temporarily unavailable.</h4>

                       </div>

                        <input placeholder='search'></input>
                       <button onClick={()=>navigate("/")}>BACK TO HOME PAGE</button>
                       
                        </div>
                </div>
            </div>
            <div className='forspace'></div>
            <FooterTop></FooterTop>
            <MainFooter></MainFooter>
        </div>
    )
}
export default Error;