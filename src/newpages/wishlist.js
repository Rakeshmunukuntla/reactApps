import "./wishlist.css";
import HeaderBottom from "../header/headerBottom";
import HeaderMid from "../header/headerMid";
import HeaderTop from "../header/headerTop";
import img1 from "../safiraImages/product.jpg";
import img2 from "../safiraImages/product6.jpg";
import img3 from "../safiraImages/product2(1).jpg";
import image1 from "../header/google-plus-svgrepo-com.svg";
import Footertop from "../footer/footertop";
import Mainfooter from "../footer/mainfooter";

function WishList() {
  return (
    <div>
      <HeaderTop></HeaderTop>
      <HeaderMid></HeaderMid>
      <HeaderBottom></HeaderBottom>
      <div className="wishlistBanner">
        <h3 className="l1">Wishlist</h3>
        <h6>
          <span style={{ cursor: "pointer" }}>Home </span> / Wishlist
        </h6>
      </div>

      <div className="wishmatter">
        <div className="wishmatterinside">
          <table>
            <tr id="headings">
              <th className="th1">Delete</th>
              <th className="th2">Image</th>
              <th className="th3">Product</th>
              <th className="th4">Price</th>
              <th className="th5">Stock Status</th>
              <th className="th6">Add To Cart</th>
            </tr>
            <tr>
              <th className="thfortd">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-trash2-icon lucide-trash-2"
                >
                  <path d="M10 11v6" />
                  <path d="M14 11v6" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                  <path d="M3 6h18" />
                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
              </th>
              <th className="thfortd">
                <img alt="img1" src={img1}></img>
              </th>
              <th className="thfortd">Handbag fringilla</th>
              <th className="thfortd" id="pr1">
                $65.00
              </th>

              {<th className="thfortd">In Stock</th>}

              <th className="thfortd">
                <button className="addtocart">Add to cart</button>
              </th>
            </tr>
            <tr>
              <th className="thfortd">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-trash2-icon lucide-trash-2"
                >
                  <path d="M10 11v6" />
                  <path d="M14 11v6" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                  <path d="M3 6h18" />
                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
              </th>
              <th className="thfortd">
                <img alt="img1" src={img2}></img>
              </th>
              <th className="thfortd">Handbags justo</th>
              <th className="thfortd" id="pr1">
                $90.00
              </th>

              {<th className="thfortd">In Stock</th>}

              <th className="thfortd">
                <button className="addtocart">Add to cart</button>
              </th>
            </tr>
            <tr>
              <th className="thfortd">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-trash2-icon lucide-trash-2"
                >
                  <path d="M10 11v6" />
                  <path d="M14 11v6" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                  <path d="M3 6h18" />
                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
              </th>
              <th className="thfortd">
                <img alt="img1" src={img3}></img>
              </th>
              <th className="thfortd">Handbag elit</th>
              <th className="thfortd" id="pr1">
                $80.00
              </th>

              {<th className="thfortd">In Stock</th>}

              <th className="thfortd">
                <button className="addtocart">Add to cart</button>
              </th>
            </tr>
          </table>
          <div className="shareon">
            <h4>Share on:</h4>
            <div className="third">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-twitter-icon lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <img src={image1} width="15" height="15" alt="g+"></img>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-youtube-icon lucide-youtube"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <path d="m10 15 5-3-5-3z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-facebook-icon lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram-icon lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Footertop></Footertop>
      <Mainfooter></Mainfooter>
    </div>
  );
}
export default WishList;
