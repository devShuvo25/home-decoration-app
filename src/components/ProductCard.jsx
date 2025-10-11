import React from 'react';

const ProductCard = ({product}) => {
    const {name,categories,price,image,material} = product;
    return (
<div className="card bg-base-100  shadow-sm ">
  <figure>
    <img className='h-[200px] w-full p-2 rounded-xl'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{material}</p>
    <p>{categories}</p>
    <span className='text-xl font-bold'>{price}</span>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
    );
};

export default ProductCard;