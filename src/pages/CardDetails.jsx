import { useParams } from "react-router-dom";
import data from "../../data.json";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CardDetails() {
  const { id } = useParams();
  const parc = data.data.find((parc) => parc.id === parseInt(id));

  if (!parc) {
    return <div>Parc non trouvé</div>;
  }

  return (
    <>
      <Header />
      <Navbar />
      <h1>{parc.title}</h1>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={parc.imgSrc1} className="w-full" />
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
      </div>

      <Footer />
    </>
  );
}
