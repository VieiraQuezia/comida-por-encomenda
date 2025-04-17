import Comidass from "../components/comidass";
import Header from "../components/Header/Header"
import Pedido from "../components/Pedido/Pedido";
// import Footer from "../components/Footer/Footer"
import "./detalhe3.css"

function Detalhe3() {
    return (
      <>
      <Header/>
      <div>
       
        <Comidass 
        nome="Pizza de Quatro Queijos" 
        desconto="30% off" 
        valor="R$200,00" 
        texto="Uma explosão de cremosidade e sabor!
        Para os amantes de queijo, essa é a escolha certa. A combinação perfeita de mussarela, parmesão, gorgonzola e catupiry cria uma pizza cremosa, intensa e incrivelmente saborosa. Um verdadeiro abraço em forma de fatia."/>
        <Pedido/>
        {/* <Footer/> */}
      </div>
      </>
    );
      
  }
  export default Detalhe3;