import React from "react";
import style from "./InformationStyle.module.css";
import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md"; // import { Navigate, useNavigate } from 'react-router-dom'
// import Cart from "./Cart"

import { Link } from "react-router-dom";
import Gpay from "../image/GpayLogo.PNG"
import amazonPay from "../image/amzonPayLogo.PNG";
import OrderSummery from "./OrderSummery";



const CartData=[{
  images:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/bamboo-sea-salt-whitening-antiplaque-toothpaste-363920_small.png?v=1660858353",
  name:"Bamboo & Sea Salt Whitening Antiplaque Toothpaste",
  price:"5.99",
  id:1
},
{
  images:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/bamboo-sea-salt-whitening-antiplaque-toothpaste-363920_small.png?v=1660858353",
  name:"Bamboo & Sea Salt Whitening Antiplaque Toothpaste",
  price:"5.99",
  id:2
}]

export const InformationPage = () => {
  // const navigate = useNavigate()
  const [form, setform] = useState({
    email: "",
    address: "",
  });

  const handleAdd = (e) => {
    let { name, value } = e.target;
    setform({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    fetch("  http://localhost:8080/shipping", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: form.email,
        address: form.address,
      }),
    })
      .then((r) => r.json())
      .then((d) => {
        setform([...form, d]);
        setform("");
      });
    //  navigate("/payment")
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <div className={style.mainBox}>
        <div className={style.addressBox}>
          <div className={style.dostImgBox}>
            <Link to="/">
              <img
                src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/new-logo.png?3890"
                alt=""
                style={{ width: "100%" }}
              />
            </Link>
          </div>
          <div className={style.afterImg}>
            <div>Cart </div>
            <span>
              {" "}
              <MdArrowForwardIos />
            </span>
            <div>
              <Link to="/checkout">Information</Link>{" "}
            </div>
            <span>
              {" "}
              <MdArrowForwardIos />
            </span>
            <div>
              <Link to="/shipping">Shipping</Link>{" "}
            </div>
            <span>
              {" "}
              <MdArrowForwardIos />
            </span>
            <div>
              <Link to="/payment">Payment</Link>
            </div>
          </div>
          <div className={style.ExpressCheckout}>
           <div><img alt="logo" src="https://175234-507591-1-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/04/The-Shop-Pay-logo.png"/></div>
           <div><img src={amazonPay} alt="logo"/></div>
           <div><img src={Gpay} alt="logo"/></div>
          </div>
          <br/>
    
          <div className={style.cont}>Contact information</div>
          <br />
          <div className={style.parabox}>
            <p style={{ marginTop: "3px", marginBottom: "15px" }}>
              Already have an account? Log In to redeem Skindulgence Points. Log
              in
            </p>
          </div>

          <form onSubmit={handleOnSubmit} className={style.infoForm}>
            <div>
              <input
                type="Email"
                placeholder="Email"
                required
                className={style.oneInp}
                name="email"
                onChange={handleAdd}
                value={form.email}
                style={{ fontSize: "14px" }}
              />
            </div>

            <div className={style.onechk}>
              <input
                type="checkbox"
                style={{ height: "15px", width: "15px" }}
              />
              <label htmlFor="" className={style.onelbl}>
                Keep me up to date on news and exclusive offers
              </label>
            </div>

            <div className={style.addrs}>Shipping address</div>

            <div style={{ marginTop: "20px" }}>
              <select className={style.slct} style={{ fontSize: "14px" }}>
                <option style={{ fontSize: "14px" }} value="">
                  United States
                </option>
              </select>
            </div>

            <div className={style.naminp}>
              <div>
                <input
                  type="name"
                  placeholder="First Name"
                  className={style.firstNam}
                  style={{ fontSize: "14px" }}
                />
              </div>
              <div>
                <input
                  type="name"
                  placeholder="Last Name"
                  className={style.LastNam}
                  style={{ fontSize: "14px" }}
                />
              </div>
            </div>

            <div>
              <input
                type="address"
                placeholder="Address"
                required
                className={style.twoInp}
                name="address"
                onChange={handleAdd}
                value={form.address}
                style={{ fontSize: "14px" }}
              />
            </div>
            <div>
              <input
                type="address"
                placeholder="Apartment,suite,etc. (optional)"
                required
                className={style.twoInp}
                style={{ fontSize: "14px" }}
              />
            </div>

            <div className={style.threeInp}>
              <div style={{ width: "27%" }}>
                <input
                  type="text"
                  className={style.threeOneInp}
                  placeholder="City"
                  style={{ fontSize: "14px" }}
                />
              </div>
              <div style={{ width: "27.5%" }}>
                <select
                  className={style.threeOneInp}
                  style={{ fontSize: "14px" }}
                >
               <option disabled="">State</option>
            
                  <option data-alternate-values='["Alabama"]' value="AL">
                    Alabama
                  </option>
                  <option data-alternate-values='["Alaska"]' value="AK">
                    Alaska
                  </option>
                  <option data-alternate-values='["American Samoa"]' value="AS">
                    American Samoa
                  </option>
                  <option data-alternate-values='["Arizona"]' value="AZ">
                    Arizona
                  </option>
                  <option data-alternate-values='["Arkansas"]' value="AR">
                    Arkansas
                  </option>
                  <option data-alternate-values='["California"]' value="CA">
                    California
                  </option>
                  <option data-alternate-values='["Colorado"]' value="CO">
                    Colorado
                  </option>
                  <option data-alternate-values='["Connecticut"]' value="CT">
                    Connecticut
                  </option>
                  <option data-alternate-values='["Delaware"]' value="DE">
                    Delaware
                  </option>
                  <option data-alternate-values='["Florida"]' value="FL">
                    Florida
                  </option>
                  <option data-alternate-values='["Georgia"]' value="GA">
                    Georgia
                  </option>
                  <option data-alternate-values='["Guam"]' value="GU">
                    Guam
                  </option>
                  <option data-alternate-values='["Hawaii"]' value="HI">
                    Hawaii
                  </option>
                  <option data-alternate-values='["Idaho"]' value="ID">
                    Idaho
                  </option>
                  <option data-alternate-values='["Illinois"]' value="IL">
                    Illinois
                  </option>
                  <option data-alternate-values='["Indiana"]' value="IN">
                    Indiana
                  </option>
                  <option data-alternate-values='["Iowa"]' value="IA">
                    Iowa
                  </option>
                  <option data-alternate-values='["Kansas"]' value="KS">
                    Kansas
                  </option>
                  <option data-alternate-values='["Kentucky"]' value="KY">
                    Kentucky
                  </option>
                  <option data-alternate-values='["Louisiana"]' value="LA">
                    Louisiana
                  </option>
                  <option data-alternate-values='["Maine"]' value="ME">
                    Maine
                  </option>
                  <option
                    data-alternate-values='["Marshall Islands"]'
                    value="MH"
                  >
                    Marshall Islands
                  </option>
                  <option data-alternate-values='["Maryland"]' value="MD">
                    Maryland
                  </option>
                  <option data-alternate-values='["Massachusetts"]' value="MA">
                    Massachusetts
                  </option>
                  <option data-alternate-values='["Michigan"]' value="MI">
                    Michigan
                  </option>
                  <option
                    data-alternate-values='["Federated States of Micronesia"]'
                    value="FM"
                  >
                    Micronesia
                  </option>
                  <option data-alternate-values='["Minnesota"]' value="MN">
                    Minnesota
                  </option>
                  <option data-alternate-values='["Mississippi"]' value="MS">
                    Mississippi
                  </option>
                  <option data-alternate-values='["Missouri"]' value="MO">
                    Missouri
                  </option>
                  <option data-alternate-values='["Montana"]' value="MT">
                    Montana
                  </option>
                  <option data-alternate-values='["Nebraska"]' value="NE">
                    Nebraska
                  </option>
                  <option data-alternate-values='["Nevada"]' value="NV">
                    Nevada
                  </option>
                  <option data-alternate-values='["New Hampshire"]' value="NH">
                    New Hampshire
                  </option>
                  <option data-alternate-values='["New Jersey"]' value="NJ">
                    New Jersey
                  </option>
                  <option data-alternate-values='["New Mexico"]' value="NM">
                    New Mexico
                  </option>
                  <option data-alternate-values='["New York"]' value="NY">
                    New York
                  </option>
                  <option data-alternate-values='["North Carolina"]' value="NC">
                    North Carolina
                  </option>
                  <option data-alternate-values='["North Dakota"]' value="ND">
                    North Dakota
                  </option>
                  <option
                    data-alternate-values='["Northern Mariana Islands"]'
                    value="MP"
                  >
                    Northern Mariana Islands
                  </option>
                  <option data-alternate-values='["Ohio"]' value="OH">
                    Ohio
                  </option>
                  <option data-alternate-values='["Oklahoma"]' value="OK">
                    Oklahoma
                  </option>
                  <option data-alternate-values='["Oregon"]' value="OR">
                    Oregon
                  </option>
                  <option data-alternate-values='["Palau"]' value="PW">
                    Palau
                  </option>
                  <option data-alternate-values='["Pennsylvania"]' value="PA">
                    Pennsylvania
                  </option>
                  <option data-alternate-values='["Puerto Rico"]' value="PR">
                    Puerto Rico
                  </option>
                  <option data-alternate-values='["Rhode Island"]' value="RI">
                    Rhode Island
                  </option>
                  <option data-alternate-values='["South Carolina"]' value="SC">
                    South Carolina
                  </option>
                  <option data-alternate-values='["South Dakota"]' value="SD">
                    South Dakota
                  </option>
                  <option data-alternate-values='["Tennessee"]' value="TN">
                    Tennessee
                  </option>
                  <option data-alternate-values='["Texas"]' value="TX">
                    Texas
                  </option>
                  <option data-alternate-values='["Virgin Islands"]' value="VI">
                    U.S. Virgin Islands
                  </option>
                  <option data-alternate-values='["Utah"]' value="UT">
                    Utah
                  </option>
                  <option data-alternate-values='["Vermont"]' value="VT">
                    Vermont
                  </option>
                  <option data-alternate-values='["Virginia"]' value="VA">
                    Virginia
                  </option>
                  <option data-alternate-values='["Washington"]' value="WA">
                    Washington
                  </option>
                  <option
                    data-alternate-values='["District of Columbia"]'
                    value="DC"
                  >
                    Washington DC
                  </option>
                  <option data-alternate-values='["West Virginia"]' value="WV">
                    West Virginia
                  </option>
                  <option data-alternate-values='["Wisconsin"]' value="WI">
                    Wisconsin
                  </option>
                  <option data-alternate-values='["Wyoming"]' value="WY">
                    Wyoming
                  </option>
                  <option
                    data-alternate-values='["Armed Forces Americas"]'
                    value="AA"
                  >
                    Armed Forces Americas
                  </option>
                  <option
                    data-alternate-values='["Armed Forces Europe"]'
                    value="AE"
                  >
                    Armed Forces Europe
                  </option>
                  <option
                    data-alternate-values='["Armed Forces Pacific"]'
                    value="AP"
                  >
                    Armed Forces Pacific
                  </option>
                </select>
              </div>
              <div style={{ width: "28.5%" }}>
                <input
                  type="text"
                  className={style.threeOneInp}
                  placeholder="PIN Code"
                  style={{ fontSize: "14px" }}
                />
              </div>
            </div>

            <div>
              <input
                type="number"
                placeholder="Phone"
                required
                className={style.twoInp}
                style={{ fontSize: "14px" }}
              />
            </div>

            <div className={style.onechk}>
              <input
                type="checkbox"
                style={{ height: "15px", width: "15px", fontSize: "14px" }}
              />
              <label
                htmlFor=""
                className={style.onelbl}
                style={{ fontSize: "14px" }}
              >
                Save this information for next time
              </label>
            </div>

            <div className={style.onechk}>
              <input
                type="checkbox"
                style={{ height: "15px", width: "15px" }}
              />
              <label
                htmlFor=""
                className={style.onelbl}
                style={{ fontSize: "14px" }}
              >
                Get Order Updates On WhatsApp
              </label>
            </div>

            <div className={style.btnBox}>
              <div className={style.return}>Return to Cart</div>
              <div>
                <button type="submit" className={style.Continuebtn}>
                  <Link
                    to="/shipping"
                    style={{ color: "black", fontWeight: "600" }}
                  >
                    Continue to shipping
                  </Link>
                </button>
              </div>
            </div>
          </form>

          <p className={style.underline}></p>

          <div className={style.lastBox} >
            <div className={style.color}>Refund policy</div>
            <div>Shipping policy</div>
            <div>Privacy policy</div>
            <div>Terms of service</div>
          </div>
        </div>

        <div className={style.cartBox}>  <OrderSummery CartData={CartData}/></div>
      </div>
    </div>
  );
};

