import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { Heart, HeartFill } from 'react-bootstrap-icons';
import { createFavoriteProduct, deleteFavoriteProduct } from '../api/favoriteData';
import { useAuth } from '../utils/context/authContext';

function ShoeCard({ shoeObj, onUpdate }) {
  const { user } = useAuth();
  const favButton = () => createFavoriteProduct(shoeObj.id, user.uid).then(() => onUpdate());
  const unFavButton = () => deleteFavoriteProduct(shoeObj.id, user.uid).then(() => onUpdate());
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={shoeObj.image_url} alt={shoeObj.title} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{shoeObj.title}</Card.Title>
        <Link href={`/products/${shoeObj.id}`} passHref>
          <Button variant="primary" className="view-btn">VIEW</Button>
        </Link>
        {shoeObj.favorite ? (
          <HeartFill variant="button" onClick={unFavButton} className="unfav" />
        )
          : (
            <Heart variant="button" onClick={favButton} className="fav" />
          )}
      </Card.Body>
    </Card>
  );
}

ShoeCard.propTypes = {
  shoeObj: PropTypes.shape({
    image_url: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number,
    favorite: PropTypes.bool,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ShoeCard;
