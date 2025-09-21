import React from "react";
import { Button } from "../../components/ui/button";
import { ContactSection } from "./sections/ContactSection/ContactSection";
import { FeaturesSection } from "./sections/FeaturesSection/FeaturesSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { ProjectsSection } from "./sections/ProjectsSection/ProjectsSection";
import { ServicesSection } from "./sections/ServicesSection/ServicesSection";
import { StatisticsSection } from "./sections/StatisticsSection/StatisticsSection";
import { TeamSection } from "./sections/TeamSection/TeamSection";

const navigationItems = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Blog", href: "#blog" },
];

const instagramImages = [
  {
    src: "https://c.animaapp.com/mftxaxohP9HH1n/img/rectangle-81.png",
    alt: "Instagram post 1",
    className: "w-[330.28px] h-[336.56px]",
  },
  {
    src: "https://c.animaapp.com/mftxaxohP9HH1n/img/rectangle-82.png",
    alt: "Instagram post 2",
    className: "w-[336.56px] h-[336.56px]",
  },
  {
    src: "https://c.animaapp.com/mftxaxohP9HH1n/img/rectangle-83.png",
    alt: "Instagram post 3",
    className: "w-[336.56px] h-[336.56px]",
  },
  {
    src: "https://c.animaapp.com/mftxaxohP9HH1n/img/rectangle-84.png",
    alt: "Instagram post 4",
    className: "w-[329.35px] h-[336.56px]",
  },
];

const socialIcons = [
  {
    src: "https://c.animaapp.com/mftxaxohP9HH1n/img/group-31.svg",
    alt: "Social media icon 1",
  },
  {
    src: "https://c.animaapp.com/mftxaxohP9HH1n/img/social-icon.svg",
    alt: "Social media icon 2",
  },
  {
    src: "https://c.animaapp.com/mftxaxohP9HH1n/img/watss.svg",
    alt: "WhatsApp icon",
  },
];

