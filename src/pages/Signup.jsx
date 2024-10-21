import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import Container from "../components/common/Container";
import BreadCrums from "../components/common/BreadCrums";
import ButtonAnimation from "../components/common/ButtonAnimation";
import toast, { Toaster } from "react-hot-toast";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate(); // navigation instance
  // states for get the user signup info
  const [name, setName] = useState("");
  const [customerType, setCustomerType] = useState("individual");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordToggle, setPasswordToggle] = useState(false);
  const [loading, setLoading] = useState(false);

  // function for signup user
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Regular expression to check for English letters (A-Z, a-z)
    const englishRegex = /^[a-zA-Z\s]*$/;
    const numberRegex = /^[0-9]+$/;

    if (!englishRegex.test(name)) {
      toast.error("Pls Enter Name In English");
      setLoading(false);
    }

    if (!numberRegex.test(phone)) {
      toast.error("Pls Enter Phone Number In English");
      setLoading(false);
    }

    if (phone.length != 11) {
      toast.error("Pls Enter 11 Digit Valid Phone Number");
      setLoading(false);
    } else if (name && phone && password) {
      let newCustomer = {
        id: uuidv4(),
        name,
        customerType,
        phone,
        password,
        created: new Date().toLocaleString(),
      };

      try {
        const res = await axios.post("", newCustomer, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(res);

        if (res.data.msg == "User is exist with same number.") {
          setLoading(false);
          toast.error(res.data.msg);
        } else {
          toast.success("Signup successful");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        toast.error("Signup unsuccessfull");
      }
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <main className="my-10">
      <Toaster position="top-right" reverseOrder={false} />
      <Container>
        <BreadCrums location="Signup" />

        <form
          onSubmit={handleSignup}
          action=""
          className="mx-auto mt-10 w-full border-[1px] border-[#F0F0F0] p-2 md:w-[450px]"
        >
          <h2 className="mb-5 text-center text-2xl font-semibold">
            New Account
          </h2>

          <div className="mb-5 w-full">
            <label className="text-base font-medium text-black" htmlFor="">
              Your Full Name
            </label>

            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="font-kanit h-full w-full border-[1px] border-black p-2 text-base font-medium xl:text-xl"
              type="text"
              required
            />
          </div>

          <div className="mb-5 w-full">
            <label className="text-base font-medium text-black" htmlFor="">
              I am
            </label>

            <select
              onChange={(e) => setCustomerType(e.target.value)}
              value={customerType}
              className="font-kanit h-full w-full border-[1px] border-black p-2 text-base font-medium xl:text-xl"
              name=""
              id=""
              required
            >
              <option id="1" value="individual">
                an Individual Customer
              </option>
              <option id="2" value="reseller shop holder">
                a Reseller
              </option>
            </select>
          </div>
          <div className="mb-5 w-full">
            <label className="text-base font-medium text-black" htmlFor="">
              Your Mobile Number
            </label>

            <input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              className="font-kanit h-full w-full border-[1px] border-black p-2 text-base font-medium xl:text-xl"
              type="text"
              placeholder="01*********"
              required
            />
          </div>

          <div className="mb-5 w-full">
            <label className="text-base font-medium text-black" htmlFor="">
              Create New Password
            </label>
            <div className="relative">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="font-kanit h-full w-full border-[1px] border-black p-2 text-base font-medium xl:text-xl"
                type={passwordToggle ? "text" : "password"}
                required
              />

              {passwordToggle ? (
                <IoEyeOff
                  onClick={() => setPasswordToggle(!passwordToggle)}
                  className="absolute right-2 top-[50%] translate-y-[-50%] cursor-pointer text-black lg:text-2xl"
                />
              ) : (
                <IoEye
                  onClick={() => setPasswordToggle(!passwordToggle)}
                  className="absolute right-2 top-[50%] translate-y-[-50%] cursor-pointer text-black lg:text-2xl"
                />
              )}
            </div>
          </div>

          {loading ? (
            <ButtonAnimation />
          ) : (
            <button
              type="submit"
              className="w-full bg-slate-800 p-3 text-xl font-medium text-white"
            >
              Signup
            </button>
          )}

          <p className="mt-2 text-center text-base font-normal">
            <Link to="/login" className="text-red-500">
              Go to Login
            </Link>
          </p>
        </form>
      </Container>
    </main>
  );
};

export default Signup;
