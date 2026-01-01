import React from "react";
import useAuth from "../Hooks/useAuth";

const PrivacyPolicy = () => {
  const { theme } = useAuth();
  const isLight = theme === 'light';

  return (
    <div className={`min-h-screen ${isLight ? "bg-gray-50" : "bg-gray-900"} transition-colors`}>
      <section className={`${isLight ? "bg-primary" : "bg-blue-600"} text-white py-16 px-6 text-center`}>
        <h1 className="text-4xl font-bold mb-4">Privacy & Policy</h1>
        <p className={`max-w-2xl mx-auto text-lg ${isLight ? "text-blue-100" : "text-blue-50"}`}>
          Your privacy is our priority. Learn how we handle your data responsibly.
        </p>
      </section>

      <section className="max-w-4xl mx-auto py-16 px-6">
        <div className={`${isLight ? "bg-white" : "bg-gray-800"} p-8 rounded-2xl shadow-sm space-y-8`}>
          <div>
            <h2 className={`text-2xl font-bold mb-4 ${isLight ? "text-gray-800" : "text-white"}`}>1. Information We Collect</h2>
            <p className={`${isLight ? "text-gray-600" : "text-gray-300"} leading-relaxed`}>
              We collect personal information such as your name, email address, and phone number when you register as a user or a service provider on HomeHero.
            </p>
          </div>
          <div>
            <h2 className={`text-2xl font-bold mb-4 ${isLight ? "text-gray-800" : "text-white"}`}>2. How We Use Your Data</h2>
            <p className={`${isLight ? "text-gray-600" : "text-gray-300"} leading-relaxed`}>
              Your data is used to facilitate bookings, improve our service quality, and ensure a secure environment for both customers and professionals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;