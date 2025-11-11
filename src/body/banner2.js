import { useNavigate } from "react-router-dom";
import "./banner2.css";

function BannerAllam() {
  const navigate = useNavigate();
  return (
    <div className="bannerAllam">
      <div className="matter">
        <h3 className="black">BLACK FRIDAYS!</h3>
        <h3 className="sales">SALE 50% OFF</h3>
        <h3 className="allveg">ALL VEGETABLES PRODUCTS</h3>
        <pre></pre>
        <button onClick={() => navigate("/shop")} className="discover">
          DISCOVER NOW
        </button>
      </div>
    </div>
  );
}
export default BannerAllam;
