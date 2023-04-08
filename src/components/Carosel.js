import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import target from "../icons/target-goals-icon.png";
import target1 from "../icons/thumbtack-icon.png";
import target2 from "../icons/reainbow-icon.png";
import target3 from "../icons/writer-blogger-author-female-icon.png";

function Carosel(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="container">
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={2000}
         autoPlay={props.deviceType !== "mobile" ? true : false}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        <div>
          {" "}
          <img className="icons" src={target} />
          <h4 className="get">Choose Your Local Targeting</h4>{" "}
          <p className="paras">
            Our targeted and tracked calls are tailored to your buisness
            need,audience and geolocation.
          </p>
        </div>
        <div>
          <img className="icons" src={target1} />
          <h4 className="get">Track Your Conversion</h4>
          <p className="paras">
            We use the most progressive tracking and analytics to ensure that
            every call cam be tracked and evaluated.
          </p>
        </div>
        <div>
          <img className="icons" src={target2} />
          <h4 className="get">Customized Campign</h4>
          <p className="paras">
            Audiences,budgets and goals : you decide the creteria for your
            digital ad campaign,and we'll do the rest.
          </p>
        </div>
        <div>
          {" "}
          <img className="icons" src={target3} />
          <h4 className="get">Get Dedicated Team Support</h4>
          <p className="paras">
            We constantly monitor quality control! Our affiliate network of
            publishers are digital ad experts that have been vetted.
          </p>
        </div>
        <div>
          <img className="icons" src={target2} />
          <h4 className="get">Quality assurance</h4>
          <p className="paras">
            We constantly monitor quality control! Our affiliate network of
            publishers are digital ad experts that have been vetted.
          </p>
        </div>
      </Carousel>
    </div>
  );
}

export default Carosel;
