import React, { useState } from "react";
import "../Style/SectionHome.css";
import PrestasiSlide from "./PrestasiSlide";


function SectionHome() {
  return (
    <div className="section-home">
      <div className="divangkasakan">
        <img className="imagesun" src="Images/Frame 2.png" />
      </div>
      <div className="AbroadDipi">
        <img src="Images/Abroad.png" />
      </div>
      <div className="divA-selayang">
        <h1>Selayang Pandang</h1>

        <div className="divB-selayang">
          <div className="divB-selayang-div">
            <h3 className="h3-selayang">Ormawa Eksekutif PKU IPB</h3>
            <p className="p-selayang">
              Ormawa Eksekutif PKU IPB merupakan organisasi kemahasiswaan di lingkup Pendidikan Kompetensi Umum yang dikhususkan untuk mahasiswa tingkat PKU IPB. Fungsinya melibatkan pemberian kesejahteraan penanganan segala problematika
              yang dialami mahasiswa PKU IPB.
            </p>
          </div>
          <div className="line"></div>
          <div className="divB-selayang-div">
            <h3 className="h3-selayang">Peran Ormawa Eksekutif PKU IPB</h3>
            <p className="p-selayang">
              Perannya sangat signifikan dalam kehidupan kampus mahasiswa PKU, dengan pergerakan, pengembangan, pelayanan, dan pengabdian. Dengan demikian, organisasi ini bukan hanya berfungsi sebagai penanganan masalah, tetapi juga sebagai
              penggerak pengembangan dan kesejahteraan mahasiswa PKU IPB melalui berbagai kegiatan dan prgrgam yang dijalankan.
            </p>
          </div>
        </div>
      </div>
      <div className="divVektor">
        <div>
          <img src="Images/Logo Digmapi.png" className="logoDigmapi" />
        </div>
        <div>
          <h3 className="h3-vektor">Kabinet Dirgantara Mahamimpi</h3>
          <p className="p-vektor">
            “Dirgantara Mahamimpi” memiliki makna bahwasanya Ormawa Eksekutif PKU IPB 2023/2024 diharapkan dapat menjadi dunia dan wahana inspiratif bagi KM PKU IPB dalam mewujudkan karya-karya luar biasa yang berawal dari sebuah mimpi.
          </p>
        </div>
        
      </div>
      <PrestasiSlide/>
  
    </div>
  );
}

export default SectionHome;
