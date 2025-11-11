import "./mainfooter.css";
import pic1 from "../safiraImages/paypal1.jpg";
import pic2 from "../safiraImages/paypal2.jpg";
import pic3 from "../safiraImages/paypal3.jpg";
import pic4 from "../safiraImages/paypal4.jpg";

// import { useNavigate } from 'react-router-dom';
function MainFooter() {
  //  const navigate=useNavigate();
  function handleclick(path) {
    //    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div className="footerMain">
      <div className="footer1">
        <h3>
          Copyright © 2021 Safira . All Rights Reserved.Design by{" "}
          <span className="safiraontotop" onClick={() => handleclick("/")}>
            Safira
          </span>{" "}
        </h3>
      </div>
      <div className="footer2">
        <img
          src={pic1}
          onClick={() => handleclick("/")}
          alt="payment pic"
        ></img>
        <img
          src={pic2}
          onClick={() => handleclick("/")}
          alt="payment pic"
        ></img>
        <img
          src={pic3}
          onClick={() => handleclick("/")}
          alt="payment pic"
        ></img>
        <img
          src={pic4}
          onClick={() => handleclick("/")}
          alt="payment pic"
        ></img>
      </div>
    </div>
  );
}
export default MainFooter;
