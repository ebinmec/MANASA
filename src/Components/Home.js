import React,{useState,useEffect} from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/img.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import About from "./About";
import Footer from "./Footer";
import Quotes from "./Quotes";
const Home = () => {
  const [data,setData]= useState([{}])
useEffect(()=> {
  fetch("/members")
  .then(response => response.text())
  .then(data => console.log(data))
},[])
console.log(data)
  return (
    
    <div className="home-container">
      <Navbar />
      
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Welcome! 
          </h1>
          <p className="primary-text">
          MANASA provides personalized support and resources to help you manage stress, anxiety, and other mental health concerns, so you can feel your best.
          </p>
          <a href="http://127.0.0.1:4000/"><button className="secondary-button" >
            Chat with Us <FiArrowRight />{" "}
          </button></a>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
      <Quotes/> 
      <About/>
      <Footer/>
    </div>
  );
};

export default Home;
