import React, { useState, useEffect } from "react";
import "./AllInventories.scss";
import axios from "axios";
import { Link } from "react-router-dom";
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
    <div className="all-inventories">
      <section className="tsb">
        <h1 className="tsb-title">Inventories</h1>
        <div className="tsb_sb">
          <input
            type="text"
            placeholder="Search"
            className="container-searchbox"
          />
          <Link >
            <button>Add New Inventory Item</button>
          </Link>
        </div>
      </section>
      {inventories.map((inventory) => (
        <div key={inventory.id}>
          <div className="break"></div>
          <div className="inventory-container">
            <section>
              <h3>INVENTORY ITEM</h3>
              <Link >
                <p className="container-text">{inventory.item_name}</p>
              </Link>
              <h3>CATEGORY</h3>
              <p className="container-text">{inventory.category}</p>
            </section>
            <section>
              <h3>STATUS</h3>
              <p className="container-text">{inventory.status}</p>
              <h3>QTY</h3>
              <p className="container-text">{inventory.quantity}</p>
              <h3>WAREHOUSE</h3>
              <p className="container-text">{inventory.warehouse_name}</p>
            </section>
            <section className="container-icons">
              <a href="">
                <img src={deleteIcon} alt="delete" />
                </a>
              <Link >
                <img src={editIcon} alt="edit" />
              </Link>
            </section>
          </div>
        </div>
      ))}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default AllInventories;
