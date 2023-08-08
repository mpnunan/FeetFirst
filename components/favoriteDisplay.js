/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import AccordionRow from './AccordionRow';
import { useAuth } from '../utils/context/authContext';
import { getAllProducts } from '../api/productData';

export default function FavoriteDisplay() {
  const [favorites, setFavorites] = useState([]);
  const { user } = useAuth();

  const getFavorites = () => {
    getAllProducts(user.uid)
      .then(setFavorites);
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <Accordion>
      {favorites.map((favorite) => (
        <AccordionRow key={favorite.id} favoriteProduct={favorite} keyNumber={favorites.indexOf(favorite)} onUpdate={getFavorites} />
      ))}
    </Accordion>
  );
}
