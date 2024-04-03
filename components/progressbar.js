"use client";
import React, { useEffect, useState } from "react";
export default function ProgressBar() {
  const [scrollPercentage, setscrollPercentage] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;
      const scrollPercentage =
        (scrollY / (documentHeight - windowHeight)) * 100;
      setscrollPercentage(scrollPercentage);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div
      id="progress-container"
      style={{
        height: "15px",
        width: "100%",
        backgroundColor: "transparent",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        marginTop: "80px",
      }}
    >
      <div
        className="progress-fill"
        style={{
          height: "100%",
          background: "linear-gradient(to right, #ff0000, #ffff00)",
          width: `${scrollPercentage}%`,
        }}
      ></div>
    </div>
  );
}
