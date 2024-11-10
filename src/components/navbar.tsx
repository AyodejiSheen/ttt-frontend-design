import Image from "next/image";
import React from "react";
import Logo from "../../public/images/Logo.png";
import Button from "./button";
import Link from "next/link";

const Navbar = () => {
  const navItems = [
    {
      id: 1,
      name: "Product",
    },
    {
      id: 2,
      name: "Services",
    },

    {
      id: 3,
      name: "About",
    },
  ];

  return (
    <nav className="flex items-center justify-between">
      <div>
        <Image src={Logo} alt="boldo" className="w-40" />
      </div>

      <div className="flex items-center gap-10">
        <div className="flex items-center gap-10">
          {navItems.map((item) => (
            <Link href="/" key={item.id} className="text-white font-semibold">
              {item.name}
            </Link>
          ))}
        </div>

        <Button title={"Log In"} size="sm" />
      </div>
    </nav>
  );
};

export default Navbar;
