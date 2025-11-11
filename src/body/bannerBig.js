import { useNavigate } from "react-router-dom";
import "./bannerbig.css";
function BannerBig() {
  const navigate = useNavigate();
  return <div className="big" onClick={() => navigate("/shop")}></div>;
}
export default BannerBig;
