/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../api/productData'; // Replace with your product data fetching function
import ShoeCard from '../../components/shoeCard';
// import { useAuth } from '../../utils/context/authContext';

export default function SearchResult() {
  // FUNCTION TO GET THE APP USER OBJECT
  const [searchResults, setSearchResults] = useState([]);

  const router = useRouter();
  const { searchInput } = router.query;

  const getSearchResults = () => {
    getAllProducts().then((searchResultsArray) => {
      const filterResults = searchResultsArray.filter((product) => product.title.toLowerCase().includes(searchInput)
        || product.description.toLowerCase().includes(searchInput));
      setSearchResults(filterResults);
    });
  };

  useEffect(() => {
    getSearchResults();
    return () => {
      setSearchResults([]);
    };
  }, [searchInput]);

  return (
    <div>
      <h3 className="pageheaderflexwrap">Products</h3>
      <div className="productcardcontainer">
        {searchResults.length === 0 ? (<p>No products found</p>)
          : (searchResults.map((product) => (
            <ShoeCard key={product.id} productObj={product} onUpdate={getSearchResults} />
          )))}
      </div>
    </div>
  );
}
