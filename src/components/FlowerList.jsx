import Flower from "./Flower";
import dataf from "../../dataf.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function FlowerList() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap justify-center mt-[150px] gap-10">
        {dataf.flower.map((d) => (
          <Flower key={d.id} dataf={d} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
