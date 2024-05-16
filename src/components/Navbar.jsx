export default function Navbar() {
  return (
    <div>
      <div className="navbar-center lg:flex justify-evenly max-[1023px]:items-center flex ">
        <ul className="menu menu-horizontal px-1 gap-32 max-[1023px]:gap-0 ">
          <li>
            <a className="text-white">Parcs</a>
          </li>
          <li>
            <details>
              <summary className="text-white">Autre</summary>
              <ul className="p-2">
                <li>
                  <a className="text-white">Fleurs</a>
                </li>
                <li>
                  <a className="text-white">Plein Air</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a className="text-white">A propos</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
