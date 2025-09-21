import React from "react";

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

        {/* <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] relative mt-[20px]">
          <img
            className="w-[324px] h-11"
            alt="Vector"
            src="https://c.animaapp.com/mftxaxohP9HH1n/img/vector-2.svg"
          />
        </div> */}
      </div>
    </section>
  );
};
