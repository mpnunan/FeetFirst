/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import AccordionRow from './AccordionRow';
import { useAuth } from '../utils/context/authContext';
import { getFavoriteProduct } from '../api/favoriteData';

export default function FavoriteDisplay() {
  const [favorites, setFavorites] = useState([]);
  const { user } = useAuth();

  const getFavorites = () => {
    getFavoriteProduct(user.id, user.uid)
      .then(setFavorites);
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <Accordion>
      {favorites.map((favorite) => (
        <AccordionRow className="favoriteItemDesc" key={favorite.id} favoriteProduct={favorite} keyNumber={favorites.indexOf(favorite)} onUpdate={getFavorites} />
      ))}
      {console.warn(favorites)}
    </Accordion>
  );
}
