import React, {useState, useEffect} from "react";
import "./AllWarehouses.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import fArrow from "../../assets/icons/chevron_right-24px.svg";
import Modal from "../../components/Modal/Modal";

const AllWarehouses = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [warehouses, setWarehouses] = useState([]);
  const [error, setError] = useState();
  const [warehouseToDelete, setWarehouseToDelete] = useState([]);

  const openModal = (warehouseToDelete) => {
    setModalIsOpen(true);
    setWarehouseToDelete(warehouseToDelete);
  };

  const closeModal = () => {
      setModalIsOpen(false);
  };

  // elementType must be either < inventories > or < warehouses > respectively
  const getElements = async (elementType) => {
      try {
          const res = await axios.get(`http://localhost:8080/${elementType}`);
          setWarehouses(res.data);
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
    getElements('warehouses')
  }, []);

  return (
    <div className="box" >
    <section className="tsbw">
      <h1 className="tsbw-title">Warehouses</h1>
      <div className="tsbw_sb">
        <input
          type="text"
          placeholder="Search"
          className="tsbw_sb-searchbox"
        >
        </input>
        <Link to="/addwarehouses" className="tsbw-button-link">
          <button className="tsbw-button"> + Add New Warehouse  </button>
        </Link>
      </div>
    </section>
      {warehouses.map((warehouse) => (
        <div  key={warehouse.id} >
        <div className="break"></div>
        <div className="master-containerw">
          <div className="containerw">
            <section className="containerw-section" >
              <div className="containerw-sectioncc">
              <h3>WAREHOUSE</h3>
              <Link to={`/warehouses/details/${warehouse.id}`} className="name-chevron">
                <p className="containerw-text">{warehouse.warehouse_name}</p>
                <img src={fArrow} alt="arrow" />
              </Link>
              </div>
              <div className="containerw-sectionpe">
              <h3>ADDRESS</h3>
              <p className="containerw-text">{warehouse.address} {warehouse.city}, USA</p>
              </div>
            </section>
            <section className="containerw-section">
              <div className="containerw-sectionp">
              <h3>CONTACT NAME</h3>
              <p className="containerw-text">{warehouse.contact_name} </p> 
              </div>
              <div className="containerw-sectioncc">
              <h3>CONTACT INFORMATION</h3>
              <p className="containerw-text">{warehouse.contact_phone} </p>

              <p className="containerw-text">{warehouse.contact_email} </p>
              </div>
            </section>
              </div>
                <section className="containerw-icons">
                  <div>
                    <img src={deleteIcon} alt="delete" onClick={() => openModal(warehouse)}/>
                    <Modal
                      modalIsOpen = {modalIsOpen}
                      closeModal = {closeModal}
                      warehouse_name = {warehouseToDelete.warehouse_name}
                      id = {warehouseToDelete.id}
                      deleteElement = {deleteElement}
                      elementType = {'warehouses'}
                    >
                      <div className="modal-grid__content-header">
                        Delete {warehouseToDelete.warehouse_name} warehouse?
                      </div>
                      <div className="modal-grid__content-text">
                        Please confirm that you’d like to delete the {warehouseToDelete.warehouse_name} from the list of warehouses.
                        You won’t be able to undo this action.
                      </div>
                    </Modal>
                  </div>
                  <Link to={`/warehouses/edit/${warehouse.id}`} >
                    <img src={editIcon} alt="edit" />
                  </Link>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllWarehouses;