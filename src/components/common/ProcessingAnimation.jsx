import React from "react";
import Flex from "./Flex";
import { Hourglass } from "react-loader-spinner";

const ProcessingAnimation = () => {
  return (
    <Flex className=" flex-col gap-10 items-center justify-center w-full h-screen bg-white/80 backdrop-blur-sm fixed z-[100] top-0 left-0">
      <Hourglass
        visible={true}
        height="120"
        width="120"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#DC2626", "#DC2626"]}
      />

      <p className=" font-medium text-3xl text-red-500">
        Processing your order please wait....
      </p>
    </Flex>
  );
};

export default ProcessingAnimation;
