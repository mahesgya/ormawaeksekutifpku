import React from 'react'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Style/DetailProker.css";

function WelcomingParty() {
  return (
    <div className="Proker">
        <Navbar />
        <div className="detailProker">
          <img src="ImagesDetail/InternalDetail.png" alt="" className="detailImage" />
          <h1>Welcoming Party</h1>
          <div className="detailDiv">
            <h3>Deskripsi</h3>
            <p>
            Program ini akan dilaksanakan dua kali. Yang pertama akan dilaksanakan secara daring, dimana anggota akan saling berkenalan dan menjadi awal yang manis untuk mulai bekerja sama. Yang kedua akan dilaksanakan secara luring, yang mana akan ada pemaparan program kerja biro/departemen serta penyematan pin oleh BPH sebagai simbol Dirgantara Mahamimpi.
            </p>
          </div>
          <div className="detailDiv">
            <h3>Tujuan</h3>
            <p>
            Sebagai ajang untuk menyambut dan mengenal lebih dalam pengurus Dirgantara Mahamimpi.
            </p>
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
      <Footer/>
    </div>
  )
}

export default WelcomingParty
