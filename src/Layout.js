import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <header>
    <h1>Űrlapok használata</h1>
    </header>
      <nav>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link active" to="/">Kezdőoldal</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/urlap">Urlap</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/adatok">Adatok</Link>
          </li>
        </ul>
      </nav>
      <article>
        {/* Ide kerül majd az útvonalak/linkek által meghatározott tartalom */}
        <Outlet />
      </article>
    </>
  );
};

export default Layout;
