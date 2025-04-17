import { useState } from "react";

function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");
  const [sexo, setSexo] = useState("");
  const [escolaridade, setEscolaridade] = useState("");
  const [telefone, setTelefone] = useState("");
  const [opcao, setOpcao] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setErro("Por favor, insira um e-mail válido.");
      return;
    }
    alert(
      `Formulário enviado!\nNome: ${nome}\nEmail: ${email}\nSexo: ${sexo}\nEscolaridade: ${escolaridade}`
    );
    setErro("");
  };

  return (
    <div>
      <h2>Formulário de Contato</h2>

      <form onSubmit={handleSubmit}>
        <h3> Digite seu nome: </h3>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome"
          required
        />
        <button type="button" onClick={() => setNome("")}>
          {" "}
          Limpar{" "}
        </button>
        <p>Seu nome: {nome}</p>

        <h3>Digite seu e-mail:</h3>
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {erro && <p style={{ color: "red" }}>{erro}</p>}

        <h3>Sexo:</h3>
        {["Feminino", "Masculino"].map((item) => (
          <label key={item}>
            <input
              type="radio"
              name="sexo"
              value={item}
              checked={sexo === item}
              onChange={(e) => setSexo(e.target.value)}
            />
            {item}
          </label>
        ))}

        <h3>Escolaridade:</h3>
        {["1º grau", "2º grau", "Graduação", "Pós-graduação"].map((item) => (
          <label key={item}>
            <input
              type="radio"
              name="escolaridade"
              value={item}
              checked={escolaridade === item}
              onChange={(e) => setEscolaridade(e.target.value)}
            />
            {item}
          </label>
        ))}

        <h3>Telefone:</h3>
        <input
          type="tel"
          placeholder="Digite seu telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
        />

        <h3> Opcão: </h3>
        <select
          value={opcao}
          onChange={(e) => setOpcao(e.target.value)}
          required
        >
          <option value="">Escolha uma opção: </option>
          <option value="Suporte">Opção 1</option>
          <option value="Financeiro">Opção 2</option>
          <option value="Outros">Opção 3</option>
        </select>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contato;
