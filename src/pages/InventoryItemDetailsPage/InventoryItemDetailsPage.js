import "./InventoryItemDetailsPage.scss"
import edit from "../../assets/icons/wht-edit_24dp.svg";
import back from "../../assets/icons/arrow_back-24px.svg";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL

function InventoryItemDetailsPage() {
    const [state, setState] = useState([])
    const { inventoryId } = useParams();
  
    useEffect(() => {
      const fetchInventoryDetails = () => {
        axios.get(`${baseUrl}/inventories/${inventoryId}`)
        .then(response => {
          setState(response.data)
        })
        .catch(error => {
          console.error(error)
          alert(`Inventory ${inventoryId} does not exist`)
          window.location = '/inventories'
        })
      }
      fetchInventoryDetails();
    }, [inventoryId])

    
    function InventoryStatus({status}){
      if(status === "In Stock"){
        return (
            <p className="inventories__container--stockIn">{status} </p>
        )
      }
      if(status === "Out of Stock"){
        return (
            <p className="inventories__container--stockOut">{status} </p>
        )
      }
    };

    return(
        <>
          <div className="inventory">
            <div className="inventory__title">
              <h1 className="inventory__title--text">
                <Link to="/inventories"><img className="inventory__title--text-icon" src={back} alt="'BackBtn'" /></Link>
                {state.item_name}
              </h1>
              <Link className="inventory__title--edit" to="/inventories/edit/:inventoryId">
                <img className="inventory__title--edit-icon" src={edit} alt="'EditBtn'" />
                <p className="inventory__title--edit-text">Edit</p>
              </Link> 
            </div>
          <div className="divider1"></div>
            <div className="inventory__details">
              <div className="style-hotfix">
                <div className="inventory__details--description">
                  <h4>ITEM DESCRIPTION:</h4>
                  <p>{state.description}</p>
                </div>
                <div className="inventory__details--category">
                  <h4>CATEGORY:</h4>
                  <p>{state.category}</p>
                </div>
              </div>
          <div className="divider"></div>
            <div className="style-hotfix">
              <div className="inventory__details--stock">
                  <div className="inventory__details--stock-status">
                    <h4>Status:</h4>
                    <p>
                      <InventoryStatus status={state.status} />
                    </p>
                  </div>
                  <div className="inventory__details--stock-quantity">
                    <h4>QUANTITY:</h4>
                    <p>
                      {state.quantity}
                    </p>
                  </div>
                </div> 
                <div className="inventory__details--warehouse">
                  <h4>WAREHOUSE:</h4>
                  <p>{state.warehouse_name}</p>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default InventoryItemDetailsPage;