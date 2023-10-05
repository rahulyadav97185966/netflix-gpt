import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Login = () => {
  return (
    <div>
      <Header />
      <img
        className="absolute object-fill"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="bg-img"
      />
      <form className="absolute mt-20 w-3/12 p-8 pb-16 px-8 mx-auto right-0 left-0 bg-black bg-opacity-80">
        <h1 className="text-white text-bold text-3xl font-semibold my-4">
          Sign In
        </h1>
        <input
          type="text"
          className="w-full px-4 py-2 my-4 rounded bg-slate-800 border-none text-white"
          placeholder="Email or phone number"
        />
        <input
          type="password"
          className="w-full px-4 py-2 my-4 rounded bg-slate-800 border-none text-white"
          placeholder="Password"
        />
        <button className="w-full px-4 py-2 my-2 rounded font-bold text-sm bg-red-600 ... text-white">
          Sign In
        </button>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked
            className="w-4 h-4 text-white-600 bg-gray-100 border-gray-300 rounded focus:ring-white-500 dark:focus:ring-white-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-white-700 dark:border-white-600"
          ></input>
          {/* <input checked id="checked-checkbox" type="checkbox" value="" > */}
          <label
            for="checked-checkbox"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
          <label
            for="checked-checkbox"
            className="ml-28 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Need help?
          </label>
        </div>
        <h6 className="text-slate-600 my-2">
          New to Netflix?{" "}
          <Link to="/" className="text-white hover:underline">
            {" "}
            Sign up now.{" "}
          </Link>
        </h6>
        <label className="text-slate-400 text-sm">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <span className="text-blue"> Learn more.</span>
        </label>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
