import BGHEADER from "../assets/backgroundHeader.mp4";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="text-sky-100 text-center bg-green-800">
      <video
        src={BGHEADER}
        autoPlay
        muted
        loop
        className="w-full h-[25rem] object-cover object-center"
      ></video>
      <Link to="/" className="btn btn-ghost text-xl ">
        Code Nature
      </Link>
      <div className="navbar-center  lg:flex lg:justify-evenly ">
        <ul className="menu menu-horizontal px-1 gap-48 max-[776px]:gap-6">
          <li>
            <a className="bg-green-950 hover:bg-green-600 hover:scale-125 border-green-600 border-2 hover:border-green-950">
              Parcs
            </a>
          </li>
          <li>
            <details>
              <summary className="bg-green-950 hover:bg-green-600 hover:scale-125 border-green-600 border-2 hover:border-green-950">
                Autre
              </summary>
              <ul className="p-2 bg-white">
                <li className="pb-2">
                  <a className="bg-green-950 hover:bg-green-600">Fleurs</a>
                </li>
                <li>
                  <a className="bg-green-950 hover:bg-green-600">Plein Air</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link
              to="/about"
              className="bg-green-950 hover:bg-green-600 hover:scale-125 border-green-600 border-2 hover:border-green-950"
            >
              A propos
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
