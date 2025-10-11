import React from 'react';
import useFetch from '../hooks/useFetch';
import ProductCard from '../components/ProductCard';

const Products = () => {
    const [products] = useFetch()
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-1 lg:gap-4 p-2 lg:p-3'>
            {
              products.map(product => <ProductCard product={product} ></ProductCard>)  
            }
        </div>
    );
};

export default Products;