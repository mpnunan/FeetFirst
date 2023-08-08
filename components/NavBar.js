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
import { signIn, signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>
            <img src="/logoNoBG.png" width="70%" height="70%" alt="icon" className="nav-logo" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
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
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            <Button variant="outline-dark" onClick={signIn} style={{ fontFamily: 'Crimson Text', fontSize: 18 }}>
              Sign In
            </Button>
            &nbsp;
            <Button variant="outline-dark" onClick={signOut} style={{ fontFamily: 'Crimson Text', fontSize: 18 }}>
              Sign Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
