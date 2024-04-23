import { EffectCreative, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "../Style/ProkerSlide.css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function ProkerSlide() {
  return (
    <div className="container-Slide">
      <h1>What's GOing On?!</h1>
      <Swiper
        grabCursor={true}
        navigation={{ clickable: true }}
        modules={[EffectCreative, Pagination, Navigation]}
        className="mySwiper-Proker"
        spaceBetween={50}
        loop={true}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="Swiper-Proker">
          <Link to='/sahabatinternal'>
            <img src="ImagesProker/Sahabat Internal.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
          <Link to='/rapot'>
            <img src="ImagesProker/Rapot.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
          <Link to='/relasievaluasi'>
            <img src="ImagesProker/Relasi Evaluasi.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
          <Link to='/internalisasi'>
            <img src="ImagesProker/Internalisasi.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
          <Link to='/riscol'>
            <img src="ImagesProker/Riscol.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
          <Link to='/rintig'>
            <img src="ImagesProker/Rintig.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
          <Link to='/widyaris'>
            <img src="ImagesProker/Widyaris.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
          <Link to='/webris'>
            <img src="ImagesProker/Webris.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
          <Link to='/riszwei'>
            <img src="ImagesProker/Riszwei 1.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
          <Link to='/risbang100'>
            <img src="ImagesProker/Risbang 100.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
          <Link to='/digmacast'>
            <img src="ImagesProker/Digmacast.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
          <Link to='/digmanews'>
            <img src="ImagesProker/Digmanews.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
          <Link to='/ujarpku'>
            <img src="ImagesProker/Ujar PKU.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
          <Link to='/publikasi'>
            <img src="ImagesProker/Publikasi.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
          <Link to='/advoproject'>
            <img src="ImagesProker/Advo Project.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
          <Link to='/peduliukt'> 
            <img src="ImagesProker/Peduli UKT 2.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
          <Link to='/sapamaba'>
            <img src="ImagesProker/Sapa Maba.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
          <Link to='/infoakpres'>
            <img src="ImagesProker/Info Akpres.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
          <Link to='/surveyprestasi'>
            <img src="ImagesProker/Survey Prestasi.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
          <Link to='/ruangbelajar'>
            <img src="ImagesProker/Ruang Belajar.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
          <Link to='/kabarkastrat'>
            <img src="ImagesProker/Kabar Kastrat.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
          <Link to='/ngopi'>
            <img src="ImagesProker/Ngopi.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
          <Link to='/lamankastrat'>
            <img src="ImagesProker/Laman Kastrat.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
          <Link to='/pustakastrat'>
            <img src="ImagesProker/Pustakastrat.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
          <Link to='/sobatgerak'>
            <img src="ImagesProker/Sobat Gerak.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
          <Link to='/iconics'>
            <img src="ImagesProker/Iconics.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
          <Link to='/crayon'>
            <img src="ImagesProker/Crayon.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
          <Link to='/sehariberbatik'>
            <img src="ImagesProker/Sehari Berbatik.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
          <Link to='/indonesiafunfact'>
            <img src="ImagesProker/Indonesia Funfact.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
          <Link to='/projectx'>
            <img src="ImagesProker/Project X.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
          <Link to='/m3'>
            <img src="ImagesProker/M3.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
          <Link to='/rapatevaluasi'>
            <img src="ImagesProker/Rapat Evaluasi.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
          <Link to='/bisikberisi'>
            <img src="ImagesProker/Bisik Berisi.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
          <Link to='/dirgantarastore'>
            <img src="ImagesProker/Dirgantara Store.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
          <Link to='/preneurzone'>
            <img src="ImagesProker/Preneurzone.png" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
          <Link to='/preneurpedia'>
            <img src="ImagesProker/Preneurpedia.png" alt="" />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ProkerSlide;
