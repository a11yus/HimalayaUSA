import React from "react";
import { useState } from "react";
import Style from "./PaymentPage.module.css";
import { MdArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

//**********************Icons and Chakra Links********************* */
import { Radio } from "@chakra-ui/react";
import { VscCreditCard } from "react-icons/vsc";
import { Box, Collapse, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import gif from "../image/dotsLoading.gif";
import CheckoutPayment from "./CheckoutPayment";



const PaymentPage = () => {
  // const navigate = useNavigate()
  const { isOpen, onToggle } = useDisclosure();
  const { isOpen: isOpen1, onToggle: onToggle1 } = useDisclosure();

  const { isOpen: isOpen3, onToggle: onToggle3 } = useDisclosure();
  const { isOpen: isOpen4, onToggle: onToggle4 } = useDisclosure();


  const [payNow, setpayNow] = useState(false);
  const navigate = useNavigate();
  const [info,setInfo]=useState(JSON.parse(localStorage.getItem("UserInfo")));

  if (payNow) {
    setTimeout(() => {
      setpayNow(false);
      navigate("/billing");
    }, 3000);
  }


  return (
    //********************************Extreme Div Starts***************** */
    <div className={Style.PaymentContainer}>
      <div>
        {/* **********Payment Left Div Start ******************* */}
        <div className={Style.EndLeft}>
          <div className={Style.PaymentLeft}>
            <Link to="/">
              <img
                className={Style.PaymentTitle}
                src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/new-logo.png?3890"
                alt="images"
              />
            </Link>

            <ul className={Style.afterImg} style={{ listStyle: "none" }}>
              <div>Cart</div>
              <li>
                <MdArrowForwardIos />
              </li>

              <div>
                <Link to="/checkout">Information</Link>
              </div>
              <li>
                <MdArrowForwardIos />
              </li>
              <div>
                <Link to="/shipping">Shipping</Link>
              </div>
              <li>
                <MdArrowForwardIos />
              </li>
              <div>
                <Link to="/payment">Payment</Link>
              </div>
            </ul>
            <div style={{ marginTop: "-5px" }}>
              <div className={Style.PaymentContact}>
                <div>
                  <p className={Style.Div1title}>Contact</p>
                </div>
                <div>
                  <p className={Style.PaymentPara}>
                    {info ? info.email : "Fill the details"}
                
                  </p>
                </div>
                <div>
                  <p className={Style.change}>
                    <Link to="/checkout">Change</Link>
                  </p>
                </div>
              </div>
              <div className={Style.PaymentShipto}>
                <div>
                  <p className={Style.Div1title}>Ship to</p>
                </div>
                <div>
                  <p className={Style.PaymentPara}>
                    {info ? info.address : "Fill the details"}
                  
                  </p>
                </div>
                <div>
                  <p className={Style.change}>
                    <Link to="/checkout">Change</Link>
                  </p>
                </div>
              </div>
              <div className={Style.PaymentMethod}>
                <div>
                  <p className={Style.Div1title}>Method</p>
                </div>
                <div>
                  <p className={Style.PaymentPara}>Standard · Free</p>
                </div>
                <div>
                  <p className={Style.change} style={{ visibility: "hidden" }}>
                    <Link to="/checkout">Change</Link>
                  </p>
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
                      src="https://tse4.mm.bing.net/th?id=OIP.Fh3VxQRxG0ZEt2mCfL0qrwHaFj&pid=Api&P=0&w=225&h=169"
                      alt="images"
                    />
                    <img
                      className={Style.paymentCards}
                      src="https://tse3.mm.bing.net/th?id=OIP.AKgfIEQz_qXEOAAyV_0-2wHaEJ&pid=Api&P=0&w=318&h=178"
                      alt="images"
                    />
                    <img
                      className={Style.paymentCards}
                      src="https://tse4.mm.bing.net/th?id=OIP.3FY890qAiAea54EGA9EuNwHaEF&pid=Api&P=0&w=349&h=192"
                      alt="images"
                    />
                    <img
                      className={Style.paymentCards}
                      src="https://tse4.mm.bing.net/th?id=OIP.xH4KzXP59t5UuYr0fFg0iAHaEo&pid=Api&P=0&w=250&h=156"
                      alt="images"
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
                      fontSize="14px"
                    >
                      {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
                      <div className={Style.addrs}>Credit Card Details</div>

                      <div>
                        <input
                          type="number"
                          placeholder="Card Number"
                          required
                          className={Style.twoInp}
                          maxlength="19"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Name on Card"
                          required
                          className={Style.twoInp}
                          name="address"
                        />
                      </div>

                      <div className={Style.naminp}>
                        <div>
                          <input
                            required
                            type="month"
                            placeholder="Expairy date(MM/YY)"
                            className={Style.firstNam}
                          />
                        </div>
                        <div>
                          <input
                            required
                            type="password"
                            placeholder="Security code"
                            className={Style.LastNam}
                            maxLength="4"
                          />
                        </div>
                      </div>

                      {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
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

                    <a  href="https://pay.amazon.com/signin">
                      <img
                        className={Style.paytmImg}
                        src="https://cdn.shopify.com/shopifycloud/shopify/assets/checkout/offsite-gateway-logos/amazonpay@2x-6ed2b0ce5c20dfd0dc87f9363f0a57ecf9bb4e4fde26df79b3da96e6480cebd4.png"
                        alt="images"
                      />
                    </a>
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
                          <p style={{ textAlign: "center" }}>
                            You will be asked to login with Amazon.
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
                        <div className={Style.addrs}>Shipping address</div>

                        <div style={{ marginTop: "20px" }}>
                          <select
                            className={Style.slct}
                            style={{ fontSize: "14px" }}
                          >
                            <option style={{ fontSize: "14px" }} value="">
                              United States
                            </option>
                          </select>
                        </div>

                        <div className={Style.naminp}>
                          <div>
                            <input
                              type="name"
                              placeholder="First Name"
                              className={Style.firstNam}
                              style={{ fontSize: "14px" }}
                              value={info ? info.FirstName:""}
                            />
                          </div>
                          <div>
                            <input
                              type="name"
                              placeholder="Last Name"
                              className={Style.LastNam}
                              style={{ fontSize: "14px" }}
                              value={info ? info.LastName:""}
                            />
                          </div>
                        </div>

                        <div>
                          <input
                            type="address"
                            placeholder="Address"
                            required
                            className={Style.twoInp}
                            name="address"
                            value={info ? info.address:""}
                            style={{ fontSize: "14px" }}
                          />
                        </div>
                        <div>
                          <input
                            type="address"
                            placeholder="Apartment,suite,etc. (optional)"
                            required
                            className={Style.twoInp}
                            style={{ fontSize: "14px" }}
                            value={info ? info.apartment:""}
                          />
                        </div>

                        <div className={Style.threeInp}>
                          <div style={{ width: "27%" }}>
                            <input
                              type="text"
                              className={Style.threeOneInp}
                              placeholder="City"
                              style={{ fontSize: "14px" }}
                              value={info ? info.City:""}
                            />
                          </div>
                          <div style={{ width: "27.5%" }}>
                            <select
                              className={Style.threeOneInp}
                              style={{ fontSize: "14px" }}
                            >
                              <option disabled="">State</option>

                              <option
                                data-alternate-values='["Alabama"]'
                                value="AL"
                              >
                                Alabama
                              </option>
                              <option
                                data-alternate-values='["Alaska"]'
                                value="AK"
                              >
                                Alaska
                              </option>
                              <option
                                data-alternate-values='["American Samoa"]'
                                value="AS"
                              >
                                American Samoa
                              </option>
                              <option
                                data-alternate-values='["Arizona"]'
                                value="AZ"
                              >
                                Arizona
                              </option>
                              <option
                                data-alternate-values='["Arkansas"]'
                                value="AR"
                              >
                                Arkansas
                              </option>
                              <option
                                data-alternate-values='["California"]'
                                value="CA"
                              >
                                California
                              </option>
                              <option
                                data-alternate-values='["Colorado"]'
                                value="CO"
                              >
                                Colorado
                              </option>
                              <option
                                data-alternate-values='["Connecticut"]'
                                value="CT"
                              >
                                Connecticut
                              </option>
                              <option
                                data-alternate-values='["Delaware"]'
                                value="DE"
                              >
                                Delaware
                              </option>
                              <option
                                data-alternate-values='["Florida"]'
                                value="FL"
                              >
                                Florida
                              </option>
                              <option
                                data-alternate-values='["Georgia"]'
                                value="GA"
                              >
                                Georgia
                              </option>
                              <option
                                data-alternate-values='["Guam"]'
                                value="GU"
                              >
                                Guam
                              </option>
                              <option
                                data-alternate-values='["Hawaii"]'
                                value="HI"
                              >
                                Hawaii
                              </option>
                              <option
                                data-alternate-values='["Idaho"]'
                                value="ID"
                              >
                                Idaho
                              </option>
                              <option
                                data-alternate-values='["Illinois"]'
                                value="IL"
                              >
                                Illinois
                              </option>
                              <option
                                data-alternate-values='["Indiana"]'
                                value="IN"
                              >
                                Indiana
                              </option>
                              <option
                                data-alternate-values='["Iowa"]'
                                value="IA"
                              >
                                Iowa
                              </option>
                              <option
                                data-alternate-values='["Kansas"]'
                                value="KS"
                              >
                                Kansas
                              </option>
                              <option
                                data-alternate-values='["Kentucky"]'
                                value="KY"
                              >
                                Kentucky
                              </option>
                              <option
                                data-alternate-values='["Louisiana"]'
                                value="LA"
                              >
                                Louisiana
                              </option>
                              <option
                                data-alternate-values='["Maine"]'
                                value="ME"
                              >
                                Maine
                              </option>
                              <option
                                data-alternate-values='["Marshall Islands"]'
                                value="MH"
                              >
                                Marshall Islands
                              </option>
                              <option
                                data-alternate-values='["Maryland"]'
                                value="MD"
                              >
                                Maryland
                              </option>
                              <option
                                data-alternate-values='["Massachusetts"]'
                                value="MA"
                              >
                                Massachusetts
                              </option>
                              <option
                                data-alternate-values='["Michigan"]'
                                value="MI"
                              >
                                Michigan
                              </option>
                              <option
                                data-alternate-values='["Federated States of Micronesia"]'
                                value="FM"
                              >
                                Micronesia
                              </option>
                              <option
                                data-alternate-values='["Minnesota"]'
                                value="MN"
                              >
                                Minnesota
                              </option>
                              <option
                                data-alternate-values='["Mississippi"]'
                                value="MS"
                              >
                                Mississippi
                              </option>
                              <option
                                data-alternate-values='["Missouri"]'
                                value="MO"
                              >
                                Missouri
                              </option>
                              <option
                                data-alternate-values='["Montana"]'
                                value="MT"
                              >
                                Montana
                              </option>
                              <option
                                data-alternate-values='["Nebraska"]'
                                value="NE"
                              >
                                Nebraska
                              </option>
                              <option
                                data-alternate-values='["Nevada"]'
                                value="NV"
                              >
                                Nevada
                              </option>
                              <option
                                data-alternate-values='["New Hampshire"]'
                                value="NH"
                              >
                                New Hampshire
                              </option>
                              <option
                                data-alternate-values='["New Jersey"]'
                                value="NJ"
                              >
                                New Jersey
                              </option>
                              <option
                                data-alternate-values='["New Mexico"]'
                                value="NM"
                              >
                                New Mexico
                              </option>
                              <option
                                data-alternate-values='["New York"]'
                                value="NY"
                              >
                                New York
                              </option>
                              <option
                                data-alternate-values='["North Carolina"]'
                                value="NC"
                              >
                                North Carolina
                              </option>
                              <option
                                data-alternate-values='["North Dakota"]'
                                value="ND"
                              >
                                North Dakota
                              </option>
                              <option
                                data-alternate-values='["Northern Mariana Islands"]'
                                value="MP"
                              >
                                Northern Mariana Islands
                              </option>
                              <option
                                data-alternate-values='["Ohio"]'
                                value="OH"
                              >
                                Ohio
                              </option>
                              <option
                                data-alternate-values='["Oklahoma"]'
                                value="OK"
                              >
                                Oklahoma
                              </option>
                              <option
                                data-alternate-values='["Oregon"]'
                                value="OR"
                              >
                                Oregon
                              </option>
                              <option
                                data-alternate-values='["Palau"]'
                                value="PW"
                              >
                                Palau
                              </option>
                              <option
                                data-alternate-values='["Pennsylvania"]'
                                value="PA"
                              >
                                Pennsylvania
                              </option>
                              <option
                                data-alternate-values='["Puerto Rico"]'
                                value="PR"
                              >
                                Puerto Rico
                              </option>
                              <option
                                data-alternate-values='["Rhode Island"]'
                                value="RI"
                              >
                                Rhode Island
                              </option>
                              <option
                                data-alternate-values='["South Carolina"]'
                                value="SC"
                              >
                                South Carolina
                              </option>
                              <option
                                data-alternate-values='["South Dakota"]'
                                value="SD"
                              >
                                South Dakota
                              </option>
                              <option
                                data-alternate-values='["Tennessee"]'
                                value="TN"
                              >
                                Tennessee
                              </option>
                              <option
                                data-alternate-values='["Texas"]'
                                value="TX"
                              >
                                Texas
                              </option>
                              <option
                                data-alternate-values='["Virgin Islands"]'
                                value="VI"
                              >
                                U.S. Virgin Islands
                              </option>
                              <option
                                data-alternate-values='["Utah"]'
                                value="UT"
                              >
                                Utah
                              </option>
                              <option
                                data-alternate-values='["Vermont"]'
                                value="VT"
                              >
                                Vermont
                              </option>
                              <option
                                data-alternate-values='["Virginia"]'
                                value="VA"
                              >
                                Virginia
                              </option>
                              <option
                                data-alternate-values='["Washington"]'
                                value="WA"
                              >
                                Washington
                              </option>
                              <option
                                data-alternate-values='["District of Columbia"]'
                                value="DC"
                              >
                                Washington DC
                              </option>
                              <option
                                data-alternate-values='["West Virginia"]'
                                value="WV"
                              >
                                West Virginia
                              </option>
                              <option
                                data-alternate-values='["Wisconsin"]'
                                value="WI"
                              >
                                Wisconsin
                              </option>
                              <option
                                data-alternate-values='["Wyoming"]'
                                value="WY"
                              >
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
                              className={Style.threeOneInp}
                              placeholder="PIN Code"
                              style={{ fontSize: "14px" }}
                              value={info ? info.Pincode:""}
                            />
                          </div>
                        </div>

                        <div>
                          <input
                            type="number"
                            placeholder="Phone"
                            required
                            className={Style.twoInp}
                            style={{ fontSize: "14px" }}
                            value={info ? info.Phone:""}
                          />
                        </div>
                        {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
                      </Box>
                    </Collapse>
                  </div>
                </div>
              </div>

              {/* ****************************************** */}
            </div>

            <div className={Style.paymentbottmDiv}>
              <div style={{ display: "flex" }}>
                <span style={{ marginTop: "3.5px" }}>
                  <MdOutlineArrowBackIosNew />
                </span>
                <span>
                  <Link to="/checkout">Return to Information</Link>
                </span>
              </div>
              <div>
                <button
                  onClick={() => {
                    setpayNow(true);
                  }}
                  className={Style.Continuebtn}
                >
                  <Link to="/payment">
                    {payNow ? (
                      <img style={{ height: "40px" }} src={gif} alt="images"/>
                    ) : (
                      "Pay Now"
                    )}
                  </Link>
                </button>
              </div>
            </div>

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
          {/* <OrderSummery CartData={CartData} /> */}
          <CheckoutPayment/>
        </div>
        {/* **********Payment Right Div Ends ******************* */}
      </div>
    </div>
    //********************************Extreme Div Ends***************** */
  );
};

export default PaymentPage;
