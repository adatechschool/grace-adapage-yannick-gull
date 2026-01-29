import { bobMarley } from "../data/bobMarley";

type SpecialiteItem = {
  id: number;
  title: string;
  description: string;
};

export default function Specialite() {
  const specialites = bobMarley.specialites as SpecialiteItem[];

  return (
    <div className="mx-auto w-full max-w-5xl">
      <h1 className="text-2xl font-bold text-center">Spécialités</h1>

      <img className=" mt-8 w-full h-auto rounded-xl sm:rounded-2xl border-4 sm:border-6 lg:border-8 border-[#d0e47e] object-contain hover:scale-105 transition-transform duration-300" src="bobmarleydrapeau.jpg" alt="" />

      <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {specialites.map((specialite) => (
          <div
            key={specialite.id}
            className="rounded-2xl border-4 border-[#009D4F] p-5 bg-yellow-300 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="inline-block h-3 w-3 rounded-full bg-[#009D4F]" />
              <h2 className="text-lg font-semibold">{specialite.title}</h2>
            </div>

            <p className="mt-3 text-sm text-gray-700">{specialite.description}</p>

            <div className="mt-4 h-[2px] w-full bg-black/10" />

            <div className="mt-3 text-xs text-gray-500">
              Thème : <span className="font-medium text-black">Reggae</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}