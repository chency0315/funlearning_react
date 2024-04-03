"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "../app/globals.css";
import React from "react";
import { Container } from "react-bootstrap";

import Link from "next/link";
import Navbar from "../../components/navbar";
import ProgressBar from "../../components/progressbar";
import AgesContainer from "../../components/agesContainer";
import PhotoCarousel from "../../components/photoCarousel";
import Ed_Web from "../../components/educationalWebsites";
import FunVideos from "../../components/funVideos";

import Rs_Car from "../../components/RsCar";
import images_data from "../../components/images.json";
import websites_data from "../../components/web.json";
import new_styles from "../../components/nav-bar-buttons.module.css";

const images = images_data;
const websites = websites_data;
export default function HomePage() {
  const intro_title_styles = {
    fontFamily: "Arial",
    textAlign: "center",
    fontSize: "45px",
    textTransform: "uppercase",
    fontWeight: "bolder",
    wordSpacing: "12px",
    color: "rgba(0,0,0,0.5)",
    padding: "20px",
    marginTop: "30px",
    marginBottom: "-30px",
  };
  return (
    <body className="body">
      <Navbar />
      <ProgressBar />
      <div style={{ marginTop: "70px" }}>
        <PhotoCarousel images={images} />
      </div>
      <AgesContainer/>
      <Container className="text-center">
        <hr className="featurette-divider"></hr>
        <h2 style={intro_title_styles}>Explore popular websites</h2>
        <br />
        <Rs_Car />
        <br />
        <hr className="featurette-divider"></hr>
        <h2 style={intro_title_styles}>fun videos</h2>
        <br />
        <FunVideos />
        <hr className="featurette-divider"></hr>
        <h2 style={intro_title_styles}>Educational websites</h2>
      </Container>
      <Container styles={{ padding: "1px" }}>
        <Ed_Web websites={websites}/>
        <footer className="container">
          <Link className={`btn ${new_styles.footer_btn} float-end`} href="/">
            back to top
          </Link>
          <p>
            &copy; FunLearning Company, Inc. &middot;
            <a href="/" style={{ textDecoration: "none", color: "grey" }}>
              About us
            </a>
          </p>
        </footer>
      </Container>
    </body>
  );
}
