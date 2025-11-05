import './cart.css';
import HeaderBottom from '../header/headerBottom';
import HeaderMid from '../header/headerMid';
import HeaderTop from '../header/headerTop';
import img1 from '../safiraImages/product.jpg';
import img2 from '../safiraImages/product6.jpg';
import img3 from '../safiraImages/product2(1).jpg';
import Footertop from '../footer/footertop';
// import Footerbottom from '../footer/mainfooter';

import { useState } from 'react';
import MainFooter from '../footer/mainfooter';


function Cart()
{
    let [qnt1,setqnt1]=useState(1);
    const price1=65;
    const Total1=qnt1*price1;

    let [qnt2,setqnt2]=useState(1);
    const price2=90;
    const Total2=qnt2*price2;

    let [qnt3,setqnt3]=useState(1);
    const price3=80;
    const Total3=qnt3*price3;
   
    
    
    
    return(
        <div>
            <HeaderTop></HeaderTop>
            <HeaderMid></HeaderMid>
            <HeaderBottom></HeaderBottom>
             <div className='cartBanner'>
                <h3 className='l1'>Cart</h3>
                <h6 ><span style={{cursor:'pointer'}}>Home </span> / Shoping Cart</h6>
            </div>
            <div className='cartmatter'>
                <div className='cartmatterinside'>
                    <table >
                        <tr id='headings'>
                            <th className='th1'>Delete</th>
                            <th className='th2'>Image</th>
                            <th className='th3'>Product</th>
                            <th className='th4'>Price</th>
                            <th className='th5'>Quantity</th>
                            <th className='th6'>Total</th>
                        </tr>
                          <tr>
                            
                            <th className='thfortd'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></th>
                            <th className='thfortd'><img alt='img1' src={img1}></img></th>
                            <th className='thfortd'>Handbag fringilla</th>
                            <th className='thfortd' id='pr1'>${price1}.00</th>

                             { <th className='thfortd'>Quantity<input  type='number' min={1} placeholder='1' onChange={(e)=>setqnt1(e.target.value)}></input></th> } 

                            <th className='thfortd'>{Total1}</th> 
                        </tr>
                         
                          <tr>
                            
                            <th className='thfortd'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></th>
                            <th className='thfortd'><img alt='img1' src={img2}></img></th>
                            <th className='thfortd'>Handbags justo</th>
                            <th className='thfortd' id='pr1'>${price2}.00</th>

                             { <th className='thfortd'>Quantity<input  type='number' min={1} placeholder='1' onChange={(e)=>setqnt2(e.target.value)}></input></th> } 

                            <th className='thfortd'>{Total2}</th> 
                        </tr>

                         <tr>
                            
                            <th className='thfortd'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></th>
                            <th className='thfortd'><img alt='img1' src={img3}></img></th>
                            <th className='thfortd'>Handbag elit</th>
                            <th className='thfortd' id='pr1'>${price3}.00</th>

                             { <th className='thfortd'>Quantity<input  type='number' min={1} placeholder='1' onChange={(e)=>setqnt3(e.target.value)}></input></th> } 

                            <th className='thfortd'>{Total3}</th> 
                        </tr>

                        <tr className='lasttr'>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th><button>UPDATE CART</button></th>
                        </tr>
                       
                    </table>
                     <div className='cartmatterinside1'>
                        <div className='cartpart1'>
                            <div className='cartbar'>COUPAN</div>
                            <div className='cartbarmatter'>Enter your coupon code if you have one.</div>
                            <div className='cartbarbut'>
                                <input placeholder='coupan code'></input>
                                <button>Apply coupan</button>
                            </div>
                        </div>
                        <div className='cartpart2'>
                            <div className='cartbar'>CART TOTALS</div>
                            <div className='cartbarpart1'>
                                <h1>Subtotal</h1>
                                <h1>${Total1+Total2+Total3}</h1>
                            </div>
                            <div className='cartbarpart1'>
                                <div className='cartbarpart1of1'>
                                     <h1>Shipping</h1>
                                </div>
                               <div className='cartbarpart1of2'>
                                    <h1>Flat Rate:</h1>
                                    <h1> £{(Total1+Total2+Total3)*1.20}</h1>
                               </div>
                             
                            </div>
                              <div className='cartbarpartmatter'>
                                    <p>Calculate shipping</p>
                                </div>
                                <div className='empty'>

                                </div>
                                 <div className='cartbarpart1'>
                                <h1>Total</h1>
                                <h1>${Total1+Total2+Total3}</h1>
                            </div>
                            <div className='cartpart2button'>
                                <button>Proceed to Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>

               
            </div>
            <Footertop></Footertop>
            <MainFooter></MainFooter>
        </div>
    )
}
export default Cart;