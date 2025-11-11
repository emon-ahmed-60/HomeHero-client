import React from "react";
import { Link } from "react-router";

const ServiceCard = ({ data }) => {
  const {
    serviceName,
    _id,
    description,
    serviceImg,
    price
  
  } = data || {};

  return (
    <div className="card bg-base-100 shadow-sm hover:rounded-none transition duration-200 cursor-pointer hover:scale-105">
      <figure>
        <img src={serviceImg} alt={serviceName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl">{serviceName}</h2>
        <p className="text-base-content font-semibold">{description}</p>
        <p className="text-base-content font-semibold text-lg">${price}</p>
       <Link to={`/service-details/${_id}`} className="btn btn-primary">View Details</Link>
      </div>
    </div>
  );
};

export default ServiceCard;
