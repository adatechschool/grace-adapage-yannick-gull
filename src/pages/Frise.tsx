import { bobMarley } from "../data/bobMarley";
import '../App.css';

type TimelineEvent = {
  id: number;
  year: number;
  event: string;
};

export default function Frise() {
  const events: TimelineEvent[] = bobMarley.frise;

  return (
    <div className="mx-auto w-full max-w-5xl">
      <h1 className=" font-righteous text-4xl font-bold text-center text-[#009D4F]">
        Frise chronologique
      </h1>

      <div className="relative mt-10">
        {/* Ligne centrale */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-black" />

        {events.map((item, index) => {
          const isLeft = index % 2 === 0;

          // Animation au chargement : gauche->centre ou droite->centre
          const animClass = isLeft ? "animate-slide-in-left" : "animate-slide-in-right";

          return (
            <div
              key={item.id}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-10 py-8"
            >
              {/* Gauche */}
              <div className="md:pr-10">
                {isLeft && (
                  <div
                    className={[
                      "rounded-2xl border-2 border-[#009D4F] bg-[#FFE400] p-4 shadow-sm",
                      animClass,
                    ].join(" ")}
                  >
                    <div className="text-sm font-semibold">{item.year}</div>
                    <div className="mt-2">{item.event}</div>
                  </div>
                )}
              </div>

              {/* Droite */}
              <div className="md:pl-10">
                {!isLeft && (
                  <div
                    className={[
                      "rounded-2xl border-2 border-[#009D4F] bg-[#FFE400] p-4 shadow-sm",
                      animClass,
                    ].join(" ")}
                  >
                    <div className="text-sm font-semibold">{item.year}</div>
                    <div className="mt-2">{item.event}</div>
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