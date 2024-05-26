import React, { useState, useEffect } from "react";
import "./AllInventories.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import fArrow from "../../assets/icons/chevron_right-24px.svg";


const AllInventories = () => {
  const [inventories, setInventories] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/inventories")
      .then((response) => {
        setInventories(response.data);
      })
      .catch((err) => {
        setError(`Error fetching inventory: ${err.message}`);
      });
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
            <Link >
              <img src={deleteIcon} alt="delete" />
            </Link>
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