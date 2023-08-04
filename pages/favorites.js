import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

export default function Favorites() {
  return (

    <div id="favoritesPage" className="favorites">
      <div id="favoritesGallery" className="favorites">
        <Carousel fade>
          <Carousel.Item>
            <Image className="galleryItem" alt="Shoes" src="https://images.unsplash.com/photo-1620405116976-f735da963c02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1983&q=80" />
            <Carousel.Caption id="lightImage">
              <h3>Anywhere you want to go</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item id="galleryItem">
            <Image alt="Shoes" src="https://images.unsplash.com/photo-1604168612704-edf7120be425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2066&q=80" />
            <Carousel.Caption className="darkImage">
              <h3>We will put your best foot forward</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image className="galleryItem" alt="Shoes" src="https://images.unsplash.com/photo-1614540787345-5de0bb4ec322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2212&q=80" />
            <Carousel.Caption id="mediumImage">
              <h3>FeetFirst</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div id="favoritesContent" className="favorites">
        This is where our favorites will go. Where will you go?
      </div>
    </div>
  );
}
