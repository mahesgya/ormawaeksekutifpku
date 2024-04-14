import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/ProkerBiro.css";
import { Link } from "react-router-dom";

function RisbangProker() {
  return (
    <div className="Proker">
      <Navbar />
      <div id="ProkerBiro">
        <div className="div-proh2"><h2>BIRO RISBANG</h2></div>
        
        
        <div className="BiroProker">
          <div className="prokerDone">
            <img src="ImagesProker/Riscol.png" className="fotoProker" />
            <Link to="/riscol">
              <button className="buttonProker">ON GOING</button>
            </Link>
          </div>
          <div className="prokerOnGoing">
            <img src="ImagesProker/Rintig.png" className="fotoProker" />
            <Link to="/rintig">
              <button className="buttonProker">ON GOING</button>
            </Link>
          </div>
          <div className="prokerOnGoing">
            <img src="ImagesProker/Widyaris.png" className="fotoProker" />
            <Link to="/widyaris">
              <button className="buttonProker">ON GOING</button>
            </Link>
          </div>
          <div className="prokerOnGoing">
            <img src="ImagesProker/Webris.png" className="fotoProker" />
            <Link to="/webris">
              <button className="buttonProker">ON GOING</button>
            </Link>
          </div>
          <div className="prokerDone">
            <img src="ImagesProker/Surat PKU.png" className="fotoProker" />
            <Link to="/suratpku">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerDone">
            <img src="ImagesProker/Surkesu UTS.png" className="fotoProker" />
            <Link to="/surkesuuts">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerComingSoon">
            <img src="ImagesProker/Surkesu UAS.png" className="fotoProker" />
          </div>
          <div className="prokerComingSoon">
            <img src="ImagesProker/Riszwei.png" className="fotoProker" />
          </div>
          <div className="prokerComingSoon">
            <img src="ImagesProker/Suryacitya.png" className="fotoProker" />
          </div>
          <div className="prokerComingSoon">
            <img src="ImagesProker/Morvei.png" className="fotoProker" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RisbangProker;
