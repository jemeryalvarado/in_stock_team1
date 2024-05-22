import React, {useState, useEffect} from "react";
import "./AllWarehouses.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const AllWarehouses = () => {
    
    const [warehouses, setWarehouses] = useState([]);
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    useEffect(() => {
        axios.get("http://localhost:8080/warehouses")
          .then((response) => {
            setWarehouses(response.data);
            setLoading(false);
          })
          .catch((err) => {
            setError(err.message);
            setLoading(false);
          });
      }, []);

    return (
      <div className="container">
        <section>
        <h1>Warehouses</h1>
        <input
          type="text"
          placeholder="Search"
          className="container-searchbox"
        ></input>
        <button> Add New Warehouse </button>
        </section>
        <ul>
        {warehouses.map((warehouse) => (
          <li key={warehouse.id}>
            <Link to={`/warehouses/${warehouse.id}`}>
              {warehouse.warehouse_name} - {warehouse.city}, {warehouse.country}
            </Link>
          </li>
        ))}
      </ul>
        <section>


        </section>
      </div>
    );
  };
  
  export default AllWarehouses;