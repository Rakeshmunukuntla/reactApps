import './shop.css';
import HeaderBottom from '../header/headerBottom';
import HeaderTop from '../header/headerTop';
import HeaderMid from '../header/headerMid';
import FooterTop from '../footer/footertop';
import MainFooter from '../footer/mainfooter';
function Shop()
{
    return(
        <div className='shop'>
        <HeaderTop></HeaderTop>
        <HeaderMid></HeaderMid>
        <HeaderBottom></HeaderBottom>
         <div className='shopbanner'>
            <h3 className='l1'>Shop</h3>
            <h6 >Home / Shop</h6>
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

                <div className='bannerofshop'>

                </div>
                
            </div>
            <div className='verticalPart2'>

            </div>
            
        </div>
        
        <FooterTop></FooterTop>
        <MainFooter></MainFooter>
        </div>
    )
}
export default Shop;