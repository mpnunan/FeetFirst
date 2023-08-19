/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { getAllProducts } from '../api/productData';
import ShoeCard from '../components/shoeCard';
import { useAuth } from '../utils/context/authContext';

export default function Shop() {
  const { user } = useAuth();
  const [shoes, setShoes] = useState([]);

  const getAllShoes = () => {
    getAllProducts(user.uid).then(setShoes);
  };
  console.warn(shoes);

  useEffect(() => {
    document.title = 'Feet First';
    getAllShoes();
  }, []);

  return (
    <>
      <Head>
        <title>Shop</title>
      </Head>
      <div className="text-center my-4">
        <div id="shopCards" className="d-flex flex-wrap">
          {shoes.map((shoe) => (
            <ShoeCard key={shoe.id} shoeObj={shoe} onUpdate={getAllShoes} />
          ))}
        </div>
      </div>
    </>
  );
}
