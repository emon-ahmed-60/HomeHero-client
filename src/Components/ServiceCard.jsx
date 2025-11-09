import React from 'react';

const ServiceCard = ({data}) => {
    console.log(data);
    return (
        <div className="card bg-base-100 shadow-sm hover:rounded-none transition duration-200 cursor-pointer hover:scale-105">
  <figure>
    <img
      src={data.serviceImg}
      alt={data.serviceName} />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-xl">{data.serviceName}</h2>
    <p className='text-base-content'>{data.description}</p>
    <div className='flex items-center justify-between'>
        <p>category : {data.category}</p>
        <p>{data.created_at}</p>
    </div>
   
  </div>
</div>
    );
};

export default ServiceCard;