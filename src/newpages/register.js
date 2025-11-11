import "./register.css";
import FooterTop from "../footer/footertop";
import MainFooter from "../footer/mainfooter";
import HeaderBottom from "../header/headerBottom";
import HeaderTop from "../header/headerTop";
import HeaderMid from "../header/headerMid";
import UpwardButton from "../footer/buttonupward";

function Register() {
  return (
    <div>
      <HeaderTop></HeaderTop>
      <HeaderMid></HeaderMid>
      <HeaderBottom></HeaderBottom>
      <div className="regAndLogBanner">
        <h3 className="l1">Login</h3>
        <h6>Home / Login</h6>
      </div>
      <div className="formlogreg">
        <div className="loginform">
          <h3 className="l2">LogIn</h3>
          <div className="logreg">
            <label>Username or email *</label>
            <input></input>
            <label>Password *</label>
            <input></input>
            <div className="forgot">
              <div className="forgot1">Lost your password?</div>
              <div className="forgot2">
                <input type="checkbox"></input>
              </div>
              <div className="forgot3">
                <h3>Remember me</h3>
              </div>
              <div className="forgot4">
                <button className="loginbutton">LogIn </button>
              </div>
            </div>
          </div>
        </div>
        <div className="loginform">
          <h3 className="l2">Register</h3>
          <div className="logreg">
            <label>Username or email *</label>
            <input></input>
            <label>Password *</label>
            <input></input>
            <div className="forgot">
              <div className="forgot4" id="forgot4">
                <button className="loginbutton">Register </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterTop></FooterTop>
      <MainFooter></MainFooter>
      <UpwardButton></UpwardButton>
    </div>
  );
}
export default Register;
