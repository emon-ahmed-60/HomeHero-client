import React from "react";
import useAuth from "../Hooks/useAuth";

const Blog = () => {
  const { theme } = useAuth();
  const isLight = theme === 'light';

  const blogs = [
    { id: 1, title: "How to hire a plumber?", date: "Oct 24, 2025", desc: "Tips to find the best plumber in your local area." },
    { id: 2, title: "Maintain your home electricity", date: "Nov 02, 2025", desc: "Simple steps to keep your home wiring safe." },
    { id: 3, title: "Why cleaning matters", date: "Dec 15, 2025", desc: "The benefits of hiring professional cleaning services." },
  ];

  return (
    <div className={`min-h-screen ${isLight ? "bg-gray-50" : "bg-gray-900"} transition-colors pb-10`}>
      <section className={`${isLight ? "bg-primary" : "bg-blue-600"} text-white py-16 px-6 text-center`}>
        <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
        <p className={`max-w-2xl mx-auto text-lg ${isLight ? "text-blue-100" : "text-blue-50"}`}>
          Stay updated with latest tips and news from HomeHero.
        </p>
      </section>

      <section className="max-w-6xl mx-auto py-12 px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div key={blog.id} className={`${isLight ? "bg-white" : "bg-gray-800"} p-6 rounded-xl shadow hover:scale-105 transition-transform`}>
            <span className="text-blue-500 font-semibold text-sm">{blog.date}</span>
            <h2 className={`text-2xl font-bold my-3 ${isLight ? "text-gray-800" : "text-white"}`}>{blog.title}</h2>
            <p className={`${isLight ? "text-gray-600" : "text-gray-300"} mb-4`}>{blog.desc}</p>
            <button className="text-blue-500 font-medium hover:underline">Read More →</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Blog;