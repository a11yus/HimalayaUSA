import React from "react";
// import Slider from "react-slick";
import styles from "./Test.module.css"
  
  
  export default function Test() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

      
      return(
        <div className={styles.main_box}>
        <Slider {...settings}>
      
            <div className={styles.box_slide}>
        <h3 className={styles.fav}>"We've tried countless fluoride-free <br/> toothpastes, and this is our favourite!" </h3>
        <p className={styles.sub_heading}>Botanique complete care Toothpaste - Peppermint </p>
        </div>
        
        <div className={styles.box_slide2} >
            <h3 className={styles.fav}>"I'm amazed. I'm less irritable and tired, more calm <br/>and centered. </h3>
            <p className={styles.sub_heading}>Ashwagandha</p>
            </div>
        <div  className={styles.box_slide3}>
            <h3 className={styles.fav}>"Recommended to me by my local health food store.<br/>This product is a godSend." </h3>
            <p className={styles.sub_heading}>LiveCare</p>
        </div >
        <div  className={styles.box_slide4}>
            <h3 className={styles.fav}>"I've seen such a drastic difference in my memory,it's<br/> hard to believe"</h3>
            <p className={styles.sub_heading}>Bocapo</p>
        </div>
        <div  className={styles.box_slide5}>
            <h3 className={styles.fav}>"Other whitening  have not given me these kind <br/>of results"</h3>
            <p className={styles.sub_heading}>Botanique complete care Whitening Toothpaste - mint </p>
            </div>
        <div  className={styles.box_slide6}>
            <h3 className={styles.fav}>"Since taking this product,I have cut back considerably<br/> on sugary snacks." </h3>
            <p className={styles.sub_heading}>Gymnema</p>
        </div>
        <div  className={styles.box_slide7}>
            <h3 className={styles.fav}>"I will never use another toothpaste as long as I can get<br/> this one."</h3>
            <p className={styles.sub_heading}>Botanique complete Neeem Toothpaste  </p>
        </div>
        <div  className={styles.box_slide8}>
            <h3 className={styles.fav}>
                "I work in a supplement industry and THIS is the
                <br/> Turmeric you should use."
            </h3>
            <p className={styles.sub_heading}>Turmeric 95</p>
        </div>
        <div  className={styles.box_slide9}>
            <h3 className={styles.fav}>
               "seriously, they are the most effective cough drops<br/> ever. " 
            </h3>
            <p className={styles.sub_heading}>Koflet Lozenges </p>
        </div>
        <div  className={styles.box_slide10}>
            <h3 className={styles.fav}>
                "Can't go a day without it.A total game-changer for <br/>stress."

            </h3>
            <p className={styles.sub_heading}>Ashwagandha</p>
        </div>
        <div  className={styles.box_slide11}>
            <h3 className={styles.fav}>
            "I feel extremely focused.I was joking to myself that I<br/> feel like Einstein"
            </h3>
            <p className={styles.sub_heading}>Bocapo</p>
        </div>
        <div  className={styles.box_slide12}>
            <h3 className={styles.fav}>
                "My 3-year-old loves it and ask me if she can brush<br/> her teeth.Need I say more? " 
            </h3>
            <p className={styles.sub_heading}>Botanique kids Toothpaste - Bubble Gum</p>
        </div>

      </Slider>
      </div>
      )
}