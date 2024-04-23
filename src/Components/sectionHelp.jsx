import React, { useState } from "react";
import "../Style/DigmapiHelp.css";

function SectionHelp() {
  return (
    <div className="digmapiHelp">
      <img src="/Images/DigmapiHelp.png" className="digmapiFoto" />
      <div className="divHelp1">
        <div className="divDipi">
          <h1>DIGMAPI HELP</h1>
          <p>
            Menu DIGMAPI HELP merupakan program kerja gabungan antara Biro Riset Pengembangan dengan Departemen Advokasi Kesejahteraan Mahasiswa Ormawa Eksekutif PKU IPB sebagai tempat menampung berbagai keluhan mahasiswa PKU IPB. Jadi buat
            kalian yang memiliki keluhan baik di bidang akademik dan non-akademik, pelayanan, sarana dan prasarana maupun finansial bisa menyampaikan keluhan kalian di laman ini!
          </p>
          <a><button className="button1">About Us</button></a>
        </div>
        <img src="/Images/DipiPencarian.png" />
      </div>
      <div className="divHelp2">
        <h1>PORTAL SIGAP</h1>
        <p>
          SIGAP Merupakan salah satu Program Kerja Ormawa Legislatif PKU IPB periode 2023/2024 yang berfungsi sebagai sarana menyalurkan aspirasi, serta wadah kritik dan saran yang akan dipergunakan demi kesejahteraan mahasiswa PKU IPB
          University
        </p>
        <a href="https://bit.ly/OrmawaLegislatifSIGAP"><button className="button1">About Us</button></a>
      </div>
    </div>
  );
}

export default SectionHelp;
