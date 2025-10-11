import React from 'react';
import { Link } from 'react-router';
import ProductCard from '../components/ProductCard';
import useFetch from '../hooks/useFetch';

const Home = () => {
    const [allProducts] = useFetch();
    const products = allProducts.slice(0,8);
    return (
        <div>
            <div className='flex justify-between px-4 py-3'>
                <h1 className=' text-lg font-semibold px-3 text-red-500'>Product Features</h1>
                <Link to='/products' className=' btn btn-outline text-lg font-semibold px-3 text-red-500'>See All Products</Link>
            </div>
                    
        <div className='grid grid-cols-4 gap-4 p-3'>
            {
                products.map(product => <ProductCard product={product}></ProductCard>)
            }
        </div>
        </div>
    );
};

export default Home;