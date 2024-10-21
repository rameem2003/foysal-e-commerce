import React from "react";
import Image from "../components/common/Image";
import error from "../assets/notfound.png";

const ErrorPage = () => {
  return (
    <section className="flex flex-col items-center justify-center py-10">
      <Image src={error} alt="error" />

      <h1 className="text-center text-3xl font-extrabold lg:text-5xl">
        404 Not Found
      </h1>
    </section>
  );
};

export default ErrorPage;
