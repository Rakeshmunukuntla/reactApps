import { useNavigate } from 'react-router-dom';
import './bestsellerimgs.css';
function BestSellerImages()
{
    const navigate=useNavigate();
    return(
        <div className="sellerImages">
            <div onClick={()=>navigate("/shop")}  className='naturalfood'>

            </div>

            <div className='fooditeams'>
                <div className='iteams6'>
                    <div className='pic' id='pic1'>

                    </div>
                    <div className='des' >

                         <p>Aliquam Consequat</p>
                        <p>Fruits</p>
                        <h3 className='money'>$26 <span> $362</span></h3>

                    </div>

                </div>
                 <div className='iteams6'>
                    <div className='pic' id='pic2'>

                    </div>
                    <div className='des' >

                        <p>Quisque In Arcu</p>
                        <p>Fruits</p>
                        <h3 className='money'>$20 <span> $352</span></h3>

                    </div>

                </div>
                 <div className='iteams6' >
                    <div className='pic' id='pic3'>

                    </div>
                    <div className='des'>
                        <p>Donec Non Est</p>
                        <p>Fruits</p>
                        <h3 className='money'>$46 <span> $382</span></h3>

                    </div>

                </div>
                 <div className='iteams6'>
                    <div className='pic' id='pic4'>

                    </div>
                    <div className='des'>
                        <p>Cas Mesque Metus</p>
                        <p>Fruits</p>
                        <h3 className='money'>$72 <span> $352</span></h3>

                    </div>

                </div>
                 <div className='iteams6'>
                    <div className='pic' id='pic5'>

                    </div>
                    <div className='des'>
                        <p>Mauris Vel Tellus</p>
                        <p>Fruits</p>
                        <h3 className='money'>$56 <span> $362</span></h3>

                    </div>

                </div>
                 <div className='iteams6'>
                    <div className='pic' id='pic6'>

                    </div>
                    <div className='des'>
                        <p>Proin Lectus Ipsum</p>
                        <p>Fruits</p>
                        <h3 className='money'>$36 <span> $282</span></h3>

                    </div>

                </div>
            </div>
            
        </div>
    )
}
export default BestSellerImages;