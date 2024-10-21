import React from "react";
import Flex from "./Flex";

const Title = ({ title }) => {
  return (
    <section className="mb-10 mt-5">
      <Flex className="items-center gap-5">
        <div className="h-[40px] w-[15px] rounded-md bg-primary"></div>

        <h2 className="text-4xl font-bold text-primary">{title}</h2>
      </Flex>
    </section>
  );
};

export default Title;
