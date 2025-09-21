import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ProjectsSection = (): JSX.Element => {
  const projects = [
    {
      title: "Walky",
      description: "Fitness app",
      backgroundImage: "https://c.animaapp.com/mftxaxohP9HH1n/img/frame-90.png",
    },
    {
      title: "Twist Click",
      description: "Logo design",
      backgroundImage: "https://c.animaapp.com/mftxaxohP9HH1n/img/frame-95.png",
    },
    {
      title: "Genie",
      description: "Par Gims",
      backgroundImage: "https://c.animaapp.com/mftxaxohP9HH1n/img/frame-96.png",
    },
    {
      title: "Amp Fresh",
      description: "Branding",
      backgroundImage: "https://c.animaapp.com/mftxaxohP9HH1n/img/frame-97.png",
    },
    {
      title: "Souls",
      description: "Music App",
      backgroundImage: "https://c.animaapp.com/mftxaxohP9HH1n/img/frame-98.png",
    },
  ];

  return (
    <section className="w-full py-[80px] px-[100px]">
      <div className="max-w-[1512px] mx-auto">
        <div className="flex flex-col items-center mb-[60px]">
          <h2 className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] text-center [font-family:'Montserrat',Helvetica] font-bold text-white text-[40px] tracking-[0] leading-[49px] mb-[10px]">
            Nos Réalisations
          </h2>

          <img
            className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] h-[24.57px] w-[297.43px]"
            alt="Vector"
            src="https://c.animaapp.com/mftxaxohP9HH1n/img/vector-2043.svg"
          />
        </div>

        <div className="grid grid-cols-5 gap-[13px] w-full">
          {projects.map((project, index) => (
            <Card
              key={`project-${index}`}
              className={`translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:${400 + index * 100}ms] w-full h-[392px] border-0 rounded-[5px] overflow-hidden group cursor-pointer transition-transform hover:scale-105`}
              style={{
                background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%), url(${project.backgroundImage}) 50% 50% / cover`,
              }}
            >
              <CardContent className="h-full flex flex-col justify-end p-5">
                <div className="text-white">
                  <div className="[font-family:'Montserrat',Helvetica] font-bold text-xl tracking-[0] leading-[27.1px] mb-1">
                    {project.title}
                  </div>
                  <div className="[font-family:'Montserrat',Helvetica] font-normal text-xl tracking-[0] leading-[27.1px]">
                    {project.description}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
