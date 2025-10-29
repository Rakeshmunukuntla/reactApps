import './shop.css';
import HeaderBottom from '../header/headerBottom';
import HeaderTop from '../header/headerTop';
import HeaderMid from '../header/headerMid';
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
                    <h3>Filter by price</h3>
                    <hr></hr>
                    <input type="range" min="0" max="500"  />
                </div>
                
            </div>
            <div className='verticalPart2'>

            </div>
        </div>
        </div>
    )
}
export default Shop;