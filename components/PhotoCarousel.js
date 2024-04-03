"use client";
import { Carousel } from "react-bootstrap";
import Image from "next/image";
export default function PhotoCarousel({ images }) {
  return (
    <Carousel data-bs-theme="light">
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <Image
            className="d-block w-100"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
            src={image.src}
            alt={image.alt}
            width={400}
            height={600}
          />
          <Carousel.Caption>
            <h1 style={{ textShadow: "rgb(5, 4, 4) 1px 0 10px" }}>
              {image.label}
            </h1>
            <p style={{ textShadow: "rgb(5, 4, 4) 1px 0 10px" }}>
              {image.description}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
