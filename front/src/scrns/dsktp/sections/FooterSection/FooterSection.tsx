import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const FooterSection = (): JSX.Element => {
  const navigationLinks = [
    { label: "About us", href: "#" },
    { label: "Services", href: "#" },
    { label: "Use Cases", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Blog", href: "#" },
  ];

  return (
    <footer className="w-full px-[100px] py-0 relative">
      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
        <div className="flex flex-col w-full max-w-[1240px] mx-auto items-start gap-[63px] pt-[60px] pb-[80px] px-[100px] relative bg-black rounded-[45px_45px_0px_0px] border-[none] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[45px_45px_0px_0px] before:[background:linear-gradient(126deg,rgba(191,255,0,0)_0%,rgba(191,255,0,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
          <div className="flex flex-col items-start gap-[66px] w-full">
            <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              <div className="flex w-full items-center justify-between relative">
                <img
                  className="w-[172px] h-[34px] object-cover"
                  alt="White on black"
                  src="https://c.animaapp.com/mftxaxohP9HH1n/img/white-on-black-1.png"
                />

                <nav className="flex items-start gap-10">
                  {navigationLinks.map((link, index) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="[font-family:'Montserrat',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal] underline hover:text-[#bfff00] transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              <div className="flex items-start gap-[154px] w-full">
                <div className="flex flex-col items-start gap-[27px]">
                  <div className="flex flex-col items-start">
                    <Badge className="bg-[#bfff00] text-black hover:bg-[#bfff00] px-[7px] py-2.5 rounded-[7px] h-auto">
                      <span className="font-h-4 font-[number:var(--h-4-font-weight)] leading-[var(--h-4-line-height)] text-[length:var(--h-4-font-size)] tracking-[var(--h-4-letter-spacing)] [font-style:var(--h-4-font-style)]">
                        Contact us:
                      </span>
                    </Badge>
                  </div>

                  <div className="flex flex-col items-start gap-5">
                    <address className="not-italic [font-family:'Montserrat',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal]">
                      Address: 1234 Main St
                      <br />
                      Moonstone City, Stardust State 12345
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-5 px-0 py-[58px] bg-black rounded-[14px] overflow-hidden">
                  <div className="flex w-[285px] gap-2.5 px-[35px] py-[22px] rounded-[1000px] overflow-hidden border border-solid border-[#bfff00] items-start">
                    <Input
                      placeholder="Email"
                      className="bg-transparent border-none text-[#bfff00] placeholder:text-[#bfff00] font-p font-[number:var(--p-font-weight)] text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0 p-0 h-auto"
                    />
                  </div>

                  <Button className="bg-[#bfff00] hover:bg-[#bfff00]/90 text-black rounded-[1000px] px-[35px] py-5 h-auto">
                    <span className="[font-family:'Montserrat',Helvetica] font-normal text-center leading-7 whitespace-nowrap text-xl tracking-[0]">
                      Subscribe to news
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <div className="flex flex-col items-start gap-[50px] w-full">
              <div className="flex items-start gap-10">
                <div className="[font-family:'Montserrat',Helvetica] font-normal text-[#bfff00] text-lg tracking-[0] leading-7 whitespace-nowrap">
                  © 2023 Positivus. All Rights Reserved.
                </div>

                <a
                  href="#"
                  className="[font-family:'Montserrat',Helvetica] font-normal text-[#bfff00] text-lg tracking-[0] leading-7 underline whitespace-nowrap hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};