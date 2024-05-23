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
            <hr className="divider" />
          <form className="warehouseForm">
            <div className="warehouseForm__details">
                <h2 className="warehouseForm__titles">Warhouse Details</h2>

                <label htmlFor="warehousename" className="warehouseForm__labels">
                    Warehouse Name
                </label>
                  <input
                    id="warehousename"
                    tabIndex="0"
                    placeholder="Warehouse Name"
                    name="warehousename"
                    className="warehouseForm__fields"
                    // value={newVideoUpload.title}
                    // onChange={inputChange}
                  />

                <label htmlFor="streetaddress" className="warehouseForm__labels">
                    Street Address
                </label>
                  <input
                    id="streetaddress"
                    tabIndex="0"
                    placeholder="Street Address"
                    name="streetaddress"
                    className="warehouseForm__fields"
                    // value={newVideoUpload.title}
                    // onChange={inputChange}
                  />

                <label htmlFor="city" className="warehouseForm__labels">
                   City
                </label>
                  <input
                    id="city"
                    tabIndex="0"
                    placeholder="City"
                    name="city"
                    className="warehouseForm__fields"
                    // value={newVideoUpload.title}
                    // onChange={inputChange}
                  />

                <label htmlFor="country" className="warehouseForm__labels">
                   Country
                </label>
                  <input
                    id="country"
                    tabIndex="0"
                    placeholder="Country"
                    name="country"
                    className="warehouseForm__fields"
                    // value={newVideoUpload.title}
                    // onChange={inputChange}
                  />

            </div>
            <hr className="divider" />
            <div className="warehouseForm__contact">
                <h2 className="warehouseForm__titles">Contact Details</h2>

                <label htmlFor="contactname" className="warehouseForm__labels">
                    Contact Name
                </label>
                  <input
                    id="contactname"
                    tabIndex="0"
                    placeholder="Contact Name"
                    name="contactname"
                    className="warehouseForm__fields"
                    // value={newVideoUpload.title}
                    // onChange={inputChange}
                  />

                <label htmlFor="position" className="warehouseForm__labels">
                    Position
                </label>
                  <input
                    id="position"
                    tabIndex="0"
                    placeholder="Position"
                    name="position"
                    className="warehouseForm__fields"
                    // value={newVideoUpload.title}
                    // onChange={inputChange}
                  />

                <label htmlFor="phonenumber" className="warehouseForm__labels">
                    Phone Number
                </label>
                  <input
                    id="phonenumber"
                    tabIndex="0"
                    placeholder="Phone Number"
                    name="phonenumber"
                    className="warehouseForm__fields"
                    // value={newVideoUpload.title}
                    // onChange={inputChange}
                  />

                <label htmlFor="email" className="warehouseForm__labels">
                    Email
                </label>
                  <input
                    id="email"
                    tabIndex="0"
                    placeholder="Email"
                    name="email"
                    className="warehouseForm__fields"
                    // value={newVideoUpload.title}
                    // onChange={inputChange}
                  />


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