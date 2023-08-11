/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { getAllProducts } from '../../api/productData'; // Replace with your product data fetching function
import ShoeCard from '../../components/shoeCard';
import { useAuth } from '../../utils/context/authContext';

export default function SearchResult() {
  // FUNCTION TO GET THE APP USER OBJECT
  const [searchResults, setSearchResults] = useState([]);
  const { user } = useAuth();
  const router = useRouter();
  const { searchInput } = router.query;

  const getSearchResults = () => {
    getAllProducts(user.uid).then((searchResultsArray) => {
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
      <Head>
        <title>Search</title>
      </Head>
      <h4 className="pageheaderflexwrap">Here are the results...</h4>
      <div className="productcardcontainer">
        {searchResults.length === 0 ? (<p>No items found</p>)
          : (searchResults.map((product) => (
            <ShoeCard key={product.id} shoeObj={product} onUpdate={getSearchResults} />
          )))}
      </div>
    </div>
  );
}
