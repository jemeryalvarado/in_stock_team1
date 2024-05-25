import "./WarehousesPage.scss";
import "../../components/Main/EditInventory.scss"

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
        </div>
    )
}

export default WarehousesPage;