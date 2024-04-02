"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/globals.css';
import React from 'react';
import { Container } from 'react-bootstrap';

import Link from 'next/link';
import Navbar from "../../components/navbar";
import ProgressBar from '../../components/progressbar';
import Ages_Container from '../../components/ages_container';
import PhotoCarousel from '../../components/PhotoCarousel';
import Ed_Web from '../../components/educational_websites';
import FunVideos from '../../components/fun_videos';

import Rs_Car from '../../components/rs_car';
import images_data from '../../components/images.json';
import websites_data from '../../components/web.json';
import new_styles from '../../components/nav-bar-buttons.module.css';

const images = images_data;
const websites = websites_data;

export default function HomePage() {

  const intro_title_styles={
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
  }
  return (
    <body className='body'>
      <Navbar />
      <ProgressBar />
      <div style ={{marginTop:'70px'}}>
        <PhotoCarousel images={images} />
      </div>
      <Ages_Container />
      <Container className="text-center">
        <hr className="featurette-divider"></hr>
        <h2 style = {intro_title_styles}>Explore popular websites</h2><br/>
        {/* <Web_Sliders/> */}
        <Rs_Car websities={websites}/>
        <br/>
        <hr className="featurette-divider"></hr>
        <h2 style = {intro_title_styles}>fun videos</h2><br/>
        <FunVideos/>
        <hr className="featurette-divider"></hr>
        <h2 style = {intro_title_styles}>Educational websites</h2>
      </Container>
      <Container styles={{padding:'1px'}}>
      <Ed_Web websites={websites}/>
      <footer className="container">
        <Link className=" btn float-end" href = "/"><button className={new_styles.footer_btn}>Back to top</button></Link>
        <p>&copy; FunLearning Company, Inc. &middot; <a href="/" style = {{textDecoration:"none", color:"grey"}}>About us</a></p>
      </footer>
      </Container>
    </body>
  );
}
