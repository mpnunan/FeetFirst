/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router';
import { Button, Image, Carousel } from 'react-bootstrap';
import Head from 'next/head';

function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div id="homePage" className="home-page">
        <div id="homeGallery" className="homepage">
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
      </div>
      <div className="homepage-desc-text">
        <h3><em>"The Perfect Pair..."</em></h3>
        <h5>At Feet First we truly put your feet first! Whether a night out on the town, on the trail or in your backyard, see and feel the difference our shoes make!</h5>
        <Button
          variant="dark"
          type="button"
          size="lg"
          className="edit-btn"
          onClick={() => {
            router.push('/shop');
          }}
        >
          Shop Now &rarr;
        </Button>
      </div>
    </>
  );
}

export default Home;
