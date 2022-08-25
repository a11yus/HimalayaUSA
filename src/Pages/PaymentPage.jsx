import React from 'react'
import { useState , useEffect} from 'react'
import Style from "./PaymentPage.module.css";
import { MdArrowForwardIos } from "react-icons/md";

//**********************Icons and Chakra Links********************* */
import { Radio } from "@chakra-ui/react";
import { VscCreditCard } from "react-icons/vsc";
import { IoIosArrowBack } from "react-icons/io";
import { Box, Collapse, Button, useDisclosure } from "@chakra-ui/react";
// import Cart from './Cart';
import { useNavigate } from 'react-router-dom';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

const PaymentPage = () => {
  // const navigate = useNavigate()
  const { isOpen, onToggle } = useDisclosure();
  const {
    isOpen: isOpen1,
    onToggle :onToggle1
  } = useDisclosure();
 
  const {
    isOpen: isOpen3,
    onToggle :onToggle3
  } = useDisclosure();
  const {
    isOpen: isOpen4,
    onToggle :onToggle4
  } = useDisclosure();

  const [items,setItems] = useState([])

useEffect(() => {
fetch
("http://localhost:8080/shipping") 
.then((r)=>r.json())
         .then(r =>{
             console.log(r[r.length-1])   
     setItems(r[r.length-1])
         })
},[])
  return (
    //********************************Extreme Div Starts***************** */
    <div className={Style.PaymentContainer}>

      <div>
        {/* **********Payment Left Div Start ******************* */}
        <div className={Style.EndLeft}>
          
          <div className={Style.PaymentLeft}>
            <img
              className={Style.PaymentTitle}
              src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/new-logo.png?3890" alt='images'
            />
              <ul className={Style.afterImg} style={{    listStyle:"none" }}>
                    <div>Cart</div>
                    <li><MdArrowForwardIos/></li>
                    <div>Information</div>
                    <li><MdArrowForwardIos/></li>
                    <div>Shipping</div>
                    <li><MdArrowForwardIos/></li>
                    <div>Payment</div>
                </ul>
            <div>
              <div className={Style.PaymentContact}>
                <div>
                  <p className={Style.Div1title}>Contact</p>
                </div>
                <div>
                  <p className={Style.PaymentPara}>{items.email? items.email:"Fill the details"}</p>
                </div>
                <div>
                  <p className={Style.change}>Change</p>
                </div>
              </div>
              <div className={Style.PaymentShipto}>
                <div>
                  <p className={Style.Div1title}>Ship to</p>
                </div>
                <div>
                  <p className={Style.PaymentPara}>
                  {items.address? items.address:"Fill the details"}
                  </p>
                </div>
                <div>
                  <p className={Style.change}>Change</p>
                </div>
              </div>
              <div className={Style.PaymentMethod}>
                <div>
                  <p className={Style.Div1title}>Method</p>
                </div>
                <div>
                  <p className={Style.PaymentPara}>
                    Standard · Free
                  </p>
                </div>
                <div>
                  <p className={Style.change} style={{visibility:"hidden"}}>Change</p>
                </div>
              </div>
            </div>

            <div className={Style.Div2title}>
              <p style={{ fontSize: "16px" }}>Payment</p>
              <p>All transactions are secure and encrypted.</p>
            </div>
            {/* ********************1Div********************** */}
            <div className={Style.PaymentOpts}>
              <div>
                <div className={Style.radio1}>
                  <Radio
                    color="red"
                   
                    className={Style.paymentRadio}
                    onClick={onToggle}
                    position="absolute"
                  ></Radio>
                   <h3 style={{ marginLeft: "30px" }}>Credit Cards</h3>
                 
                  <div className={Style.paymentCardsDiv}>
                    <img
                      className={Style.paymentCards}
                      src="https://tse4.mm.bing.net/th?id=OIP.Fh3VxQRxG0ZEt2mCfL0qrwHaFj&pid=Api&P=0&w=225&h=169" alt='images'
                    />
                    <img
                      className={Style.paymentCards}
                      src="https://tse3.mm.bing.net/th?id=OIP.AKgfIEQz_qXEOAAyV_0-2wHaEJ&pid=Api&P=0&w=318&h=178" alt='images'
                    />
                    <img
                      className={Style.paymentCards}
                      src="https://tse4.mm.bing.net/th?id=OIP.3FY890qAiAea54EGA9EuNwHaEF&pid=Api&P=0&w=349&h=192" alt='images'
                    />
                    <img
                      className={Style.paymentCards}
                      src="https://tse4.mm.bing.net/th?id=OIP.xH4KzXP59t5UuYr0fFg0iAHaEo&pid=Api&P=0&w=250&h=156" alt='images'
                    />
                  </div>
                </div>

                <div>
                  <Collapse in={isOpen} animateOpacity>
                    <Box
                      className={Style.Paytmbox}
                      p="40px"
                      height="auto"
                      mt="4"
                      bg="#fafafa"
                      width="100%"
                      marginTop="3px"
                    >
                      <VscCreditCard className={Style.PaymentHiddenDiv} />
                      <div>
                        <p className={Style.hiddenpara}>
                          After clicking “Complete order”, you will be
                          redirected to Credit Card / Debit Card / Net Banking /
                          UPI to complete your purchase securely.
                        </p>
                      </div>
                    </Box>
                  </Collapse>
                </div>
              </div>
              {/* **********************2Div******************** */}
              <div>
                <div>
                  <div className={Style.radio1}>
                    <Radio
                      className={Style.paymentRadio}
                      onClick={onToggle1}
                      position="absolute"
                    ></Radio>
                   
                    <img
                    className={Style.paytmImg}
                    src="https://cdn.shopify.com/shopifycloud/shopify/assets/checkout/offsite-gateway-logos/amazonpay@2x-6ed2b0ce5c20dfd0dc87f9363f0a57ecf9bb4e4fde26df79b3da96e6480cebd4.png" alt='images'
                  />
                 
                  </div>

                  <div>
                    <Collapse in={isOpen1} animateOpacity>
                      <Box
                        className={Style.Paytmbox}
                        p="40px"
                        height="auto"
                        mt="4"
                        bg="#fafafa"
                        width="100%"
                        marginTop="3px"
                      >
                        <VscCreditCard className={Style.PaymentHiddenDiv} />
                        <div>
                          <p className={Style.hiddenpara}>
                            After clicking “Complete order”, you will be
                            redirected to Credit Card / Debit Card / Net Banking
                            / UPI to complete your purchase securely.
                          </p>
                        </div>
                      </Box>
                    </Collapse>
                  </div>
                </div>
              </div>

             
            </div>

            {/* ****************4Div**** */}

            <div className={Style.Div2title}>
              <p style={{ fontSize: "16px" }}>Billing address</p>
              <p>
                Select the address that matches your card or payment method.
              </p>
            </div>

            <div className={Style.PaymentOpts}>
              <div>
                <div className={Style.radio1}>
                  <Radio
                    className={Style.paymentRadio}
                    onClick={onToggle3}
                    position="absolute"
                  ></Radio>
                  <h3 style={{ marginLeft: "30px" }}>
                    {" "}
                    Same as shipping address
                  </h3>
                </div>
              </div>
              {/* ********************5Div********************** */}
              <div>
                <div>
                  <div className={Style.radio1}>
                    <Radio
                      className={Style.paymentRadio}
                      onClick={onToggle4}
                      position="absolute"
                    ></Radio>
                    <h3 style={{ marginLeft: "30px" }}>
                      {" "}
                      Use a different billing address
                    </h3>
                  </div>

                  <div>
                    <Collapse in={isOpen4} animateOpacity>
                      <Box
                        className={Style.Paytmbox}
                        p="40px"
                        height="auto"
                        mt="4"
                        bg="#fafafa"
                        width="100%"
                        marginTop="3px"
                      >
                        {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
                        <div className={Style.addrs}>
                Shipping address
                </div>

                <div style={{marginTop:"20px"}}>
                <select className={Style.slct}>
                    <option value="">India</option>
                </select>
                </div>

                <div className={Style.naminp}>
                    <div>
                        <input type="name" placeholder='First Name' className={Style.firstNam} />
                    </div>
                    <div>
                         <input type="name" placeholder='Last Name' className={Style.LastNam} />
                    </div>
                </div>

                <div>
                <input type="address" placeholder='Address' required  className={Style.twoInp}  name='address'
                />
                </div>
                <div>
                <input type="address" placeholder='Apartment,suite,etc. (optional)' required  className={Style.twoInp}/>
                </div>

                <div className={Style.threeInp}>
                    <div style={{width:"27.5%"}}>
                    <select className={Style.threeOneInp} >
                    <option >State</option>
                    <option value="AN">Andaman and Nicobar Islands</option>
                    <option value="AP">Andhra Pradesh</option>
                    <option value="AR">Arunachal Pradesh</option>
                    <option value="AS">Assam</option>
                    <option value="BR">Bihar</option>
                    <option value="CH">Chandigarh</option>
                    <option value="CT">Chhattisgarh</option>
                    <option value="DN">Dadra and Nagar Haveli</option>
                    <option value="DD">Daman and Diu</option>
                    <option value="DL">Delhi</option>
                    <option value="GA">Goa</option>
                    <option value="GJ">Gujarat</option>
                    <option value="HR">Haryana</option>
                    <option value="HP">Himachal Pradesh</option>
                    <option value="JK">Jammu and Kashmir</option>
                    <option value="JH">Jharkhand</option>
    <option value="KA">Karnataka</option>
    <option value="KL">Kerala</option>
    <option value="LA">Ladakh</option>
    <option value="LD">Lakshadweep</option>
    <option value="MP">Madhya Pradesh</option>
    <option value="MH">Maharashtra</option>
    <option value="MN">Manipur</option>
    <option value="ML">Meghalaya</option>
    <option value="MZ">Mizoram</option>
    <option value="NL">Nagaland</option>
    <option value="OR">Odisha</option>
    <option value="PY">Puducherry</option>
    <option value="PB">Punjab</option>
    <option value="RJ">Rajasthan</option>
    <option value="SK">Sikkim</option>
    <option value="TN">Tamil Nadu</option>
    <option value="TG">Telangana</option>
    <option value="TR">Tripura</option>
    <option value="UP">Uttar Pradesh</option>
    <option value="UT">Uttarakhand</option>
    <option value="WB">West Bengal</option>
                        </select>
                    </div>
                    <div style={{width:"28.5%"}}>
                    <input type="text" className={Style.threeOneInp} placeholder='PIN Code'/>
                    </div>
                </div>

                <div>
                <input type="number" placeholder='Phone' required  className={Style.twoInp} />
                </div>
                        {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
                      </Box>
                    </Collapse>
                  </div>
                </div>
              </div>

              {/* ****************************************** */}
            </div>
            <>
              <p className={Style.paymentbottmDiv}>
                <IoIosArrowBack className={Style.bcktocarticon} />
                                                                {/* ------------>  Link (back)  to cart page */}
                Return to cart      
              </p>
                                                                    {/* --------->Link (next) to Payment page */}
              <Button class={Style.PaymentCompBtn} 
              // onClick={()=> navigate("/order")}
              >Complete order</Button>
            </>
            <hr className={Style.paymentHor}></hr>
            <span className={Style.bottomFoot}>
              <p>Refund Policy</p>
              <p>Shipping policy</p>
              <p>Privacy policy</p>
              <p>Terms of service</p>
            </span>
          </div>
        </div>
        {/* **********Payment Left Div Ends ******************* */}










        {/* **********Payment Right Div Start ******************* */}
        {/* Append data here from cart page********** */}
        <div className={Style.EndRight}>
          <div className={Style.PaymentRight}>
            <h1 className={Style.AddingCartData}>Cart Product</h1>
            {/* <Cart></Cart> */}
          </div>
        </div>
        {/* **********Payment Right Div Ends ******************* */}
      </div>


    </div>
    //********************************Extreme Div Ends***************** */
  );
};

export default PaymentPage;