import { Link } from "react-router-dom";

// Style
import "./Header.css";

// Imagens

function Header() {
   
  
    return (
        <>
            <header className="headerBox">
                <h1><Link to='/'>Pizzaria Manoel</Link></h1>

               
            </header>
            
           
        </>
    );
}

export default Header;