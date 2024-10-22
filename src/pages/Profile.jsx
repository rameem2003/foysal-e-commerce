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
    const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}order`);

    let filtered = res.data.filter((item) => item.email == customerdata.email);

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

        <Flex className="mt-5 flex-col gap-10 lg:flex-row">
          <div className="w-full lg:w-3/12">
            <h2 className="text-xl font-bold text-black xl:text-5xl">
              Profile Info
            </h2>

            <Image src="/avater.png" className="mx-auto sm:w-[50%] lg:w-full" />

            <div className="mt-2">
              <h3 className="text-center text-3xl font-bold text-black">
                {customerdata.user}
              </h3>
              <h3 className="text-center text-xl font-semibold text-black">
                Phone: {customerdata.phone}
              </h3>
              <h3 className="text-center text-xl font-semibold capitalize text-black">
                Email: <span className="lowercase">{customerdata.email}</span>
              </h3>
            </div>
          </div>
          <div className="w-full lg:w-9/12">
            <h2 className="text-left text-xl font-bold text-black lg:text-right xl:text-5xl">
              Your Order's
            </h2>

            <div className="mt-5">
              {orders.length == 0 && (
                <p className="text-lg font-bold text-red-700">
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
