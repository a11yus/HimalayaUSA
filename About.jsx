import React from "react";
import {Container ,Row,Col}from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import"./custom.css";
import {Story}from "./Story";

import {Footer}from "./new";
export const About=()=>{

    return (
       
        <Container>
            <figure className="position-relative">
               <img src="https://imgs.search.brave.com/tK4MYGI6VOcu7p0zHt7XTK_2DDTxFIf2ylaaN4iKVFc/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly93YWxs/dXAubmV0L3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE1LzEyLzIz/MDUwNy1wbGFudHMt/dGVhLWxhbmRzY2Fw/ZS5qcGc" className="img-fluid"/>
               <figurecaption className="fig">
               <h1>Our Story</h1>
               <p>Founded in 1930, Himalaya remains family ownes <br/>with products offered inover 100 countries.</p>
               </figurecaption>           
            </figure>
            <Story/>
            <Footer/>
        </Container>
        
         
        
    )
}

{/* <div stle={{"background-image":"url(https://cdn.pixabay.com/photo/2017/06/06/12/45/lower-kachura-lake-2377179_960_720.jpg)","background-size":"cover"}}>
                    <h1>Our Story</h1>
                    <p>Founder in 1930, Himalaya remains family ownes with products offered inover 100 countries.</p>
               </div> */}
               {/* <img style={{"width":"100%"}}src="https://cdn.pixabay.com/photo/2017/06/06/12/45/lower-kachura-lake-2377179_960_720.jpg"/> */}    