import React from "react";
import SectionHeader from "../global/sectionHeader";
import mainAboutImg from "../../assets/about/about-main.jpg";
import designImg from "../../assets/about/about-1.jpg";
import designImgTwo from "../../assets/about/about-2.jpg";
import { faSketch } from "@fortawesome/free-brands-svg-icons";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Qualities from "../home/qualities/qualities";
import Testimonials from "./testimonials";
import Brands from "./brands";

const About = ({ testimonials, brands }) => {
  return (
    <>
      <SectionHeader page="About Us" pageLink="about" />
      <div className="aboutPage-container container-fluid mt-5">
        <div className="aboutPage-main container-fluid mx-auto">
          <div className="overflow-hidden">
            <img src={mainAboutImg} alt="mainAboutPage-img" />
          </div>
          <div className="aboutPage-main-txt">
            <h1>Great Design For All</h1>
            <p>
              At Ahmed Company , we create affordable designs for the modern
              home
            </p>
          </div>
        </div>
        <div className="aboutPage-designDivSec container-fluid mx-auto row mb-5">
          <div className="col-12 col-md-6 aboutPage-designDivSec-leftImg p-0 overflow-hidden">
            <img src={designImg} alt="designImg" className="w-100 h-100" />
          </div>
          <div className="col-12 col-md-6 aboutPage-designDivSec-rightTxt">
            <div className="jewlary-icon">
              <FontAwesomeIcon icon={faSketch} />
            </div>
            <div>
              <h1>Designs You Desire</h1>
            </div>
            <div>
              <p>
                We love creating furniture you want and will love for years to
                come. Our designs feature a fusion of unique styles that inspire
                us – from mid-century modern to contemporary.
              </p>
            </div>
            <button>read more</button>
          </div>
        </div>
        <Qualities />
        <div className="aboutPage-qualityDivSec container-fluid mx-auto row mb-5">
          <div className="col-12 col-md-6 aboutPage-qualityDivSec-leftTxt">
            <div className="medal-icon">
              <FontAwesomeIcon icon={faMedal} />
            </div>
            <div>
              <h1>Quality At Every Step</h1>
            </div>
            <div>
              <p>
                Rest easy. From choice materials and expert hands, to precision
                tools and tests, we ensure your product is made of hardy stuff.
              </p>
            </div>
            <button>read more</button>
          </div>
          <div className="col-12 col-md-6 aboutPage-qualityDivSec-rightImg p-0 overflow-hidden">
            <img src={designImgTwo} alt="qualityImg" className="w-100 h-100" />
          </div>
        </div>
        <Testimonials testimonials={testimonials} />
        <hr />
        <Brands brands={brands} />
      </div>
    </>
  );
};

export default About;
