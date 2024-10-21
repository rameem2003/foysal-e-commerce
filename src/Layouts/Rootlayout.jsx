import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/shared/Navigation";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

const Rootlayout = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    // console.log(offset);

    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`${
          scrolled
            ? "fixed w-full top-0 left-0 z-[1000] shadow-custom"
            : "static shadow-none"
        } duration-200 ease-in-out`}
      >
        <Navigation />
      </div>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Rootlayout;
