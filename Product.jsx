import React from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../redux/cartSlice';

const Product = ({ item }) => {
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(add(item));
  };

  return (
    
    <div className="card bg-slate-500 my-8 h-[500px] w-80 shadow-xl">
      <figure className="">
        <img src={item.image} alt={item.title} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center text-white">
        <h2 className="card-title">{item.title}</h2>
        <p>${item.price}</p>
        <div className="card-actions">
          <button className="btn btn-primary" onClick={()=>handleAdd(item)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;

