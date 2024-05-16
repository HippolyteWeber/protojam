export default function Navbar() {
  return (
    <div>
      <a className="btn btn-ghost text-xl">Code Nature</a>
      <div className="navbar-center  lg:flex justify-evenly">
        <ul className="menu menu-horizontal px-1 gap-48">
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
