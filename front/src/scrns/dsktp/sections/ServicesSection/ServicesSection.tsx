import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ServicesSection = (): JSX.Element => {
  const services = [
    {
      number: "1",
      title: "Tailor-Made Websites",
      numberLeft: "left-9",
      animationDelay: "200ms",
    },
    {
      number: "2",
      title: "Web & Mobile Development",
      numberLeft: "left-[19px]",
      animationDelay: "400ms",
    },
    {
      number: "3",
      title: "UI/UX & Branding",
      numberLeft: "left-5",
      animationDelay: "600ms",
    },
    {
      number: "4",
      title: "Digital System Maintenance & Creation",
      numberLeft: "left-[25px]",
      animationDelay: "800ms",
    },
    {
      number: "5",
      title: "E-Commerce Solutions",
      numberLeft: "left-[22px]",
      animationDelay: "1000ms",
    },
    {
      number: "6",
      title: "AI & Automation",
      numberLeft: "left-[19px]",
      animationDelay: "1200ms",
    },
  ];

  return (
    <section className="relative w-full py-[650px]">
      <div className="mx-auto px-[100px]">
        <h2 className="translate-y-[-1rem] animate-fade-in opacity-0 text-center [font-family:'Montserrat',Helvetica] font-bold text-white text-[40px] tracking-[0] leading-[49px] mb-[10px]">
          Nos Services
        </h2>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:100ms] flex justify-center mb-full">
          <img
            className="w-[246px] h-[22px]"
            alt="Vector"
            src="https://c.animaapp.com/mftxaxohP9HH1n/img/vector-2046.svg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] w-full mb-[80px]">
          {services.map((service, index) => (
            <Card
              key={`service-${index}`}
              className={`translate-y-[-1rem] animate-fade-in opacity-0 relative w-full h-[235px] bg-black rounded-[45px] overflow-hidden border-none backdrop-blur-[9.9px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(9.9px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[45px] before:[background:linear-gradient(293deg,rgba(191,255,0,0)_0%,rgba(191,255,0,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:scale-105 transition-transform duration-300`}
              style={
                {
                  "--animation-delay": service.animationDelay,
                } as React.CSSProperties
              }
            >
              <CardContent className="relative p-0 w-full h-full">
                <div
                  className={`${service.numberLeft} bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(0,0,0,1)_100%)] absolute top-[37px] w-[140px] h-[249px] flex items-center justify-center [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Montserrat',Helvetica] font-light text-transparent text-[250px] tracking-[0] leading-[normal] whitespace-nowrap`}
                >
                  {service.number}
                </div>

                <div className="absolute w-[47.46%] h-auto top-[38.30%] left-[44.11%] [text-shadow:0px_5.28px_12.41px_#00000040] [font-family:'Montserrat',Helvetica] font-bold text-white text-[25px] tracking-[0] leading-[normal]">
                  {service.title}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms] relative h-[300px] bg-black rounded-[45px] border-none backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-[3px] before:rounded-[45px] before:[background:linear-gradient(156deg,rgba(191,255,0,0.2)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <CardContent className="relative p-0 flex w-screen h-full">

            <div className="absolute w-[22.18%] h-[64.00%] top-[18.00%] left-[6.05%] [font-family:'Montserrat',Helvetica] font-medium text-white text-[90px] tracking-[0] leading-[96.4px]">
              Offre
              <br />
              20%
            </div>

            <div className="absolute w-[51.94%] h-[49.00%] top-[25.00%] left-[37.90%] [font-family:'Montserrat',Helvetica] font-normal text-transparent text-[40px] tracking-[0] leading-[normal]">
              <span className="text-white">Profitez de </span>
              <span className="font-medium text-white">20%</span>
              <span className="text-white">
                {" "}
                de réduction sur votre premier trimestre, et une consultation{" "}
              </span>
              <span className="font-medium text-white">gratuite!</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
