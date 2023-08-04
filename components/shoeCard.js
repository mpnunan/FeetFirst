import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

function ShoeCard({ shoeObj }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={shoeObj.image_url} alt={shoeObj.title} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{shoeObj.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

ShoeCard.propTypes = {
  shoeObj: PropTypes.shape({
    image_url: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default ShoeCard;
