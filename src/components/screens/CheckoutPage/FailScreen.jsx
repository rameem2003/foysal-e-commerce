import React from "react";
import { TiInfo } from "react-icons/ti";
import { Link } from "react-router-dom";

const FailScreen = () => {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center gap-5 bg-white py-[200px]">
      <TiInfo className="text-7xl text-red-600" />
      <h1 className="text-center text-3xl font-bold lg:text-6xl">
        Your order is failed
      </h1>

      <Link to="/" className="block rounded-md bg-primary p-3 text-white">
        Back to Home
      </Link>
    </main>
  );
};

export default FailScreen;
