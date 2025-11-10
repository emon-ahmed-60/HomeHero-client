import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";
import { Link } from "react-router";

const MyServices = () => {
  const instance = useAxios();
  const { user } = useAuth();
  const [myServices, setMyServices] = useState([]);
  useEffect(() => {
    instance.get(`/my-services?email=${user?.email}`).then((data) => {
      setMyServices([...data.data]);
    });
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label></label>
              </th>
              <th>Service Name</th>
              <th>Category</th>
              <th>created_at</th>
              <th>Service Update</th>
              <th>Service Delete</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myServices.map((service, idx) => (
              <tr key={service._id}>
                <th>
                  <label>{idx + 1}</label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={service.serviceImg} alt="service image" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{service.serviceName}</div>
                    </div>
                  </div>
                </td>
                <td>{service.category}</td>
                <td>{service.created_at}</td>
                <td>
                  <Link
                    to={`/my-service-card/${service._id}`}
                    className="btn btn-primary rounded-full"
                  >
                    update
                  </Link>
                </td>

                <td>
                  <button className="btn btn-primary rounded-full">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyServices;
