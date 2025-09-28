import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center gap-[30px] max-w-4xl">
        <h1 className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] text-center [font-family:'Montserrat',Helvetica] font-normal text-[50px] leading-[60px] tracking-[0] max-w-[796px]">
          <span className="font-extrabold text-white">
            Transformez votre vision
            <br />
            en{" "}
          </span>
          <span className="font-extrabold text-[#bfff00]">
            réalité digitale.
          </span>
        </h1>
          <img
            className="object-center w-[324px] h-11 ml-[85px] mt-[-30px]"
            src="https://c.animaapp.com/mftxaxohP9HH1n/img/vector-2.svg"
          />

        <p className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] text-center [font-family:'Montserrat',Helvetica] font-normal text-[25px] tracking-[0] leading-[30px] max-w-[484px]">
          <span className="font-light text-white">
            Trouvez le bon développeur en{" "}
          </span>
          <span className="font-bold text-white">un clic!</span>
        </p>
        <div className="flex justify-center mt-2 animate-fade-in opacity-0 [--animation-delay:200ms]">
          <Button className="flex w-[177px] h-[42px] items-center justify-center gap-2.5 p-2.5 bg-[#bfff00] rounded-[1000px] transition hover:bg-white hover:text-black duration-300">
            <span className="[font-family:'Montserrat',Helvetica] font-bold text-black text-[15px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Contactez-nous
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
