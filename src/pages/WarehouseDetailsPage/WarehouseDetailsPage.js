import "./WarehouseDetailsPage.scss"
import edit from "../../assets/icons/wht-edit_24dp.svg";
import back from "../../assets/icons/arrow_back-24px.svg";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import "../../components/Footer/Footer.scss";
import rightArrow from "../../assets/icons/chevron_right-24px.svg";
const baseUrl = process.env.REACT_APP_BASE_URL

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

function WarehouseDetailsPage () {
  const [state, setState] = useState([])
  const [inventories, setInventories] = useState([]);
  const { warehouseId } = useParams();

  useEffect(() => {
    const fetchWarehouseDetails = () => {
      axios.get(`${baseUrl}/warehouses/${warehouseId}`)
      .then(response => {
        setState(response.data)
      })
      .catch(error => {
        console.error(error)
        alert(`Warehouse ${warehouseId} does not exist`)
        window.location = '/warehouses'
      })
    }

    const fetchInventories =() =>{
      axios.get(`${baseUrl}/warehouses/${warehouseId}/inventories`)
      .then(response =>{
        console.log(response.data)
        setInventories(response.data)
      })
      .catch(error =>{
        console.error(error)
      })
    };

    fetchWarehouseDetails();
    fetchInventories();
  }, [warehouseId])

  return (
    <>
      <div className="warehouse">
          <div className="warehouse__title">
            <h1 className="warehouse__title--text">
              <Link to="/warehouses"><img className="warehouse__title--text-icon" src={back} alt="'BackBtn'" /></Link>
              {state.city}
            </h1>
            <Link className="warehouse__title--edit" to={`/warehouses/edit/${warehouseId}`}>
              <img className="warehouse__title--edit-icon" src={edit} alt="'EditBtn'" />
              <p className="warehouse__title--edit-text">Edit</p>
            </Link> 
          </div>
        <div className="divider"></div>
          <div className="warehouse__details">
            <div className="warehouse__details--address">
              <h4>WAREHOUSE ADDRESS:</h4>
              <p>{state.address}<br/>{state.city}, {state.country}</p>
            </div>
        <div className="divider2"></div>    
            <div className="warehouse__details--contact">
              <div className="warehouse__details--contact-name">
                <h4>CONTACT NAME:</h4>
                <p>
                  {state.contact_name}
                  <br/>
                  {state.contact_position}
                </p>
              </div>
              <div className="warehouse__details--contact-info">
                <h4>CONTACT INFORMATION:</h4>
                <p>
                  {state.contact_phone}
                  <br/>
                  {state.contact_email}
                </p>
              </div>
            </div> 
          </div>
        <div className="divider3"></div>
        <div className="inventories">
          {inventories.map((inventory)=>{
            return(
              <div key={inventory.id}>
              <div className="break"></div>
              <div className="inventories__container">
                <div>
                  <h3 className="inventories__container--headers">INVENTORY ITEM</h3>
                  <Link className="inventoryLink">
                    <p className="inventories__container--itemName">{inventory.item_name}</p>
                    <img className="inventories__container--rightArrow" src ={rightArrow} />
                  </Link>
                  <h3 className="inventories__container--headers">CATEGORY</h3>
                  <p className="inventories__container-text">{inventory.category} </p>
                </div>
                <div>
                  <h3 className="inventories__container--headers">STATUS</h3>
                  <InventoryStatus status={ inventory.status }/>
                  <h3 className="inventories__container--headers">QTY</h3>
                  <p className="inventories__container-text">{inventory.quantity} </p>
                </div>
              </div>
              <div className="inventories__container-icons">
                <Link >
                  <img src={deleteIcon} alt="delete" />
                </Link>
                <Link >
                  <img src={editIcon} alt="edit" />
                </Link>
              </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default WarehouseDetailsPage;