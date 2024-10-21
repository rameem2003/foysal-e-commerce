import React from "react";
import Flex from "./Flex";
import { ThreeCircles } from "react-loader-spinner";

const ButtonAnimation = () => {
  return (
    <Flex className="w-full p-3 bg-slate-800 font-medium text-xl text-white items-center justify-center">
      <ThreeCircles
        visible={true}
        height="30"
        width="30"
        color="#fff"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Flex>
  );
};

export default ButtonAnimation;
