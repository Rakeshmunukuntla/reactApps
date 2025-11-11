import "./contactus.css";
import HeaderTop from "../header/headerTop";
import HeaderMid from "../header/headerMid";
import HeaderBottom from "../header/headerBottom";
import FooterTop from "../footer/footertop";
import MainFooter from "../footer/mainfooter";
import UpwardButton from "../footer/buttonupward";

function Contactus() {
  return (
    <div className="contactus">
      <HeaderTop></HeaderTop>
      <HeaderMid></HeaderMid>
      <HeaderBottom></HeaderBottom>
      <div className="ContactUs">
        <h3 className="l1">Contact Us</h3>
        <h6>Home / Contact Us</h6>
      </div>
      <div className="iframes">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.483095539417!2d78.3643784749864!3d17.43657698345904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb939f3603a84f%3A0x39ef47e23a528f53!2sCJSS%20Technologies%20Private%20limited!5e0!3m2!1sen!2sin!4v1761633604312!5m2!1sen!2sin"
          width="98%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="iframesofcjss"
        ></iframe>
      </div>
      <div className="divideAsTwoParts">
        <div className="part1ofcontactus">
          <h3>Contact Us</h3>
          <div>
            Claritas est etiam processus dynamicus, qui sequitur mutationem{" "}
            <br></br>
            consuetudium lectorum. Mirum est notare quam littera gothica, quam
            nunc<br></br>
            putamus parum claram anteposuerit litterarum formas human. qui
            sequitur <br></br>
            mutationem consuetudium lectorum. Mirum est notare quam
          </div>
          <hr></hr>
          <div className="address">
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
              class="lucide lucide-card-sim-icon lucide-card-sim"
            >
              <path d="M12 14v4" />
              <path d="M14.172 2a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 20 7.828V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
              <path d="M8 14h8" />
              <rect x="8" y="10" width="8" height="8" rx="1" />
            </svg>
            <h6> Address : No 40 Baria Sreet 133/2 NewYork City</h6>
          </div>
          <hr></hr>
          <div className="address">
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
              class="lucide lucide-mail-icon lucide-mail"
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
              <rect x="2" y="4" width="20" height="16" rx="2" />
            </svg>
            <h6> Infor@roadthemes.com</h6>
          </div>
          <hr></hr>
          <div className="address">
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
              class="lucide lucide-phone-icon lucide-phone"
            >
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
            </svg>
            <h6>0(1234) 567 890</h6>
          </div>
        </div>
        <div className="part2ofcontactus">
          <h3>Tell us your project</h3>
          <div className="labelsinputs">
            <label>Your Name (required) </label>
            <input placeholder="Name *"></input>
          </div>

          <div className="labelsinputs">
            <label>Your Email (required) </label>
            <input placeholder="Email *"></input>
          </div>

          <div className="labelsinputs">
            <label>Subject </label>
            <input placeholder="Subject *"></input>
          </div>

          <div className="labelsinputs">
            <label>Your Message </label>
            <input id="msg" placeholder="Message *"></input>
          </div>
          <div className="labelsinputs">
            <button>Send</button>
          </div>
        </div>
      </div>
      <hr className="hronfootertop"></hr>
      <FooterTop></FooterTop>
      <MainFooter></MainFooter>
      <UpwardButton></UpwardButton>
    </div>
  );
}
export default Contactus;
