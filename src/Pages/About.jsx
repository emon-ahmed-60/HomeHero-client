import React from "react";
import useAuth from "../Hooks/useAuth";

const About = () => {
    const {theme} = useAuth();
  return (
    <div className={`min-h-screen ${theme === 'light' ? "bg-gray-50" : "bg-gray-900"} transition-colors`}>
      {/* Hero Section */}
      <section className={`${theme === 'light' ? "bg-primary" : "bg-blue-500"} text-white py-16 px-6 text-center`}>
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className={`max-w-2xl mx-auto text-lg ${theme === 'light' ? "text-blue-100" : "text-blue-50" }`}>
          We provide reliable and high-quality services to help businesses and
          individuals grow faster.
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid gap-8 md:grid-cols-3">
        {/* Card */}
        <div className={`${theme === "light" ? "bg-white" : "bg-gray-800" } rounded-xl shadow-md dark:shadow-gray-900/50 p-6 hover:shadow-lg transition`}>
          <h2 className={`text-xl font-semibold mb-3 ${theme === "light" ? "text-gray-800" : "text-white" }`}>
            Who We Are
          </h2>
          <p className={`${theme === "light"? "text-gray-600" : "text-gray-300"}`}>
            We are a dedicated team focused on delivering modern, efficient, and
            scalable solutions for our clients.
          </p>
        </div>

        <div className={`${theme === "light"? "bg-white" : "bg-gray-800"} rounded-xl shadow-md dark:shadow-gray-900/50 p-6 hover:shadow-lg transition`}>
          <h2 className={`text-xl font-semibold mb-3 ${theme === "light"? "text-gray-800" : "text-white"}`}>
            Our Mission
          </h2>
          <p className={`${theme === "light"? "text-gray-600" : "text-gray-300"}`}>
            Our mission is to simplify complex problems and provide services
            that create real value for our customers.
          </p>
        </div>

        <div className={`${theme === "light" ? "bg-white" : "bg-gray-800" } rounded-xl shadow-md dark:shadow-gray-900/50 p-6 hover:shadow-lg transition`}>
          <h2 className={`text-xl font-semibold mb-3 ${theme === "light" ? "text-gray-800" : "text-white" }`}>
            Why Choose Us
          </h2>
          <ul className={`${theme === "light" ? "text-gray-600" : "text-gray-300"} space-y-2`}>
            <li>✔ Professional & Trusted</li>
            <li>✔ Fast & Reliable</li>
            <li>✔ 24/7 Customer Support</li>
            <li>✔ Affordable Pricing</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
