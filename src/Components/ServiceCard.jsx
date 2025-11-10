import React from "react";

const ServiceCard = ({ data }) => {
  const {
    serviceName,
    category,
    description,
    serviceImg,
    created_at,
    price,
    providerName,
    email,
  } = data || {};

  return (
    <div className="card bg-base-100 shadow-sm hover:rounded-none transition duration-200 cursor-pointer hover:scale-105">
      <figure>
        <img src={serviceImg} alt={serviceName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl">{serviceName}</h2>
        <p className="text-base-content">{description}</p>
        <div className="flex items-center justify-between">
          <p>{category}</p>
          <p>{created_at}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>{providerName}</p>
          <p>{email}</p>
        </div>
        <p>Price : ${price}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
