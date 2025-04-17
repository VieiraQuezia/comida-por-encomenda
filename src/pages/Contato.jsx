import { useState } from "react";

function Contato() {
  const [nome, setNome] = useState(localStorage.getItem("nome") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [erro, setErro] = useState("");
  const [sexo, setSexo] = useState(localStorage.getItem("sexo") || "");
  const [escolaridade, setEscolaridade] = useState(
    localStorage.getItem("escolaridade") || ""
  );
  const [telefone, setTelefone] = useState(
    localStorage.getItem("telefone") || ""
  );
  const [opcao, setOpcao] = useState(localStorage.getItem("opcao") || "");

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
    localStorage.setItem("nome", nome);

    localStorage.setItem("email", email);

    localStorage.setItem("sexo", sexo);

    localStorage.setItem("escolaridade", escolaridade);

    localStorage.setItem("telefone", telefone);

    localStorage.setItem("opcao", opcao);
  };

  return (
    <div>
      <h2>Formulário de contato</h2>

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
          Limpar
        </button>
        

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

        <h3>Opção:</h3>
        <select
          value={opcao}
          onChange={(e) => setOpcao(e.target.value)}
          required
        >
          <option value="">Escolha uma opção: </option>
          <option value="Opcao 1">Pepperoni</option>
          <option value="Opcao 2">Quatro queijos</option>
          <option value="Opcao 3">Margherita</option>
        </select>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contato;
