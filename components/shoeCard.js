import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { BagPlus, Heart, HeartFill } from 'react-bootstrap-icons';
import { useRouter } from 'next/router';
import { createFavoriteProduct, deleteFavoriteProduct } from '../api/favoriteData';
import { useAuth } from '../utils/context/authContext';
import { createCartProduct } from '../api/orderData';

function ShoeCard({ shoeObj, onUpdate }) {
  const { user } = useAuth();
  const router = useRouter();
  const itemClick = () => {
    if (shoeObj.id) {
      router.push(`/products/${shoeObj.id}`);
    }
  };
  const favButton = () => createFavoriteProduct(shoeObj.id, user.uid).then(() => onUpdate());
  const unFavButton = () => deleteFavoriteProduct(shoeObj.id, user.uid).then(() => onUpdate());

  const addToCart = () => createCartProduct(shoeObj.id, user.uid).then(() => onUpdate());
  // const removeFromCart = () => deleteCartProduct(shoeObj.id, user.uid).then(() => onUpdate());

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={shoeObj.image_url} alt={shoeObj.title} onClick={itemClick} style={{ height: '400px' }} />
      <Card.Body className="product-content" onClick={itemClick} style={{ marginTop: '0px' }}>
        <Card.Title className="view-btn">
          {shoeObj.title}
        </Card.Title>
      </Card.Body>
      <div className="heart-btn">
        {shoeObj.favorite ? (
          <HeartFill variant="button" fill="red" onClick={unFavButton} className="unfav" />
        )
          : (
            <Heart variant="button" onClick={favButton} className="fav" />
          )}
      </div>
      <div className="cart-btn">
        <BagPlus onClick={addToCart} className="add-cart">Add</BagPlus>
      </div>
    </Card>
  );
}

ShoeCard.propTypes = {
  shoeObj: PropTypes.shape({
    image_url: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number,
    favorite: PropTypes.bool,
    incart: PropTypes.bool,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ShoeCard;
