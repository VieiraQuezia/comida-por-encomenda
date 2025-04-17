import Comidass from "../components/comidass";
import Header from "../components/header/Header"
import Pedido from "../components/Pedido/Pedido";
// import Footer from "../components/Footer/Footer"
import "./detalhe2.css"


function Detalhe2() {
    return (
      <>
      <Header/>
      <div className="detalhe2">
       
        <Comidass 
        nome="Pizza de Pepperoni" 
        desconto="30% off" 
        valor="R$200,00" 
        texto="A clássica que conquista corações!
        Nossa pizza de Pepperoni traz uma generosa camada de queijo derretido combinada com fatias crocantes e levemente picantes de pepperoni. Assada no ponto certo, ela é perfeita para quem ama sabor marcante e irresistível."/>
        <Pedido/>
        {/* <Footer/> */}
      </div>
      </>
    );
      
  }
  export default Detalhe2;