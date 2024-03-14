import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import styles from './age_button.module.css';

export default function Ages_Container(){
    return( 
    <div className="row justify-content-center">
    <div class="row">
    <div class="col-lg-4">
      <Image src = '/images/playtime.png' width = {150} height = {150}></Image>
      <h2>under 5 years old</h2>
      <p>Learn some basics before elementary school. </p>
      <p><Link className={styles.btn_secondary} id="5Y" href="5years old.html">View details &raquo;</Link></p>
    </div>
    <div class="col-lg-4">
      <Image src = '/images/student.png' width = {150} height = {150}></Image>
      <h2>7-15 year old</h2>
      <p>Learn all subjects before going to college.</p>
      <p><Link  className={styles.btn_secondary} id="715Y" href="715.html">View details &raquo;</Link></p>
    </div>
    <div class="col-lg-4">
      <Image src = '/images/student1.png' width = {150} height = {150}></Image>
      <h2>over 18 years old</h2>
      <p>Find professional knowledge for your area of study!!</p>
      <p><Link  className={styles.btn_secondary} id="18Y" href="18.html">View details &raquo;</Link></p>
    </div>
  </div>
  </div>);

};