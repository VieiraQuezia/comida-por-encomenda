import { useState } from "react";
import "./Pedido.css";

function Pedido() {
  const [btnAtivo, setBtnAtivo] = useState(false);
  const [infoPedido, setInfoPedido] = useState({
    nome: "",
    tel: "",
    cidade: "",
    bairro: "",
    rua: "",
    numero: "",
    complemento: "",
  });
  const [pedidoFeito, setPedidoFeito] = useState(false);

  const addInfo = (e) => {
    const { name, value } = e.target;
    setInfoPedido(() => ({
      ...infoPedido,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Pedido feito por ${infoPedido.nome} - ${infoPedido.tel}!\nEndereço: ${infoPedido.rua}, ${infoPedido.numero} - ${infoPedido.bairro}, ${infoPedido.cidade}`
    );

    setPedidoFeito(true);

    setTimeout(() => {
      setBtnAtivo(false);
    }, 2000);
  };

  return (
    <div className="fazer-pedido">
      <button onClick={() => setBtnAtivo(!btnAtivo)}>
        {btnAtivo ? "Cancelar pedido" : "Fazer pedido"}
      </button>

      {btnAtivo && (
        <form onSubmit={handleSubmit}>
          <label>
            Digite seu nome:
            <input
              type="text"
              name="nome"
              placeholder="Digite seu nome completo"
              value={infoPedido.nome}
              onChange={addInfo}
              required
            />
          </label>

          <label>
            Telefone:
            <input
              type="tel"
              name="tel"
              min={11}
              max={11}
              placeholder="Digite o número do seu telefone"
              value={infoPedido.tel}
              onChange={addInfo}
              required
            />
          </label>

          <label>
            Cidade:
            <input
              type="text"
              name="cidade"
              placeholder="Digite sua cidade"
              value={infoPedido.cidade}
              onChange={addInfo}
              required
            />
          </label>

          <label>
            Bairro:
            <input
              type="text"
              name="bairro"
              placeholder="Digite seu bairro"
              value={infoPedido.bairro}
              onChange={addInfo}
              required
            />
          </label>

          <label>
            Rua:
            <input
              type="text"
              name="rua"
              placeholder="Digite sua rua"
              value={infoPedido.rua}
              onChange={addInfo}
              required
            />
          </label>

          <label>
            Nº da casa:
            <input
              type="number"
              name="numero"
              placeholder="Digite o número da sua casa"
              value={infoPedido.numero}
              onChange={addInfo}
              required
            />
          </label>

          <label>
            Complemento:
            <input
              type="text"
              name="complemento"
              placeholder="Complemento (Opcional)"
              value={infoPedido.complemento}
              onChange={addInfo}
            />
          </label>

          <button type="submit">Confirmar Pedido</button>
        </form>
      )}

      {pedidoFeito && (
        <p>Pedido feito, sua comida chegará em breve na sua casa!</p>
      )}
    </div>
  );
}

export default Pedido;
