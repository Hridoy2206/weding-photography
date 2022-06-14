import React from 'react';
import { useNavigate } from 'react-router-dom';
import notFound from '../../../Image/notfound.jpg'

const NotFound = () => {
    const navigate = useNavigate()
    const navigateHome = () =>{
        navigate('/')
    }
    return (
        <div className='text-center mb-5 pb-5'>
            <img className='w-50 mt-5' src={notFound} alt="" />
            <div>
            <button onClick={navigateHome} className='btn btn-success'>Go to Home</button>
            </div>
        </div>
    );
};

export default NotFound;