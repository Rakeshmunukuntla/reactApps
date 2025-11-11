import { useState } from "react";
import HeaderBottom from "../header/headerBottom";
import HeaderMid from "../header/headerMid";
import HeaderTop from "../header/headerTop";
import Footertop from "../footer/footertop";
import FooterMain from "../footer/mainfooter";
import "./myaccount.css";
import { useNavigate } from "react-router-dom";

function MyAccount() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("Dashboard");

  function Dashboard() {
    return (
      <div className="dashboard">
        <h1 className="dash">Dashboard</h1>
        <div>
          <h3>
            From your account dashboard. you can easily check & view your{" "}
            <a href="/myaccount">recent orders</a>, manage your{" "}
            <a href="/myaccount">shipping and billing</a>
          </h3>
          <h3>
            <a href="/myaccount">addresses </a>and{" "}
            <a href="/myaccount">Edit your password and account details.</a>
          </h3>
        </div>
        <div className="forgap"></div>
      </div>
    );
  }
  function Orders() {
    return (
      <div className="orders">
        <h1>Orders</h1>
        <table>
          <tr className="firsttr">
            <th>Order</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
          <tr>
            <th>1</th>
            <th>May 10, 2018</th>
            <th>Completed</th>
            <th>$25.00 for 1 item</th>
            <th>
              <h6 onClick={() => navigate("/cart")}>View</h6>
            </th>
          </tr>
          <tr>
            <th>2</th>
            <th>May 10, 2018</th>
            <th>Processing</th>
            <th>$17.00 for 1 item</th>
            <th>
              <h6 onClick={() => navigate("/cart")}>View</h6>
            </th>
          </tr>
        </table>
        <div className="forgap"></div>
      </div>
    );
  }
  function Downloads() {
    return (
      <div className="orders">
        <h1>Downloads</h1>
        <table>
          <tr className="firsttr">
            <th className="thofmyac1">Product</th>
            <th className="thofmyac2">Downloads</th>
            <th className="thofmyac3">Expires</th>
            <th className="thofmyac4">Download</th>
          </tr>
          <tr>
            <th>Shopnovilla - Free Real Estate PSD Template</th>
            <th>May 10, 2018</th>
            <th>Expired</th>
            <th>
              <p onClick={() => navigate("/myaccount")}>
                Click Here To Download Your File
              </p>
            </th>
          </tr>
          <tr>
            <th>Shopnovilla - Free Real Estate PSD Template</th>
            <th>Sep 11, 2018</th>
            <th>Never</th>
            <th>
              <p onClick={() => navigate("/cart")}>
                {" "}
                Click Here To Download Your File
              </p>
            </th>
          </tr>
          <tr></tr>
        </table>
        <div className="forgap"></div>
      </div>
    );
  }
  function Addresses() {
    return (
      <div className="addresses">
        <div>
          <h6>
            The following addresses will be used on the checkout page by
            default.
          </h6>
        </div>
        <div>
          <h1>Billing address</h1>
        </div>
        <div>
          <h6>Edit</h6>
          <h3>Bobby Jackson</h3>
        </div>
        <div>
          <h6>House #15</h6>
          <h6>Road #1</h6>
          <h6>Block #C</h6>
          <h6>Banasree</h6>
          <h6>Dhaka</h6>
          <h6>1212</h6>
        </div>
        <div>
          <h6>Bangladesh</h6>
        </div>
      </div>
    );
  }
  function AcoountDetails() {
    return (
      <div className="accountdetails">
        <div>
          <h2>Account details</h2>
        </div>
        <div className="account1">
          <h6>Already have an account ? </h6>
          <p style={{ color: "green" }}> Log in instead!</p>{" "}
        </div>
        <div className="radios">
          <div className="radios1">
            <input type="radio" name="a"></input>
            <label>Mr.</label>
          </div>
          <div className="radios1">
            <input type="radio" name="a"></input>
            <label>Mrs.</label>
          </div>
        </div>
        <div className="forinputs">
          <div className="labelandinputs">
            <label>First Name</label>
            <input></input>
          </div>
          <div className="labelandinputs">
            <label>Last Name</label>
            <input></input>
          </div>
          <div className="labelandinputs">
            <label>Email</label>
            <input></input>
          </div>
          <div className="labelandinputs">
            <label>Password</label>
            <input></input>
          </div>
          <div className="labelandinputs">
            <label>Birthdate</label>
            <input type="date"></input>
          </div>
        </div>
        <div className="divforlastinaddress">
          <div>
            <label>(E.g.: 05/31/1970)</label>
            <div className="foralign">
              <input type="checkbox"></input>
              <label>Receive offers from our partners</label>
            </div>
          </div>
          <div>
            <label style={{ margin: "25px" }}>Sign up for our newsletter</label>
            <div className="foralign">
              <input type="checkbox"></input>
              <label>
                You may unsubscribe at any moment. For that purpose, please find
                our contact info in the legal notice.
              </label>
            </div>
          </div>
        </div>
        <h1 style={{ color: "forestgreen" }}>save</h1>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return Dashboard();
      case "Orders":
        return Orders();
      case "Downloads":
        return Downloads();
      case "Addresses":
        return <Addresses></Addresses>;
      case "Account Details":
        return <AcoountDetails></AcoountDetails>;
      case "Logout":
        return <p>You have logged out successfully.</p>;
      default:
        return <p>Select any option</p>;
    }
  };

  return (
    <div>
      <HeaderTop></HeaderTop>
      <HeaderMid></HeaderMid>
      <HeaderBottom></HeaderBottom>
      <div className="myaccountBanner">
        <h3 className="l1">My Account</h3>
        <h6>
          <span style={{ cursor: "pointer" }}>Home </span> / My Account
        </h6>
      </div>
      <div className="forgap"></div>
      <div className="foralignment">
        <div className="middivofacoount">
          <div className="middivofacoount1">
            {/* <button>Dashboard</button>
          <button>Orders</button>
          <button>Downloads</button>
          <button>Addresses</button>
          <button>Account Details</button>
          <button>Logout</button> */}
            {[
              "Dashboard",
              "Orders",
              "Downloads",
              "Addresses",
              "Account Details",
              "Logout",
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(item)}
                className={activeTab === item ? "activeBtn" : ""}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="middivofacoount2" id="infofromjs">
            {renderContent()}
          </div>
        </div>
      </div>
      <div className="forgap"></div>
      <Footertop></Footertop>
      <FooterMain></FooterMain>
    </div>
  );
}
export default MyAccount;
