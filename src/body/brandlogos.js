import './brandlogos.css';
import brand1 from '../safiraImages/brand1.jpg';
import brand2 from '../safiraImages/brand2.jpg';
import brand3 from '../safiraImages/brand3.jpg';
import brand4 from '../safiraImages/brand4.jpg';
import { useNavigate } from 'react-router-dom';
function Brandlogos()
{
    const navigate=useNavigate();
    function handleclick(path)
    {
        navigate(path);
        window.scrollTo({top:0,behavior:'smooth'});
    }
    return(
        <div className='brandlogos'>
            <img  onClick={()=>handleclick('/')} src={brand1} alt='brand pics'></img>
            <img  onClick={()=>handleclick('/')} src={brand2} alt='brand pics'></img>
            <img  onClick={()=>handleclick('/')} src={brand3} alt='brand pics'></img>
            <img  onClick={()=>handleclick('/')} src={brand4} alt='brand pics'></img>
            <img  onClick={()=>handleclick('/')} src={brand1} alt='brand pics'></img>
        </div>
    )
}
export default Brandlogos;