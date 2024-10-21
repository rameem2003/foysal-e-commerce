import React from "react";
import { Link } from "react-router-dom";

const BreadCrums = ({ location }) => {
  return (
    <section className=" my-2">
      <h1 className="font-bold text-3xl text-black mb-2">{location}</h1>
      <h2 className=" font-medium text-sm text-red-500">
        <Link to="/">Home</Link> {">"} {location}
      </h2>
    </section>
  );
};

export default BreadCrums;
