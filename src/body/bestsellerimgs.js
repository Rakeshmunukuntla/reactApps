import { useNavigate } from 'react-router-dom';
import './bestsellerimgs.css';
function BestSellerImages()
{

     function Svghovereffect()
    {
        return(
                    <div className="overlayBarForhorizantal">
                        <div className='svgdiv' id='svgdiv1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                            <div className='svginfo'>Add to cart</div>
                        </div>
                        <div className='svgdiv' id='svgdiv2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
                            <div className='svginfo'>Quick view</div>
                        </div>
                        <div className='svgdiv' id='svgdiv3'> 
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
                            <div className='svginfo'>Add to wish list</div>
                        </div >
                        <div className='svgdiv' id='svgdiv4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-refresh-ccw-icon lucide-refresh-ccw"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>
                            <div className='svginfo'>Add to compare</div>
                        </div>
                        </div>
        )

    }

    const navigate=useNavigate();
    return(
        <div className="sellerImages">
            <div onClick={()=>navigate("/shop")}  className='naturalfood'>

            </div>

            <div className='fooditeams'>
                <div className='iteams6'>
                    <div className='pic' id='pic1'>
                        <Svghovereffect></Svghovereffect>

                    </div>
                    <div className='des' >
                         <p>Aliquam Consequat</p>
                        <p>Fruits</p>
                        <h3 className='money'>$26 <span> $362</span></h3>

                    </div>

                </div>
                 <div className='iteams6'>
                    <div className='pic' id='pic2'>
                        <Svghovereffect></Svghovereffect>

                    </div>
                    <div className='des' >

                        <p>Quisque In Arcu</p>
                        <p>Fruits</p>
                        <h3 className='money'>$20 <span> $352</span></h3>

                    </div>

                </div>
                 <div className='iteams6' >
                    <div className='pic' id='pic3'>
                        <Svghovereffect></Svghovereffect>

                    </div>
                    <div className='des'>
                        <p>Donec Non Est</p>
                        <p>Fruits</p>
                        <h3 className='money'>$46 <span> $382</span></h3>

                    </div>

                </div>
                 <div className='iteams6'>
                    <div className='pic' id='pic4'>
                        <Svghovereffect></Svghovereffect>

                    </div>
                    <div className='des'>
                        <p>Cas Mesque Metus</p>
                        <p>Fruits</p>
                        <h3 className='money'>$72 <span> $352</span></h3>

                    </div>

                </div>
                 <div className='iteams6'>
                    <div className='pic' id='pic5'>
                        <Svghovereffect></Svghovereffect>

                    </div>
                    <div className='des'>
                        <p>Mauris Vel Tellus</p>
                        <p>Fruits</p>
                        <h3 className='money'>$56 <span> $362</span></h3>

                    </div>

                </div>
                 <div className='iteams6'>
                    <div className='pic' id='pic6'>
                        <Svghovereffect></Svghovereffect>

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