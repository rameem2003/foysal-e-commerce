import React, { useEffect, useState } from "react";
import Container from "../components/common/Container";
import BreadCrums from "../components/common/BreadCrums";
import Flex from "../components/common/Flex";
import Image from "../components/common/Image";
import axios from "axios";
import { useSelector } from "react-redux";
import OrderCard from "../components/screens/profile/OrderCard";

const Profile = () => {
  const customerdata = useSelector((state) => state.user.user); // get customer info from the redux
  const [orders, setOrders] = useState([]);

  const fecthOrderslist = async () => {
    const res = await axios.get("https://smcorpapi.vercel.app/api/order");

    let filtered = res.data.filter((item) => item.phone == customerdata.phone);

    setOrders(filtered);
  };

  useEffect(() => {
    fecthOrderslist();
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <main className="my-10">
      <Container>
        <BreadCrums location="Profile" />

        <Flex className="mt-5 flex-col lg:flex-row gap-10">
          <div className=" w-full  lg:w-3/12">
            <h2 className=" font-bold text-xl xl:text-5xl text-black">
              Profile Info
            </h2>

            <Image
              src="/avater.png"
              className=" sm:w-[50%] lg:w-full mx-auto"
            />

            <div className="mt-2">
              <h3 className=" font-bold text-3xl text-black text-center">
                {customerdata.user}
              </h3>
              <h3 className=" font-semibold text-xl text-black text-center">
                Phone: {customerdata.phone}
              </h3>
              <h3 className=" font-semibold text-xl text-black text-center capitalize">
                Customer Type: {customerdata.type}
              </h3>
            </div>
          </div>
          <div className=" w-full  lg:w-9/12">
            <h2 className=" font-bold text-xl xl:text-5xl text-black text-left lg:text-right">
              Your Order's
            </h2>

            <div className="mt-5">
              {orders.length == 0 && (
                <p className=" font-bold text-lg text-red-700">
                  You have no order's in recent past
                </p>
              )}

              {orders
                .sort((a, b) => b.orderTimeString - a.orderTimeString)
                .map((data, i) => (
                  <OrderCard key={i} data={data} />
                ))}
            </div>
          </div>
        </Flex>
      </Container>
    </main>
  );
};

export default Profile;