export const Desktop = (): JSX.Element => {
  return (
    <div
      className="bg-black overflow-hidden w-full min-w-[1440px] relative min-h-screen"
      style={{ height: '9200px' }}
      data-model-id="1:2"
    >
      {/* Background gradient overlays */}
      <div className="absolute top-0 left-[calc(50.00%_-_720px)] w-[1440px] h-[834px] shadow-[inset_0px_4px_191.6px_178px_#000000e0] bg-[linear-gradient(34deg,rgba(0,0,0,0.39)_0%,rgba(191,255,0,0.39)_100%)] opacity-[0.74]" />

      <div className="absolute top-[2256px] left-[calc(50.00%_-_720px)] w-[1440px] h-[834px] rotate-180 shadow-[inset_0px_4px_191.6px_178px_#000000e0] bg-[linear-gradient(34deg,rgba(0,0,0,0.39)_0%,rgba(191,255,0,0.39)_100%)] opacity-[0.74]" />

      {/* Background image */}
      <div className="absolute top-[269px] left-[-34px] w-[1370px] h-[1370px] rotate-[91.45deg]">
        <img
          className="absolute w-[102.50%] h-[102.50%] top-[-3.11%] left-0 rotate-[-91.45deg] object-cover"
          alt="Dsprsd"
          src="https://c.animaapp.com/mftxaxohP9HH1n/img/dsprsd.png"
        />
      </div>

      <div className="absolute top-[513px] left-0 w-[1440px] h-[1324px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)]" />

      {/* Fixed Navigation */}
      <nav className="fixed top-[50px] left-[100px] w-[1252px] h-[62px] flex z-50">
        <div className="w-[1252px] h-[62px] relative">
          <div className="absolute top-0 left-0 w-[1240px] h-[62px] bg-[#000000cc] rounded-[1000px] border-[none] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[1000px] before:[background:linear-gradient(184deg,rgba(191,255,0,0)_0%,rgba(191,255,0,0.29)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none" />

          <div className="inline-flex items-center gap-[39px] absolute top-[17px] left-[calc(50.00%_-_226px)]">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative h-7">
                <a
                  href={item.href}
                  className="[font-family:'Montserrat',Helvetica] font-medium text-[#949494] text-xl tracking-[0] leading-[27.1px] whitespace-nowrap hover:text-[#bfff00] transition-colors duration-300"
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div>

          <img
            className="absolute top-1.5 left-[1184px] w-[50px] h-[50px]"
            alt="Menu"
            src="https://c.animaapp.com/mftxaxohP9HH1n/img/group-30.svg"
          />

          <img
            className="absolute top-[22px] left-[31px] w-[134px] h-[18px]"
            alt="Logo"
            src="https://c.animaapp.com/mftxaxohP9HH1n/img/vector.svg"
          />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="absolute top-[150px] left-0 w-full z-10 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
        <HeroSection />
      </section>

      {/* Contact Button */}
      <div className="absolute top-[448px] left-[calc(50.00%_-_90px)] z-20 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <Button className="flex w-[177px] h-[42px] items-center justify-center gap-2.5 p-2.5 bg-[#bfff00] rounded-[1000px] hover:bg-[#a6e600] transition-colors duration-300">
          <span className="[font-family:'Montserrat',Helvetica] font-bold text-black text-[15px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Contactez-nous
          </span>
        </Button>
      </div>

      <img
        className="absolute top-[650px] left-[102px] w-[1234px] h-[114px]"
        alt="Decorative frame"
        src="https://c.animaapp.com/mftxaxohP9HH1n/img/frame-143.svg"
      />

      {/* Services Section */}
      <section className="absolute top-[700px] left-0 w-full z-10 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <ServicesSection />
      </section>

      {/* Projects Section */}
      <section className="absolute top-[1400px] left-0 w-full z-10 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <ProjectsSection />
      </section>

      {/* Process Section Title */}
      <div className="absolute top-[2100px] left-[435px] w-[667px] h-[89px] flex flex-col items-center gap-3 z-10 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
        <h2 className="-ml-0.5 h-[49px] w-[665px] [font-family:'Montserrat',Helvetica] font-bold text-white text-[40px] tracking-[0] leading-[normal]">
          COMMENT PROCÉDONS NOUS?
        </h2>

        <img
          className="ml-[-3.9px] h-[29.63px] w-[389.14px]"
          alt="Decorative line"
          src="https://c.animaapp.com/mftxaxohP9HH1n/img/vector-2047.svg"
        />
      </div>

      {/* Statistics Section */}
      <section className="absolute top-[2250px] left-0 w-full z-10 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
        <StatisticsSection />
      </section>

      {/* Team Section */}
      <section className="absolute top-[3100px] left-0 w-full z-10 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
        <TeamSection />
      </section>

      {/* Instagram Section */}
      <section className="absolute top-[4200px] left-[calc(50.00%_-_735px)] w-[1473px] h-[822px] flex flex-col z-10 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms]">
        <h2 className="ml-[18.1px] h-[49px] w-[215px] self-center [font-family:'Montserrat',Helvetica] font-bold text-white text-[40px] tracking-[0] leading-[normal]">
          Instagram
        </h2>

        <img
          className="ml-[647px] w-[198px] h-[17px] mt-2.5"
          alt="Decorative line"
          src="https://c.animaapp.com/mftxaxohP9HH1n/img/vector-2051.svg"
        />

        <img
          className="ml-[989px] w-[204.5px] h-[69.14px] mt-[43.5px]"
          alt="Decorative element"
          src="https://c.animaapp.com/mftxaxohP9HH1n/img/vector-2036.svg"
        />

        <div className="w-[1470.93px] h-[354px] mt-[57.4px] flex gap-[35.7px]">
          {instagramImages.map((image, index) => (
            <img
              key={index}
              className={`mt-[8.7px] ${image.className} ${index === 0 ? "ml-[15px]" : ""} object-cover hover:scale-105 transition-transform duration-300`}
              alt={image.alt}
              src={image.src}
            />
          ))}
        </div>

        <img
          className="ml-[161.5px] w-[701.98px] h-[112.14px] mt-[114px]"
          alt="Decorative element"
          src="https://c.animaapp.com/mftxaxohP9HH1n/img/vector-2035.svg"
        />
      </section>

      {/* Features Section */}
      <section className="absolute top-[5200px] left-0 w-full z-10 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1600ms]">
        <FeaturesSection />
      </section>

      {/* Contact Section */}
      <section className="absolute top-[6800px] left-0 w-full z-10 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1800ms]">
        <ContactSection />
      </section>

      {/* Social Icons */}
      <div className="absolute top-[8200px] left-[581px] w-[277px] h-16 flex justify-center z-10 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2000ms]">
        <div className="inline-flex w-[277.33px] h-16 relative items-start gap-[42.67px]">
          {socialIcons.map((icon, index) => (
            <img
              key={index}
              className="relative w-16 h-16 hover:scale-110 transition-transform duration-300 cursor-pointer"
              alt={icon.alt}
              src={icon.src}
            />
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <section className="absolute top-[8400px] left-0 w-full z-10 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2200ms]">
        <FooterSection />
      </section>

      {/* Decorative frames */}
      <img
        className="absolute top-[932px] left-[102px] w-[1234px] h-[114px]"
        alt="Decorative frame"
        src="https://c.animaapp.com/mftxaxohP9HH1n/img/frame-143.svg"
      />

      <img
        className="absolute top-[5145px] left-[103px] w-[1234px] h-[114px]"
        alt="Decorative frame"
        src="https://c.animaapp.com/mftxaxohP9HH1n/img/frame-144.svg"
      />
    </div>
  );
};
