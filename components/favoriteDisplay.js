/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import AccordionRow from './AccordionRow';
import { useAuth } from '../utils/context/authContext';
import { findFavorites } from '../api/favoriteData';

export default function FavoriteDisplay() {
  const [favorites, setFavorites] = useState([]);
  const [num, setNum] = useState(0);
  const { user } = useAuth();

  const getFavorites = () => {
    findFavorites(user.uid)
      .then(setFavorites);
  };

  useEffect(() => {
    getFavorites();
    setNum(num + 1);
  }, []);

  return (
    <Accordion>
      {favorites?.map((favorite) => (
        <AccordionRow key={favorite.id} favoriteProduct={favorite} onUpdate={getFavorites} />
      ))}
    </Accordion>
  );
}
