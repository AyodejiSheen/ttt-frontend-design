import React from "react";
import Person1 from "../../../public/images/testimonial/img1.png";
import Person2 from "../../../public/images/testimonial/img2.png";
import Person3 from "../../../public/images/testimonial/img3.png";
import Image from "next/image";

const Testimonial = () => {
  const testimonial = [
    {
      name: "Albus Dumbledore",
      image: Person1,
      text: "Buyer buzz partner network disruptive non-disclosure agreement business.",
      role: "Manager @ Howarts",
    },

    {
      name: "Severus Snape",
      image: Person2,
      text: "Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.",
      role: "Manager @ Slytherin",
    },

    {
      name: "Harry Potter",
      image: Person3,
      text: "Release facebook responsive web design business model canvas seed money monetization.",
      role: "Team Leader @ Gryffindor",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-[22px]">
      {testimonial.map((each, i) => (
        <div key={i} className="bg-white p-10 rounded-xl h-max space-y-10">
          <h3 className="text-2xl" style={{ lineHeight: "36px" }}>
            &quot;{`${each.text}`}&quot;
          </h3>
          <div className="flex items-center space-x-4">
            <Image
              src={each.image}
              alt="testimonial"
              className="w-[58px] h-[58px]"
            />
            <div>
              <h3 className="font-bold text-dark-blue">{each.name}</h3>
              <p className="text-sm text-dark-blue">{each.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
