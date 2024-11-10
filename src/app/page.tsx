import Image from "next/image";
import Navbar from "./components/navbar";
import Button from "./components/button";
import HeroImg1 from "../../public/images/herosection/progress.svg";
import HeroImg2 from "../../public/images/herosection/chart1.svg";
import HeroImg3 from "../../public/images/herosection/chart2.svg";
import PartnershipCarousel from "./components/partnershipCarousel";
import ServiceImg1 from "../../public/images/ourservices/img1.svg";
import ServiceImg2 from "../../public/images/ourservices/img2.svg";
import ServiceImg3 from "../../public/images/ourservices/img3.svg";
import ServiceImg4 from "../../public/images/ourservices/img4.png";
import ServiceImg5 from "../../public/images/ourservices/img5.png";
import Iconify from "./components/icon";
import Testimonial from "./components/testimonial";
import TestnlImg from "../../public/images/testimonial/img4.png";
import BlogImg1 from "../../public/images/blog/img1.svg";
import BlogImg2 from "../../public/images/blog/img2.png";
import BlogImg3 from "../../public/images/blog/img3.svg";
import BlogImg4 from "../../public/images/blog/img4.png";
import BlogImg5 from "../../public/images/blog/img5.png";
import BlogImg6 from "../../public/images/blog/img6.png";

