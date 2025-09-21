import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const FeaturesSection = (): JSX.Element => {
  const faqItems = [
    {
      id: "item-1",
      question: "Quels services proposez-vous?",
      content: "",
    },
    {
      id: "item-2",
      question: "Quels sont vos tarifs pour un site web ou une app mobile?",
      content: "",
    },
    {
      id: "item-3",
      question: "Quelle est la durée moyenne de réalisation d'un projet?",
      content: "",
    },
    {
      id: "item-4",
      question: "Offrez-vous des services de maintenance après livraison?",
      content: "",
    },
    {
      id: "item-5",
      question: "Comment gérez-vous la sécurité des données?",
      content: "",
    },
    {
      id: "item-6",
      question: "Travaillez-vous avec des entreprises de toutes tailles?",
      content: "",
    },
    {
      id: "item-7",
      question:
        "Quels langages de programmation et technologies utilisez-vous?",
      content: "",
    },
    {
      id: "item-8",
      question: "Comment assurez-vous la qualité de vos développements?",
      content: "",
    },
    {
      id: "item-9",
      question: "Proposez-vous des solutions d'hébergement pour les sites web?",
      content: "",
    },
    {
      id: "item-10",
      question: "Comment puis-je suivre l'avancement de mon projet?",
      content: "",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center px-[100px] py-[80px]">
      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] text-center mb-[10px] [font-family:'Montserrat',Helvetica] font-bold text-white text-[40px] tracking-[0] leading-[49px]">
        FAQ
      </div>

      <img
        className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] w-[71.71px] h-[19.24px] mb-[60px]"
        alt="Vector"
        src="https://c.animaapp.com/mftxaxohP9HH1n/img/vector-2052.svg"
      />

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] w-full max-w-[1231px]">
        <Accordion type="single" collapsible className="w-full space-y-5">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="translate-y-[-1rem] animate-fade-in opacity-0 bg-black rounded-[45px] border border-solid border-[#bfff003b] px-[52px] py-5 data-[state=open]:bg-black"
              style={
                {
                  "--animation-delay": `${600 + index * 100}ms`,
                } as React.CSSProperties
              }
            >
              <AccordionTrigger className="flex items-center justify-between w-full text-left hover:no-underline [&[data-state=open]>svg]:rotate-45">
                <span className="[font-family:'Montserrat',Helvetica] font-bold text-white text-3xl tracking-[0] leading-[normal] pr-4">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-white">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
