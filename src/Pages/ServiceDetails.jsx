import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import useAxios from "../Hooks/useAxios";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";

const ServiceDetails = () => {
    const {user} = useAuth();
  const [service, setService] = useState(null);
  const instance = useAxios();
  const { id } = useParams();
  const bookRef = useRef(null);
  useEffect(() => {
    instance.get(`/my-services/${id}`).then((res) => {
      setService(res.data);
    });
  }, [id]);
  const {
    serviceName,
    category,
    providerName,
    email,
    created_at,
    description,
    price,
    serviceImg,
    _id
  } = service || {};

  const handleBookModal = () => {
    bookRef.current.showModal();
  };

  const handleAddBooking = (e) => {
    e.preventDefault();
    const bookingName = e.target.service.value;
    const price = e.target.price.value;
    const bookingDate = new Date()
    const userEmail = e.target.email.value;
    const serviceId = _id

    if(userEmail === email){
      bookRef.current.close();
      return toast.error("this is your own service")
    }

    const newBooking = {bookingName,price,bookingDate,userEmail,serviceId}
    
    instance.post("/add-booking",newBooking)
    .then(res => {
      toast.success("Booking created")
    }).catch(err => {
      toast.error(err.code)
    })
    bookRef.current.close();
  }

  return (
    <div className="flex flex-col lg:flex-row gap-5 bg-base-100 shadow-sm">
      <figure className="mx-auto">
        <img src={serviceImg} alt={serviceName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{serviceName}</h2>
        <p className="text-base-content font-semibold">{description}</p>
        <p className="text-base-content font-semibold">category : {category}</p>
        <p className="text-base-content font-semibold">
          created_at : {created_at}
        </p>
        <p className="text-base-content font-semibold">
          providerName : {providerName}
        </p>
        <p className="text-base-content font-semibold">email : {email}</p>
        <p className="text-base-content font-semibold">price : ${price}</p>
        <button onClick={handleBookModal} className="btn btn-primary">
          Book Now
        </button>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog
        id="my_modal_5"
        ref={bookRef}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="font-bold text-3xl text-base-content text-center mt-4">
                Add Booking
              </h1>
              <form onSubmit={handleAddBooking}>
                <fieldset className="fieldset">
                  <label className="label">Service Name</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="service name"
                    name="service"
                    readOnly
                    defaultValue={service?.serviceName}
                  />
                  
                  <label className="label">Service Price</label>
                  <input
                    type="number"
                    className="input"
                    placeholder="Price"
                    name="price"
                    readOnly
                    defaultValue={service?.price}
                  />
                                   
                  
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    name="email"
                    readOnly
                    defaultValue={user?.email}
                  />

                  <button className="btn btn-neutral mt-4">
                    Confirm Booking
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ServiceDetails;
