import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import style from "./BillingStyle.module.css";
import gif from "../image/gift-box.gif";

const BillingPage = () => {
  var seq = (Math.floor(Math.random() * 10000000000000) + 1000000000000)
    .toString()
    .substring(1);
  var reference = (Math.floor(Math.random() * 10000000000000) + 1000000000000)
    .toString()
    .substring(1);

  var dt = new Date();
  dt.setDate(dt.getDate() + 5);

  const [check, setCheck] = useState(dt.toString());
  console.log(check);


  const [animation,setAnimation] =useState(true);
  setTimeout(() => {
    setAnimation(false);
    
  }, 4000);


  return (
    <div className={style.BillingContainer}>
      {/* <img alt="gif" src={gif} style={{height:"500px"}}/> */}
     {animation ?    <img alt="gif" src={gif} style={{height:"500px"}}/>:   <>
     <div className={style.BillingContainerLeft}>
        <div className={style.successfulDiv}>
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.c0fNDjlEjTOz22FQl4cfLwAAAA&pid=Api&P=0"
            alt=""
          />
          <br />
          <h2>Payment Successfull</h2>
          <h3>Your Order of ${500} is Placed </h3>
        </div>

        <div className={style.BillingButton}>
          {" "}
          <Button
            p="1.5rem"
            borderRadius="5px"
            bg="
#3bb549 "
          >
            Go To My Order
          </Button>
        </div>
      </div>
      <div className={style.BillingContainerRight}>
        <div className={style.BillingContainerRight1}>
          <div>
            <div>
              {" "}
              <p>Order ID:</p>
            </div>
            <div style={{ color: "gray" }}>
              {" "}
              <p>{seq}</p>
            </div>
          </div>
          <div>
            <div>
              {" "}
              <p>Payment Ref. Number -</p>
            </div>
            <div style={{ color: "gray" }}>
              {" "}
              <p>{reference}</p>
            </div>
          </div>
        </div>
        <div className={style.BillingContainerRight2}>
          <div style={{ fontWeight: "bolder" }}>Order Details</div>
          <div className={style.BillingContainerRightTop}>
            <div>order Date & Time</div>
            <div>Mode of Payment</div>
          </div>
          <div className={style.BillingContainerRightBottom}>
            <div style={{ color: "gray", fontSize: "12px" }}>{check}</div>

            <div style={{ fontWeight: "bold" }}>ONLINE</div>
          </div>
        </div>
        <p>
          {" "}
          Your order has been placed successfully. We will confirm the order in
          a few minutes.
        </p>
      </div>
      </>}
  
    </div>
  );
};

export default BillingPage;
