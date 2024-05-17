import { useParams } from "react-router-dom";
import data from "../../data.json";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";

export default function CardDetails() {
  const { id } = useParams();
  const parc = data.data.find((parc) => parc.id === parseInt(id));

  if (!parc) {
    return <div>Parc non trouvé</div>;
  }

  return (
    <>
      <div className="bg-gradient-to-b from-green-50 from-10% via-green-300 via-30% to green-400">
        <h1
          className="text-3xl pt-8
      pb-5 pl-20"
        >
          {parc.title}
        </h1>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 5000 }}
        >
          <SwiperSlide>
            {" "}
            <img src={parc.imgSrc1} className="w-full h-2/5 px-20 " />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={parc.imgSrc2} className="w-full h-2/5 px-20" />
          </SwiperSlide>
        </Swiper>
        <div className="pl-20 flex flex-col">
          <a>{parc.creationDate}</a>
          <span>Supérficie: {parc.areaKm}</span>
          <p>{parc.desc}</p>
        </div>
      </div>

      {/* <h1 className="text-3xl p-2">{parc.title}</h1>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={parc.imgSrc1} className="w-full " />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={parc.imgSrc2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div> */}
    </>
  );
}
