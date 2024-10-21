import React, { useEffect } from "react";
import Container from "./../components/common/Container";
import BreadCrums from "../components/common/BreadCrums";

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <main className="h-screen w-full pt-[100px]">
      <Container>
        <BreadCrums location="About" />

        <section className="mt-[100px]">
          <h1 className="text-2xl font-semibold text-red-500">
            This page is in under construction
          </h1>
        </section>
      </Container>
    </main>
  );
};

export default About;
