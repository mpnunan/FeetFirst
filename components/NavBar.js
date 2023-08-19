/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar,
  Container,
  Nav,
  Button,
} from 'react-bootstrap';
// import { signIn, signOut } from '../utils/auth';
import { Cart4 } from 'react-bootstrap-icons';
import { useRouter } from 'next/router';
import { signOut } from '../utils/auth';
import SearchBar from './SearchBar';

export default function NavBar() {
  const router = useRouter();
  const goToCart = () => {
    router.push('/cart');
  };
  return (
    <Navbar id="feetfirst-nav-outer" collapseOnSelect expand="lg" variant="light">
      <Container id="feetfirst-nav">
        <Container id="nav-left" className="nav-spacing nav-outer">
          <Link passHref href="/">
            <Navbar.Brand>
              <img src="/logoNoBG.png" width="70%" height="90%" alt="icon" className="nav-logo" />
            </Navbar.Brand>
          </Link>
        </Container>
        <Container id="nav-middle" className="nav-spacing">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav id="feetfirst-nav-inner">
              {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
              <Link passHref href="/">
                <Nav.Link style={{ fontFamily: 'Crimson Text', fontSize: 20 }}>Home</Nav.Link>
              </Link>
              <Link passHref href="/shop">
                <Nav.Link style={{ fontFamily: 'Crimson Text', fontSize: 20 }}>Shop</Nav.Link>
              </Link>
              <Link passHref href="/favorites">
                <Nav.Link style={{ fontFamily: 'Crimson Text', fontSize: 20 }}>Favorites</Nav.Link>
              </Link>
              <Link passHref href="/profile">
                <Nav.Link style={{ fontFamily: 'Crimson Text', fontSize: 20 }}>Profile</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Container id="nav-right" className="nav-outer nav-spacing">
          <SearchBar />
          <Cart4 className="cart-img-btn" style={{ fontSize: '25px', marginTop: '7px', marginRight: '7px' }} onClick={goToCart} />
          <Button variant="outline-dark" onClick={signOut} style={{ fontFamily: 'Crimson Text', fontSize: 18 }}>
            Sign Out
          </Button>
        </Container>
      </Container>
    </Navbar>
  );
}
