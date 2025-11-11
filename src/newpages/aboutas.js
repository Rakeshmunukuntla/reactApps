import HeaderBottom from "../header/headerBottom";
import HeaderMid from "../header/headerMid";
import HeaderTop from "../header/headerTop";
import "./aboutas.css";
import img1 from "../safiraImages/about1.webp";
import img2 from "../safiraImages/about-us-signature.webp";
import img3 from "../safiraImages/About_icon1.webp";
import img4 from "../safiraImages/About_icon2.webp";
import img5 from "../safiraImages/About_icon3.webp";

import img6 from "../safiraImages/about2.webp";
 

function AboutAs() {
  return (
    <div>
      <HeaderTop></HeaderTop>
      <HeaderMid></HeaderMid>
      <HeaderBottom></HeaderBottom>
      <div className="cartBanner">
        <h3 className="l1">About As</h3>
        <h6>
          <span style={{ cursor: "pointer" }}>Home </span> / About As
        </h6>
      </div>
      <div className="formidpart">
        <div className="forgapinmid"></div>
        <div className="forimage">
          <img src={img1} alt="about"></img>
          <h1>
            We are a digital agency focused on delivering content and utility
            user-experiences.
          </h1>
          <div className="formattersalign">
            <h2>
              Adipiscing lacus ut elementum, nec duis, tempor litora turpis
              dapibus. Imperdiet cursus odio tortor in elementum. Egestas
            </h2>
            <h2>
              nunc eleifend feugiat lectus laoreet, vel nunc taciti integer
              cras. Hac pede dis, praesent nibh ac dui mauris sit. Pellentesque
            </h2>
            <h2>
              mi, facilisi mauris, elit sociis leo sodales accumsan. Iaculis ac
              fringilla torquent lorem consectetuer, sociosqu phasellus
            </h2>
            <h2>risus urna aliquam, ornare.</h2>
          </div>
          <div className="forsign">
            <img src={img2} alt="sign"></img>
          </div>
        </div>
      </div>
      <div className="forbanner">
        <div className="bannerpart1">
          <img src={img3} alt="bomma1"></img>
          <h1>Creative Design</h1>
          <div className="formatterunderbomma">
            Erat metus sodales eget dolor consectetuer, porta ut purus at et
            alias, nulla ornare velit amet
          </div>
        </div>

        <div className="bannerpart1">
          <img src={img4} alt="bomma1"></img>
          <h1>100% Money Back Guarantee</h1>
          <div className="formatterunderbomma">
            Erat metus sodales eget dolor consectetuer, porta ut purus at et
            alias, nulla ornare velit amet
          </div>
        </div>

        <div className="bannerpart1">
          <img src={img5} alt="bomma1"></img>
          <h1>Online Support 24/7</h1>
          <div className="formatterunderbomma">
            Erat metus sodales eget dolor consectetuer, porta ut purus at et
            alias, nulla ornare velit amet
          </div>
        </div>
      </div>
      <div className="woh">
        <div className="wohinside">
          <div className="wohinsideparts">
            <img src={img6} alt="img6"></img>
            <h6>What do we do?</h6>
            <div className="wohinsidepartsmatter">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto
            </div>
          </div>
          <div className="wohinsideparts">
            <img src={img7} alt="img6"></img>
            <h6>Our Mission</h6>
            <div className="wohinsidepartsmatter">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto
            </div>
          </div>
          <div className="wohinsideparts">
            <img src={img8} alt="img6"></img>
            <h6>History Of Us</h6>
            <div className="wohinsidepartsmatter">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutAs;
