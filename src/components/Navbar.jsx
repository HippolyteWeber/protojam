export default function Navbar() {
  return (
    <div>
      <a className="btn btn-ghost text-xl">Code Nature</a>
      <div className="navbar-center hidden lg:flex justify-evenly">
        <ul className="menu menu-horizontal px-1 gap-48">
          <li>
            <a>Parcs</a>
          </li>
          <li>
            <details>
              <summary>Autre</summary>
              <ul className="p-2">
                <li>
                  <a>Fleurs</a>
                </li>
                <li>
                  <a>Plein Air</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>A propos</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
