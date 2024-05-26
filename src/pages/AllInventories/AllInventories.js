import React, { useState, useEffect } from "react";
import "./AllInventories.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import fArrow from "../../assets/icons/chevron_right-24px.svg";
import Modal from "../../components/Modal/Modal";


const AllInventories = () => {
  const [inventories, setInventories] = useState([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [inventoryToDelete, setInventoryToDelete] = useState([]);

  const openModal = (inventoryToDelete) => {
      setModalIsOpen(true);
      setInventoryToDelete(inventoryToDelete);
  };

  const closeModal = () => {
      setModalIsOpen(false);
  };
  
  // elementType must be either < inventories > or < warehouses >
  const getElements = async (elementType) => {
      try {
          const res = await axios.get(`http://localhost:8080/${elementType}`);
          setInventories(res.data);
      } catch (error) {
          console.log(error);
      }
  }

  const deleteElement = async (elementType, id) => {
      try {
          await axios.delete(`http://localhost:8080/${elementType}/${id}`);
          getElements(elementType);
          closeModal();
      } catch (error) {
          console.log(error);
      } 
  }

  useEffect(() => {
    getElements('inventories');
  }, []);

  return (
    <div >
      <section className="tsb">
        <h1 className="tsb-title">Inventories</h1>
        <div className="tsb_sb">
        <input
          type="text"
          placeholder="Search..."
          className="tsb_sb-searchbox"
        />  
        <Link className="tsb-button-link">
        <button className="tsb-button"> + Add New Item </button>
        </Link>
        </div>
      </section>
      {inventories.map((inventory) => (
        <div key={inventory.id}>
                        <div className="break"></div>
                        <div className="master-container">
          <div className="container">
            <section className="container-section">
            <div className="container-sectioncc">
              <h3>INVENTORY ITEM</h3>
              <Link to={`/inventories/details/${inventory.id}`} className="name-chevron">
                <p className="container-text">{inventory.item_name}</p>
                <img src={fArrow} alt="arrow" />
              </Link>
              </div>
              <div className="containerw-sectionpe">
              <h3>CATEGORY</h3>
              <p className="container-text">{inventory.category} </p>
              </div>
            </section>
            <section  className="container-section">
            <div className="containerw-sectionp">
              <h3>STATUS</h3>
              <p className="container-text">{inventory.status} </p>
              </div>
              <div className="containerw-sectioncc">

              <h3>QTY</h3>
              <p className="container-text">{inventory.quantity} </p>
              </div>

              <h3>WAREHOUSE</h3>
              <p className="container-text">{inventory.warehouse_name} </p>
            </section>
          </div>
          <section className="container-icons">
            <div>
                <img src={deleteIcon} alt="delete" onClick={() => openModal(inventory)}/>
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
                  <div className="modal-grid__content-text">
                    Please confirm that you’d like to delete {inventoryToDelete.item_name} from the inventory list.
                    You won’t be able to undo this action.
                  </div>
                </Modal>
              </div>
            <Link >
              <img src={editIcon} alt="edit" />
            </Link>
          </section>
        </div>
       </div>
      ))}
    </div>
  );
};

export default AllInventories;