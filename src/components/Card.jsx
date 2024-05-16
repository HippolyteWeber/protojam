import { NavLink } from "react-router-dom";

export default function Card({ data }) {
  return (
    <div className="card w-96 shadow-xl bg-green-800 border-4 border-green-600 hover:border-green-300 text-sky-100">
      <figure className="px-10 pt-10">
        <img src={data.imgSrc1} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{data.title}</h2>
        <p>{data.desc}</p>
        <div className="card-actions">
          <NavLink
            to={`/details/${data.id}`}
            className="btn btn-primary text-sky-100 bg-green-950 border-green-600 hover:bg-green-300 hover:border-green-950 hover:scale-125"
          >
            Détails
          </NavLink>
        </div>
      </div>
    </div>
  );
}
