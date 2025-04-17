import { useState } from "react";
import "./contato.css"; // Importe o CSS para estilização
import Header from "../components/header/Header";

function Contato() {
  const [nome, setNome] = useState(() => localStorage.getItem("nome") || "");
  const [email, setEmail] = useState(() => localStorage.getItem("email") || "");
  const [erro, setErro] = useState("");
  const [sexo, setSexo] = useState(() => localStorage.getItem("sexo") || "");
  const [escolaridade, setEscolaridade] = useState(() => localStorage.getItem("escolaridade") || "");
  const [telefone, setTelefone] = useState(() => localStorage.getItem("telefone") || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setErro("Por favor, insira um e-mail válido.");
      return;
    }

    // Salva os dados no localStorage
    const dados = { nome, email, sexo, escolaridade, telefone };
    Object.keys(dados).forEach(key => localStorage.setItem(key, dados[key]));

    alert("Formulário enviado!");

    // Limpa todos os campos do formulário
    setNome("");
    setEmail("");
    setSexo("");
    setEscolaridade("");
    setTelefone("");
    setErro(""); // Limpa a mensagem de erro
  };

  return (
    <div>
      <Header />
      <h2>Formulário de Contato</h2>

      <form onSubmit={handleSubmit}>
        <h3>Digite seu nome:</h3>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome"
          required
        />

        <h3>Digite seu e-mail:</h3>
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {erro && <p className="error">{erro}</p>}

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

        <button className="btn" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Contato;