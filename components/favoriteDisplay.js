/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import AccordionRow from './AccordionRow';
import { useAuth } from '../utils/context/authContext';
import getFavoriteProducts from '../api/favoriteData';

export default function FavoriteDisplay() {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);

  const getFavorites = () => {
    getFavoriteProducts(user.uid).then(setFavorites);
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <Accordion>
      {favorites.map((favorite) => (
        <AccordionRow key={favorite.id} favoriteProduct={favorite} onUpdate={getFavorites} />
      ))}
    </Accordion>
  );
}
