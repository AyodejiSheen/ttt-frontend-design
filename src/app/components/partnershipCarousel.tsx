"use client";
import { motion } from "framer-motion";
import React from "react";
import Logo1 from "../../../public/images/herosection/partner1.svg";
import Logo2 from "../../../public/images/herosection/partner2.svg";
import Image from "next/image";

const PartnershipCarousel = () => {
  const Logos = [Logo1, Logo2, Logo1, Logo2, Logo1, Logo2, Logo1, Logo2, Logo1, Logo2,];

  return (
    <div className="flex overflow-hidden">
      {[1, 2, 3].map((_, i) => (
        <TranslateWrapper key={i}>
          <div className="flex gap-4">
            {Logos.map((each, i) => (
              <div key={i} className="flex w-36 justify-center items-center gap-4">
                <Image src={each} alt="Partners" key={i} className="w-32"/>
              </div>
            ))}
          </div>
        </TranslateWrapper>
      ))}
    </div>
  );
};

const TranslateWrapper = ({
  children,
  reverse,
}: {
  children: JSX.Element;
  reverse?: boolean;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {children}
    </motion.div>
  );
};

export default PartnershipCarousel;
