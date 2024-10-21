import React from "react";
import Image from "../components/common/Image";
import error from "../assets/error.svg";

const ErrorPage = () => {
  return (
    <section className=" flex items-center justify-center py-10">
      <Image src={error} alt="error" />
    </section>
  );
};

export default ErrorPage;
