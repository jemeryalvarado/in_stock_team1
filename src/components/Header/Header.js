import "./Header.scss";


function Header(){
    return(
        <header>
            <div className="nav__logo">Logo goes here</div>
            <div className="nav__buttons">
                <button>Warehouses</button>
                <button>Inventory</button>
            </div>
        </header>
    )
}


export default Header;