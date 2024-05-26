import { Link } from "react-router-dom";
import "./WarehousesPage.scss";
import "../../components/Main/EditInventory.scss"
import Modal from "../../components/Modal/Modal";
import { useState } from "react";

function WarehousesPage(){

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return(
        <div className="whitebox">
            <button onClick={openModal}>Modal</button>
            <Modal isOpen={modalIsOpen} onClose={closeModal} warehouse_name = {"Washington"} />

          <Link to="/addwarehouses">
            <button>Add Warehouse</button>
          </Link> 
        </div>
    )
}

export default WarehousesPage;