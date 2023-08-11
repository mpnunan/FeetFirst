/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getSingleProduct } from '../../api/productData';

export default function ViewProduct() {
  const [productDetails, setProductDetails] = useState({});
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getSingleProduct(id).then(setProductDetails);
  }, [id]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <Head>
        <title>Product Details</title>
      </Head>
      <div className="d-flex flex-column">
        <img src={productDetails.image_url} alt={productDetails.title} style={{ width: '300px' }} />
      </div>
      {/* <div className="text-black ms-5 details"> */}
      <div id="productCardDetails">
        <h1>
          {productDetails.title}
        </h1>
        <h6>{productDetails.description}</h6>
        <h3>$ {productDetails.price}</h3>
        <h6>{productDetails.added_on}</h6>
      </div>
    </div>
  );
}
