import './blog.css';
import HeaderTop from '../header/headerTop';
import HeaderMid from '../header/headerMid';
import HeaderBottom from '../header/headerBottom';
import { useNavigate } from 'react-router-dom';
import Blog1 from '../safiraImages/blog1.jpg';
import Blog2 from '../safiraImages/blog2.jpg';
import Blog3 from '../safiraImages/blog3.jpg';



function Blog()
{
    const navigate=useNavigate();
    function smoothnavigate(path)
    {
        navigate(path);
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
                    <h1>RECENT POSTS</h1>
                    <hr></hr>
                    <h1>CATEGORIES</h1>
                    <hr></hr>
                    <h1>TAG PRODUCTS</h1>
                    <hr></hr>
                 </div>
            </div>

        </div>
    )
}
export default Blog;