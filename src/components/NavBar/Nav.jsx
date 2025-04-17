import "./Nav.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/Detalhe_1" className="pizza-link pizza3">
        Pizza de Margarita
      </Link>
      <Link to="/Detalhe_2" className="pizza-link pizza3">
        Pizza de Pepperoni
      </Link>
      <Link to="/Detalhe_3" className="pizza-link pizza3">
        Pizza de Quatro Queijos
      </Link>
    </nav>
  );
}

export default Navbar;
