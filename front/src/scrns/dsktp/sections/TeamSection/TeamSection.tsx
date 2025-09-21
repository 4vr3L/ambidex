import React from "react";

export const TeamSection = (): JSX.Element => {
  const teamStats = [
    {
      id: "experience",
      mainNumber: "40+",
      mainText: "years of\ncollective",
      accentText: "experience",
      vectorSrc: "https://c.animaapp.com/mftxaxohP9HH1n/img/vector-2032.svg",
    },
    {
      id: "rating",
      mainNumber: "4.8",
      mainText: "client\nrating",
      vectorSrc: "https://c.animaapp.com/mftxaxohP9HH1n/img/vector-2033.svg",
      starSrc: "https://c.animaapp.com/mftxaxohP9HH1n/img/star-5.svg",
      groupSrc: "https://c.animaapp.com/mftxaxohP9HH1n/img/group-32.png",
    },
    {
      id: "stacks",
      mainNumber: "25",
      accentSymbol: "+",
      codeSymbol: "</>",
    },
  ];

  return (
    <section className="relative w-full py-[80px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
      <header className="text-center mb-[60px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <h2 className="[font-family:'Montserrat',Helvetica] font-bold text-white text-[40px] tracking-[0] leading-[49px]">
          Team
        </h2>
        <img
          className="mx-auto mt-[10px] w-[94px] h-[19px]"
          alt="Vector"
          src="https://c.animaapp.com/mftxaxohP9HH1n/img/vector-2048.svg"
        />
      </header>

      <div className="flex w-full max-w-[1245px] mx-auto items-start justify-center gap-[8.89px] px-[100px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <div className="flex flex-col w-[428px] items-center relative">
          <div className="relative w-[440px] h-[483.26px]">
            <div className="[font-family:'Montserrat',Helvetica] font-normal text-transparent text-[79px] tracking-[0] leading-[79.0px]">
              <span className="font-bold text-white leading-[73.3px]">
                years of
                <br />
                collective
                <br />
              </span>
              <span className="text-[#bfff00] leading-[73.3px]">
                experience
              </span>
            </div>
            <div className="absolute top-[223px] left-0 font-medium text-[#bfff00] text-[213.2px] leading-[normal] [font-family:'Montserrat',Helvetica] tracking-[0]">
              40+
            </div>
          </div>
          <img
            className="relative w-[379.35px] h-[269.29px]"
            alt="Vector"
            src="https://c.animaapp.com/mftxaxohP9HH1n/img/vector-2032.svg"
          />
        </div>

        <div className="flex flex-col w-[393px] h-[751px] items-center gap-[53px] relative">
          <img
            className="relative w-[325.52px] h-[251.01px] mt-[-4.49px]"
            alt="Vector"
            src="https://c.animaapp.com/mftxaxohP9HH1n/img/vector-2033.svg"
          />
          <div className="relative w-[427px] h-[204px]">
            <img
              className="absolute top-[75px] left-[290px] w-[132px] h-[116px]"
              alt="Star"
              src="https://c.animaapp.com/mftxaxohP9HH1n/img/star-5.svg"
            />
            <div className="absolute top-0 left-0 w-[397px] font-bold text-white text-[213.2px] leading-[normal] whitespace-nowrap [font-family:'Montserrat',Helvetica] tracking-[0]">
              4.8
            </div>
          </div>
          <div className="relative w-[395px] h-[215.02px]">
            <img
              className="absolute top-0 left-[201px] w-48 h-[215px]"
              alt="Group"
              src="https://c.animaapp.com/mftxaxohP9HH1n/img/group-32.png"
            />
            <div className="absolute top-[41px] left-0 w-[246px] [font-family:'Montserrat',Helvetica] font-medium text-white text-[79px] tracking-[0] leading-[73.3px]">
              client
              <br />
              rating
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[434px] h-[870px] items-center justify-center gap-[55px] relative">
          <div className="relative w-[437.71px] h-[335.32px]">
            <div className="absolute top-0 left-[29px] w-[394px] font-normal text-transparent text-[213.2px] leading-[63.2px] [font-family:'Montserrat',Helvetica] tracking-[0]">
              <span className="font-bold text-white">25</span>
              <span className="font-bold text-[#bfff00]">+</span>
            </div>
            <div className="absolute top-[222px] left-0 w-[120px] font-medium text-[#bfff00] text-[65.9px] leading-[19.6px] [font-family:'Montserrat',Helvetica] tracking-[0]">
              {"</>"}
            </div>
            <div className="absolute top-[57px] left-[33px] w-[381px] h-[242px] rotate-[-11.53deg]">
              <div className="absolute top-[123px] left-[68px] w-[238px] h-[120px] flex">
                <div className="flex mt-[16.1px] w-[227.28px] h-[87.59px] ml-[5.2px] relative items-center justify-center gap-[9.24px] px-[39.74px] py-[13.86px] bg-black rounded-[924.12px] border-[none] rotate-[8.40deg] before:content-[''] before:absolute before:inset-0 before:p-[0.92px] before:rounded-[924.12px] before:[background:linear-gradient(103deg,rgba(191,255,0,1)_0%,rgba(191,255,0,0.22)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                  <div className="relative w-fit mt-[-0.99px] [font-family:'Montserrat',Helvetica] font-medium text-[#bfff00] text-[46.2px] tracking-[0] leading-[59.1px] whitespace-nowrap">
                    stacks
                  </div>
                </div>
              </div>
              <div className="flex w-[372px] h-[87px] items-center justify-center gap-[9.24px] px-[39.74px] py-[13.86px] absolute top-14 left-1 bg-[#bfff00] rounded-[924.12px] border-[none] rotate-[18.14deg] before:content-[''] before:absolute before:inset-0 before:p-[0.92px] before:rounded-[924.12px] before:[background:linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                <div className="relative w-fit mt-[-1.35px] ml-[-11.15px] mr-[-11.15px] [font-family:'Montserrat',Helvetica] font-medium text-black text-[46.2px] tracking-[0] leading-[59.1px] whitespace-nowrap">
                  development
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[407.33px] items-start gap-[180px] relative flex-[0_0_auto]">
            <div className="relative w-[409px] h-[292px]">
              <div className="w-[407px] [font-family:'Montserrat',Helvetica] font-normal text-transparent text-[79px] tracking-[0] leading-[79.0px]">
                <span className="font-bold text-white leading-[73.3px]">
                  highly
                  <br />
                </span>
                <span className="text-[#bfff00] leading-[73.3px]">
                  motivated
                  <br />
                </span>
                <span className="font-medium text-white leading-[73.3px]">
                  group of <br />
                  people
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
