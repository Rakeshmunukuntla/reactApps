import { Link, useNavigate } from "react-router-dom";

function HeaderBottom() {
  const navigate=useNavigate();
    return(
        <div className="headerBottom">
            <div className="homeDropDown"><p onClick={()=>navigate("/")}>Home^</p>
                 <div className="dropdown-content-home">
                   <div className="content1">
                    <h1>ORGANIC</h1>
                    <p>Organic 01</p>
                    <p>Organic 02</p>
                    <p>Organic 03</p>
                    <p>Organic 04</p>
                    <p>Organic 05</p>
                   </div>

                    <div className="content2">
                    <h1>FASHION</h1>
                    <p>Fashion 01</p>
                    <p>Fashion 02</p>
                    <p>Fashion 03</p>
                    <p>Fashion 04</p>
                  
                   </div>

                    <div className="content3">
                    <h1>COSMETIC</h1>
                    <p>Cosmetic 01</p>
                    <p>Cosmetic 02</p>
                    <p>Cosmetic 03 </p>
                    <p>Cosmetic 04</p>
                    
                   </div>
                </div>
            </div>
            <div  className="shopDropDown"><p onClick={()=>navigate("/shop")}>Shop^</p>

                   <div className="dropdown-content-shop">
                   <div className="content1">
                    <h1>SHOP LAYOUTS</h1>
                    <p>Full Width</p>
                    <p>Full Width List</p>
                    <p>Right Sidebar</p>
                    <p>Right Sidebar List</p>
                    <p>List View</p>    
                   </div>

                    <div className="content2">
                    <h1>OTHER PAGES</h1>
                    <p onClick={()=>navigate("/cart")}>Cart</p>
                    <p>Wish List</p>
                    <p>Checkout</p>
                    <p>My Account</p>
                    <p>Error 404</p>
                   </div>

                    <div className="content3">
                    <h1>PRODUCT TYPES</h1>
                    <p>Product Details</p>
                    <p>Product Sidebar</p>
                    <p>Product Grouped</p>
                    <p>Product Variable</p>
                   </div>
                </div>
                
            </div>
            <div onClick={()=>navigate("/blog")} className="blogDropDown"><p>Blog^</p>

                 <div className="dropdown-content-blog">
                   <div className="contentBlog">
                    <p>Blog Details</p>  
                    <p>Blog Fullwidth</p> 
                    <p>Blog Sidebar</p>
                   </div>
                   </div>

            </div>
            <div className="pagesDropDown"><p>Pages^</p>
                
                 <div className="dropdown-content-page">
                   <div className="contentPage">
                    <p>About As</p>  
                    <p>Services</p> 
                    <p>Frequently Questions</p>
                    <p onClick={()=>navigate("/contactus")}>Contact</p>
                    <p onClick={()=>navigate("/login")}>Login</p>
                    <p onClick={()=>navigate("/error")}>Error 404</p>
                   </div>
                   </div>
        
            </div>
          <Link className='link' to='/contactus' > <p>Contact Us</p></Link>
            <p>Vegetables</p>
            <p>Fruits</p>
            <p>Salads</p>
        </div>
    )
    
}
export default HeaderBottom;