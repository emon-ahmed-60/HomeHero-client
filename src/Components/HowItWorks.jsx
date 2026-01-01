import React from "react";
import useAuth from "../Hooks/useAuth";

const HowItWorks = () => {
  const { theme } = useAuth();
  return (
    <section
      className={`py-16 ${theme === "light" ? "bg-gray-50" : "bg-gray-900"} mt-12 mb-8`}
    >
      <div className="mx-auto px-6 text-center">
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
              1
            </div>
            <h4
              className={`text-xl font-semibold ${
                theme === "light" ? "text-gray-800" : "text-white"
              }`}
            >
              Search Service
            </h4>
            <p
              className={theme === "light" ? "text-gray-600" : "text-gray-400"}
            >
              Find the right professional for your home needs from our wide
              list.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
              2
            </div>
            <h4
              className={`text-xl font-semibold ${
                theme === "light" ? "text-gray-800" : "text-white"
              }`}
            >
              Book Appointment
            </h4>
            <p
              className={theme === "light" ? "text-gray-600" : "text-gray-400"}
            >
              Select a date and time that suits you best and confirm the
              booking.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
              3
            </div>
            <h4
              className={`text-xl font-semibold ${
                theme === "light" ? "text-gray-800" : "text-white"
              }`}
            >
              Get It Done
            </h4>
            <p
              className={theme === "light" ? "text-gray-600" : "text-gray-400"}
            >
              Relax while our expert handles the job with 100% satisfaction
              guarantee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
