import React from "react";
import Logo from "../../../public/images/Logo2.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-w-7xl  mx-auto pb-[120px] px-4">
      <section className="flex items-start justify-between gap-24">
        <div className="flex-1 space-y-10">
          <Image src={Logo} alt="boldo" className="w-40" />
          <p className="text-gray w-2/3">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
        </div>
        <div className="flex-1 flex gap-24">
          <div className="flex1 space-y-10">
            <h5 className="text-xl font-bold">Landings</h5>
            <div>
              <Link className="text-gray text-xl" href="/">
                Home
              </Link>
            </div>

            <div>
              <Link className="text-gray text-xl" href="/">
                Products
              </Link>
            </div>

            <div>
              <Link className="text-gray text-xl" href="/">
                Services
              </Link>
            </div>
          </div>

          <div className="flex-1 space-y-10">
            <h5 className="text-xl font-bold">Company</h5>
            <div>
              <Link className="text-gray text-xl" href="/">
                Home
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Link className="text-gray text-xl" href="/">
                Careers
              </Link>

              <div className="bg-green text-dark-blue text-[13px] font-bold px-[14px] py-[1px] h-[30px] flex items-center justify-center rounded-full">
                Hiring!
              </div>
            </div>

            <div>
              <Link className="text-gray text-xl" href="/">
                Services
              </Link>
            </div>
          </div>

          <div className="flex-1 space-y-10">
            <h5 className="text-xl font-bold">Resources</h5>
            <div>
              <Link className="text-gray text-xl" href="/">
                Blog
              </Link>
            </div>

            <div>
              <Link className="text-gray text-xl" href="/">
                Products
              </Link>
            </div>

            <div>
              <Link className="text-gray text-xl" href="/">
                Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      <p className="text-gray">All rights reserved.</p>
    </footer>
  );
};

export default Footer;
