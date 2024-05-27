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
import Modal from "../../components/Modal/Modal";
import scroll from "../../assets/icons/sort-24px.svg";
const baseUrl = process.env.REACT_APP_BASE_URL

function InventoryStatus({status}){
  if(status === "In Stock"){
    return (
        <p className="inventories__container--stockIsIn">{status} </p>
    )
  }
  if(status === "Out of Stock"){
    return (
        <p className="inventories__container--stockIsOut">{status} </p>
    )
  }
};

function WarehouseDetailsPage () {
  const [state, setState] = useState([])
  const [inventories, setInventories] = useState([]);
  const { warehouseId } = useParams();
  const { inventoryId } = useParams();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [inventoryToDelete, setInventoryToDelete] = useState([]);

  const openModal = (inventoryToDelete) => {
      setModalIsOpen(true);
      setInventoryToDelete(inventoryToDelete);
  };

  const closeModal = () => {
      setModalIsOpen(false);
  };

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
      setInventories(response.data)
    })
    .catch(error =>{
      console.error(error)
    })
  };

  const deleteElement = async (elementType, id) => {
    try {
        await axios.delete(`http://localhost:8080/${elementType}/${id}`);
        fetchInventories()
        closeModal();
    } catch (error) {
        console.log(error);
    } 
  }

  useEffect(() => {
    fetchWarehouseDetails();
    fetchInventories();
  }, [warehouseId])

  return (
    <>
      <div className="warehouse">
          <div className="warehouse__title">
            <h1 className="warehouse__title--text">
              <Link to="/warehouses"><img className="warehouse__title--text-icon" src={back} alt="'BackBtn'" /></Link>
              {state.warehouse_name}
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
          <div className="labels">
          <div className="labels-title" id="labels-padding1">
            <h5>INVENTORY ITEM</h5>
            <img src={scroll} alt="" />
          </div>
          <div className="labels-title" id="labels-padding2">
            <h5>CATEGORY</h5>
            <img src={scroll} alt="" />
          </div>
          <div className="labels-title" id="labels-padding3">
            <h5>STATUS</h5>
            <img src={scroll} alt="" />
          </div>
          <div className="labels-title" id="labels-padding4">
            <h5>QUANTITY</h5>
            <img src={scroll} alt="" />
          </div>
          <div className="labels-title--actions" id="labels-padding6">
            <h5>ACTIONS</h5>
        </div>
        </div>
          {inventories.map((inventory)=>{
            return(
              <div key={inventory.id} className="inventories__masterContainer">
              <div className="break"></div>
              <div className="inventories__container">
                <div className="inventories__container--titleCategory">
                  <h3 className="inventories__container--headers">INVENTORY ITEM</h3>
                  <Link className="inventoryLink" to= {`/inventories/details/${inventory.id}`}>
                    <p className="inventories__container--itemName">{inventory.item_name}</p>
                    <img className="inventories__container--rightArrow" src ={rightArrow} />
                  </Link>
                  <h3 className="inventories__container--headers">CATEGORY</h3>
                  <p className="inventories__container-text">{inventory.category} </p>
                </div>
                <div className="inventories__container--statusQuantity">
                  <h3 className="inventories__container--headers">STATUS</h3>
                  <InventoryStatus status={ inventory.status }/>
                  <h3 className="inventories__container--headers">QTY</h3>
                  <p className="inventories__container-text">{inventory.quantity} </p>
                </div>
                </div>
          
              <div className="inventories__container-icons">
                <div>
                  <img className="inventories__container--delete" src={deleteIcon} alt="delete" onClick={() => openModal(inventory)}/>
                  <Modal
                    modalIsOpen = {modalIsOpen}
                    closeModal = {closeModal}
                    item_name = {inventoryToDelete.item_name}
                    id = {inventoryToDelete.id}
                    deleteElement = {deleteElement}
                    elementType = {'inventories'}
                  >
                    <div className="modal-grid__content-header">
                      Delete {inventoryToDelete.item_name} inventory item??
                    </div>
                    <div className="modal-grid__content--text">
                      Please confirm that you’d like to delete {inventoryToDelete.item_name} from the inventory list.
                      You won’t be able to undo this action.
                    </div>
                  </Modal>
                </div>
                <Link to= {`/inventories/edit/${inventory.id}`} >
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