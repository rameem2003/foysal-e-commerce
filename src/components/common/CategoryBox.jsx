import React from "react";
import cat from "../../assets/cat.png";
import Image from "./Image";
import { Link } from "react-router-dom";

const CategoryBox = () => {
  return (
    <Link className="w-[90px] cursor-pointer text-center lg:w-[100px]">
      <div className="mx-auto flex h-[90px] w-[90px] items-center justify-center rounded-md bg-white p-3 duration-150 ease-in-out hover:scale-[1.05] lg:h-[100px] lg:w-[100px]">
        <Image src={cat} className="w-full" />
      </div>

      <span className="mx-auto mt-2 inline-block text-center text-base font-semibold text-primary">
        Category Name
      </span>
    </Link>
  );
};

export default CategoryBox;
