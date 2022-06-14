import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    
    useEffect(()=>{
        fetch('serviceData.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='text-center my-5 container'>
            <h2 className='m-4'>Our Services</h2>
            <div className='cart-group'>
                {
                    services.slice(0, 3).map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;