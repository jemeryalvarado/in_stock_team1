import "./Header.scss";
import InstockLogo from "../../assets/logo/InStock-Logo.svg";
import { Link } from "react-router-dom";

function Header(){
    return(
        <header className="nav">
            <Link to="/">
                <div className="nav__logo">
                    <img
                    className="nav__logo--img"
                    src={InstockLogo}
                    alt="InstockLogo"
                    />
                </div>
            </Link>
            <div className="nav__buttonsContainer">
                <Link to="/warehouses/">
                <button className="nav__buttonsContainer--child">Warehouses</button>
                </Link> 
               <Link to="/inventories/">
               <button className="nav__buttonsContainer--child">Inventory</button>
               </Link>
            </div>
        </header>
    )
}


export default Header;