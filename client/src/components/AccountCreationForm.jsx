import React, { useState } from "react";
import "./AccountCreationForm.css";
import Collapsible from "./Collapsible";
import SkinModelTable from "./SkinModelTable";
import axios from "axios";

const AccountCreationForm = (props) => {
  const [institution, setInstitution] = useState("");
  const [vatNumber, setVatNumber] = useState("");
  const [civility, setCivility] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [cellOrigin, setCellOrigin] = useState("");
  const [quantity, setQuantity] = useState("");
  const [clickedButton, setClickedButton] = useState(null);

  //   const handleFormSubmit = (event) => {
  //     event.preventDefault();
  //     // Submit the form data to the server using an API call
  //     // For example: axios.post('/api/accounts', formData)
  //   };

  const changeClickedButton = () => {
    setClickedButton();
  };
  const changeCellOrigin = (_cell_origin) => {
    setCellOrigin(_cell_origin);
  };
  const changeQuantity = (quantity) => {
    setQuantity(quantity);
  };
  const handleFormSubmit = async (event) => {
    const data = {
      institution: institution,
      vat_number: vatNumber,
      civility: civility,
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_number: phoneNumber,
      city: city,
      state: state,
      country: country,
      cell_origin: cellOrigin,
      quantity: quantity,

      //   skin_models: props.skinModels,
    };
    event.preventDefault();
    if (clickedButton === "submit") {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/quotes/",
          data
        );
        console.log(response.data); // do something with the response data
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <div className="top-img-container">
        <img src="bg3.png" alt="background" />
        <h1 className="top-title">QUOTATION</h1>
      </div>
      <div className="bottom-half-container">
        {/* <h1>Create Account</h1> */}

        <form onSubmit={handleFormSubmit}>
          <div className="box contact">
            <h2>YOUR CONTACT INFORMATION</h2>
            <div className="section section1">
              <h3>CLIENT</h3>
              <div className="sub-section">
                <div className="type1">
                  <label htmlFor="institution">Institution</label>
                  <input
                    type="text"
                    id="institution"
                    value={institution}
                    onChange={(event) => setInstitution(event.target.value)}
                  />
                </div>

                <div className="type1">
                  <label htmlFor="vatNumber">VAT Number</label>
                  <input
                    type="text"
                    id="vatNumber"
                    value={vatNumber}
                    onChange={(event) => setVatNumber(event.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="section">
              <h3>USER</h3>

              <div className="type1">
                <label htmlFor="civility">Civility</label>
                <select
                  id="civility"
                  value={civility}
                  onChange={(event) => setCivility(event.target.value)}
                  className="short"
                >
                  <option value="">Select Civility</option>
                  <option value="Mrs.">Mrs.</option>
                  <option value="Mr.">Mr.</option>
                </select>
              </div>
              <div className="sub-section">
                <div className="type1">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                </div>
                <div className="type1">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </div>
              </div>

              {/* <div className="type1">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className="type1">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
              </div> */}
              <div className="sub-section">
                <div className="type1">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="type1">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="text"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="section">
              <h3>BILLING ADDRESS</h3>
              {/* <div className="type1">
                <label htmlFor="addressLine1">Address Line 1</label>
                <input
                  type="text"
                  id="addressLine1"
                  value={addressLine1}
                  onChange={(event) => setAddressLine1(event.target.value)}
                />
              </div> */}
              {/* 
              <div className="type1">
                <label htmlFor="addressLine2">Address Line 2</label>
                <input
                  type="text"
                  id="addressLine2"
                  value={addressLine2}
                  onChange={(event) => setAddressLine2(event.target.value)}
                />
              </div> */}
              <div className="sub-section">
                <div className="type1">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    id="state"
                    value={state}
                    onChange={(event) => setState(event.target.value)}
                  />
                </div>
                <div className="type1">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                  />
                </div>
              </div>
              <div className="sub-section">
                {/* <div className="type1">
                  <label htmlFor="zipCode">Zip/Postal Code</label>
                  <input
                    type="text"
                    id="zipCode"
                    value={zipCode}
                    onChange={(event) => setZipCode(event.target.value)}
                  />
                </div> */}

                <div className="type1">
                  <label htmlFor="country">Country</label>
                  <select
                    id="country"
                    value={country}
                    onChange={(event) => setCountry(event.target.value)}
                    className="short"
                  >
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="UAE">UAE</option>
                    <option value="Srilanka">Srilanka</option>
                    {/* Add more country options */}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="box select_product">
            <h2>SELECT YOUR PRODUCT</h2>
            <div className="section">
              <Collapsible
                title="BIODSKIN"
                setClickedButton={changeClickedButton}
              >
                <SkinModelTable
                  skinModels={props.skinModels}
                  changeSkinModel={props.changeSkinModel}
                  setCellOrigin={changeCellOrigin}
                  setQuantity={changeQuantity}
                />
              </Collapsible>
              <Collapsible title="BIODVAGINAL">
                <p>Table input</p>
              </Collapsible>
              <Collapsible title="BIODCORNEA">
                <p>Table input</p>
              </Collapsible>
            </div>
          </div>
          <center>
            <button
              type="submit"
              onClick={() => setClickedButton("submit")}
              className="submit-quote"
            >
              SEND YOUR QUOTE
            </button>
          </center>
        </form>
      </div>
    </>
  );
};

export default AccountCreationForm;
// @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Strait&display=swap");

// form {
//   width: 80%;
//   margin: 0 auto 100px;
//   padding: 20px 100px;
//   border-radius: 5px;
// }

// h1 {
//   display: flex;
//   justify-content: center;
//   margin: 20px auto;
//   font-size: 2rem;
//   font-weight: bold;
//   margin-bottom: 1rem;
// }

// h2 {
//   /* font-size: 1.5rem;
//   font-weight: bold;
//   margin-top: 2rem;
//   margin-bottom: 1rem; */
//   font-family: "Strait";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 30px;
//   letter-spacing: 0.1em;

//   color: #ffffff;
// }
// h3 {
//   font-family: "Open Sans";
//   font-style: normal;
//   font-weight: 600;
//   font-size: 18px;
//   letter-spacing: 0.2em;
// }

// label {
//   display: block;
//   margin-bottom: 0.5rem;
//   font-family: "Open Sans";
//   font-style: normal;
//   font-weight: 600;
//   font-size: 14px;
//   line-height: 16px;
//   letter-spacing: 0.05em;
// }

// input,
// select {
//   padding: 0.5rem;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   margin-bottom: 1rem;
//   min-width: 220px;
//   width: 460px;
// }
// .short {
//   width: 220px;
// }

// .body-container {
//   font-family: "Open Sans", sans-serif;
// }
// .top-img-container {
//   width: 100%;
//   height: 55vh;
//   position: relative;
// }
// .top-img-container img {
//   object-fit: cover;
//   height: 100%;
//   width: 100%;
// }
// /* style="max-width: 70%" */
// .top-title {
//   font-family: "Strait", sans-serif;
//   position: absolute;
//   top: 30%;
//   font-weight: 500;
//   left: 5%;
//   color: white;
//   font-size: 56px;
//   padding: 0px 20px;
//   border-left: 4px solid white;
// }
// .bottom-half-container {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   background: linear-gradient(180deg, #143639 0%, #196975 100%);
// }
// .box {
//   background: linear-gradient(308.81deg, #04252d 0%, #06110c 100%);
//   height: fit-content;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
//   padding: 40px;
//   margin: 30px 0px;
// }

// .sub-section {
//   display: flex;
//   justify-content: space-between;
// }

// button[type="submit"].submit-quote {
//   background: #040d13;
//   color: #99d8cc;
//   padding: 0.8rem 1.2rem;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 0.8rem;
//   margin-top: 1rem;
//   letter-spacing: 2px;
//   font-family: "Open Sans";
//   font-weight: 600;
// }

// button[type="submit"]:hover {
//   background: #021f21;
// }
