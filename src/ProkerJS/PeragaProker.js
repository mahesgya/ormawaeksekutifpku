import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import "../Style/ProkerBiro.css";

function PeragaProker() {
  return (
    <div className="Proker">
      <Navbar />
      <div id="ProkerBiro">
        <h2>DEPARTEMEN PERAGA</h2>
        <div className="BiroProker">
          <div className="prokerDone">
            <img src="ImagesProker/PGTO.png" className="fotoProker" />
            <Link to="/pgto">
              <button className="buttonProker">ON GOING</button>
            </Link>
          </div>

          <div className="prokerDone">
            <img src="ImagesProker/Gelora PKU.png" className="fotoProker" />
            <Link to="/gelorapku">
              <button className="buttonProker">READ MORE</button>
            </Link>
          </div>
          <div className="prokerComingSoon">
            <img src="ImagesProker/Sobat Gerak.png" className="fotoProker" />
          </div>
          <div className="prokerComingSoon">
            <img src="ImagesProker/Passion.png" className="fotoProker" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PeragaProker;
