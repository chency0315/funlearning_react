// components/Navbar.js
"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./nav-bar-buttons.module.css";

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{ backgroundColor: "orange" }}
    >
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          <Image src="/images/LOGO.png" width={100} height={60} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleCollapse}
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
          id="navbarCollapse"
        >
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a href="/">
                <div className="nav-link">
                  <button className={styles.btn}>Home</button>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <a href="/contactus">
                  <button className={styles.btn}>Contact Us</button>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
