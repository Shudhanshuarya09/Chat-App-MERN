// import React from 'react';

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md Bbg-gray-400 bg-clip-padding backdrop-filter
      backdrop-blur-1g bg-opacity-8">
        <h1 className="text-3x1 font-semibold text-center Mltext-gray-360">
          Login
          <span className="text-blue-500"> ChatApp </span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-18"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <Link
           to='/signup'
            className="text-sm hover:underline Ehover:text-blue-600 mt-2 inline-block">
            {"Don't"} have an account?
          </Link>
          
          <div>
            <button className=" btn btn-clock btn-sm mt-2">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
