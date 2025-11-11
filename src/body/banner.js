import "./banner.css";
import img1 from "../safiraImages/banner5.jpg";
import img2 from "../safiraImages/banner6.jpg";
import img3 from "../safiraImages/banner7.jpg";
import img4 from "../safiraImages/banner8.jpg";
import { useNavigate } from "react-router-dom";
function Banner() {
  const navigate = useNavigate();
  return (
    <div className="banner1">
      <div className="part1">
        <img
          onClick={() => navigate("/shop")}
          src={img1}
          alt="banner5 images"
        ></img>
      </div>
      <div className="part2">
        <img
          onClick={() => navigate("/shop")}
          className="img2"
          src={img2}
          alt="banner6 images"
        ></img>
      </div>
      <div className="part3">
        <div className="part31">
          <img
            onClick={() => navigate("/shop")}
            src={img3}
            alt="banner7 images"
          ></img>
        </div>
        <div className="part32">
          <img
            onClick={() => navigate("/shop")}
            src={img4}
            alt="banner8 images"
          ></img>
        </div>
      </div>
    </div>
  );
}
export default Banner;
