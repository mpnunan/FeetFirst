import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Carousel, Image } from 'react-bootstrap';
import Footer from '../components/Footer';
import CartDisplay from '../components/cartDisplay';
import { useAuth } from '../utils/context/authContext';
import { getCartProducts, getOrdersByUser } from '../api/orderData';

export default function Cart() {
  const [cartProducts, setCartProducts] = useState([]);

  const { user } = useAuth();

  const getCartItems = () => {
    getOrdersByUser(user.id, user.uid);
    getCartProducts(user.id, user.uid)
      .then(setCartProducts);
    console.warn(cartProducts);
  };

  useEffect(() => {
    // getUserOrder();
    getCartItems();
  }, [user.id]);

  return (
    <div id="favoritesPage" className="favorites">
      <Head>
        <title>Cart</title>
      </Head>
      <div id="favoritesGallery" className="favorites">
        <Carousel fade>
          <Carousel.Item>
            <Image className="galleryItem" src="/pano-city-waterfront.png" />
            <Carousel.Caption id="darkImage">
              <Image className="gallery-shoes" src="/womens-boots-nobg.png" width="35%" height="auto" />
              <h1 id="darkImage">Ruggedly stylish</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image className="galleryItem" alt="Shoes" src="https://images.unsplash.com/photo-1620405116976-f735da963c02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1983&q=80" />
            <Carousel.Caption id="lightImage">
              <Image className="gallery-shoes" src="/brown-mountain-boots-nobg.png" width="30%" height="auto" />
              <h1 id="lightImage">Anywhere you want to go</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image className="galleryItem" alt="Shoes" src="https://images.unsplash.com/photo-1604168612704-edf7120be425?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2066&q=80" />
            <Carousel.Caption id="darkImage">
              <Image className="gallery-shoes" src="/green-water-shoes-nobg.png" width="35%" height="auto" />
              <h1 id="darkImage">Let us put your best foot forward</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image className="galleryItem" alt="Shoes" src="https://images.unsplash.com/photo-1505521216430-8b73b2067df0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" />
            <Carousel.Caption>
              <Image className="gallery-shoes" src="/salomon-boots-nobg.png" width="30%" height="auto" />
              <h2 id="mediumImage">FeetFirst</h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div id="favoritesAccordion">
        <CartDisplay />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
