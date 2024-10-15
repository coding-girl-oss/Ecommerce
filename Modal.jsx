import React from 'react';
import { useDispatch } from 'react-redux';
import { clear } from '../redux/cartSlice';
import { closeModal } from '../redux/modalSlice';

const Modal = () => {
    const dispatch = useDispatch();

    const handleClear = () => {
        dispatch(clear());
        dispatch(closeModal()); 
    };

    const handleCancel = () => {
        dispatch(closeModal()); 
    };

    return (
        <div className="fixed inset-0 bg-black text-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="font-bold text-lg">Clear Cart</h3>
                <p className="py-4">Are you sure you want to clear all items from your cart?</p>
                <div className="modal-action">
                    <button className="btn bg-red-600 hover:bg-red-700 text-white" onClick={handleClear}>Clear</button>
                    <button className="btn" onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;


