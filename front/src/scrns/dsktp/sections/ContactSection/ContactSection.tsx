import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/radio-group";

export const ContactSection = (): JSX.Element => {
  const formFields = [
    {
      id: "company",
      label: "Company's name",
      placeholder: "Name",
      type: "text",
    },
    {
      id: "contact",
      label: "Phone / Email",
      placeholder: "Phone / Email",
      type: "text",
    },
  ];

  const selectFields = [
    {
      id: "country",
      label: "Country",
      placeholder: "Country",
    },
    {
      id: "linkedin",
      label: "LinkedIn*",
      placeholder: "LinkedIn",
    },
  ];

  const projectOptions = [
    { id: "project", label: "Project", value: "project" },
    { id: "platform", label: "Platform", value: "platform" },
  ];

  return (
    <section className="w-full flex flex-col relative py-[80px]">
      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] flex justify-center mb-[10px]">
        <h2 className="[font-family:'Montserrat',Helvetica] font-bold text-white text-[40px] tracking-[0] leading-[49px]">
          Contact Us
        </h2>
      </div>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] flex justify-center mb-[60px]">
        <img
          className="w-[185.8px] h-[29.26px]"
          alt="Vector"
          src="https://c.animaapp.com/mftxaxohP9HH1n/img/vector-2053.svg"
        />
      </div>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] flex justify-center px-[100px]">
        <Card className="w-full max-w-[1240px] bg-black rounded-[45px] border border-solid border-[#bfff003b] p-0">
          <CardContent className="flex items-start gap-[72px] pt-[60px] pb-20 px-[100px]">
            <div className="flex flex-col items-start gap-10 flex-1">
              <div className="flex flex-col items-start gap-[25px] w-full">
                {formFields.map((field, index) => (
                  <div
                    key={field.id}
                    className="flex flex-col items-start gap-[5px] w-full"
                  >
                    <Label
                      htmlFor={field.id}
                      className="[font-family:'Montserrat',Helvetica] font-normal text-white text-base tracking-[0] leading-7"
                    >
                      {field.label}
                    </Label>
                    <div className="w-[556px] bg-black rounded-[14px] border border-solid border-[#bfff0080] px-[30px] py-[18px]">
                      <Input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        className="border-0 bg-transparent p-0 h-auto [font-family:'Montserrat',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal] placeholder:text-white focus-visible:ring-0"
                      />
                    </div>
                  </div>
                ))}

                <div className="flex items-start gap-[41px]">
                  {selectFields.map((field, index) => (
                    <div key={field.id} className="flex flex-col gap-[5px]">
                      <Label
                        htmlFor={field.id}
                        className="[font-family:'Montserrat',Helvetica] font-normal text-white text-base tracking-[0] leading-7"
                      >
                        {field.label}
                      </Label>
                      <div className="w-[257px] bg-black rounded-[14px] border border-solid border-[#bfff0080] px-[30px] py-[18px] flex items-center justify-between">
                        <span className="[font-family:'Montserrat',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal]">
                          {field.placeholder}
                        </span>
                        {field.id === "country" && (
                          <ChevronDownIcon className="w-[14.71px] h-[8.06px] text-white" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <RadioGroup
                defaultValue="project"
                className="flex items-start gap-[35px]"
              >
                {projectOptions.map((option, index) => (
                  <div key={option.id} className="flex items-center gap-[14px]">
                    <RadioGroupItem
                      value={option.value}
                      id={option.id}
                      className="w-7 h-7 border-[#bfff00] text-[#bfff00] bg-black data-[state=checked]:bg-[#bfff00] data-[state=checked]:border-[#bfff00]"
                    />
                    <Label
                      htmlFor={option.id}
                      className="font-p font-[number:var(--p-font-weight)] text-white text-[length:var(--p-font-size)] tracking-[var(--p-letter-spacing)] leading-[var(--p-line-height)] [font-style:var(--p-font-style)]"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <Button className="w-[556px] h-[61px] bg-[#bfff00] hover:bg-[#bfff00]/90 text-black rounded-[1000px] [font-family:'Montserrat',Helvetica] font-bold text-xl tracking-[0] leading-[normal] h-auto">
                Get Started
              </Button>
            </div>

            <div className="flex flex-col w-[450px] items-start gap-[18px]">
              <div className="flex flex-col items-start p-2.5 w-full">
                <img
                  className="w-full h-[380.78px] object-cover"
                  alt="Contact illustration"
                  src="https://c.animaapp.com/mftxaxohP9HH1n/img/fgjghjghj-1.png"
                />
              </div>

              <div className="flex flex-col w-[237px] items-start gap-[21px]">
                <div className="flex flex-col items-start gap-[21px] w-full">
                  <div className="[font-family:'Montserrat',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal]">
                    Email: info@positivus.com
                  </div>
                  <div className="[font-family:'Montserrat',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal]">
                    Phone: 555-567-8901
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};