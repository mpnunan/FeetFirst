import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import Footer from '../components/Footer';

export default function Favorites() {
  return (
    <div id="favoritesPage" className="favorites">
      <div id="favoritesGallery" className="favorites">
        <Carousel fade>
          <Carousel.Item>
            <Image className="galleryItem" alt="Shoes" src="https://images.unsplash.com/photo-1620405116976-f735da963c02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1983&q=80" />
            <Carousel.Caption id="lightImage">
              <h3 id="lightImage">Anywhere you want to go</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image className="galleryItem" alt="Shoes" src="https://images.unsplash.com/photo-1604168612704-edf7120be425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2066&q=80" />
            <Carousel.Caption id="darkImage">
              <h3 id="darkImage">Let us put your best foot forward</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image className="galleryItem" alt="Shoes" src="https://images.unsplash.com/photo-1505521216430-8b73b2067df0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" />
            <Carousel.Caption>
              <h2 id="mediumImage">FeetFirst</h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div id="favoritesContent" className="favorites">
        <h6>This is where your favorites will go. Where will you go?</h6>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
