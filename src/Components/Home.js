import React,{useState,useEffect} from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/img.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import About from "./About";
import Footer from "./Footer";


const Home = () => {
  const [data,setData]= useState([{}])
useEffect(()=> {
  fetch("/members").then(
    res => res.json()
  ).then(
    data => {
      setData(data)
      console.log(data)
    }
  )
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
          <button className="secondary-button" >
            Chat with Us <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
      <About/>
      <Footer/>
    </div>
  );
};

export default Home;
