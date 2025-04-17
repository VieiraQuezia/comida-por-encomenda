import "./Nav.css";

function Navbar() {
  return (
    <nav>
      <div>
        <a href="/#Detalhe1" className="pizza-link pizza1">
          Pizza de Margarita
        </a>
        <h2>Pizza de Margarita</h2>
        <p>Uma deliciosa pizza com molho de tomate, mussarela e manjericão fresco.</p>
      </div>
      <div>
        <a href="#Detalhe2" className="pizza-link pizza2">
          Pizza de Pepperoni
        </a>
        <h2>Pizza de Pepperoni</h2>
        <p>Clássica pizza com molho de tomate, mussarela e fatias de pepperoni.</p>
      </div>
      <div>
        <a href="#Detalhe3" className="pizza-link pizza3">
          Pizza de Quatro Queijos
        </a>
        <h2>Pizza de Quatro Queijos</h2>
        <p>Uma combinação irresistível de mussarela, parmesão, gorgonzola e provolone.</p>
      </div>
    </nav>
  );
}

export default Navbar;