import "./AddWarehouse.scss";
import { useState } from "react";
import arrow_back from "../../assets/icons/arrow_back-24px.svg"
import { Link } from "react-router-dom";
function AddWarehouse(){
    return (
        <section className="formContainer">
            <div className="formContainer__header">
                <Link  to="/">
                    <img 
                        alt="Arrow Back" 
                        className="formContainer__header--arrowBack"
                        src= {arrow_back}
                    />
                </Link>
                <h1 className="formContainer__header--title">Add New Warehouse</h1>
            </div>
            <hr />
          <form className="warehouseForm">
            <div className="warehouseForm__details">
                <h2>Warhouse Details</h2>
            </div>
            <hr />
            <div className="warehouseForm__contact">
                <h2>Contact Details</h2>
            </div>

            <div className="warehouseForm__buttons">
                <button className="warehouseForm__cancel"> Cancel</button>
                <button className="warehouseForm__add"> + Add Warehouse</button>
            </div>
          </form>
            

        </section>

    )
};

export default AddWarehouse;