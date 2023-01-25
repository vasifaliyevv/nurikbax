import React from "react";
import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import styles from './Carousel.module.css';
function ReactSimplyCarouselExample() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        autoplay={true}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            zIndex:1,
            transform:"translate(1000%,00%)",
            border: "none",
            color: "black",
            cursor: "pointer",
            fontSize: "20px",
            position:"absolute",
            height: 80,
            lineHeight: 1,
            textAlign: "center",
            width: 80,
          },
          children: <span>Next</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            zIndex:1,
            transform:"translate(-1000%,0%)",
            border: "none",
            cursor: "pointer",
            fontSize: "20px",
            height: 80,
            lineHeight: 1,
            textAlign: "center",
            width: 80,
            position:"absolute",
            color:"white"
          },
          children: <span style={{color:"black"}}> PREV</span>,
        }}
       
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
          },
        ]}
        speed={1000}
        easing="linear"
      >



        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
<div className={styles.pmain}>
<img src='https://plus.unsplash.com/premium_photo-1671734044410-e637aa7f2b1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' alt='sas'/>
<h1>Get your education</h1>
</div>
<div className={styles.pmain}>
<img width={1500} src='https://plus.unsplash.com/premium_photo-1671734044410-e637aa7f2b1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' alt='sas'/>

</div>




       
      </ReactSimplyCarousel>
    </div>
  );
}

export default ReactSimplyCarouselExample;
