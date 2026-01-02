import React, { useState } from "react";
import { Mail, Lock, LogIn, UserCheck, Eye, EyeOff } from "lucide-react";
import useAuth from "../Hooks/useAuth";

import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router";
const LoginPage = () => {
  const { theme, loginUser, googleSignIn } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const fillDemoCredentials = () => {
    setEmail("recruiter@homehero.com");
    setPassword("HomeHero2026!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((res) => {
        if (location.state) {
          navigate(location.state);
        } else {
          navigate("/");
        }
        toast.success("login successfull");
      })
      .catch((err) => {
        toast.error("user not exist");
      });
  };

  const onGoogleLogin = () => {
    googleSignIn()
      .then((res) => {
        if (location.state) {
          navigate(location.state);
        } else {
          navigate("/");
        }
        toast.success("login successfull");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };
  const isLight = theme;

  return (
    <div
      className={`min-h-screen transition-colors duration-300 flex items-center justify-center py-12 px-4 ${
        isLight ? "bg-gray-50" : "bg-[#0f172a]"
      }`}
    >
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/40">
            <LogIn className="text-white h-6 w-6" />
          </div>
          <h2
            className={`mt-6 text-3xl font-extrabold tracking-tight ${
              isLight ? "text-gray-900" : "text-white"
            }`}
          >
            HOME<span className="text-indigo-600">HERO</span>
          </h2>
        </div>

        <div
          className={`py-8 px-10 shadow-2xl rounded-3xl border transition-all ${
            isLight
              ? "bg-white border-gray-100"
              : "bg-[#1e293b] border-gray-800"
          }`}
        >
          <button
            onClick={onGoogleLogin}
            className={`w-full flex items-center justify-center gap-3 py-3 px-4 border rounded-xl text-sm font-bold transition-all shadow-sm ${
              isLight
                ? "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                : "bg-[#1e293b] border-gray-700 text-gray-200 hover:bg-gray-800"
            }`}
          >
            <svg
              aria-label="Google logo"
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M512 256c0-14-1-28-4-41H256v83h144c-6 32-24 59-50 77v64h81c47-43 74-107 74-183z"
                fill="#4285f4"
              />
              <path
                d="M256 512c69 0 127-23 170-62l-81-64c-22 15-51 24-89 24-68 0-126-46-147-108H27v67c42 83 127 141 229 141z"
                fill="#34a853"
              />
              <path
                d="M109 302c-5-15-8-31-8-46s3-31 8-46V143H27c-17 34-27 72-27 113s10 79 27 113l82-64z"
                fill="#fbbc05"
              />
              <path
                d="M256 103c38 0 72 13 99 39l74-74C383 24 325 0 256 0 154 0 69 58 27 141l82 67c21-62 79-105 147-105z"
                fill="#ea4335"
              />
            </svg>
            Continue with Google
          </button>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div
                className={`w-full border-t ${
                  isLight ? "border-gray-100" : "border-gray-800"
                }`}
              ></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span
                className={`px-4 ${
                  isLight
                    ? "bg-white text-gray-500"
                    : "bg-[#1e293b] text-gray-400"
                }`}
              >
                Or email login
              </span>
            </div>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label
                className={`block text-xs font-bold uppercase tracking-widest mb-2 ml-1 ${
                  isLight ? "text-indigo-600" : "text-indigo-400"
                }`}
              >
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  required
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className={`block w-full pl-12 pr-4 py-3 border rounded-xl outline-none transition-all focus:border-indigo-500 ${
                    isLight
                      ? "bg-gray-50 border-transparent text-gray-900"
                      : "bg-[#0f172a] border-gray-700 text-gray-100"
                  }`}
                  placeholder="admin@homehero.com"
                />
              </div>
            </div>

            <div>
              <label
                className={`block text-xs font-bold uppercase tracking-widest mb-2 ml-1 ${
                  isLight ? "text-indigo-600" : "text-indigo-400"
                }`}
              >
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className={`block w-full pl-12 pr-12 py-3 border rounded-xl outline-none transition-all focus:border-indigo-500 ${
                    isLight
                      ? "bg-gray-50 border-transparent text-gray-900"
                      : "bg-[#0f172a] border-gray-700 text-gray-100"
                  }`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl shadow-lg text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-all transform hover:scale-[1.01] active:scale-95 shadow-indigo-500/25"
            >
              Sign In
            </button>

            <div className="pt-4">
              <button
                type="button"
                onClick={fillDemoCredentials}
                className={`w-full flex items-center justify-center gap-2 py-3 px-4 border-2 border-dashed rounded-xl text-sm font-bold transition-all ${
                  isLight
                    ? "border-indigo-200 text-indigo-600 hover:bg-indigo-50"
                    : "border-gray-700 text-indigo-400 hover:bg-indigo-900/20"
                }`}
              >
                <UserCheck size={18} /> Autofill Recruiter Credentials
              </button>
            </div>
          </form>

          <p
            className={`mt-8 text-center text-sm font-medium ${
              isLight ? "text-gray-500" : "text-gray-400"
            }`}
          >
            New to HomeHero?{" "}
            <Link to="/register" className="text-indigo-600 cursor-pointer hover:underline">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
