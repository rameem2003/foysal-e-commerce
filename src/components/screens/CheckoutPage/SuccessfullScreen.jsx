import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const SuccessfullScreen = () => {
  return (
    <section className="w-full h-full flex items-center flex-col justify-center gap-5 absolute top-0 left-0 bg-white">
      <FaCheckCircle className=" text-7xl text-green-600" />
      <h1 className=" font-bold text-3xl lg:text-6xl text-center">
        Your order is received successfully
      </h1>
      <p className=" font-bold text-2xl text-center">
        Our seller will call you
      </p>

      <Link to="/" className=" block p-3 bg-slate-800 text-white">
        Back to Home
      </Link>
    </section>
  );
};

export default SuccessfullScreen;
