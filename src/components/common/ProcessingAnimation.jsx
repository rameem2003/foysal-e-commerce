import React from "react";
import Flex from "./Flex";
import { Hourglass } from "react-loader-spinner";

const ProcessingAnimation = () => {
  return (
    <Flex className="fixed left-0 top-0 z-[100] h-screen w-full flex-col items-center justify-center gap-10 bg-white/80 backdrop-blur-sm">
      <Hourglass
        visible={true}
        height="120"
        width="120"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#8224E3", "#8224E3"]}
      />

      <p className="text-3xl font-medium text-red-500">
        Processing your order please wait....
      </p>
    </Flex>
  );
};

export default ProcessingAnimation;
