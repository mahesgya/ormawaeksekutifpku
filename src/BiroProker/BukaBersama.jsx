import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function BukaBersama() {
  return (
    <div className="Proker">
      <Navbar />
      <div className="detailProker">
        <img src="ImagesDetail/InternalDetail.png" alt="" className="detailImage" />
        <h1>Rapat Kabinet 1 X Buka Bersama</h1>
        <div className="detailDiv">
          <h3>Deskripsi</h3>
          <p>
            Program yang bertujuan untuk membahas progres program kerja setiap biro/departemen serta evaluasi dari program kerja yang telah dijalankan. Karena bertepatan dengan bulan puasa maka diadakam juga Buka Bersama Digmapi untuk
            mempererat harmonisasi dan kekeluargaan juga toleransi antar anggota.
          </p>
        </div>
        <div className="detailDiv">
          <h3>Tujuan</h3>
          <p>Menguatkan harmonisasi dan rasa kebersamaan antar pengurus Ormawa Eksekutif PKU IPB, Menjaga kekuatan komitmen pengurus kepada Ormawa Eksekutif PKU IPB.</p>
        </div>
        <div className="detailDiv">
          <h3>Timeline</h3>
        </div>
        <div className="timeline">
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Humas 101</h2>
            <p className="timeline__paragraph"></p>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">2 Maret 2024</div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date timeline__date--right">25-29 Februari 2024</div>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title"></h2>
            <p className="timeline__paragraph">Open Registration</p>
          </div>
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Humas 101</h2>
            <p className="timeline__paragraph"></p>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">2 Maret 2024</div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date timeline__date--right">2-4 Maret 2024</div>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component timeline__component--bg">
            <h2 className="timeline__title">Perlombaan</h2>
            <p className="timeline__paragraph"></p>
          </div>
          <div className="timeline__component timeline__component--bottom timeline__component--bg">
            <h2 className="timeline__title">Pengumpulan</h2>
            <p className="timeline__paragraph"></p>
            <p className="timeline__paragraph"></p>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
            <div classn="timeline__point timeline__point--bottom"></div>
          </div>
          <div class="timeline__component timeline__component--bottom">
            <div class="timeline__date">5 Maret 2024</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BukaBersama;
