import "../../components/Main/EditInventory.scss"
import arrowBack from '../../assets/icons/arrow_back-24px.svg'
import React, { useState } from 'react';
import axios from "axios";

function EditInventory(){

    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [category, setCategory] = useState('');
    const [stockStatus, setStockStatus] = useState('inStock');
    const [warehouse, setWarehouse] = useState('');
    const [quantity, setQuantity] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const inventoryId = "someInventoryId"; // Replace with actual inventory ID
        try {
          const response = await axios.put(`/api/inventories/${inventoryId}`, {
            warehouse_id: warehouse,
            item_name: itemName,
            description: itemDescription,
            category: category,
            status: stockStatus,
            quantity: parseInt(quantity, 10)
          });
          console.log('Update Successful:', response.data);
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
                        onChange={(e) => setItemName(e.target.value)}/>
                    </label>
                    <label className="section__details-section__div__form__label">
                        Description
                        <textarea
                        className="section__details-section__div__form__label__text"
                        value={itemDescription}
                        onChange={(e) => setItemDescription(e.target.value)}/>
                    </label>
                    <label className="section__details-section__div__form__label">
                        Category
                        <select
                        className="section__details-section__div__form__label__input"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}>
                            <option value="" disabled>Select category</option>
                            <option value="electronics">Electronics</option>
                            <option value="furniture">Gear</option>
                            <option value="apparel">Apparel</option>
                            <option value="accessories">Accessories</option>
                            <option value="health">Health</option>
                        </select>
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
                            checked={stockStatus === 'inStock'}
                            onChange={(e) => setStockStatus(e.target.value)}/>
                            In Stock
                    </label>
                    <label>
                    <input
                        type="radio"
                        value="outOfStock"
                        checked={stockStatus === 'outOfStock'}
                        onChange={(e) => setStockStatus(e.target.value)}/>
                        Out of Stock
                    </label>
                </div>
                <label className="section__availability-section__label">
                    Warehouse
                    <br />
                    <select
                        className="section__availability-section__label__select section__details-section__div__form__label__input"
                        value={warehouse}
                        onChange={(e) => setWarehouse(e.target.value)}>
                        <option value="" disabled>Select warehouse</option>
                        <option value="brooklyn">Brooklyn</option>
                        <option value="washington">Washington</option>
                        <option value="jersey">Jersey</option>
                        <option value="sf">SF</option>
                        <option value="santaMonica">Santa Monica</option>
                        <option value="seattle">Seattle</option>
                        <option value="miami">Miami</option>
                        <option value="boston">Boston</option>
                    </select>
                </label>
            </div>
            </section>
            <div className="section__availability-section__buttons">
                <button className="section__availability-section__buttons__cancel" type="cancel">Cancel</button>
                <button className="section__availability-section__buttons__save" type="save">Save</button>
            </div>
            
        </section>
    )
};

export default EditInventory;