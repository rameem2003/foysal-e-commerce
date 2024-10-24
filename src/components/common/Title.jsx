import React from "react";
import Flex from "./Flex";

const Title = ({ title }) => {
  return (
    <section className="mb-10 mt-5">
      <Flex className="items-center gap-5">
        <div className="h-[35px] w-[14px] rounded-md bg-primary md:h-[40px] md:w-[15px]"></div>

        <h2 className="text-3xl font-bold text-primary md:text-4xl">{title}</h2>
      </Flex>
    </section>
  );
};

export default Title;
