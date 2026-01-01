import React from "react";
import useAuth from "../Hooks/useAuth";

const TermsCondition = () => {
  const { theme } = useAuth();
  const isLight = theme === 'light';

  return (
    <div className={`min-h-screen ${isLight ? "bg-gray-50" : "bg-gray-900"} transition-colors`}>
      <section className={`${isLight ? "bg-primary" : "bg-blue-600"} text-white py-16 px-6 text-center`}>
        <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
        <p className={`max-w-2xl mx-auto text-lg ${isLight ? "text-blue-100" : "text-blue-50"}`}>
          Please read these terms carefully before using the HomeHero platform.
        </p>
      </section>

      <section className="max-w-4xl mx-auto py-12 px-6">
        <div className="space-y-6">
          <div className={`${isLight ? "bg-white" : "bg-gray-800"} p-6 rounded-lg border-l-4 border-blue-500 shadow-sm`}>
            <h3 className={`text-xl font-bold ${isLight ? "text-gray-800" : "text-white"}`}>User Responsibility</h3>
            <p className={`mt-2 ${isLight ? "text-gray-600" : "text-gray-300"}`}>
              Users must provide accurate information and behave professionally with service providers.
            </p>
          </div>
          <div className={`${isLight ? "bg-white" : "bg-gray-800"} p-6 rounded-lg border-l-4 border-blue-500 shadow-sm`}>
            <h3 className={`text-xl font-bold ${isLight ? "text-gray-800" : "text-white"}`}>Service Provider Rules</h3>
            <p className={`mt-2 ${isLight ? "text-gray-600" : "text-gray-300"}`}>
              Providers must maintain the quality of work and complete appointments on the scheduled time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsCondition;