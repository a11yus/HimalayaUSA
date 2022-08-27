import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import axios from "axios";
import { HStack, VStack, Text, Box, Image, Button } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineDelete } from 'react-icons/ai';
import { IoIosArrowUp } from "react-icons/io";


const CartPage = () => {

  const success = () => toast.success("Item Deleted from Cart");
  const [showButton, setShowButton] = useState(false);

    const [cartData, setCartData]= useState([])
    const navigate= useNavigate()

    const fetchCartFunction = () => {
        axios.get(`https://my-himalayausa-project.herokuapp.com/cart`)
        .then((res)=>setCartData(res.data))
        .catch((err)=>console.log(err))
    }

    const handleProceedCheckout = () => {
        alert("Procceding to checkout")
        navigate("/checkout");
        
    }

    const backToProductPage = () => {
        navigate("/");
        }

    const handleCartItemDelete = (id) => {
        axios.delete(`https://my-himalayausa-project.herokuapp.com/cart/${id}`)
        success()
    }

    const handleChangeQuantity = (x, id, y) => {
        
            axios.patch(`https://my-himalayausa-project.herokuapp.com/cart/${id}`,{
            count : y + x
        })
        // .then((res)=>setCartData(res.data))
        // .catch((err)=>console.log(err))
        fetchCartFunction()
    }

    const deleteAll = () => {
        cartData.forEach((elm) => {
            axios
            .delete(`https://my-himalayausa-project.herokuapp.com/cart/${elm.id}`)
        })
        setCartData([]);
     }


    let total_price = 0;
        
        for( let i = 0; i < cartData.length; i++ ) {
            total_price += (cartData[i].Price * cartData[i].count);
        }

    useEffect(() => {
        fetchCartFunction();
    },[cartData])


    useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.pageYOffset > 300) {
            setShowButton(true);
          } else {
            setShowButton(false);
          }
        });
      }, []);

      
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

    return (
        <>
        <VStack padding="2%" w="100%" >
            <Box>
                <Text fontSize="4xl" fontWeight="semibold" >Shopping Cart</Text>
            </Box>
            <VStack w="100%" padding="3%"  >
                {
                    cartData.length > 0 && cartData.map(({Img, Name, id, Price, count}) => {
                        return(
                            <div className={styles.cartBox_any} key={id}>

                                <Button 
                                bg= "white" 
                                onClick={()=>handleCartItemDelete(id)} 
                                >
                                    <AiOutlineDelete size="4rem" />
                                </Button>

                                <Box 
                                width= "200px"
                                marginRight= "2rem"
                                >
                                    <Image 
                                    height= '200px'
                                    width= '200px' 
                                    src={Img} 
                                    />
                                </Box>

                                <Box
                                fontSize="2xl" 
                                textAlign="left" 
                                marginLeft= "10rem"
                                width= "300px"
                                fontWeight="600" 
                                >
                                    <Text>
                                        {Name}
                                    </Text>
                                </Box>

                                <Box>
                                    <Text 
                                    fontSize="2xl" 
                                    color="#a3b49b"
                                    fontWeight="600"
                                    >
                                        $ {Price}
                                    </Text>
                                </Box>

                                <HStack 
                                bg= "#f8f8f8"
                                borderRadius= "1.5rem"
                                >
                                    <Button
                                    bg="none"
                                    fontSize="4xl" 
                                    fontWeight="200"
                                    onClick={ () => { if (count > 1)
                                    {
                                        handleChangeQuantity(-1, id, count)
                                    }}} 
                                        >
                                            -
                                        </Button>

                                    <Text fontSize="2xl">
                                        {count}
                                    </Text>

                                    <Button 
                                    bg="none"
                                    fontSize="3xl" 
                                    fontWeight="200"
                                    onClick={()=>{if(count<4){handleChangeQuantity(+1, id, count)}}} >
                                        +
                                        </Button>
                                </HStack>

                                <Box>
                                    <Text 
                                    fontSize="2xl" 
                                    color="#a3b49b"
                                    fontWeight="600" 
                                    >
                                        $ {(Price * count).toFixed(2)}
                                    </Text>
                                </Box>
                            </div>
                        )
                    })
                }
            </VStack>

            <HStack spacing='50rem'>
            <Box>
                <Button
                marginBottom= '2rem'
                bg = 'none'
                onClick={backToProductPage}
                >
                    ＜ Continue Shopping
                </Button>
            </Box>

            <Box>
                <Button
                marginBottom= '2rem'
                bg = 'none'
                onClick={() => deleteAll()}
                >
                    <AiOutlineDelete size="2rem" />
                    Clear Shopping Cart
                </Button>
            </Box>
            </HStack>

            <VStack 
            bg="#66765f" 
            w="100%" 
            padding="3%" 
            width= "600px"
            height= "230px"
            color= "white"
            display= "flex"
            justify-content= "right"
            >
                {/* <Box><Text fontSize="2xl" >Items added : {cartData.length}</Text></Box> */}
                <Box><Text fontSize="2xl" fontWeight="500">Subtotal: $ {total_price.toFixed(2)}</Text>
                </Box>

                <Box><Text 
                fontWeight="600" 
                fontSize="4xl"
                 
                >Grand Total: $ {total_price.toFixed(2)}</Text>
                </Box>

                <Button 
                size="lg" 
                bg="#a3b49b" 
                color="white" 
                width="95%"
                className={styles.checkoutBtn}
                onClick={handleProceedCheckout} >
                    PROCEED TO CHECKOUT
                </Button>
            </VStack>

            <Box 
            style=
            {{ 
                marginRight: '44rem',
                marginTop: '2rem',
                borderTop: '1px solid #e9e7e7',
                width: '124rem',
                paddingRight: '3rem',
                paddingTop: '2rem',
                fontSize: "1.6rem",
                fontWeight: "600" 
            }}
            >
                <h1>You May Be Interested in These Products</h1>
            </Box>
        </VStack>

        <Button 
        style=
        {{
            marginLeft: '72rem',
            backgroundColor: '#66765f',
            color: 'white',
            height: '3.5rem'
        }}
        onClick={scrollToTop}
        >
          <IoIosArrowUp size="32"/>
        </Button>

        <ToastContainer />
        </>
    )
}
export default CartPage;