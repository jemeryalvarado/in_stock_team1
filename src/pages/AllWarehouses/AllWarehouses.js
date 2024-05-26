import React, {useState, useEffect} from "react";
import "./AllWarehouses.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import fArrow from "../../assets/icons/chevron_right-24px.svg";

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
    <div className="box" >
    <section className="tsbw">
      <h1 className="tsbw-title">Warehouses</h1>
      <div className="tsbw_sb">
      <input
        type="text"
        placeholder="Search"
        className="tsbw_sb-searchbox"
      ></input>
      <Link className="tsbw-button-link">
      <button className="tsbw-button"> + Add New Warehouse  </button>
      </Link>
      </div>
    </section>
      {warehouses.map((warehouse) => (
        <div  key={warehouse.id} >
                        <div className="break"></div>
        <div className="master-containerw">
          <div className="containerw">
            
            <section className="containerw-section" >
              <div className="containerw-sectioncc">
              <h3>WAREHOUSE</h3>
              <Link to={`/warehouses/${warehouse.id}`} className="name-chevron">
                <p className="containerw-text">{warehouse.warehouse_name}</p>
                <img src={fArrow} alt="arrow" />
              </Link>
              </div>
              <div className="containerw-sectionpe">
              <h3>ADDRESS</h3>
              <p className="containerw-text">{warehouse.address} {warehouse.city}, USA</p>
              </div>
            </section>
            <section className="containerw-section">
              <div className="containerw-sectionp">
              <h3>CONTACT NAME</h3>
              <p className="containerw-text">{warehouse.contact_name} </p> 
              </div>
              <div className="containerw-sectioncc">
              <h3>CONTACT INFORMATION</h3>
              <p className="containerw-text">{warehouse.contact_phone} </p>

              <p className="containerw-text">{warehouse.contact_email} </p>
              </div>
            </section>
          </div>
          <section className="containerw-icons">
            
            <a href="">
              <img src={deleteIcon} alt="delete" />
              </a>
            <Link  >
              <img src={editIcon} alt="edit" />
            </Link>
          </section>
        </div>
         </div>
      ))}
    </div>
  );
};

export default AllWarehouses;