import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const SuccessfullScreen = () => {
  return (
    <section className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-5 bg-white">
      <FaCheckCircle className="text-7xl text-green-600" />
      <h1 className="text-center text-3xl font-bold lg:text-6xl">
        Your order is received successfully
      </h1>
      <p className="text-center text-2xl font-bold">Our seller will call you</p>

      <Link to="/" className="block rounded-md bg-primary p-3 text-white">
        Back to Home
      </Link>
    </section>
  );
};

export default SuccessfullScreen;
