import './shop.css';
import HeaderBottom from '../header/headerBottom';
import HeaderTop from '../header/headerTop';
import HeaderMid from '../header/headerMid';
import FooterTop from '../footer/footertop';
import MainFooter from '../footer/mainfooter';
import Image1 from '../safiraImages/product1.jpg';
import Image2 from '../safiraImages/product2(1).jpg';
import Image3 from '../safiraImages/product3.jpg';
import Image4 from '../safiraImages/product5.jpg';
import Image5 from '../safiraImages/product4.jpg';
import Image6 from '../safiraImages/product11.jpg';
import Image7 from '../safiraImages/product13.jpg';
import Image8 from '../safiraImages/product14.jpg';
import Image9 from '../safiraImages/product17.jpg';
import Image10 from '../safiraImages/product8.jpg';
import Image11 from '../safiraImages/product21.jpg';
import Image12 from '../safiraImages/product19.jpg';
import { useNavigate } from 'react-router-dom';

function Shop()
{
    const navigate=useNavigate();
    function smoothnavigate(path)
    {
            navigate(path);
            window.scrollTo({top:0,behavior:'smooth'})
    }
    return(
        <div className='shop'>
        <HeaderTop></HeaderTop>
        <HeaderMid></HeaderMid>
        <HeaderBottom></HeaderBottom>
         <div className='shopbanner'>
            <h3 className='l1'>Shop</h3>
            <h6 ><span onClick={()=>smoothnavigate("/")} style={{cursor:'pointer'}}>Home</span> / Shop</h6>
        </div>
        <div className='shopiteams'>
            <div className='verticalPart1'>
                <div className='women'>
                    <h3>WOMEN</h3>
                    <hr></hr>
                    <div class="item">
                        <span>Shoes</span>
                        <span>+</span>
                    </div>
                    <div class="item">
                        <span>Bags</span>
                        <span>+</span>
                    </div>
                    <div class="item">
                        <span>Clothing</span>
                        <span>+</span>
                    </div>
                </div>
                
                <div className='filterbyprice'>
                    <h3>FILTER BY PRICE</h3>
                    <hr></hr>
                    <input type="range" min="0" max="500"  />
                       <div class="item">
                       <button>Filter</button>
                        <span>$0-$500</span>
                        </div>
                </div>
                <div className='selectbycolor'>
                    <h3>SELECT BY COLOR</h3>
                    <hr></hr>
                    <div class="item">
                        <span>Black</span>
                        <span>(6)</span>
                    </div>
                    <div class="item">
                        <span>Blue</span>
                        <span>(8)</span>
                    </div>
                      <div class="item">
                        <span>Brown</span>
                        <span>(10)</span>
                    </div>
                      <div class="item">
                        <span>Green</span>
                        <span>(6)</span>
                    </div>
                      <div class="item">
                        <span>Pink</span>
                        <span>(4)</span>
                    </div>
                </div>

                <div className='selectbycolor'>
                    <h3>SELECT BY SIZE</h3>
                    <hr></hr>
                    <div class="item">
                        <span>S</span>
                        <span>(6)</span>
                    </div>
                    <div class="item">
                        <span>M</span>
                        <span>(8)</span>
                    </div>
                      <div class="item">
                        <span>L</span>
                        <span>(10)</span>
                    </div>
                      <div class="item">
                        <span>XL</span>
                        <span>(6)</span>
                    </div>
                      <div class="item">
                        <span>XL</span>
                        <span>(4)</span>
                    </div>
                </div>


                <div className='selectbycolor'>
                    <h3>MANUFACTURER</h3>
                    <hr></hr>
                    <div class="item">
                        <span>Break Parts</span>
                        <span>(6)</span>
                    </div>
                    <div class="item">
                        <span>Accessories</span>
                        <span>(10)</span>
                    </div>
                      <div class="item">
                        <span>Engine Parts</span>
                        <span>(4)</span>
                    </div>
                      <div class="item">
                        <span>Hermes</span>
                        <span>(10)</span>
                    </div>
                      <div class="item">
                        <span>Louis vuitton</span>
                        <span>(8)</span>
                    </div>
                </div>


                <div className='productstags'>
                    <h3>PRODUCT TAGS</h3>
                    <hr></hr>
                    <div className='buts'>
                        <button>Men</button>
                        <button>Women</button>
                        <button>Watches</button>
                        <button>Bags</button>
                        <button>Dress</button>
                        <button>Belt</button>
                        <button>Accessories</button>
                        <button>Shoes</button>
                    </div>
                </div>

                <div onClick={()=>smoothnavigate("/shop")}  className='bannerofshop'>

                </div>
                
            </div>
            <div className='verticalPart2'>

                <div className='part1ofverticalpart2'>
                    <div className='verpart1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grip-icon lucide-grip"><circle cx="12" cy="5" r="1"/><circle cx="19" cy="5" r="1"/><circle cx="5" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/><circle cx="12" cy="19" r="1"/><circle cx="19" cy="19" r="1"/><circle cx="5" cy="19" r="1"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grip-horizontal-icon lucide-grip-horizontal"><circle cx="12" cy="9" r="1"/><circle cx="19" cy="9" r="1"/><circle cx="5" cy="9" r="1"/><circle cx="12" cy="15" r="1"/><circle cx="19" cy="15" r="1"/><circle cx="5" cy="15" r="1"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rows3-icon lucide-rows-3"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M21 9H3"/><path d="M21 15H3"/></svg>
                    </div>
                    <div className='verpart2' >
                        <select>
                            <option>Sort by average rating</option>
                            <option>Sort by popularity</option>
                            <option>Sort by newness</option>
                            <option>Sort by price: low to high</option>
                            <option>Sort by price: high to low</option>
                            <option>Product named: Z</option>
                        </select>
                    </div>
                    <div className='verpart3'>Showing 1–9 of 21 results</div>
                </div>
                <div className='part2ofverticalpart2'>

                    <div className='shopiteam'>
                        <div className='shopiteampart1'>
                            <img src={Image1} alt='shop image1'></img>
                        </div>
                        <div className='shopiteampart2'>
                            <h3 className='bigh3'>Aliquam Consequat</h3>
                            <h6 className='smallh6'>Fruits</h6>
                            <h1 className='bigh1'>$26.00 <span>$362.00</span></h1>
                        </div>

                    </div>
                     <div className='shopiteam'>
                         <div className='shopiteampart1'>
                            <img src={Image2} alt='shop image1'></img>
                        </div>
                        <div className='shopiteampart2'>
                            <h3 className='bigh3'>Cas Meque Metus</h3>
                            <h6 className='smallh6'>Fruits</h6>
                            <h1 className='bigh1'>$32.00 <span>$342.00</span></h1>
                        </div>
                    </div>
                     <div className='shopiteam'>
                         <div className='shopiteampart1'>
                            <img src={Image3} alt='shop image1'></img>
                        </div>
                        <div className='shopiteampart2'>
                            <h3 className='bigh3'>Donec Ac Tempus</h3>
                            <h6 className='smallh6'>Fruits</h6>
                            <h1 className='bigh1'>$46.00 <span>$322.00</span></h1>
                        </div>
                    
                    </div>
                      <div className='shopiteam'>
                         <div className='shopiteampart1'>
                            <img src={Image4} alt='shop image1'></img>
                        </div>
                        <div className='shopiteampart2'>
                            <h3 className='bigh3'>Donec Non Est</h3>
                            <h6 className='smallh6'>Fruits</h6>
                            <h1 className='bigh1'>$28.00 <span>$382.00</span></h1>
                        </div>

                    </div>
                     <div className='shopiteam'>
                         <div className='shopiteampart1'>
                            <img src={Image5} alt='shop image1'></img>
                        </div>
                        <div className='shopiteampart2'>
                            <h3 className='bigh3'> Etiam Gravida</h3>
                            <h6 className='smallh6'>Fruits</h6>
                            <h1 className='bigh1'>$26.00 <span>$362.00</span></h1>
                        </div>
                    
                    </div>
                     <div className='shopiteam'>
                         <div className='shopiteampart1'>
                            <img src={Image6} alt='shop image1'></img>
                        </div>
                        <div className='shopiteampart2'>
                            <h3 className='bigh3'>Fusce Aliquam</h3>
                            <h6 className='smallh6'>Fruits</h6>
                            <h1 className='bigh1'>$36.00 <span>$332.00</span></h1>
                        </div>
                    
                    </div>
                      <div className='shopiteam'>
                         <div className='shopiteampart1'>
                            <img src={Image7} alt='shop image1'></img>
                        </div>
                        <div className='shopiteampart2'>
                            <h3 className='bigh3'>Letraset Sheets</h3>
                            <h6 className='smallh6'>Fruits</h6>
                            <h1 className='bigh1'>$56.00 <span>$286.00</span></h1>
                        </div>

                    </div>
                     <div className='shopiteam'>
                         <div className='shopiteampart1'>
                            <img src={Image8} alt='shop image1'></img>
                        </div>
                        <div className='shopiteampart2'>
                            <h3 className='bigh3'>Lorem Ipsum Lec</h3>
                            <h6 className='smallh6'>Fruits</h6>
                            <h1 className='bigh1'>$26.00 <span>$362.00</span></h1>
                        </div>
                    
                    </div>
                     <div className='shopiteam'>
                         <div className='shopiteampart1'>
                            <img src={Image9} alt='shop image1'></img>
                        </div>
                        <div className='shopiteampart2'>
                            <h3 className='bigh3'>Mauris Vel Tellus</h3>
                            <h6 className='smallh6'>Fruits</h6>
                            <h1 className='bigh1'>$65.00 <span>$295.00</span></h1>
                        </div>
                    
                    </div>
                     <div className='shopiteam'>
                         <div className='shopiteampart1'>
                            <img src={Image10} alt='shop image1'></img>
                        </div>
                        <div className='shopiteampart2'>
                            <h3 className='bigh3'>Nunc Neque Eros</h3>
                            <h6 className='smallh6'>Fruits</h6>
                            <h1 className='bigh1'>$26.00 <span>$362.00</span></h1>
                        </div>
                    
                    </div>
                     <div className='shopiteam'>
                         <div className='shopiteampart1'>
                            <img src={Image11} alt='shop image1'></img>
                        </div>
                        <div className='shopiteampart2'>
                            <h3 className='bigh3'>Proin Lectus Ipsum</h3>
                            <h6 className='smallh6'>Fruits</h6>
                            <h1 className='bigh1'>$44.00 <span>$332.00</span></h1>
                        </div>
                    
                    </div>
                     <div className='shopiteam'>
                         <div className='shopiteampart1'>
                            <img src={Image12} alt='shop image1'></img>
                        </div>
                        <div className='shopiteampart2'>
                            <h3 className='bigh3'>Quisque In Arcu</h3>
                            <h6 className='smallh6'>Fruits</h6>
                            <h1 className='bigh1'>$26.00 <span>$362.00</span></h1>
                        </div>
                    
                    </div>

                </div>
                <div className='part3ofverticalpart2'>
                        <button onClick={()=>smoothnavigate("/shop")} style={{backgroundColor:'green',color:'white'}}>1</button>
                        <button onClick={()=>smoothnavigate("/shop")}>2</button>
                        <button onClick={()=>smoothnavigate("/shop")}>3</button>
                        <button onClick={()=>smoothnavigate("/shop")}>next</button>
                        <button onClick={()=>smoothnavigate("/shop")}>{'>>'}</button>
                </div>

            </div>
            
        </div>
        
        <FooterTop></FooterTop>
        <MainFooter></MainFooter>
        </div>
    )
}
export default Shop;