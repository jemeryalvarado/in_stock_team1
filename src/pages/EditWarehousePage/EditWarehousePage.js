import './EditWarehousePage.scss';
import { useState, useEffect, useRef } from "react";
import arrow_back from "../../assets/icons/arrow_back-24px.svg";
import error_icon from "../../assets/icons/error-24px.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

//following is a conditional component for rendering the form validation error
function ShowError({errorMessage, fieldInvalid}){
  if (fieldInvalid){
    return (
      <>
        <div className="warehouseForm__errorWrapper">
          <img alt='error' className="warehouseForm__errorImage" src={error_icon} />
          <span className="warehouseForm__errorMessage">{errorMessage}</span>
        </div>
      </>
    )
  };
};

const baseUrl = process.env.REACT_APP_BASE_URL


function EditWarehousePage(){
  const { warehouseId } = useParams();
  const [warehouse, setWarehouse] = useState({
    warehouse_name: '',
    address: '',
    city: '',
    country: '',
    contact_name: '',
    contact_position: '',
    contact_phone: '',
    contact_email: '',
  });

  useEffect(() => {
    const fetchWarehouseDetails = () => {
      axios.get(`${baseUrl}/warehouses/${warehouseId}`)
      .then(response => {
        setWarehouse(response.data)
      })
      .catch(error => {
        console.error(error)
        alert(`Warehouse ${warehouseId} does not exist`)
        window.location = '/warehouses'
      })
    }
    fetchWarehouseDetails();
  }, [warehouseId])


  const [fieldStatus, setFieldStatus]= useState({});
  
  const validate = () =>{
    const fieldErrors = {};
    let fieldsValid = true;
    const phoneValidator = /^\+\d{1,3}\s\(\d{3}\)\s\d{3}-\d{4}$/;

    for (const [key,value] of Object.entries(warehouse)){
     if(!value){
       fieldsValid = false;
       fieldErrors[key] = "This field is required";
     }
     if(key === 'contact_email' && (!value.includes('@') || !value.includes('.com'))){
      fieldErrors["email"] = "Email is not valid";
      fieldsValid =false;
     };
     if(key==='contact_phone' && !phoneValidator.test(value)){
      fieldErrors['phone'] = "Phone number is not valid";
      fieldsValid =false;
     };
    }
    setFieldStatus(fieldErrors);
    return fieldsValid;
   };

  const formRef = useRef()

  const submitForm = (event) =>{

    event.preventDefault();

    const form = formRef.current;
    const warehouse_name = form.warehouse_name.value;
    const address = form.address.value;
    const city = form.city.value
    const country = form.country.value;
    const contact_name = form.contact_name.value;
    const contact_position = form.contact_position.value;
    const contact_phone = form.contact_phone.value;
    const contact_email = form.contact_email.value;
    
    const data = {
        warehouse_name: warehouse_name,
        address: address,
        city: city,
        country: country,
        contact_name: contact_name,
        contact_position: contact_position,
        contact_phone: contact_phone,
        contact_email: contact_email,
    }

    if (validate()){
        axios
        .put(`${baseUrl}/warehouses/${warehouseId}`, data)
        .then((response)=>{
            setWarehouse(response.data);
            window.location = `/warehouses/details/${warehouseId}`
        })
        .catch((error) =>{
        console.error(error)
        });
    } else{
      console.log('Error in one of fields')
    }
  };

  
  const inputChange = (event) =>{
    event.preventDefault();
    const {name , value} = event.target;
    setWarehouse({...warehouse, [name]:value});
  };

  

    return (
        <section className="formContainer">
            <div className="formContainer__header">
                <Link  to={`/warehouses/details/${warehouseId}`}>
                    <img 
                        alt="Arrow Back" 
                        className="formContainer__header--arrowBack"
                        src= {arrow_back}
                    />
                </Link>
                <h1 className="formContainer__header--title">Edit Warehouse</h1>
            </div>
            <hr className="divider" />
          <form ref={formRef} className="warehouseForm" onSubmit={submitForm}>
            <div className="warehouseForm__formsWrapper"> 
            <div className="warehouseForm__details">
                <h2 className="warehouseForm__titles">Warhouse Details</h2>

                <label htmlFor="warehouse_name" className="warehouseForm__labels">
                    Warehouse Name
                </label>
                  <input
                    id="warehouse_name"
                    tabIndex="0"
                    placeholder="Warehouse Name"
                    name="warehouse_name"
                    className="warehouseForm__fields"
                    value={warehouse.warehouse_name}
                    onChange={inputChange}
                    />
                    <ShowError fieldInvalid={fieldStatus.warehouse_name} errorMessage={fieldStatus.warehouse_name}/>

                <label htmlFor="address" className="warehouseForm__labels">
                    Street Address
                </label>
                  <input
                    id="address"
                    tabIndex="0"
                    placeholder="Street Address"
                    name="address"
                    className="warehouseForm__fields"
                    value={warehouse.address}
                    onChange={inputChange}
                  />
                 <ShowError fieldInvalid={fieldStatus.address} errorMessage={fieldStatus.address}/>

                <label htmlFor="city" className="warehouseForm__labels">
                   City
                </label>
                  <input
                    id="city"
                    tabIndex="0"
                    placeholder="City"
                    name="city"
                    className="warehouseForm__fields"
                    value={warehouse.city}
                    onChange={inputChange}
                  />
                  <ShowError fieldInvalid={fieldStatus.city} errorMessage={fieldStatus.city}/>

                <label htmlFor="country" className="warehouseForm__labels">
                   Country
                </label>
                  <input
                    id="country"
                    tabIndex="0"
                    placeholder="Country"
                    name="country"
                    className="warehouseForm__fields"
                    value={warehouse.country}
                    onChange={inputChange}
                  />
                  <ShowError fieldInvalid={fieldStatus.country} errorMessage={fieldStatus.country}/>

            </div>
            <hr className="divider__middle" />
            <div className="warehouseForm__contact">
                <h2 className="warehouseForm__titles">Contact Details</h2>

                <label htmlFor="contact_name" className="warehouseForm__labels">
                    Contact Name
                </label>
                  <input
                    id="contact_name"
                    tabIndex="0"
                    placeholder="Contact Name"
                    name="contact_name"
                    className="warehouseForm__fields"
                    value={warehouse.contact_name}
                    onChange={inputChange}
                  />
                  <ShowError fieldInvalid={fieldStatus.contact_name} errorMessage={fieldStatus.contact_name}/>

                <label htmlFor="contact_position" className="warehouseForm__labels">
                    Position
                </label>
                  <input
                    id="contact_position"
                    tabIndex="0"
                    placeholder="Position"
                    name="contact_position"
                    className="warehouseForm__fields"
                    value={warehouse.contact_position}
                    onChange={inputChange}
                  />
                  <ShowError fieldInvalid={fieldStatus.contact_position} errorMessage={fieldStatus.contact_position}/>

                <label htmlFor="contact_phone" className="warehouseForm__labels">
                    Phone Number
                </label>
                  <input
                    id="contact_phone"
                    tabIndex="0"
                    placeholder="Phone Number"
                    name="contact_phone"
                    className="warehouseForm__fields"
                    value={warehouse.contact_phone}
                    onChange={inputChange}
                  />
                  <ShowError fieldInvalid={fieldStatus.phone} errorMessage={fieldStatus.phone}/>
                  

                <label htmlFor="contact_email" className="warehouseForm__labels">
                    Email
                </label>
                  <input
                    id="contact_email"
                    tabIndex="0"
                    placeholder="Email"
                    name="contact_email"
                    className="warehouseForm__fields"
                    value={warehouse.contact_email}
                    onChange={inputChange}
                  />
                  <ShowError fieldInvalid={fieldStatus.email} errorMessage={fieldStatus.email}/>


            </div>
            </div>

            <div className="warehouseForm__buttons">
                <Link to={'/'}> 
                  <button type="button" className="warehouseForm__cancel"> Cancel</button>
                </Link>
                <button type="submit" className="warehouseForm__add">Save</button>
            </div>
          </form>
            

        </section>

    )
};

export default EditWarehousePage;