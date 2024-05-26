import "./InventoryItemDetailsPage.scss"
import edit from "../../assets/icons/wht-edit_24dp.svg";
import back from "../../assets/icons/arrow_back-24px.svg";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL

function InventoryItemDetailsPage() {
    const [state, setState] = useState([])
    const { inventoryId } = useParams();
  
    useEffect(() => {
      const fetchInventoryDetails = () => {
        axios.get(`${baseUrl}/inventories/${inventoryId}`)
        .then(response => {
          setState(response.data)
        })
        .catch(error => {
          console.error(error)
          alert(`Inventory ${inventoryId} does not exist`)
          window.location = '/inventories'
        })
      }
      fetchInventoryDetails();
    }, [inventoryId])

    console.log('state', state)

    return(
        <>
        </>
    )
}

export default InventoryItemDetailsPage;