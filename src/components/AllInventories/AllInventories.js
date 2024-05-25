import React, { useState, useEffect } from "react";
import "./AllInventories.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

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
          placeholder="Search"
          className="container-searchbox"
        ></input>
        <Link>
        <button> Add New Inventory Item </button>
        </Link>
        </div>
      </section>
      {inventories.map((inventory) => (
        <div key={inventory.id}>
                        <div className="break"></div>

          <div className="inventory-container">
            <section>
              <h3>INVENTORY ITEM</h3>
              <Link>
                <p className="inventory-container-text">{inventory.item_name}</p>
              </Link>
              <h3>CATEGORY</h3>
              <p className="inventory-container-text">{inventory.category} </p>
            </section>
            <section>
              <h3>STATUS</h3>
              <p className="inventory-container-text">{inventory.status} </p>
              <h3>QTY</h3>
              <p className="inventory-container-text">{inventory.quantity} </p>
              <h3>WAREHOUSE</h3>
              <p className="inventory-container-text">{inventory.warehouse_name} </p>
            </section>
          </div>
          <section className="inventory-container-icons">
            <Link >
              <img src={deleteIcon} alt="delete" />
            </Link>
            <Link >
              <img src={editIcon} alt="edit" />
            </Link>
          </section>
        </div>
      ))}
    </div>
  );
};

export default AllInventories;