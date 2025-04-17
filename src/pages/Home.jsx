// Style
import "./home.css";
//.
import img from '/peperoni.png'

// Componentes
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Nav";
//.

function Home() {
  return (
    <>
      <Header />
      <Navbar />

      <main>
        <article className="historia">
          <img src={img} alt=""/>
          <div className="hist">
            <h2>Conheça a História da Pizzaria Manoel</h2>
            <p>
              Na Pizzaria Manoel, cada pizza é mais do que uma refeição; é uma
              experiência cuidadosamente elaborada para encantar seus sentidos.
              Desde o início, nosso compromisso sempre foi oferecer mais do que
              sabor: oferecemos momentos de prazer, tradição e inovação em cada
              fatia. <br /> Nascemos de uma paixão pela arte de fazer pizzas,
              onde cada ingrediente é escolhido com o mais profundo respeito à
              qualidade e ao sabor. Nossa missão é simples: proporcionar a você
              o melhor que a culinária pode oferecer, honrando as receitas
              tradicionais que nos trouxeram até aqui, enquanto exploramos novas
              combinações que despertam o paladar. <br/> Não perca tempo, faça já
              o seu pedido e aproveite uma pizza deliciosa!
            </p>
          </div>
        </article>
      </main>

      <article className="opiniao">
        <h2>"Melhor pizza do mundo, sem dúvidas."</h2>
        <p>Érick Jacquin</p>
      </article>
    </>
  );
}

export default Home;
