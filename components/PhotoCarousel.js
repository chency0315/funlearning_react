"use client";
import { Carousel } from 'react-bootstrap';
import Image from 'next/image';

export default function PhotoCarousel({ images }) {
  // console.log(images); // Debugging line
  return (
    <Carousel data-bs-theme="dark">
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <Image
            className="d-block w-100"
            src={image.src}
            alt={image.alt}
            width={500}
            height={500}
          />
          <Carousel.Caption>
            <h5>{image.label}</h5>
            <p>{image.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}