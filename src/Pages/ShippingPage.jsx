import React from "react";
import style from "./ShippingStyle.module.css"
import { MdArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";

const ShippingPage = () => {
  return <div className={style.ShippingContainer}>
    <div className={style.ShippingContainerLeft}>
      <img className={style.ShippingLogoimage} src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/new-logo.png?3890" alt="logo" />
      <div className={style.ShippingHeaderListDiv}>
        <ul className={style.ShippingHeaderList}>
          <li>Cart</li>
          <li><MdArrowForwardIos/></li>
          <li>Information</li>
          <li><MdArrowForwardIos/></li>
          <li>Shipping</li>
          <li><MdArrowForwardIos/></li>
          <li>Payment</li>
        </ul>
      </div>

      <div className={style.ShippingTopDiv}>
        <div className={style.ShippingTopDiv1}>
        <div className={style.ShippingTopDiv21}>
            <div style={{color:"#68615b"}}>Contact</div>
            <div>Add email  </div>
          </div>
          <div style={{color:"#68615b",fontSize:"13px",cursor:"pointer"}}>Change</div>
        </div>
        <div className={style.ShippingTopDiv2}>
          <div className={style.ShippingTopDiv21}>
            <div style={{color:"#68615b"}}>Ship To</div>
            <div>Add address  </div>
          </div>
          <div style={{color:"#68615b",fontSize:"13px",cursor:"pointer"}}>Change</div>
        </div>

      </div>
       
       <p style={{fontSize:"18px",marginTop:"42px",marginBottom:"20px",textAlign:"left",lineHeight:"1.3em"}}>Shipping Method</p>
      <div className={style.ShippingBottomDiv}> 
      <div className={style.ShippingBottomDiv1}>
        <div className={style.ShippingBottomDiv21}>
            <div style={{color:"#68615b"}}><input type="radio" fontSize="14px"/></div>
            <div>Standard </div>
          </div>
          <div style={{fontSize:"13px"}}>Free</div>
        </div>

      </div>


      <div className={style.ReturnInfoDiv}>
        <div><span style={{marginTop:"3.5px"}}>< MdOutlineArrowBackIosNew /></span><span >Return to Information</span></div>
        <div><button className={style.Continuebtn}><Link to="/payment">Continue to Payment</Link></button></div>

      </div>

      <hr />
      <div className={style.refundDiv}>
        <p>Refund Policy</p>
        <p>Shipping policy</p>
      </div>
    
    </div>
    <div className={style.ShippingContainerRight}> AddCart page details</div>
  </div>;
};

export default ShippingPage;
