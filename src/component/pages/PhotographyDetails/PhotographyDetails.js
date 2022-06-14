import React from 'react';
import studio from '../../../Image/studio.jpg'
import './PhotographyDetails.css'

const PhotographyDetails = () => {
    return (
        <div className='photography-details d-flex align-items-center row-auto'>
            <div className=' photography-image'>
                <img src={studio} alt="" />
            </div>
            <div className=' photography-info'>
                <h1>Details About My Studio</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, pariatur, dolores facere est, totam doloremque ipsa tempore in doloribus aperiam beatae sint at consequatur voluptate modi culpa veritatis excepturi reiciendis.</p>
            </div>
        </div>
    );
};

export default PhotographyDetails;