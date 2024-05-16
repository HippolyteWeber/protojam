import { NavLink } from "react-router-dom"

export default function Card ({data}) {
    return (
       
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={data.imgSrc1} alt={data.title} className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{data.title}</h2>
    <p>{data.desc}</p>
    <div className="card-actions">
      
      <NavLink to={`/details/${data.id}`} className="btn btn-primary">Détails</NavLink>
    </div>
  </div>
</div>
        
    )
}