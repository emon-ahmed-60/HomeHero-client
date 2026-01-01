import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router";
import useAuth from "../Hooks/useAuth";

const Footer = () => {
  const { theme } = useAuth();
  return (
    <div className={`bg-neutral ${theme === "light" && "text-base-100"} py-10`}>
      <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto px-5">
        <div>
          <h6 className="footer-title">
            {" "}
            <Link to="/" className="btn btn-ghost text-xl">
              <IoMdHome color="#2563eb" />{" "}
              <p className="text-base-100">
                Home
                <span className="text-primary">Hero</span>
              </p>
            </Link>{" "}
          </h6>
          <p>
            HomeHero is a modern web application that connects users with
            trusted local service providers such as electricians, plumbers, and
            cleaners. Users can browse services, book appointments, and leave
            ratings, while providers can manage their listings.
          </p>
        </div>
        <ul className="md:ml-auto lg:mx-auto">
          <h6 className="footer-title">Useful Links</h6>
          <li className="list-none link link-hover mb-2">
            {" "}
            <Link to="/blog">Blog</Link>{" "}
          </li>
          <li className="list-none link link-hover mb-2">
            {" "}
            <Link to="/about">About Us</Link>{" "}
          </li>
          <li className="list-none link link-hover mb-2">
            <Link to="/terms-condition">Terms & Condition</Link>
          </li>
          <li className="list-none link link-hover mb-2">
            {" "}
            <Link to="/privacy-policy">Privacy & Policy</Link>{" "}
          </li>
        </ul>

        <ul>
          <h6 className="footer-title">social links</h6>
          <li className="list-none link link-hover mb-2">
            {" "}
            <a
              href="https://www.facebook.com/md.emon.692971"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center"
            >
              <FaFacebook /> Facebook{" "}
            </a>{" "}
          </li>
          <li className="list-none link link-hover mb-2">
            {" "}
            <a
              href="https://x.com/MdEmon416961"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center"
            >
              <FaSquareXTwitter /> Twitter
            </a>{" "}
          </li>
          <li className="list-none link link-hover mb-2">
            {" "}
            <a
              href="https://www.linkedin.com/in/emon--ahmed/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center"
            >
              <FaLinkedin /> Linkedin{" "}
            </a>{" "}
          </li>
          <li className="list-none link link-hover mb-2">
            {" "}
            <a
              href="https://github.com/emon-ahmed-60"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center"
            >
              <FaGithub /> Github
            </a>{" "}
          </li>
        </ul>
        <p className="text-center mt-7 pt-7 md:col-span-2 lg:col-span-3 border-t">
          Copyright © 2025 - All right reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
