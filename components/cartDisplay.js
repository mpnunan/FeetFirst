/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { getCartProducts, getOrdersByUser } from '../api/orderData';
import CartAccordion from './CartAccordion';

export default function CartDisplay() {
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
    <Accordion>
      {cartProducts.map((cartItem) => (
        <CartAccordion className="favoriteItemDesc" key={cartItem.id} cartProduct={cartItem} keyNumber={cartProducts.indexOf(cartItem)} onUpdate={getCartItems} />
      ))}
      {console.warn(cartProducts)}
    </Accordion>
  );
}
