import Comidass from "../components/comidass";
import Header from "../components/header/Header"
import Pedido from "../components/Pedido/Pedido"
// import Footer from "../components/Footer/Footer"
import "./detalhe1.css"

function Detalhe1() {
  return (
    <>

    <div className="detalhe1">
    <Header/>

      <Comidass 
      nome="Pizza de Margherita" 
      desconto="30% off" 
      valor="R$200,00" 
      texto="Simplicidade que surpreende.
      A Margherita é a rainha da tradição italiana. Com molho de tomate artesanal, mussarela fresca e folhas de manjericão, essa pizza é leve, aromática e deliciosa. Um toque de azeite completa a experiência clássica e sofisticada."/>
      <Pedido/>
      {/* <Footer/> */}
    </div>
    </>
  );
    
}
export default Detalhe1;