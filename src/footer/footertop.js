import './footertop.css';
import logo from '../safiraImages/logo.png';
function FooterTop()
{
    return(
        <div className='footerTop'>
            <div className='footerpart1'>
                <div>
                    <img src={logo} alt='logo pic mama'></img>
                </div>
                
                <div>
                <pre>
                We are a team of designers and developers that 
                </pre>
                <pre>
                create high quality eCommerce, WordPress,
                </pre>
                <pre>
                Shopify .
                </pre>
                </div>
               
                <div>

                <pre><span className='boldercontent'>Address :</span>  4710-4890 Breckinridge USA</pre>
                <pre><span className='boldercontent'>Email :</span>  demo@hasthemes.com</pre>
                <pre><span className='boldercontent'>Call us :</span> (08) 23 456 789</pre>
                </div>
            </div>
            <div className='footerpart2'>
                <div><h3>Information</h3></div>
                <div>
                    <p>About Us</p>
                    <p>Delivery Information</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Contact Us</p>
                    <p>Site Map</p>
                </div>
            </div>
            <div className='footerpart3'>

                 <div><h3>Extras</h3></div>
                <div>
                    <p>Brands</p>
                    <p>Gift Certificate</p>
                    <p>Affiliate </p>
                    <p>Specials</p>
                    <p>Returns</p>
                    <p>Order History</p>
                </div>
               
            </div>
            <div className='footerpart4'>
                <div>
                    <h3>Sign Up Newsletter</h3>
                </div>
                <div>
                    <pre>
                        Get updates by subscribe our weekly
                    </pre>
                    <pre>
                        Newsletter
                    </pre>
                </div>
                <div >
                    <input placeholder='enter your mail'></input><button>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    )
}
export default FooterTop;