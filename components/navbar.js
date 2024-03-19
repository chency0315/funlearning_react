// components/Navbar.js
import Image from "next/image";
import Link from 'next/link';
export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: 'orange' }}>
            <div className="container">
                <Link href="/">
                    <Image src = '/images/LOGO.png' width = {100} height={60} className="navbar-brand" alt=""></Image>
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link href="/" className="nav-link" styles = {{textDecoration:'none'}}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/" className="nav-link" styles = {{textDecoration:'none'}}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contactus" className="nav-link" styles = {{textDecoration:'none'}}>
                               contact us
                            </Link>
                        </li>
                        {/* Add more links as needed */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

