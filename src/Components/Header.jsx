import React, { useEffect } from "react";
import { Navbar, NavbarLink } from "flowbite-react";
import AOS from 'aos';
import 'aos/dist/aos.css'

const Header = () => {
  useEffect(() => {
      AOS.init({
        offset: 200,
        duration: 1000,
      });
    }, [])

  return (
    <>

      <Navbar fluid rounded>
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Curriculum Vite
          </span>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Navbar.Link href="#home">Home</Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
