import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Course from "../components/Course";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Course></Course>
      <Footer></Footer>
    </>
  );
};

export default Home;
