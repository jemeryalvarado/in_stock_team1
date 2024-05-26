import "../../components/Main/EditInventory.scss"
import arrowBack from '../../assets/icons/arrow_back-24px.svg'
import error_icon from "../../assets/icons/error-24px.svg";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';

function ShowError({errorMessage, fieldInvalid}){
    if (fieldInvalid){
      return (
        <>
          <div className="warehouseForm__errorWrapper">
            <img className="warehouseForm__errorImage" src={error_icon} />
            <span className="warehouseForm__errorMessage">{errorMessage}</span>
          </div>
        </>
      )
    }
    return null;
};

function EditInventory({ match }) {
    const { id: inventoryId } = useParams(); // to get the inventory id from the params route
    const navigate =  useNavigate();

    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [category, setCategory] = useState('');
    const [stockStatus, setStockStatus] = useState('inStock');
    const [warehouse, setWarehouse] = useState('');
    const [quantity, setQuantity] = useState('');
    const [fieldStatus, setFieldStatus]= useState({});
    const [editInventory, setEditInventory]= useState({});

    useEffect(() => {
        const fetchInventory = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/inventories/${inventoryId}`);
                const inventory = response.data;
                setItemName(inventory.item_name);
                setItemDescription(inventory.description);
                setCategory(inventory.category);
                setStockStatus(inventory.status);
                setWarehouse(inventory.warehouse_name);
                setQuantity(inventory.quantity);
                setEditInventory(inventory);
            } catch (error) {
                console.error('Error fetching inventory:', error);
            }
        };
        fetchInventory();
    }, [inventoryId]);

    console.log(editInventory);

    const validate = () => {
        const fieldErrors = {};
        let fieldsValid = true;
    
        for (const [key,value] of Object.entries(editInventory)){
            if(!value && key !== 'quantity') {
                fieldsValid = false;
                fieldErrors[key] = "This field is required";
            }
        }

        if (stockStatus === 'inStock' && !quantity) {
            fieldsValid = false;
            fieldErrors['quantity'] = "This field is required";
        }

        setFieldStatus(fieldErrors);
        return fieldsValid;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validate()) {
            console.log('Error in one of the fields');
            return;
        }

        try {
          const response = await axios.put(`http://localhost:8080/inventories/${inventoryId}`, {
            warehouse_id: warehouse,
            item_name: itemName,
            description: itemDescription,
            category: category,
            status: stockStatus,
            quantity: stockStatus === 'inStock' ? parseInt(quantity, 10) : null
            });
          console.log('Update Successful:', response.data);
          navigate(-1);
        } catch (error) {
            console.error('Error updating inventory:', error);
        }
    };

    return(
        <section className="section">
            <h1 className="section__title">
                <img className="section__title__img" src={arrowBack} alt="Arrow Back Icon"/>
                Edit Inventory Item
            </h1>
            <section className="section__divs">
            <div className="section__details-section">
                <h3 className="section__details-section__title">Item Details</h3>
                <form className="section__details-section__div__form" onSubmit={handleSubmit}>
                    <label className="section__details-section__div__form__label">
                    Item Name 
                        <input
                        className="section__details-section__div__form__label__input"
                        type="text"
                        value={itemName}
                        onChange={(e) => {
                            setItemName(e.target.value);
                            setEditInventory({ ...editInventory, item_name: e.target.value});
                        }}/>
                        <ShowError fieldInvalid={fieldStatus.item_name} errorMessage={fieldStatus.item_name}/>
                    </label>
                    <label className="section__details-section__div__form__label">
                        Description
                        <textarea
                        className="section__details-section__div__form__label__text"
                        value={itemDescription}
                        onChange={(e) => {
                            setItemDescription(e.target.value);
                            setEditInventory({ ...editInventory, description: e.target.value });
                        }}/>
                        <ShowError fieldInvalid={fieldStatus.description} errorMessage={fieldStatus.description}/>
                    </label>
                    <label className="section__details-section__div__form__label">
                        Category
                        <select
                        className="section__details-section__div__form__label__input"
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value);
                                setEditInventory({ ...editInventory, category: e.target.value });
                            }}>
                            <option value="" disabled>Select category</option>
                            <option value={category} selected>{category}</option>
                            <option value="electronics">Electronics</option>
                            <option value="furniture">Gear</option>
                            <option value="apparel">Apparel</option>
                            <option value="accessories">Accessories</option>
                            <option value="health">Health</option>
                        </select>
                        <ShowError fieldInvalid={fieldStatus.category} errorMessage={fieldStatus.category} />
                    </label>
                </form>
                
            </div>
            <div className="section__availability-section">
                <h3 className="section__availability-section__title">Item Availability</h3>
                <label className="section__availability-section__label">Status</label>
                <div className="section__availability-section__div">
                    <label>
                        <input
                        type="radio"
                        value="inStock"
                        checked={stockStatus === 'In Stock'}
                        onChange={(e) => {
                            setStockStatus(e.target.value);
                            setEditInventory({ ...editInventory, status: e.target.value });
                        }}/>
                        In Stock
                        <ShowError fieldInvalid={fieldStatus.status} errorMessage={fieldStatus.status}/>
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="outOfStock"
                            checked={stockStatus === 'Out of Stock'}
                            onChange={(e) => {
                                setStockStatus(e.target.value);
                                setEditInventory({ ...editInventory, status: e.target.value });
                            }}/>
                            Out of Stock
                    </label>
                </div>
                {stockStatus === 'In Stock' && (
                    <label className="section__availability-section__label">
                    Quantity
                    <input
                        className="section__availability-section__label__input"
                        type="number"
                        value={quantity}
                        onChange={(e) => {
                            setQuantity(e.target.value);
                            setEditInventory({ ...editInventory, quantity: e.target.value });
                        }}
                    />
                    <ShowError fieldInvalid={fieldStatus.quantity} errorMessage={fieldStatus.quantity} />
                </label>

                )}
                <label className="section__availability-section__label">
                    Warehouse
                    <br />
                    <select
                        className="section__availability-section__label__select section__details-section__div__form__label__input"
                        value={warehouse}
                        onChange={(e) => {
                            setWarehouse(e.target.value);
                            setEditInventory({ ...editInventory, warehouse_id: e.target.value });
                        }}>
                        <option value="" disabled>Select warehouse</option>
                        <option value={warehouse} selected>{warehouse}</option>
                        <option value="brooklyn">Brooklyn</option>
                        <option value="washington">Washington</option>
                        <option value="jersey">Jersey</option>
                        <option value="sf">SF</option>
                        <option value="santaMonica">Santa Monica</option>
                        <option value="seattle">Seattle</option>
                        <option value="miami">Miami</option>
                        <option value="boston">Boston</option>
                        <option value="manhattan">Manhattan</option>
                    </select>
                    <ShowError fieldInvalid={fieldStatus.warehouse} errorMessage={fieldStatus.warehouse}/>
                </label>
            </div>
            </section>
            <div className="section__availability-section__buttons">
                <button className="section__availability-section__buttons__cancel" type="button" onClick={() => navigate(-1)}>Cancel</button>
                <button className="section__availability-section__buttons__save" type="button" onClick={handleSubmit}>Save</button>
            </div>
            
        </section>
    )
};

export default EditInventory;