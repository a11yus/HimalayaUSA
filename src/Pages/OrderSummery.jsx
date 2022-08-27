import React,{useState} from 'react';
import Style from "./OrderSummeryStyle.module.css"

const OrderSummery = ({CartData}) => {
const [sum,setSum] =useState(0);
  
for(let i=0;i<CartData.length;i++)
{
  let number = CartData[i].price
  console.log(number)
  //setSum(sum+Number(number))

}

  return (
    <div className={Style.PaymentRight}>
            {CartData.map((item)=>{
              return    <div className={Style.PaymentRight1} key={item.id}>
              <div><img src={item.images}/></div>
              <div><p>{item.name}</p></div>
              <div style={{fontWeight:"700"}}>${item.price}</div>
            </div>
            })}
           
              <hr/>
              <div className={Style.PaymentRight2}>
                <input style={{fontSize:"14px"}} placeholder="Disount code"/>
                <button>Apply</button>
              </div>
              <hr/>
              <div className={Style.PaymentRight3}>
                <div className={Style.PaymentRight31}>
                  <div style={{fontSize:"14px"}}>Subtotal</div>
                 
                  <div style={{color:"black"}}>${sum}</div>
                </div>
                <div className={Style.PaymentRight31}>
                  <div style={{fontSize:"14px"}}>Shipping</div>
                  <div style={{color:"black"}}>${0.15*+sum}</div>
                </div>
              </div>
              <hr/>
              <div className={Style.PaymentRight4}>
                <div style={{fontSize:"14px"}}>Total</div>
                <div >USD <span style={{fontWeight:"700",color:"black"}}> ${sum*1.15}</span></div>
              </div>
            
          </div>
   
  )
}

export default OrderSummery