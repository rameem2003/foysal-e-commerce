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
                  className="w-full border-[1px] border-[#F0F0F0] p-2 md:w-[48%]"
                >
                  <div className="relative h-auto w-full">
                    <div className="h-[300px] w-full">
                      <Image
                        className="h-full w-full"
                        src={data.thumbnail}
                        alt="item"
                      />
                    </div>
                    <FaTimes
                      onClick={() => removeItemFromCart(data)}
                      className="absolute right-1 top-1 cursor-pointer"
                    />
                    <span className="absolute left-1 top-1 bg-slate-800 p-2 text-center text-xs font-medium text-white">
                      Unit Price: ৳ {data.price} BDT
                    </span>
                  </div>

                  <div className="mt-5">
                    <Link
                      to={`/product/${data.id}`}
                      className="font-dm block text-center text-base font-bold text-black"
                    >
                      {data.title}
                    </Link>

                    {/* <p className=" font-semibold text-base text-center mt-2">
                      Size: {data.dimensions}
                    </p> */}
                    <Flex
                      className={`mx-auto my-5 w-[50%] items-center justify-center border-[1px] border-[#F0F0F0]`}
                    >
                      <button
                        onClick={() => quantity(i, -1)}
                        className="px-[21px] py-[3px] text-[16px] font-normal leading-[30px] text-black/80"
                      >
                        -
                      </button>
                      <button className="px-[21px] py-[3px] text-[16px] font-normal leading-[30px] text-black/80">
                        {data.qun}
                      </button>
                      <button
                        onClick={() => quantity(i, +1)}
                        className="px-[21px] py-[3px] text-[16px] font-normal leading-[30px] text-black/80"
                      >
                        +
                      </button>
                    </Flex>

                    <p className="text-center text-base font-bold text-red-500">
                      Sub Total: ৳ {data.price * data.qun} BDT
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <h2 className="text-center text-lg font-bold text-black">
                Your cart is empty
              </h2>
            )}
          </Flex>
          {/* cart body for small screens */}

          {/* cart header for big screen  */}
          <Flex className="hidden flex-wrap items-center bg-slate-800 px-5 py-[34px] lg:flex">
            <div className="w-1/4">
              <h2 className="text-[16px] font-bold text-white">Product</h2>
            </div>
            <div className="w-1/4">
              <h2 className="text-[16px] font-bold text-white">Price</h2>
            </div>
            <div className="w-1/4">
              <h2 className="text-[16px] font-bold text-white">Quantity</h2>
            </div>
            <div className="w-1/4">
              <h2 className="text-[16px] font-bold text-white">Sub Total</h2>
            </div>
          </Flex>
          {/* cart header for big screen  */}

          {/* cart body for big screen */}

          {cart.length > 0 ? (
            cart.map((data, i) => (
              <Flex
                key={i}
                className="hidden flex-wrap border-[1px] border-[#F0F0F0] px-5 py-[30px] lg:flex"
              >
                <div className="w-1/4">
                  <Flex className={`items-center gap-10`}>
                    <FaTimes
                      onClick={() => removeItemFromCart(data)}
                      className="cursor-pointer"
                    />
                    <Flex className={`items-center gap-5`}>
                      <Image
                        className={`h-[100px] w-[100px]`}
                        src={data.thumbnail}
                      />
                      <div>
                        <Link
                          to={`/product/${data.id}`}
                          className="font-dm text-[16px] font-bold text-black hover:underline"
                        >
                          {data.title}
                        </Link>

                        {/* <p className="mt-2 text-base font-semibold">
                          Size: {data.dimensions}
                        </p> */}
                      </div>
                    </Flex>
                  </Flex>
                </div>

                <Flex className="w-1/4 items-center">
                  <h3 className="text-[20px] font-bold text-black">
                    ৳ {data.price} BDT
                  </h3>
                </Flex>

                <Flex className={`w-1/4 items-center`}>
                  <Flex className={`border-[1px] border-[#F0F0F0]`}>
                    <button
                      onClick={() => quantity(i, -1)}
                      className="px-[21px] py-[3px] text-[16px] font-normal leading-[30px] text-black/80"
                    >
                      -
                    </button>
                    <button className="px-[21px] py-[3px] text-[16px] font-normal leading-[30px] text-black/80">
                      {data.qun}
                    </button>
                    <button
                      onClick={() => quantity(i, +1)}
                      className="px-[21px] py-[3px] text-[16px] font-normal leading-[30px] text-black/80"
                    >
                      +
                    </button>
                  </Flex>
                </Flex>

                <Flex className="w-1/4 items-center">
                  <h3 className="text-[20px] font-bold text-black">
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
            <h2 className="hidden border-[2px] border-slate-800 p-3 text-center text-lg font-bold text-black lg:block">
              Your cart is empty
            </h2>
          )}

          {/* cart body for big screen */}

          {/* totals start */}
          <div className="mb-[140px] mt-[54px]">
            <h4 className="font-dm text-right text-[20px] font-bold text-black">
              Cart totals
            </h4>

            <div className="mt-6 w-full text-center lg:ml-auto lg:w-[644px]">
              <Flex>
                <p className="w-1/2 border-[1px] border-[#F0F0F0] px-5 py-4 text-base font-bold text-black">
                  Subtotal
                </p>
                <p className="w-1/2 border-[1px] border-[#F0F0F0] px-5 py-4 text-base font-normal text-black">
                  ৳ {total} BDT
                </p>
              </Flex>
              <Flex>
                <p className="w-1/2 border-[1px] border-[#F0F0F0] px-5 py-4 text-base font-bold text-black">
                  Total
                </p>
                <p className="w-1/2 border-[1px] border-[#F0F0F0] px-5 py-4 text-base font-normal text-black">
                  ৳ {total} BDT
                </p>
              </Flex>
            </div>

            {cart.length > 0 && (
              <button
                onClick={() => navigate("/checkout")}
                className="font-dm ms-auto mt-[30px] block w-full bg-slate-800 px-8 py-4 text-[14px] font-bold text-white md:w-auto"
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
