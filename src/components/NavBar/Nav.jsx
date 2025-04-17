import "./Nav.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="pizza-item">
        <Link to="/Detalhe_1" className="pizza-link pizza1">
          Pizza de Margarita
        </Link>
        <h3>Pizza Margarita</h3>
        <p>Uma deliciosa pizza com molho de tomate, queijo e manjericão fresco.</p>
      </div>
      <div className="pizza-item">
        <Link to="/Detalhe_2" className="pizza-link pizza2">
          Pizza de Pepperoni
        </Link>
        <h3>Pizza Pepperoni</h3>
        <p>Clássica pizza com fatias de pepperoni e queijo derretido.</p>
      </div>
      <div className="pizza-item">
        <Link to="/Detalhe_3" className="pizza-link pizza3">
          Pizza de Quatro Queijos
        </Link>
        <h3>Pizza Quatro Queijos</h3>
        <p>Combinação perfeita de quatro queijos: mussarela, parmesão, gorgonzola e provolone.</p>
      </div>
    </nav>
  );
}

export default Navbar;
