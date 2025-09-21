import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const StatisticsSection = (): JSX.Element => {
  const processSteps = [
    {
      id: 1,
      icon: "https://c.animaapp.com/mftxaxohP9HH1n/img/frame-140.svg",
      iconPosition: "left-0 top-0",
      title: "Premier Contact & Qualification",
      content: {
        contact: "Le client remplit un formulaire ou vous contacte.",
        analysis:
          "Discussion pour définir objectifs, périmètre et technologies (consultation possible).",
      },
      delay: "0ms",
    },
    {
      id: 2,
      icon: "https://c.animaapp.com/mftxaxohP9HH1n/img/frame-137.svg",
      iconPosition: "right-0 top-0",
      title: "Proposition & Validation",
      content: {
        proposal: "Devis détaillé (étapes, délais, budget, collaboration).",
        validation: "Ajustements, signature, acompte si besoin.",
      },
      delay: "200ms",
    },
    {
      id: 3,
      icon: "https://c.animaapp.com/mftxaxohP9HH1n/img/frame-139.svg",
      iconPosition: "left-0 top-0",
      title: "Développement & Suivi",
      content: {
        launch: "Réunion initiale et suivi régulier.",
        feedback: "Tests, validations, corrections.",
      },
      delay: "400ms",
    },
    {
      id: 4,
      icon: "https://c.animaapp.com/mftxaxohP9HH1n/img/frame-138.svg",
      iconPosition: "right-0 top-0",
      title: "Livraison & Support",
      content: {
        deployment: "Mise en ligne complète et formation dédiée.",
        support: "Support technique continu et mises à jour régulières.",
      },
      delay: "600ms",
    },
  ];

  return (
    <section className="w-full relative py-[80px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] max-w-[1240px] mx-auto px-[100px]">
        {processSteps.map((step, index) => (
          <div
            key={step.id}
            className={`relative translate-y-4 animate-fade-up opacity-0 [--animation-delay:${step.delay}]`}
          >
            <div className="relative">
              <img
                className={`absolute w-[180px] h-auto z-10 ${step.iconPosition}`}
                alt={`Process step ${step.id} illustration`}
                src={step.icon}
              />

              <Card className="relative mt-16 ml-8 lg:ml-16 bg-[#000000b2] border-none rounded-[45px] backdrop-blur-[9px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(9px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[45px] before:[background:linear-gradient(236deg,rgba(255,255,255,0.67)_0%,rgba(0,0,0,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                <CardContent className="flex flex-col items-start justify-center gap-4 px-11 py-12">
                  <h3 className="[font-family:'Montserrat',Helvetica] font-bold text-[#bfff00] text-2xl lg:text-[25px] tracking-[0] leading-[31.9px]">
                    {step.title}
                  </h3>

                  <div className="[font-family:'Montserrat',Helvetica] font-normal text-white text-lg lg:text-xl tracking-[0] leading-normal space-y-2">
                    {step.id === 1 && (
                      <>
                        <p>
                          <span className="font-bold">Prise de contact: </span>
                          {step.content.contact}
                        </p>
                        <p>
                          <span className="font-bold">
                            Analyse des besoins:{" "}
                          </span>
                          {step.content.analysis}
                        </p>
                      </>
                    )}

                    {step.id === 2 && (
                      <>
                        <p>
                          <span className="font-bold">
                            Rédaction de la proposition:{" "}
                          </span>
                          {step.content.proposal}
                        </p>
                        <p>
                          <span className="font-bold">
                            Validation & Contrat:{" "}
                          </span>
                          {step.content.validation}
                        </p>
                      </>
                    )}

                    {step.id === 3 && (
                      <>
                        <p>
                          <span className="font-bold">
                            Lancement du projet:{" "}
                          </span>
                          {step.content.launch}
                        </p>
                        <p>
                          <span className="font-bold">
                            Feedback & Ajustements:{" "}
                          </span>
                          {step.content.feedback}
                        </p>
                      </>
                    )}

                    {step.id === 4 && (
                      <>
                        <p>
                          <span className="font-bold">Déploiement : </span>
                          {step.content.deployment}
                        </p>
                        <p>
                          <span className="font-bold">Suivi : </span>
                          {step.content.support}
                        </p>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
