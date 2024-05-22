import { Link } from "react-router-dom";
import "./WarehousesPage.scss";

function WarehousesPage(){
    return(
        <div className="whitebox">
         Empty White Box

          <Link to="/addwarehouses">
            <button>Add Warehouse</button>
          </Link> 
        </div>
    )
}

export default WarehousesPage;