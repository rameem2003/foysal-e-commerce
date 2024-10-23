import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const SuccessfullScreen = () => {
  const { tranId } = useParams();

  console.log(tranId);

  return (
    <main className="flex h-full w-full flex-col items-center justify-center gap-5 bg-white py-[200px]">
      <FaCheckCircle className="text-7xl text-green-600" />
      <h1 className="text-center text-3xl font-bold lg:text-6xl">
        Your order is received successfully
      </h1>

      <h3 className="text-center text-3xl font-semibold">
        Your Transaction ID is
      </h3>

      <p className="rounded-md bg-primary p-3 text-center font-bold text-white">
        {tranId}
      </p>

      <p className="text-center text-2xl font-bold">Our seller will call you</p>

      <Link to="/" className="block rounded-md bg-primary p-3 text-white">
        Back to Home
      </Link>
    </main>
  );
};

export default SuccessfullScreen;
