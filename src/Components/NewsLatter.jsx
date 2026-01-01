import React from "react";
import useAuth from "../Hooks/useAuth";

const NewsLatter = () => {
  const { theme } = useAuth();
  return (
    <section className="mt-12 mb-8">
      <div
        className={`mx-auto rounded-3xl p-10 text-center ${
          theme === "light"
            ? "bg-blue-600 text-white"
            : "bg-blue-800 text-white"
        }`}
      >
        <h2 className="text-3xl font-bold mb-4">Don't Miss Our Best Offers!</h2>
        <p className="mb-8 text-blue-100">
          Subscribe to our newsletter and get updates on new services and
          discounts.
        </p>
        <form className="flex flex-col md:flex-row gap-4 justify-center max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 rounded-full text-gray-800 outline-none w-full bg-white"
          />
          <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLatter;
