import React from "react";
import Slider from "react-slick";
import styles from "./DisplaySlider.module.css"
import { BsHandbag} from 'react-icons/bs';

    // import "~slick-carousel/slick/slick.css"; 
    // import "~slick-carousel/slick/slick-theme.css";

   export default function SimpleSlider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      <div className={styles.slider} >
        <h2 className={styles.best}>Best Sellers</h2>
        <div className={styles.simply} >
      <Slider {...settings}>
      <div>
      <img src="https://cdn.shopify.com/s/files/1/0399/1728/9633/products/organic-ashwagandha-119670_800x.png?v=1660858343" width="290px"/>
      <p className={styles.live}> Livecare ®</p>
      <div className={styles.gi} >
      <div className={styles.gray}>
      <p className={styles.icon}><BsHandbag  color="white" size="35px"/></p>
      <p className={styles.hidden}>Add To Cart</p>
      </div>
      <p className={styles.dollar}> $14.95</p>
      </div>
      </div>
      <div>
       <img src="https://cdn.shopify.com/s/files/1/0399/1728/9633/products/simply-mint-whitening-toothpaste-687185_800x.png?v=1660858335"   width="290px" />
      <p  className={styles.live}>Immuno Care ®</p>
      <div className={styles.gi} >
      <div className={styles.gray}>
      <p className={styles.icon}><BsHandbag  color="white" size="35px"/></p>
      <p className={styles.hidden}>Add To Cart</p>
      </div>
      <p className={styles.dollar}> $24.95</p>
      </div>
      </div>
      <div>
       <img src="https://cdn.shopify.com/s/files/1/0399/1728/9633/products/livercare-524140_800x.png?v=1660858343"  width="290px"  />
      <p  className={styles.live}>Neem & Pomegranate Original ToothPaste</p>
      <div className={styles.gi} >
      <div className={styles.gray}>
      <p className={styles.icon}><BsHandbag  color="white" size="35px"/></p>
      <p className={styles.hidden}>Add To Cart</p>
      </div>
      <p className={styles.dollar}> $5.99</p>
      </div>
      </div>
      <div>
       <img src="https://cdn.shopify.com/s/files/1/0399/1728/9633/products/organic-amla-944817_800x.png?v=1660858354"   width="290px" />
      <p  className={styles.live}>Organic Amla</p>
      <div className={styles.gi} >
        <div className={styles.gray}>
      <p className={styles.icon}><BsHandbag  color="white" size="35px"/></p>
      <p className={styles.hidden}>Add To Cart</p>
      </div>
      <p className={styles.dollar}> $19.95</p>
      </div>
      </div>
      <div>
        <img src="https://cdn.shopify.com/s/files/1/0399/1728/9633/products/organic-bitter-melon-139522_800x.png?v=1660858343"   width="290px" />
      <p  className={styles.live}>Organic Bitter Melon</p>
      <div className={styles.gi} >
      <div className={styles.gray}>
      <p className={styles.icon}><BsHandbag  color="white" size="35px"/></p>
      <p className={styles.hidden}>Add To Cart</p>
      </div>
      <p className={styles.dollar}> $12.95</p>
      </div>
      </div>
      <div >
      <img src="https://cdn.shopify.com/s/files/1/0399/1728/9633/products/organic-gymnema-953558_800x.png?v=1660813421"    width="290px" />
      <p  className={styles.live}>Organic Gymnema</p>
      <div className={styles.gi} >
      <div className={styles.gray}>
      <p className={styles.icon}>< BsHandbag   color="white" size="35px"/></p>
      <p className={styles.hidden}>Add To Cart</p>
      </div>
      <p className={styles.dollar}> $14.95</p>
      </div>
      </div>
      <div>
        <img src="https://cdn.shopify.com/s/files/1/0399/1728/9633/products/organic-ashwagandha-119670_800x.png?v=1660858343" width="290px"/>
         <p  className={styles.live}>Organic Ashwagandha</p>
         <div className={styles.gi} >
         <div className={styles.gray}>
      <p className={styles.icon}><BsHandbag color="white" size="35px"/></p>
      <p className={styles.hidden}>Add To Cart</p>
      </div>
      <p className={styles.dollar}> $14.95</p>
      </div>
      </div>
      <div>
        <img src="https://cdn.shopify.com/s/files/1/0399/1728/9633/products/simply-mint-whitening-toothpaste-687185_800x.png?v=1660858335" width="290px"/>
        <p  className={styles.live}>Simply Mint Whitening ToothPaste</p>
        <div className={styles.gi} >
        <div className={styles.gray}>
      <p className={styles.icon}><BsHandbag color="white" size="35px"/></p>
      <p className={styles.hidden}>Add To Cart</p>
      </div>
      <p className={styles.dollar}> $5.99</p>
      </div>
      </div>
    </Slider>
    </div>
    </div>
   
    );
  }