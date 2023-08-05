import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../api/productData';
import ShoeCard from '../components/ShoeCard';

export default function Shop() {
  // SET A STATE FOR THE SHOE CARDS
  const [shoes, setShoes] = useState([]);

  // API FUNCTION TO GET ALL SHOE CARDS
  const getAllShoes = () => {
    getAllProducts().then(setShoes);
  };
  console.warn(shoes);

  // API CALL TO GET ALL THE SHOES ON COMPONENT RENDER
  useEffect(() => {
    document.title = 'Feet First';
    getAllShoes();
  }, []);

  return (
    <>
      <div>Shopping Page for product catalog inventory cards</div>
      <div className="text-center my-4">
        <div className="d-flex flex-wrap">
          {/* MAPS OVER SHOES USING THE SHOECARD COMPONENT */}
          {shoes.map((shoe) => (
            <ShoeCard key={shoe.firebaseKey} shoeObj={shoe} onUpdate={getAllShoes} />
          ))}
        </div>
      </div>
    </>
  );
}
