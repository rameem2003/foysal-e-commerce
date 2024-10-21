import React from "react";
import { Link } from "react-router-dom";

const BreadCrums = ({ location }) => {
  return (
    <section className="my-2">
      <h1 className="mb-2 text-3xl font-bold text-black">{location}</h1>
      <h2 className="text-sm font-medium text-primary">
        <Link to="/">Home</Link> {">"} {location}
      </h2>
    </section>
  );
};

export default BreadCrums;
