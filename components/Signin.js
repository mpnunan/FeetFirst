import React from 'react';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';

// THIS COULD POTENTIALLY BE PART OF THE LANDING PAGE THAT SHOWS PRODUCTS AND UPON CLICKING A SHOP BUTTON RERENDERS A SIMILAR OR IDENTICAL VIEW TO BETTER CREATE AN AUTHENTIC SHOPPING EXPERIENCE
function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        margin: '0 auto',
        zIndex: 1,
        minHeight: '25rem',
        width: '100%',
        minWidth: '30rem',
        paddingBlock: '0 5rem',
      }}
    >
      <h1>Hi there!</h1>
      <p>Click the button to login and start shopping!</p>
      <div>
        <Button variant="primary" type="button" size="lg" style={{ width: 110 }} className="copy-btn" onClick={signIn}>
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default Signin;
