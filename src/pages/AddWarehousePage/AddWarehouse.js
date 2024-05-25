import "./AddWarehouse.scss";
import { useState } from "react";
import arrow_back from "../../assets/icons/arrow_back-24px.svg";
import error_icon from "../../assets/icons/error-24px.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

//following is a conditional component for rendering the form validation error
function ShowError({errorMessage, fieldInvalid}){
  if (fieldInvalid){
    return (
      <>
        <div className="warehouseForm__errorWrapper">
          <img className="warehouseForm__errorImage" src={error_icon} />
          <span className="warehouseForm__errorMessage">{errorMessage}</span>
        </div>
      </>
    )
  };
};

function AddWarehouse(){
  const baseURL = " http://localhost:8080";
  const [newWarehouse, setWarehouse] = useState({
    warehouse_name:"",
    address:"",
    city:"",
    country:"",
    contact_name:"",
    contact_position:"",
    contact_phone:"",
    contact_email:"",
  });

  const [fieldStatus, setFieldStatus]= useState({});

  const navigate = useNavigate();


  //following is the function for validating empty fields, as well as email and phone numbers
  const validate = () =>{
    const fieldErrors = {};
    let fieldsValid = true;
    const phoneValidator = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g

    for (const [key,value] of Object.entries(newWarehouse)){
     if(!value){
       console.log('empty field for: ', key)
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


  const submitForm = (event) =>{
    event.preventDefault();

    if (validate()){
      console.log('all fields are good!')
    } else{
      console.log('Error in one of fields')
    }
 
      // setWarehouse({
      //   warehouse_name:"",
      //   address:"",
      //   city:"",
      //   country:"",
      //   contact_name:"",
      //   contact_position:"",
      //   contact_phone:"",
      //   contact_email:"",
      //   });
    
        // const postData =() =>{
        //   const response = axios
        //   .post(`${baseURL}/warehouses`,{
        //     warehouse_name: newWarehouse.warehouse_name,
        //     address: newWarehouse.address,
        //     city: newWarehouse.city,
        //     country: newWarehouse.country,
        //     contact_name: newWarehouse.contact_name,
        //     contact_position: newWarehouse.contact_position,
        //     contact_phone: newWarehouse.contact_phone,
        //     contact_email: newWarehouse.contact_email,
        //   })
        //   .then((response)=>{
        //     console.log(response.data);
        //     return response.data;
        //   })
        //   .catch((error) =>{
        //     console.error(error)
        //   });
        //   return response;
        // };
    
        // postData();
        // navigate("/")
    
  };


  const inputChange = (event) =>{
    event.preventDefault();
    const {name , value} = event.target;
    setWarehouse({...newWarehouse, [name]:value});
  };

  

    return (
        <section className="formContainer">
            <div className="formContainer__header">
                <Link  to="/">
                    <img 
                        alt="Arrow Back" 
                        className="formContainer__header--arrowBack"
                        src= {arrow_back}
                    />
                </Link>
                <h1 className="formContainer__header--title">Add New Warehouse</h1>
            </div>
            <hr className="divider" />
          <form className="warehouseForm" onSubmit={submitForm}>
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
                    value={newWarehouse.warehouse_name}
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
                    value={newWarehouse.address}
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
                    value={newWarehouse.city}
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
                    value={newWarehouse.country}
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
                    value={newWarehouse.contact_name}
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
                    value={newWarehouse.contact_position}
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
                    value={newWarehouse.contact_phone}
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
                    value={newWarehouse.contact_email}
                    onChange={inputChange}
                  />
                  <ShowError fieldInvalid={fieldStatus.email} errorMessage={fieldStatus.email}/>


            </div>
            </div>

            <div className="warehouseForm__buttons">
                <Link to={'/'}> 
                  <button type="button" className="warehouseForm__cancel"> Cancel</button>
                </Link>
                <button type="submit" className="warehouseForm__add"> + Add Warehouse</button>
            </div>
          </form>
            

        </section>

    )
};

export default AddWarehouse;