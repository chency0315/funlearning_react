"use client";
import Image from 'next/image';
import styles from './age_button.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

export default function Ed_Web({websites}){
  console.log(websites.src);
    return (
      websites.map((website,index) => (
        <div className="row featurette" key = {index}>
        <div className="col-md-7" style ={{textAlign:'center', padding:'150px'}}>
            <h2 class="featurette-heading fw-normal lh-1">{website.name}<br></br>
            <span class="text-muted">{website.description}</span></h2>
            <p class="lead">{website.lead_description}</p>
            <Link href = {`${website.src}`}  className={styles.btn_secondary} style={{textDecoration:'none'}}>Take me there!</Link>
        </div>
        <div className="col-md-5">
      <Image src = {website.img_src} width = {400} height ={400} style={{marginTop:'20px'}} alt =''/>
    </div>
    <hr className="featurette-divider"></hr>
  </div>
      ))
  );
}
