import { useEffect, useState } from "react";
import { bobMarley } from "../data/bobMarley";

type TimelineEvent = {
  id?: number | string;
  year: number;
  event: string;
};

export default function Frise() {
  
  const events: TimelineEvent[] = bobMarley.frise;

  // visible[i] = true quand l'élément i est apparu
  const [visible, setVisible] = useState<boolean[]>(
    () => events.map(() => false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const index = Number(entry.target.getAttribute("data-index"));
          setVisible((prev) => {
            if (prev[index]) return prev; // déjà visible
            const next = [...prev];
            next[index] = true;
            return next;
          });
        });
      },
      
    );

    const nodes = document.querySelectorAll("[data-timeline='true']");
    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [events.length]);

  return (
    <div className=" mx-auto w-full max-w-5xl">
      <h1 className="text-2xl font-bold text-center text-[#009D4F]">
        Frise chronologique
      </h1>

      <div className="relative mt-10">
        {/* Ligne centrale */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-black" />

        {events.map((item, index) => {
          const isLeft = index % 2 === 0;

          const cardClass = [
            "rounded-2xl border-3 border-[#009D4F] bg-[#FFE400] p-4 shadow-sm",
            "transition-all duration-1000 ease-out",
            visible[index]
              ? "opacity-100 translate-x-0"
              : isLeft
                ? "opacity-0 -translate-x-40"
                : "opacity-0 translate-x-40",
          ].join(" ");

          return (
            <div
              key={item.id ?? index}
              data-timeline="true"
              data-index={index}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-10 py-8"
            >
              {/* Gauche */}
              <div className="md:pr-10">
                {isLeft && (
                  <div className={cardClass}>
                    <div className="text-sm font-semibold">
                      {item.year}
                    </div>
                    <div className="mt-2">
                      {item.event}
                    </div>
                  </div>
                )}
              </div>

              {/* Droite */}
              <div className="md:pl-10">
                {!isLeft && (
                  <div className={cardClass}>
                    <div className="text-sm font-semibold">
                      {item.year}
                    </div>
                    <div className="mt-2">
                      {item.event}
                    </div>
                  </div>
                )}
              </div>

              {/* Point central */}
              <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="h-4 w-4 rounded-full border-2 border-black bg-red-400" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}