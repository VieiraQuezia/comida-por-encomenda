import "./Nav.css";

function Navbar() {
  return (
    <nav>
      <div className="pizza-item">
        <a href="/Detalhe 1" className="pizza-link pizza1">
          Pizza de Margarita
        </a>
        <h3>Pizza Margarita</h3>
        <p>Uma deliciosa pizza com molho de tomate, queijo e manjericão fresco.</p>
      </div>
      <div className="pizza-item">
        <a href="/Detalhe 2" className="pizza-link pizza2">
          Pizza de Pepperoni
        </a>
        <h3>Pizza Pepperoni</h3>
        <p>Clássica pizza com fatias de pepperoni e queijo derretido.</p>
      </div>
      <div className="pizza-item">
        <a href="/Detalhe 3" className="pizza-link pizza3">
          Pizza de Quatro Queijos
        </a>
        <h3>Pizza Quatro Queijos</h3>
        <p>Combinação perfeita de quatro queijos: mussarela, parmesão, gorgonzola e provolone.</p>
      </div>
    </nav>
  );
}

export default Navbar;
