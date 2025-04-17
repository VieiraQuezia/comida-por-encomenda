import "./Nav.css";

function Navbar() {
  return (
    <nav>
      <a href="/#Detalhe1" className="pizza-link pizza3">
        Pizza de Margarita
      </a>
      <a href="#Detalhe2" className="pizza-link pizza2">
        Pizza de Pepperoni
      </a>
      <a href="#Detalhe3" className="pizza-link pizza3">
        Pizza de Quatro Queijos
      </a>
    </nav>
  );
}

export default Navbar;