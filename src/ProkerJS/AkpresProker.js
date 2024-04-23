import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import "../Style/ProkerBiro.css";

function AkpresProker() {
  return (
    <div className="Proker">
      <Navbar />
      <div id="ProkerBiro">
      <div className="div-proh2"><h2>DEPARTEMEN AKPRES</h2></div>
        <div className="BiroProker">
          <div className="prokerDone">
            <img src="ImagesProker/Info Akpres.png" className="fotoProker" />
            <Link to="/infoakpres">
              <button className="buttonProker">ON GOING</button>
            </Link>
          </div>
          <div className="prokerOnGoing">
            <img src="ImagesProker/Survey Prestasi.png" className="fotoProker" />
            <Link to="/surveyprestasi">
              <button className="buttonProker">ON GOING</button>
            </Link>
          </div>
          <div className="prokerOnGoing">
            <img src="ImagesProker/Ruang Belajar.png" className="fotoProker" />
            <Link to="/ruangbelajar">
              <button className="buttonProker">ON GOING</button>
            </Link>
          </div>
          <div className="prokerDone">
            <img src="ImagesProker/PCW.png" className="fotoProker" />
            <Link to="/pcw">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerComingSoon">
            <img src="ImagesProker/Festival.png" className="fotoProker" />
          </div>
          <div className="prokerComingSoon">
            <img src="ImagesProker/Akpres Menyapa.png" className="fotoProker" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AkpresProker;
