import Comidass from "../components/comidass";
import Header from "../components/Header/Header"
// import Footer from "../components/Footer/Footer"
import "./detalhe3.css"

function Detalhe3() {
    return (
      <>
      <Header/>
      <div>
       
        <Comidass 
        nome="Pizza de Pepperoni" 
        desconto="30% off" 
        valor="R$200,00" 
        texto="A margherita ou marguerita é um tipo de pizza tradicional de Nápoles, na Itália."/>
        {/* <Footer/> */}
      </div>
      </>
    );
      
  }
  export default Detalhe3;