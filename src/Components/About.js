import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/img2.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Importance of mental health
        </h1>
        <p className="primary-text">
        Your mental health is an important part of your well-being. 
        This aspect of your welfare determines how you’re able to operate 
        psychologically, emotionally, and socially among others. </p>
        <p className="primary-text">
        Considering how much of a role your mental health plays in each 
        aspect of your life, it's important to guard and improve psychological 
        wellness using appropriate measures.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button"><a href="https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response">Learn More</a></button>
          {/* <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
