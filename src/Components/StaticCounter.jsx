import React from "react";
import useAuth from "../Hooks/useAuth";

const StaticCounter = () => {
  const { theme } = useAuth();
  return (
    <section
      className={`py-16 ${theme === "light" ? "bg-white" : "bg-gray-800"} mt-12 mb-8`}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <h3 className="text-4xl font-bold text-blue-600">500+</h3>
          <p
            className={`${
              theme === "light" ? "text-gray-600" : "text-gray-300"
            }`}
          >
            Verified Experts
          </p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-blue-600">10k+</h3>
          <p
            className={`${
              theme === "light" ? "text-gray-600" : "text-gray-300"
            }`}
          >
            Happy Customers
          </p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-blue-600">15k+</h3>
          <p
            className={`${
              theme === "light" ? "text-gray-600" : "text-gray-300"
            }`}
          >
            Services Done
          </p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-blue-600">4.9/5</h3>
          <p
            className={`${
              theme === "light" ? "text-gray-600" : "text-gray-300"
            }`}
          >
            Average Rating
          </p>
        </div>
      </div>
    </section>
  );
};

export default StaticCounter;
