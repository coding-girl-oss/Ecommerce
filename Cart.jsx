import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove, increment, decrement } from '../redux/cartSlice'; 
import { openModal } from '../redux/modalSlice';
import Modal from './Modal';

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart); 
    const isModalOpen = useSelector(state => state.modal); 

    const handleRemove = (id) => {
        dispatch(remove(id)); 
    };

    const handleOpenModal = () => {
        dispatch(openModal()); 
    };

    const handleIncrement = (id) => {
        dispatch(increment(id));
    };

    const handleDecrement = (id) => {
        dispatch(decrement(id));
    };

    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[80vw] mx-auto'>
            {products.length > 0 ? ( 
                products.map((product) => (
                    <div key={product.id} className="card bg-slate-500 my-8 h-[500px] w-80 shadow-xl">
                        <figure>
                            <img src={product.image} alt={product.title} className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center text-white">
                            <h2 className="card-title">{product.title}</h2>
                            <p>${product.price}</p>
                            <div className="card-actions">
                                <button className="btn bg-red-600 hover:bg-red-700 text-white" onClick={() => handleRemove(product.id)}>Remove</button>
                            </div>
                        </div>
                        <div className='flex justify-between bg-slate-600'>
                            <button className="btn btn-info" onClick={() => handleDecrement(product.id)}>-</button>
                            <p className='text-white my-3 text-1xl font-bold'>{product.quantity || 1}</p>
                            <button className="btn btn-info" onClick={() => handleIncrement(product.id)}>+</button>
                        </div>
                        <div className='flex gap-2 text-white justify-center bg-slate-600'>
                            <p>Total: </p>
                            <p>${(product.price * product.quantity).toFixed(2) || product.price}</p> 
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-white text-center">Your cart is empty.</p> 
            )}
        </div>

       
        {isModalOpen && <Modal />}

        {products.length > 0 && (
            <div className='text-center'>
                <button className="btn bg-red-600 hover:bg-red-700 text-white" onClick={handleOpenModal}>
                    Clear Cart
                </button>
            </div>
        )}
        </>
    );
};

export default Cart;



