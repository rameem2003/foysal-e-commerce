import React, { useEffect, useRef, useState } from "react";
import Container from "./../common/Container";
import Flex from "./../common/Flex";
import Image from "./../common/Image";
import logo from "../../assets/logo.png";
import List from "./../common/List";
import ListItem from "./../common/ListItem";
import { Link } from "react-router-dom";
import { FaBars, FaFacebook, FaPhone } from "react-icons/fa6";

const Navigation = () => {
  const [tog, setTog] = useState(false); // mobile view toggle
  const togref = useRef(); // mobile view toggle ref

  useEffect(() => {
    document.addEventListener("click", (e) => {
      togref.current.contains(e.target) ? setTog(true) : setTog(false);
    });
  }, []);
  return (
    <nav className="bg-white py-2">
      <Container>
        <Flex className="items-center">
          <div className="w-1/2 lg:w-4/12">
            <Link to="/">
              <Image className="w-[80px]" src={logo} alt="logo" />
            </Link>
          </div>

          <div
            className={`absolute top-[75px] z-[100] flex h-screen items-center justify-center duration-300 ease-in-out ${
              tog ? "left-0 w-[80%]" : "left-[-100%]"
            } w-full bg-white lg:static lg:h-full lg:w-4/12`}
          >
            <List className="flex flex-col items-center justify-center gap-5 lg:flex-row">
              <ListItem>
                <Link className="text-lg font-bold text-primary" to="/">
                  Home
                </Link>
              </ListItem>
              <ListItem>
                <Link className="text-lg font-bold text-primary" to="/shop">
                  Shop
                </Link>
              </ListItem>
              <ListItem>
                <Link className="text-lg font-bold text-primary" to="/contact">
                  Contact
                </Link>
              </ListItem>
            </List>
          </div>

          <div className="w-1/2 lg:w-4/12">
            <Flex className="items-center justify-end gap-4">
              <List className="flex flex-row items-end justify-end gap-3 xl:gap-5">
                <ListItem>
                  <a
                    className="flex items-center gap-2"
                    href="https://www.facebook.com/groups/954625342098929"
                    target="_blank"
                  >
                    <FaFacebook className="text-[20px] text-blue-500" />
                    <span className="hidden font-bold text-black lg:block xl:text-lg">
                      Facebook
                    </span>
                  </a>
                </ListItem>
                <ListItem>
                  <a className="flex items-center gap-2" href="tel:01933788415">
                    <FaPhone className="text-[20px] text-black" />
                    <span className="hidden font-bold text-black lg:block xl:text-lg">
                      01933-788415
                    </span>
                  </a>
                </ListItem>
              </List>
              <div ref={togref}>
                <FaBars className="block text-[20px] lg:hidden" />
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navigation;
