// import React from "react";
// import { toast } from "react-toastify";
// import useAuth from "../Hooks/useAuth";
// import { Link, useNavigate } from "react-router";

// const RegisterPage = () => {
//   const navigate = useNavigate();
//   const { createUser, updateUser, googleSignIn } = useAuth();
//   const handleRegister = (e) => {
//     e.preventDefault();
//     const displayName = e.target.name.value;
//     const photoURL = e.target.photo.value;
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     const regExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

//     if (!regExp.test(password)) {
//       return toast.error(
//         "password should be 6 character and one Uppercase letter and one Lowercase letter"
//       );
//     }
//     const obj = { displayName, photoURL };
//     createUser(email, password)
//       .then((res) => {
//         updateUser(obj)
//           .then(() => {
//             navigate("/");
//             toast.success("user created");
//           })
//           .catch((err) => {
//             toast.error(err.code);
//           });
//       })
//       .catch((err) => {
//         toast.error(err.code);
//       });
//     e.target.reset();
//   };

//   const handleGoogleLogin = () => {
//     googleSignIn()
//       .then((res) => {
//         navigate("/");
//         toast.success("user created");
//       })
//       .catch((err) => {
//         toast.error(err.code);
//       });
//   };

//   return (
//     <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
//       <div className="card-body">
//         <h1 className="font-bold text-2xl text-center text-base-content">
//           Register
//         </h1>
//         <form onSubmit={handleRegister}>
//           <fieldset className="fieldset">
//             {/* Name field */}
//             <label className="label">Name</label>
//             <input
//               type="text"
//               className="input"
//               placeholder="Your name"
//               name="name"
//             />
//             {/* Photo URL field  */}
//             <label className="label">Photo URL</label>

//             <input
//               type="text"
//               className="input"
//               placeholder="Photo URL"
//               name="photo"
//             />
//             {/* Email field  */}
//             <label className="label">Email</label>
//             <input
//               type="email"
//               className="input"
//               placeholder="Your Email"
//               name="email"
//             />
//             {/* Password field  */}
//             <label className="label">Password</label>
//             <input
//               type="password"
//               className="input"
//               placeholder="Your Password"
//               name="password"
//             />
//             <div>
//               Already have an account ? please{" "}
//               <Link className="text-primary underline" to="/login">
//                 Login
//               </Link>
//             </div>

