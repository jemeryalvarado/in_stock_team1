import "./WarehouseDetailsPage.scss"
import edit from "../../assets/icons/wht-edit_24dp.svg";
import back from "../../assets/icons/arrow_back-24px.svg";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';

function WarehouseDetailsPage ({ baseUrl }) {

  const { warehouseId } = useParams();
  const [ warehouse, setWarehouse ] = useState( warehouseId );

// useEffect() to render only once, or when our dependancy changes
  axios.get(`${baseUrl}warehouses/`)
    .then(response => {
      console.log(response.data)
    })



  return (
    <>
      <div className="warehouse">
          <div className="warehouse__title">
            <h1 className="warehouse__title--text">
              <img className="warehouse__title--text-icon" src={back} alt="'BackBtn'" />
              Washington
            </h1>
            <div className="warehouse__title--edit">
              <img className="warehouse__title--edit-icon" src={edit} alt="'EditBtn'" />
            </div>
          </div>
        <div className="divider"></div>
          <div className="warehouse__details">
            <div className="warehouse__details--address">
              <h4>WAREHOUSE ADDRESS</h4>
              <p>33 Pearl Street SW, Washington, USA</p>
            </div>
            <div className="warehouse__details--contact">
              <div className="warehouse__details--contact-name">
                <h4>CONTACT NAME:</h4>
                <p>
                  Graeme Lyon
                  <br/>
                  Warehouse Manager
                </p>
              </div>
              <div className="warehouse__details--contact-info">
                <h4>CONTACT INFORMATION:</h4>
                <p>
                  +1 (647) 504-0911
                  <br/>
                  glyon@instock.com
                </p>
              </div>
            </div> 
          </div>
        <div className="divider"></div>
      </div>
    </>
  )
}

export default WarehouseDetailsPage;