import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Container from "../components/common/Container";
import BreadCrums from "../components/common/BreadCrums";
import Flex from "../components/common/Flex";
import SuccessfullScreen from "../components/screens/CheckoutPage/SuccessfullScreen";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { cartClear } from "../redux/features/CartSlice";
import { useNavigate } from "react-router-dom";
import { districts } from "../constants/constant";
import ProcessingAnimation from "../components/common/ProcessingAnimation";

const Checkout = () => {
  const navigate = useNavigate(); // navigation instance
  const customerData = useSelector((state) => state.user.user); // get customer data from rudux
  const cart = useSelector((state) => state.cartArray.cart); // get cart info from the redux
  const dispatch = useDispatch(); // disapatch instance

  // all state for handle checkout shipping data
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [district, setDistrict] = useState("");
  const [postcode, setPostcode] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0); // for calculate & store the price

  // calculate the grand total
  const calculateTotal = () => {
    let p = 0;
    cart.map((data) => (p = p + Math.round(data.price * data.qun)));
    setTotal(p);
  };

  useEffect(() => {
    calculateTotal();
  });

  // check if the customer are logged in
  useEffect(() => {
    if (customerData.status == false) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // function for checkout
  const handleCheckout = async (e) => {
    e.preventDefault();
    setLoading(true);

    let orderInvoiceData = {
      orderID: uuidv4(),
      customerName: customerData.user,
      customerType: customerData.type,
      phone: customerData.phone,
      address,
      area,
      district,
      postcode,
      orderTimeStamp: new Date().toLocaleString(),
      orderTimeString: Date.now(),
      cart,
      grandTotal: total,
      orderStatus: "pending",
      shippingAgent: "Not Assigned",
    };

    if (address && area && district && postcode) {
      try {
        const res = await axios.post("", orderInvoiceData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setLoading(false);
        setIsSuccess(true);
        dispatch(cartClear());
      } catch (error) {
        console.log(error);
        setLoading(false);
        setIsSuccess(false);
      }
    }
  };

  return (
    <main className="relative my-10">
      <Container>
        <BreadCrums location="Checkout" />
        {loading && <ProcessingAnimation />}

        {cart.length == 0 && (
          <p className="bg-red-700 p-3 text-center text-xl font-semibold text-white">
            You have no item to cart. pls get your products
          </p>
        )}

        <div className="md:mt-[100px]">
          {isSuccess && <SuccessfullScreen />}
          <Flex className="flex-col-reverse gap-5 md:flex-row">
            <div className="w-full md:w-1/2">
              <h4 className="mb-[42px] text-lg font-bold text-black lg:text-[40px]">
                Your Shipping Address
              </h4>

              <form action="" onSubmit={handleCheckout}>
                <div className="mb-5 w-full">
                  <label
                    className="text-base font-medium text-black"
                    htmlFor=""
                  >
                    Your Address
                  </label>

                  <input
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    className="font-kanit h-full w-full border-[1px] border-black p-2 text-base font-medium xl:text-xl"
                    type="text"
                    required
                  />
                </div>
                <div className="mb-5 w-full">
                  <label
                    className="text-base font-medium text-black"
                    htmlFor=""
                  >
                    Your Area
                  </label>

                  <input
                    onChange={(e) => setArea(e.target.value)}
                    value={area}
                    className="font-kanit h-full w-full border-[1px] border-black p-2 text-base font-medium xl:text-xl"
                    type="text"
                    required
                  />
                </div>
                <div className="mb-5 w-full">
                  <label
                    className="text-base font-medium text-black"
                    htmlFor=""
                  >
                    Your District
                  </label>

                  <select
                    name=""
                    id=""
                    className="font-kanit h-full w-full border-[1px] border-black p-2 text-base font-medium xl:text-xl"
                    onChange={(e) => setDistrict(e.target.value)}
                    value={district}
                    required
                  >
                    <option selected disabled value="">
                      Select
                    </option>
                    {districts.map((data, i) => (
                      <option value={data} key={i}>
                        {data}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-5 w-full">
                  <label
                    className="text-base font-medium text-black"
                    htmlFor=""
                  >
                    Post Code
                  </label>

                  <input
                    onChange={(e) => setPostcode(e.target.value)}
                    value={postcode}
                    className="font-kanit h-full w-full border-[1px] border-black p-2 text-base font-medium xl:text-xl"
                    type="text"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full bg-slate-800 p-3 text-xl font-medium text-white ${
                    cart.length == 0 &&
                    "pointer-events-none cursor-not-allowed bg-slate-400"
                  }`}
                >
                  Procced to Checkout
                </button>
              </form>
            </div>

            <div className="w-full md:w-1/2">
              <h4 className="mb-[42px] text-lg font-bold text-black lg:text-[40px]">
                Your Order
              </h4>

              <div className="w-full xl:w-[644px]">
                <Flex>
                  <p className="font-dm w-1/2 border-[1px] border-[#F0F0F0] px-5 py-4 text-[16px] font-bold text-primary">
                    Product
                  </p>
                  <p className="font-dm text-secondary w-1/2 border-[1px] border-[#F0F0F0] px-5 py-4 text-[16px] font-normal">
                    Total
                  </p>
                </Flex>

                {cart.length > 0 ? (
                  cart.map((cItem, i) => (
                    <Flex key={i}>
                      <p className="font-dm w-1/2 border-[1px] border-[#F0F0F0] px-5 py-4 text-[16px] font-bold text-primary">
                        {cItem.title} (x{cItem.qun})
                      </p>
                      <p className="font-dm text-secondary w-1/2 border-[1px] border-[#F0F0F0] px-5 py-4 text-[16px] font-normal">
                        ৳ {cItem.price * cItem.qun} BDT
                      </p>
                    </Flex>
                  ))
                ) : (
                  <Flex>
                    <p className="font-dm w-1/2 border-[1px] border-[#F0F0F0] px-5 py-4 text-[16px] font-bold text-primary">
                      Product name x 1
                    </p>
                    <p className="font-dm text-secondary w-1/2 border-[1px] border-[#F0F0F0] px-5 py-4 text-[16px] font-normal">
                      389.99 $
                    </p>
                  </Flex>
                )}

                <Flex className="bg-red-700">
                  <p className="font-dm w-1/2 border-[1px] border-[#F0F0F0] px-5 py-4 text-[16px] font-bold text-white">
                    Subtotal
                  </p>
                  <p className="font-dm w-1/2 border-[1px] border-[#F0F0F0] px-5 py-4 text-[16px] font-normal text-white">
                    ৳ {total} BDT
                  </p>
                </Flex>
                <Flex className="bg-red-700">
                  <p className="font-dm w-1/2 border-[1px] border-[#F0F0F0] px-5 py-4 text-[16px] font-bold text-white">
                    Total
                  </p>
                  <p className="font-dm w-1/2 border-[1px] border-[#F0F0F0] px-5 py-4 text-[16px] font-normal text-white">
                    ৳ {total} BDT
                  </p>
                </Flex>
              </div>
            </div>
          </Flex>
        </div>
      </Container>
    </main>
  );
};

export default Checkout;