//             <button type="submit" className="btn btn-neutral mt-4">
//               Register
//             </button>
//             <button
//               onClick={handleGoogleLogin}
//               type="button"
//               className="btn bg-white text-black border-[#e5e5e5]"
//             >
//               <svg
//                 aria-label="Google logo"
//                 width="16"
//                 height="16"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 512 512"
//               >
//                 <g>
//                   <path d="m0 0H512V512H0" fill="#fff"></path>
//                   <path
//                     fill="#34a853"
//                     d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
//                   ></path>
//                   <path
//                     fill="#4285f4"
//                     d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
//                   ></path>
//                   <path
//                     fill="#fbbc02"
//                     d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
//                   ></path>
//                   <path
//                     fill="#ea4335"
//                     d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
//                   ></path>
//                 </g>
//               </svg>
//               Login with Google
//             </button>
//           </fieldset>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;
import React, { useState } from "react";
import { Mail, Lock, User, Image, UserPlus, Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import useAuth from "../Hooks/useAuth";
import { Link, useNavigate } from "react-router";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { theme, createUser, updateUser, googleSignIn } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  
  const isLight = theme;

  const handleRegister = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    // Password Validation
    const regExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!regExp.test(password)) {
      return toast.error(
        "Password should be at least 6 characters, contain one uppercase and one lowercase letter"
      );
    }

    const obj = { displayName, photoURL };

    createUser(email, password)
      .then((res) => {
        updateUser(obj)
          .then(() => {
            navigate("/");
            toast.success("Account created successfully!");
          })
          .catch((err) => {
            toast.error(err.code);
          });
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        navigate("/");
        toast.success("Registered with Google successfully!");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 flex items-center justify-center py-12 px-4 ${
      isLight ? "bg-gray-50" : "bg-[#0f172a]"
    }`}>
      <div className="max-w-md w-full space-y-8">
        
        {/* Header Section */}
        <div className="text-center">
          <div className="mx-auto h-12 w-12 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/40">
            <UserPlus className="text-white h-6 w-6" />
          </div>
          <h2 className={`mt-6 text-3xl font-extrabold tracking-tight ${
            isLight ? "text-gray-900" : "text-white"
          }`}>
            JOIN <span className="text-indigo-600">HOMEHERO</span>
          </h2>
          <p className={`mt-2 text-sm ${isLight ? "text-gray-500" : "text-gray-400"}`}>
            Start booking or offering household services today.
          </p>
        </div>

        <div className={`py-8 px-10 shadow-2xl rounded-3xl border transition-all ${
          isLight ? "bg-white border-gray-100" : "bg-[#1e293b] border-gray-800"
        }`}>
          
          <form className="space-y-4" onSubmit={handleRegister}>
            {/* Name Field */}
            <div>
              <label className={`block text-xs font-bold uppercase tracking-widest mb-1 ml-1 ${
                isLight ? "text-indigo-600" : "text-indigo-400"
              }`}>Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  required
                  className={`block w-full pl-12 pr-4 py-3 border rounded-xl outline-none transition-all focus:border-indigo-500 ${
                    isLight ? "bg-gray-50 border-transparent text-gray-900" : "bg-[#0f172a] border-gray-700 text-gray-100"
                  }`}
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Photo URL Field */}
            <div>
              <label className={`block text-xs font-bold uppercase tracking-widest mb-1 ml-1 ${
                isLight ? "text-indigo-600" : "text-indigo-400"
              }`}>Photo URL</label>
              <div className="relative">
                <Image className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  name="photo"
                  required
                  className={`block w-full pl-12 pr-4 py-3 border rounded-xl outline-none transition-all focus:border-indigo-500 ${
                    isLight ? "bg-gray-50 border-transparent text-gray-900" : "bg-[#0f172a] border-gray-700 text-gray-100"
                  }`}
                  placeholder="https://image-link.com"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className={`block text-xs font-bold uppercase tracking-widest mb-1 ml-1 ${
                isLight ? "text-indigo-600" : "text-indigo-400"
              }`}>Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  required
                  className={`block w-full pl-12 pr-4 py-3 border rounded-xl outline-none transition-all focus:border-indigo-500 ${
                    isLight ? "bg-gray-50 border-transparent text-gray-900" : "bg-[#0f172a] border-gray-700 text-gray-100"
                  }`}
                  placeholder="example@mail.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className={`block text-xs font-bold uppercase tracking-widest mb-1 ml-1 ${
                isLight ? "text-indigo-600" : "text-indigo-400"
              }`}>Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  className={`block w-full pl-12 pr-12 py-3 border rounded-xl outline-none transition-all focus:border-indigo-500 ${
                    isLight ? "bg-gray-50 border-transparent text-gray-900" : "bg-[#0f172a] border-gray-700 text-gray-100"
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
              className="w-full py-3 px-4 rounded-xl shadow-lg text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-all transform hover:scale-[1.01] active:scale-95 shadow-indigo-500/25 mt-4"
            >
              Create Account
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className={`w-full border-t ${isLight ? "border-gray-100" : "border-gray-800"}`}></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className={`px-4 ${isLight ? "bg-white text-gray-500" : "bg-[#1e293b] text-gray-400"}`}>Or join with</span>
            </div>
          </div>

          <button
            onClick={handleGoogleLogin}
            className={`w-full flex items-center justify-center gap-3 py-3 px-4 border rounded-xl text-sm font-bold transition-all shadow-sm ${
              isLight ? "bg-white border-gray-300 text-gray-700 hover:bg-gray-50" : "bg-[#1e293b] border-gray-700 text-gray-200 hover:bg-gray-800"
            }`}
          >
            <svg aria-label="Google logo" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M512 256c0-14-1-28-4-41H256v83h144c-6 32-24 59-50 77v64h81c47-43 74-107 74-183z" fill="#4285f4" />
              <path d="M256 512c69 0 127-23 170-62l-81-64c-22 15-51 24-89 24-68 0-126-46-147-108H27v67c42 83 127 141 229 141z" fill="#34a853" />
              <path d="M109 302c-5-15-8-31-8-46s3-31 8-46V143H27c-17 34-27 72-27 113s10 79 27 113l82-64z" fill="#fbbc05" />
              <path d="M256 103c38 0 72 13 99 39l74-74C383 24 325 0 256 0 154 0 69 58 27 141l82 67c21-62 79-105 147-105z" fill="#ea4335" />
            </svg>
            Google
          </button>

          <p className={`mt-8 text-center text-sm font-medium ${isLight ? "text-gray-500" : "text-gray-400"}`}>
            Already a member?{" "}
            <Link to="/login" className="text-indigo-600 hover:underline font-bold">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;