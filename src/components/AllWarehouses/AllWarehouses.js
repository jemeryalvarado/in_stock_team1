import React, {useState, useEffect} from "react";
import "./AllWarehouses.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

const AllWarehouses = () => {
  const [warehouses, setWarehouses] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/warehouses")
      .then((response) => {
        setWarehouses(response.data);
      })
      .catch((err) => {
        setError(`Error fetching warehouse: ${err.message}`);
      });
  }, []);

  return (
    <div >
    <section className="tsb">
      <h1 className="tsb-title">Warehouses</h1>
      <div className="tsb_sb">
      <input
        type="text"
        placeholder="Search"
        className="container-searchbox"
      ></input>
      <Link>
      <button> Add New Warehouse  </button>
      </Link>
      </div>
    </section>
      {warehouses.map((warehouse) => (
        <div key={warehouse.id}>
                        <div className="break"></div>

          <div className="container">
            <section>
              <h3>WAREHOUSE</h3>
              <Link to={`/warehouses/${warehouse.id}`}>
                <p className="container-text">{warehouse.warehouse_name}</p>
              </Link>
              <h3>ADDRESS</h3>
              <p className="container-text">{warehouse.address} </p>
            </section>
            <section>
              <h3>CONTACT NAME</h3>
              <p className="container-text">{warehouse.contact_name} </p>
              <h3>CONTACT INFORMATION</h3>
              <p className="container-text">{warehouse.contact_phone} </p>

              <p className="container-text">{warehouse.contact_email} </p>
            </section>
          </div>
          <section className="container-icons">
            <a href="">
              <img src={deleteIcon} alt="delete" />
              </a>
            <Link  >
              <img src={editIcon} alt="edit" />
            </Link>
          </section>
        </div>
      ))}
    </div>
  );
};

export default AllWarehouses;