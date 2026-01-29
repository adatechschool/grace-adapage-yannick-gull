import { bobMarley } from "../data/bobMarley";

export default function Citation() {
  const citations = bobMarley.citations;

  return (
    <div className="mx-auto w-full max-w-5xl">
      
      <h1 className="text-2xl font-bold text-center">
        Citations
      </h1>

      <p className="mt-2 text-center text-sm text-gray-600">
        Quelques citations célèbres de Bob Marley.
      </p>

      
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {citations.map((citation) => (
          <div
            key={citation.id}
            className="rounded-2xl border-4 border-[#009D4F] bg-[#FFE01F] p-5 shadow-sm"
          >
            
            <p className="text-base leading-relaxed ">
              “{citation.text}”
            </p>

            
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-gray-600">
                {citation.source ? `Source : ${citation.source}` : ""}
              </span>

              {citation.theme && (
                <span className="text-xs font-semibold border-2 border-[#009D4F] rounded-full px-3 py-1">
                  {citation.theme}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}