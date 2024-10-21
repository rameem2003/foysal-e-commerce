import React, { useState } from "react";
import Container from "../components/common/Container";
import BreadCrums from "../components/common/BreadCrums";
import Flex from "../components/common/Flex";
import Image from "../components/common/Image";
import contact from "../assets/contact.png";

const Contact = () => {
  // states for all contact messages data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //   function for handle submit =
  const handleSubmit = () => {
    console.log({ name, email, message });
  };
  return (
    <main className="py-[100px]">
      <Container>
        <BreadCrums location="Contact us" />

        <section className="mt-[100px]">
          <Flex>
            <div className="w-full lg:w-5/12">
              <form action="" onSubmit={handleSubmit}>
                <form action="">
                  <div className="mb-5 w-full">
                    <label
                      className="text-base font-medium text-black"
                      htmlFor=""
                    >
                      Your Full Name
                    </label>

                    <input
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      className="font-kanit h-full w-full rounded-md border-[2px] border-primary p-2 text-base font-medium xl:text-xl"
                      type="text"
                      placeholder=""
                      required
                    />
                  </div>

                  <div className="mb-5 w-full">
                    <label
                      className="text-base font-medium text-black"
                      htmlFor=""
                    >
                      Your Email Address
                    </label>

                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      className="font-kanit h-full w-full rounded-md border-[2px] border-primary p-2 text-base font-medium xl:text-xl"
                      type="text"
                      placeholder="jhondoe@email.com"
                      required
                    />
                  </div>

                  <div className="mb-5 w-full">
                    <label
                      className="text-base font-medium text-black"
                      htmlFor=""
                    >
                      Your Messages
                    </label>

                    <textarea
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      className="font-kanit h-[250px] w-full rounded-md border-[2px] border-primary p-2 text-base font-medium xl:text-xl"
                      name=""
                      id=""
                      type="text"
                      placeholder=""
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-md border-[2px] border-primary bg-white p-3 text-xl font-medium text-primary duration-300 ease-in-out hover:bg-primary hover:text-white"
                  >
                    Login
                  </button>
                </form>
              </form>
            </div>
            <div className="hidden lg:block lg:w-7/12">
              <Image src={contact} alt="contact" />
            </div>
          </Flex>
        </section>
      </Container>
    </main>
  );
};

export default Contact;
