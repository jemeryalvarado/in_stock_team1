import "./WarehouseDetailsPage.scss"
import edit from "../../assets/icons/wht-edit_24dp.svg";
import back from "../../assets/icons/arrow_back-24px.svg";
import { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL

function WarehouseDetailsPage () {

  const [state, setState] = useState([])

  const { warehouseId } = useParams();

// useEffect() to render only once, or when our dependancy changes
  useEffect(() => {
    const fetchWarehouseDetails = () => {
      axios.get(`${baseUrl}/warehouses/${warehouseId}`)
      .then(response => {
        setState(response.data)
      })
    }
    fetchWarehouseDetails();
  }, [warehouseId])

  console.log('state', state)

  return (
    <>
      <div className="warehouse">
          <div className="warehouse__title">
            <h1 className="warehouse__title--text">
              <img className="warehouse__title--text-icon" src={back} alt="'BackBtn'" />
              {state.city}
            </h1>
            <div className="warehouse__title--edit">
              <img className="warehouse__title--edit-icon" src={edit} alt="'EditBtn'" />
            </div>
          </div>
        <div className="divider"></div>
          <div className="warehouse__details">
            <div className="warehouse__details--address">
              <h4>WAREHOUSE ADDRESS</h4>
              <p>{state.address}</p>
            </div>
            <div className="warehouse__details--contact">
              <div className="warehouse__details--contact-name">
                <h4>CONTACT NAME:</h4>
                <p>
                  {state.contact_name}
                  <br/>
                  {state.contact_position}
                </p>
              </div>
              <div className="warehouse__details--contact-info">
                <h4>CONTACT INFORMATION:</h4>
                <p>
                  {state.contact_phone}
                  <br/>
                  {state.contact_email}
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