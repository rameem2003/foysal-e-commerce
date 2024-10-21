import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/common/Container";
import BreadCrums from "../components/common/BreadCrums";
import Flex from "../components/common/Flex";
import Image from "../components/common/Image";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct, updateQuntity } from "../redux/features/CartSlice";
import toast, { Toaster } from "react-hot-toast";

const Cart = () => {
  const cart = useSelector((state) => state.cartArray.cart); // get cart info from the redux
  const dispatch = useDispatch(); // dispatch instance
  const navigate = useNavigate(); // navigation instance
  const [total, setTotal] = useState(0); // for calculate & store the price

  // update the quantity of the product
  const quantity = (index, n) => {
    dispatch(updateQuntity({ id: index, n }));
  };

  // for remove the item from redux
  const removeItemFromCart = (item) => {
    dispatch(removeProduct(item.id));
    toast.error("Item is removed");
  };

  // calculate the grand total
  const calculateTotal = () => {
    let p = 0;
    cart.map((data) => (p = p + Math.round(data.price * data.qun)));
    setTotal(p);
  };

  useEffect(() => {
    calculateTotal();
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <main className="my-10">
      <Container>
        <Toaster />
        <BreadCrums location="Cart" />

        <div className="mt-[100px]">
          {/* cart body for small screens */}
          <Flex className="flex-wrap gap-2 lg:hidden">
            {cart.length > 0 ? (
              cart.map((data, i) => (
                <div
                  key={i}
                  className=" w-full md:w-[48%] border-[1px] border-[#F0F0F0] p-2"
                >
                  <div className="relative w-full h-auto">
                    <div className="w-full h-[300px]">
                      <Image
                        className="w-full h-full"
                        src={data.thumbnail}
                        alt="item"
                      />
                    </div>
                    <FaTimes
                      onClick={() => removeItemFromCart(data)}
                      className=" absolute top-1 right-1 cursor-pointer"
                    />
                    <span className="p-2 bg-slate-800 font-medium text-xs text-center text-white absolute top-1 left-1">
                      Unit Price: ৳ {data.price} BDT
                    </span>
                  </div>

                  <div className="mt-5">
                    <Link
                      to={`/product/${data.id}`}
                      className=" block font-dm font-bold text-base text-center text-black"
                    >
                      {data.title}
                    </Link>

                    <p className=" font-semibold text-base text-center mt-2">
                      Size: {data.dimensions}
                    </p>
                    <Flex
                      className={`my-5 border-[1px] border-[#F0F0F0] w-[50%] items-center justify-center mx-auto`}
                    >
                      <button
                        onClick={() => quantity(i, -1)}
                        className=" font-normal text-[16px] leading-[30px] text-black/80 py-[3px] px-[21px]"
                      >
                        -
                      </button>
                      <button className=" font-normal text-[16px] leading-[30px] text-black/80 py-[3px] px-[21px]">
                        {data.qun}
                      </button>
                      <button
                        onClick={() => quantity(i, +1)}
                        className=" font-normal text-[16px] leading-[30px] text-black/80 py-[3px] px-[21px]"
                      >
                        +
                      </button>
                    </Flex>

                    <p className=" font-bold text-base text-center text-red-500">
                      Sub Total: ৳ {data.price * data.qun} BDT
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <h2 className=" font-bold text-lg text-black text-center">
                Your cart is empty
              </h2>
            )}
          </Flex>
          {/* cart body for small screens */}

          {/* cart header for big screen  */}
          <Flex className=" hidden lg:flex items-center bg-slate-800 py-[34px] px-5 flex-wrap">
            <div className="w-1/4">
              <h2 className="font-bold text-[16px] text-white">Product</h2>
            </div>
            <div className="w-1/4">
              <h2 className="font-bold text-[16px] text-white">Price</h2>
            </div>
            <div className="w-1/4">
              <h2 className="font-bold text-[16px] text-white">Quantity</h2>
            </div>
            <div className="w-1/4">
              <h2 className="font-bold text-[16px] text-white">Sub Total</h2>
            </div>
          </Flex>
          {/* cart header for big screen  */}

          {/* cart body for big screen */}

          {cart.length > 0 ? (
            cart.map((data, i) => (
              <Flex
                key={i}
                className="hidden lg:flex border-[1px] border-[#F0F0F0] py-[30px] px-5 flex-wrap"
              >
                <div className="w-1/4">
                  <Flex className={`items-center gap-10`}>
                    <FaTimes
                      onClick={() => removeItemFromCart(data)}
                      className=" cursor-pointer"
                    />
                    <Flex className={`items-center gap-5`}>
                      <Image
                        className={`w-[100px] h-[100px]`}
                        src={data.thumbnail}
                      />
                      <div>
                        <Link
                          to={`/product/${data.id}`}
                          className=" font-dm font-bold text-[16px] text-black hover:underline"
                        >
                          {data.title}
                        </Link>

                        <p className=" font-semibold text-base mt-2">
                          Size: {data.dimensions}
                        </p>
                      </div>
                    </Flex>
                  </Flex>
                </div>

                <Flex className="w-1/4 items-center">
                  <h3 className=" font-bold text-[20px] text-black">
                    ৳ {data.price} BDT
                  </h3>
                </Flex>

                <Flex className={`w-1/4 items-center`}>
                  <Flex className={`border-[1px] border-[#F0F0F0]`}>
                    <button
                      onClick={() => quantity(i, -1)}
                      className=" font-normal text-[16px] leading-[30px] text-black/80 py-[3px] px-[21px]"
                    >
                      -
                    </button>
                    <button className=" font-normal text-[16px] leading-[30px] text-black/80 py-[3px] px-[21px]">
                      {data.qun}
                    </button>
                    <button
                      onClick={() => quantity(i, +1)}
                      className=" font-normal text-[16px] leading-[30px] text-black/80 py-[3px] px-[21px]"
                    >
                      +
                    </button>
                  </Flex>
                </Flex>

                <Flex className="w-1/4 items-center">
                  <h3 className=" font-bold text-[20px] text-black">
                    ৳ {data.price * data.qun} BDT
                    {/* {Math.round(
                      (cItem.price -
                        (cItem.price * cItem.discountPercentage) / 100) *
                        cItem.qun
                    )} */}
                  </h3>
                </Flex>
              </Flex>
            ))
          ) : (
            <h2 className="hidden lg:block font-bold text-lg text-black text-center p-3 border-[2px] border-slate-800">
              Your cart is empty
            </h2>
          )}

          {/* cart body for big screen */}

          {/* totals start */}
          <div className="mt-[54px] mb-[140px]">
            <h4 className=" font-dm font-bold text-[20px] text-black text-right">
              Cart totals
            </h4>

            <div className="w-full text-center lg:w-[644px] lg:ml-auto mt-6">
              <Flex>
                <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-bold text-base text-black">
                  Subtotal
                </p>
                <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-normal text-base text-black ">
                  ৳ {total} BDT
                </p>
              </Flex>
              <Flex>
                <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-bold text-base text-black">
                  Total
                </p>
                <p className="w-1/2 border-[1px] border-[#F0F0F0] py-4 px-5 font-normal text-base text-black ">
                  ৳ {total} BDT
                </p>
              </Flex>
            </div>

            {cart.length > 0 && (
              <button
                onClick={() => navigate("/checkout")}
                className=" w-full md:w-auto font-dm font-bold text-[14px] text-white bg-slate-800 py-4 px-8 ms-auto mt-[30px] block"
              >
                Proceed to Checkout
              </button>
            )}
          </div>
          {/* totals end */}
        </div>
      </Container>
    </main>
  );
};

export default Cart;
