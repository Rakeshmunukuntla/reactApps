import {  useNavigate  } from 'react-router-dom';
import './organic.css';
function Organic()
{
    const navigate=useNavigate();
   
    return(
        <div className="organic">
            <div className='messageContent'>
                <pro>
                   <span className='fresh'>Fresh Organic Food </span> <br></br>
                   <span className='onions'>Tomoto Oninions,Garlic </span> <br></br>
                    10% certified-organic mix of fruits and veggies.perfect<br></br>
                    for weeekly cooking and snacking!

         
                
            
                </pro>
              <button onClick={()=>navigate("/shop")}>READ MORE</button>
            </div>
           
        </div>
    )
}
export default Organic;