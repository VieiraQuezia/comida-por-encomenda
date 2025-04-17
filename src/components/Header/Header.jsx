import { Link } from "react-router-dom";

// Style
import "./Header.css";

// Imagens

function Header() {
   
  
    return (
        <>
            <header >
                

                <h1><Link className="poetsen-one-regular" to='/'>Pizzaria Manoel</Link></h1>
                
           
            </header>

          
            
           
        </>
    );
}

export default Header;