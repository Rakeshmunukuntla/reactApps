import './blog.css';
import HeaderTop from '../header/headerTop';
import HeaderMid from '../header/headerMid';
import HeaderBottom from '../header/headerBottom';
import { useNavigate } from 'react-router-dom';
import Blog1 from '../safiraImages/blog1.jpg';
import Blog2 from '../safiraImages/blog2.jpg';
import Blog3 from '../safiraImages/blog3.jpg';
import rlogo from '../safiraImages/blogpageR.webp';
import blogsmall1 from '../safiraImages/blogs1small.webp';
import FooterTop from '../footer/footertop';
import FooterMain from '../footer/mainfooter';



function Blog()
{
    

    const navigate=useNavigate();
    function smoothnavigate(path)
    {
        navigate(path);
        window.scrollTo({top:0,behavior:'smooth'})
    }
    return(
        <div className='blog'>
            <HeaderTop></HeaderTop>
            <HeaderMid></HeaderMid>
            <HeaderBottom></HeaderBottom>
            <div className='blogbanner'>
                <h3 className='l1'>Blog</h3>
                <h6 ><span onClick={()=>smoothnavigate("/blog")} style={{cursor:'pointer'}}>Home</span> / Blog</h6>
            </div>
            <div className='blogspart'>
                 <div className='blogspart1'>
                    <div className='blogpost'>
                        <div className='imgpartblog'>
                            <img src={Blog1} alt='blog pic mama'></img>
                        </div>
                        <div className='blogmatter'>
                            <p>Lorem ipsum dolor sit amet,</p>
                            <p>elit. Impedit, aliquam animi,</p>
                            <p>saepe ex.</p>

                        </div>
                        <h6>23/06/2021 |<span className='spancolor'> eCommerce</span> </h6>
                    </div>

                    <div className='blogpost'>
                        <div className='imgpartblog'>
                            <img src={Blog2} alt='blog pic mama'></img>
                        </div>
                        <div className='blogmatter'>
                            <p>Dolor sit amet, elit. Illo iste</p>
                            <p>Sed animi quaerat nobis odit</p>
                            <p>Nulla.</p>

                        </div>
                        <h6>23/06/2021 | <span className='spancolor'> eCommerce </span> </h6>
                    </div>

                    <div className='blogpost'>
                        <div className='imgpartblog'>
                            <img src={Blog3} alt='blog pic mama'></img>
                        </div>
                        <div className='blogmatter'>
                            <p>Maxime laborum voluptas</p>
                            <p>Minus, est, unde eaque esse</p>
                            <p>Tenetur.</p>

                        </div>
                        <h6>23/06/2021 |<span className='spancolor'> eCommerce</span> </h6>
                    </div>

                    <div className='blogpost'>
                        <div className='imgpartblog'>
                            <img src={Blog2} alt='blog pic mama'></img>
                        </div>
                        <div className='blogmatter'>
                            <p>Dolor sit amet, elit. Illo iste</p>
                            <p>Sed animi quaerat nobis odit</p>
                            <p>Nulla.</p>

                        </div>
                        <h6>23/06/2021 | <span className='spancolor'> eCommerce </span> </h6>
                    </div>

                     <div className='blogpost'>
                        <div className='imgpartblog'>
                            <img src={Blog1} alt='blog pic mama'></img>
                        </div>
                        <div className='blogmatter'>
                            <p>Lorem ipsum dolor sit amet,</p>
                            <p>elit. Impedit, aliquam animi,</p>
                            <p>saepe ex.</p>

                        </div>
                        <h6>23/06/2021 |<span className='spancolor'> eCommerce</span> </h6>
                    </div>

                    <div className='blogpost'>
                        <div className='imgpartblog'>
                            <img src={Blog3} alt='blog pic mama'></img>
                        </div>
                        <div className='blogmatter'>
                            <p>Maxime laborum voluptas</p>
                            <p>Minus, est, unde eaque esse</p>
                            <p>Tenetur.</p>

                        </div>
                        <h6>23/06/2021 |<span className='spancolor'> eCommerce</span> </h6>
                    </div>

                      <div className='blogpost'>
                        <div className='imgpartblog'>
                            <img src={Blog2} alt='blog pic mama'></img>
                        </div>
                        <div className='blogmatter'>
                            <p>Dolor sit amet, elit. Illo iste</p>
                            <p>Sed animi quaerat nobis odit</p>
                            <p>Nulla.</p>

                        </div>
                        <h6>23/06/2021 | <span className='spancolor'> eCommerce </span> </h6>
                    </div>

                     <div className='blogpost'>
                        <div className='imgpartblog'>
                            <img src={Blog1} alt='blog pic mama'></img>
                        </div>
                        <div className='blogmatter'>
                            <p>Lorem ipsum dolor sit amet,</p>
                            <p>elit. Impedit, aliquam animi,</p>
                            <p>saepe ex.</p>

                        </div>
                        <h6>23/06/2021 |<span className='spancolor'> eCommerce</span> </h6>
                    </div>

                    <div className='blogpost'>
                        <div className='imgpartblog'>
                            <img src={Blog3} alt='blog pic mama'></img>
                        </div>
                        <div className='blogmatter'>
                            <p>Maxime laborum voluptas</p>
                            <p>Minus, est, unde eaque esse</p>
                            <p>Tenetur.</p>

                        </div>
                        <h6>23/06/2021 |<span className='spancolor'> eCommerce</span> </h6>
                    </div>


                 </div>
                <div className='blogspart2'>
                    <h1>SEARCH</h1>
                    <hr></hr>
                    <div className='search'>
                        <input placeholder='Search...'></input>
                        <button>SEARCH</button>
                    </div>
                    <h1>RECENT COMMENTS</h1>
                    <hr></hr>
                    <div className='recent'>
                        <div className='recentpart'>
                            <img src={rlogo} alt='r logo'></img>
                            <p>
                                   <span className='demo'>demo <span className='says'> says:</span></span>  Quisque semper nunc</p>
                        </div>
                         <div className='recentpart'>
                            <img src={rlogo} alt='r logo'></img>
                            <p>
                                   <span className='demo'>demo <span className='says'> says:</span></span>  Quisque semper nunc</p>
                        </div>
                         <div className='recentpart'>
                            <img src={rlogo} alt='r logo'></img>
                            <p>
                                   <span className='demo'>demo <span className='says'> says:</span></span>  Quisque semper nunc</p>
                        </div>
                    </div>
                    
                    <h1>RECENT POSTS</h1>
                    <hr></hr>
                    <div className='recentposts'>
                        <div className='recentpostpart'>
                            <img src={blogsmall1} alt='blog small pic'></img>
                            <div>
                                <p>Blog image post</p>
                                <h6>March 16, 2018</h6>
                            </div>
                        </div>
                         <div className='recentpostpart'>
                            <img src={blogsmall1} alt='blog small pic'></img>
                            <div>
                                <p>Post with Galleryt</p>
                                <h6>March 16, 2018</h6>
                            </div>
                        </div>
                         <div className='recentpostpart'>
                            <img src={blogsmall1} alt='blog small pic'></img>
                            <div>
                                <p>Post with Audio</p>
                                <h6>March 16, 2018</h6>
                            </div>
                        </div>
                    </div>
                    <h1>CATEGORIES</h1>
                    <hr></hr>
                    <div className='categories'>
                        <p>Audio</p>
                        <p>Company</p>
                        <p>Gallery</p>
                        <p>Image</p>
                        <p>Other</p>
                        <p>Travel</p>
                    </div>
                    <h1>TAG PRODUCTS</h1>
                    <hr></hr>
                    <div className='tagproducts'>
                        <button>asian</button>
                        <button>brown</button>
                        <button>euro</button>
                    </div>
                 </div>
                
            </div>
               <div className='buttonbar'>
                        <button onClick={()=>smoothnavigate("/blog")} style={{backgroundColor:'green',color:'white'}}>1</button>
                        <button onClick={()=>smoothnavigate("/blog")}>2</button>
                        <button onClick={()=>smoothnavigate("/blog")}>3</button>
                        <button onClick={()=>smoothnavigate("/blog")}>next</button>
                        <button onClick={()=>smoothnavigate("/blog")}>{'>>'}</button>
                </div>
                <div className='forhr'>

                </div>
                <div className='forhronfooter'></div>
                <FooterTop></FooterTop>
                <FooterMain></FooterMain>
        </div>
    )
}
export default Blog;