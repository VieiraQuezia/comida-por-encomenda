import { Link } from "react-router-dom";

// Style
import "./Header.css";

// Imagens
import Papa from "/logo-site.png";

function Header() {
  return (
    <>
      <header>
        <Link to="/">
          <img src={Papa} alt="" />
        </Link>
        <h1>
          <Link className="poetsen-one-regular" to="/">
            Pizzaria Manoel
          </Link>
        </h1>
      </header>
    </>
  );
}

export default Header;
