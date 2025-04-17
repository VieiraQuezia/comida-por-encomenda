import "./comidass.css";

function Comidass(props) {

return (
  <>
    <div className="blocao">
      <nav className="bloquinho">
        <h2>{props.nome}</h2>
        <h1>{props.desconto}</h1>
        <h2>{props.valor}</h2>
        <p>{props.texto}</p>
      </nav>
    </div>

    
  </>
);
}

export default Comidass;