export default function Home() {
  return (
    <section>
      <section className="bg-dark-blue pt-14 pb-16 overflow-hidden relative">
        <div className="max-w-7xl  mx-auto relative z-50 space-y-16 px-4">
          <Navbar />

          <div className="flex items-center gap-36">
            <div className="text-white flex-1 space-y-10">
              <div className=" space-y-4">
                <h1
                  className="text-5xl font-manrope"
                  style={{ lineHeight: "72px" }}
                >
                  Save time by building <br /> fast with Boldo Template
                </h1>
                <p>
                  Funding handshake buyer business-to-business metrics iPad
                  partnership. <br /> First mover advantage innovator success
                  deployment non-disclosure.
                </p>
              </div>

              <div className="flex items-center gap-6 w-4/5">
                <div className="flex-none w-max">
                  <Button title="Buy template" variant="primary" />
                </div>
                <div className="w-max">
                  <Button title="Explore" variant="outline" />
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-6 z-50 relative">
              <Image
                src={HeroImg1}
                alt="hero -image"
                className="col-span-3 w-full backdrop-blur-lg"
              />
              <div className="flex items-center gap-9">
                <Image
                  src={HeroImg2}
                  alt="hero -image"
                  className="w-[43%] backdrop-blur-lg"
                />
                <Image
                  src={HeroImg3}
                  alt="hero -image"
                  className="w-[57%] backdrop-blur-lg"
                />
              </div>
            </div>
          </div>

          <div className="p-4 overflow-x-hidden relative">
            <div className="absolute top-0 bottom-0  left-0 w-36 z-10 bg-gradient-to-r from-dark-blue to-transparent" />
            <PartnershipCarousel />
            <div className="absolute top-0 bottom-0  right-0 w-36 z-10 bg-gradient-to-l from-dark-blue to-transparent" />
          </div>
        </div>

        <div className="w-[1293px] h-[1293px] absolute rounded-full bg-[#1C3D5B] -top-[789px] left-[777px] -z-0" />
      </section>

      <section className="max-w-7xl mx-auto pt-[120px] pb-[84px] px-4 space-y-20">
        <div className="text-center space-y-3">
          <h5 className="text-gray">Our Services</h5>
          <h1 className="text-5xl font-manrope" style={{ lineHeight: "72px" }}>
            Handshake infographic mass market <br /> crowdfunding iteration.
          </h1>
        </div>

        <div className="grid grid-cols-3 gap-[100px]">
          <div className="space-y-6">
            <Image src={ServiceImg1} alt="Our services" className="w-full" />
            <div className="space-y-7">
              <div className="space-y-3">
                <h3 className="text-2xl">Cool feature title</h3>
                <p className="text-xl text-gray">
                  Learning curve network effects return on investment.
                </p>
              </div>

              <Button
                title="Explore"
                variant="transparent"
                customStyle="rounded-none w-max px-1 pb-2"
                size="np"
                endIcon={
                  <Iconify
                    icon="lucide:arrow-right"
                    className="text-dark-blue"
                  />
                }
              />
            </div>
          </div>

          <div className="space-y-6">
            <Image src={ServiceImg2} alt="Our services" className="w-full" />
            <div className="space-y-7">
              <div className="space-y-3">
                <h3 className="text-2xl">Even cooler feature</h3>
                <p className="text-xl text-gray">
                  Learning curve network effects return on investment.
                </p>
              </div>

              <Button
                title="Explore"
                variant="transparent"
                customStyle="rounded-none w-max px-1 pb-2"
                size="np"
                endIcon={
                  <Iconify
                    icon="lucide:arrow-right"
                    className="text-dark-blue"
                  />
                }
              />
            </div>
          </div>

          <div className="space-y-6">
            <Image src={ServiceImg3} alt="Our services" className="w-full" />
            <div className="space-y-7">
              <div className="space-y-3">
                <h3 className="text-2xl">Cool feature title</h3>
                <p className="text-xl text-gray">
                  Learning curve network effects return on investment.
                </p>
              </div>

              <Button
                title="Explore"
                variant="transparent"
                customStyle="rounded-none w-max px-1 pb-2"
                size="np"
                endIcon={
                  <Iconify
                    icon="lucide:arrow-right"
                    className="text-dark-blue"
                  />
                }
              />
            </div>
          </div>
        </div>
      </section>

      <section className="page_sections page_sections_pad">
        <div className="flex items-center gap-[150px]">
          <div className="flex-1">
            <Image src={ServiceImg4} alt="Service" />
          </div>

          <div className="flex-1 space-y-14">
            <div className="space-y-10">
              <h1 className="text-4xl font-manrope" style={{ lineHeight: "56px" }}>
                We connect our customers with the best, and help them keep
                up-and stay open.
              </h1>

              <div className="space-y-6">
                <div className="flex items-center gap-7">
                  <Iconify
                    icon="icon-park-solid:check-one"
                    className="text-dark-blue text-4xl"
                  />
                  <p className="text-xl">
                    We connect our customers with the best.
                  </p>
                </div>
                <div className="flex items-center gap-7">
                  <Iconify
                    icon="icon-park-solid:check-one"
                    className="text-dark-blue text-4xl"
                  />
                  <p className="text-xl">
                    Advisor success customer launch party.
                  </p>
                </div>
                <div className="flex items-center gap-7">
                  <Iconify
                    icon="icon-park-solid:check-one"
                    className="text-dark-blue text-4xl"
                  />
                  <p className="text-xl">Business-to-consumer long tail.</p>
                </div>
              </div>
            </div>

            <Button title="Start now" variant="black" customStyle="w-max" />
          </div>
        </div>

        <div className="flex items-center gap-[150px]">
          <div className="flex-1 space-y-14">
            <div className="space-y-16">
              <h1 className="text-4xl font-manrope" style={{ lineHeight: "56px" }}>
                We connect our customers with the best, and help them keep
                up-and stay open.
              </h1>

              <div className="space-y-6">
                <div className="bg-dark-blue py-4 px-5 h-[68px] rounded flex items-center gap-3 text-white">
                  <Iconify icon="lucide:feather" className="text-2xl" />
                  <p className="font-semibold">
                    We connect our customers with the best.
                  </p>
                </div>

                <div className="bg-white shadow-xl shadow-black/5  py-4 px-5 h-[68px] rounded flex items-center gap-3">
                  <Iconify icon="iconamoon:eye-light" className="text-2xl" />
                  <p className="font-semibold">
                    Advisor success customer launch party.
                  </p>
                </div>

                <div className="bg-white shadow-xl shadow-black/5  py-4 px-5 h-[68px] rounded flex items-center gap-3">
                  <Iconify icon="uil:sun" className="text-2xl" />
                  <p className="font-semibold">
                    Business-to-consumer long tail.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <Image src={ServiceImg5} alt="Service" />
          </div>
        </div>
      </section>

      <section className="bg-dark-blue">
        <section className="max-w-7xl mx-auto py-24 px-4 space-y-14">
          <div className=" flex items-end justify-between">
            <h1 className="text-5xl font-manrope text-white" style={{ lineHeight: "72px" }}>
              An enterprise template to ramp up <br /> your company website
            </h1>

            <div className="flex items-center gap-7">
              <div className="bg-white w-[72px] h-[72px] rounded-full flex items-center justify-center">
                <Iconify
                  icon="lucide:arrow-left"
                  className="text-dark-blue text-4xl"
                />
              </div>
              <div className="bg-white w-[72px] h-[72px] rounded-full flex items-center justify-center">
                <Iconify
                  icon="lucide:arrow-right"
                  className="text-dark-blue text-4xl"
                />
              </div>
            </div>
          </div>

          <Testimonial />
        </section>
      </section>

      <section className="page_sections page_sections_pad">
        <Image src={TestnlImg} alt="Testimonial" className="w-full" />

        <div className="flex items-center justify-between gap-[100px]">
          <div className="flex-1">
            <h1 className="text-4xl font-manrope" style={{ lineHeight: "56px" }}>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </h1>
          </div>

          <div className="flex-1 space-y-8">
            <div className="h-[54px] border-b border-gray/30 pb-4 flex items-center justify-between">
              <p className="text-xl">We connect our customers with the best?</p>
              <Iconify
                icon="iconamoon:arrow-down-6-circle-fill"
                className="text-3xl text-dark-blue"
              />
            </div>
            <div className="h-[54px] border-b border-gray/30 pb-4 flex items-center justify-between">
              <p className="text-xl">
                Android research & development rockstar?
              </p>
              <Iconify
                icon="iconamoon:arrow-down-6-circle-fill"
                className="text-3xl text-dark-blue"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="page_sections">
        <div className="text-center space-y-3">
          <h5 className="text-gray">Our Blog</h5>
          <h1 className="text-5xl font-manrope" style={{ lineHeight: "72px" }}>
            Value proposition accelerator product <br /> management venture
          </h1>
        </div>

        <div className="grid grid-cols-3 gap-[100px]">
          <div className="space-y-6">
            <Image src={BlogImg1} alt="Our services" className="w-full" />
            <div className="space-y-5">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <h3 className="font-bold">Category</h3>
                  <p className="text-gray">November 22, 2021</p>
                </div>
                <p className="text-xl">
                  Pitch termsheet backing validation focus release.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src={BlogImg4}
                  alt="blog"
                  className="h-8 w-8 rounded-full"
                />
                <p>Chandler Bing</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Image src={BlogImg2} alt="Our services" className="w-full" />
            <div className="space-y-5">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <h3 className="font-bold">Category</h3>
                  <p className="text-gray">November 22, 2021</p>
                </div>
                <p className="text-xl">
                  Seed round direct mailing non-disclosure agreement graphical
                  user interface rockstar.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src={BlogImg5}
                  alt="blog"
                  className="h-8 w-8 rounded-full"
                />
                <p>Rachel Green</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Image src={BlogImg3} alt="Our services" className="w-full" />
            <div className="space-y-5">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <h3 className="font-bold">Category</h3>
                  <p className="text-gray">November 22, 2021</p>
                </div>
                <p className="text-xl">
                  Beta prototype sales iPad gen-z marketing network effects
                  value proposition
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src={BlogImg6}
                  alt="blog"
                  className="h-8 w-8 rounded-full"
                />
                <p>Monica Geller</p>
              </div>
            </div>
          </div>
        </div>

        <Button
          title="Load more"
          variant="outlineDark"
          customStyle="w-max mx-auto"
        />
      </section>

      <section className="page_sections page_sections_pad">
        <div className="bg-dark-blue py-[72px] rounded-xl relative overflow-hidden">
          <div className="text-white text-center space-y-12">
            <h1 className="text-5xl font-manrope" style={{ lineHeight: "72px" }}>
              An enterprise template to ramp <br /> up your company website
            </h1>

            <div className="flex items-center justify-center gap-6">
              <input
                className="bg-white w-1/3 rounded-full h-[56px] px-8"
                placeholder="Your email address"
              />
              <Button title="Start now" variant="primary" customStyle="w-max" />
            </div>
          </div>

          <div className="w-[1293px] h-[1293px] absolute rounded-full bg-[#1C3D5B] -top-[1054px] left-[777px] -z-0" />
        </div>
      </section>
    </section>
  );
}
