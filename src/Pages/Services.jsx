import React, { useEffect, useState } from 'react';
import useAxios from '../Hooks/useAxios';
import ServiceCard from '../Components/ServiceCard';

const Services = () => {
    const instance = useAxios();
    const [services,setServices] = useState([]);
    useEffect(()=>{
        instance.get("/services")
        .then(res => {
            setServices([...res.data]);
        })
    },[])
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                services.map(service => <ServiceCard data={service} key={service._id}/>)
            }
        </div>
    );
};

export default Services;