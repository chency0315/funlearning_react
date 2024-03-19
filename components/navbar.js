// components/Navbar.js
import Image from "next/image";
import Link from 'next/link';
import styles from './nav-bar-buttons.module.css';

export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: 'orange' }}>
            <div className="container-fluid collapse navbar-collapse">
                <Link href="/">
                    <Image src = '/images/LOGO.png' width = {100} height={60} className="navbar-brand" alt=""></Image>
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link href="/" className="nav-link" styles = {{textDecoration:'none'}}>
                                <button className={styles.btn}>Home</button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/" className="nav-link" styles = {{textDecoration:'none'}}>
                            <button className={styles.btn}>about</button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contactus" className="nav-link" styles = {{textDecoration:'none'}}>
                            <button className={styles.btn}>contact us</button>
                            </Link>
                        </li>
                        {/* Add more links as needed */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

