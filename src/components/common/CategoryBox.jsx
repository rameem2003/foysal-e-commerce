import React from "react";
import cat from "../../assets/cat.png";
import Image from "./Image";
import { Link } from "react-router-dom";

const CategoryBox = () => {
  return (
    <Link className="w-[12%] cursor-pointer text-center">
      <div className="mx-auto flex h-[100px] w-[100px] items-center justify-center rounded-md bg-white p-3 duration-150 ease-in-out hover:scale-[1.05]">
        <Image src={cat} className="w-full" />
      </div>

      <span className="mt-2 inline-block text-center text-base font-semibold text-primary">
        Category Name
      </span>
    </Link>
  );
};

export default CategoryBox;
