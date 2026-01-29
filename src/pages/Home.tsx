import { bobMarley } from "../data/bobMarley";

export default function Home(){
    return(
     <div className="min-h-screen bg-linear-to-br from-[#fafbfb] via-[#f5f5f3] to-white p-4 sm:p-6 lg:p-8">
         <div className="max-w-7xl mx-auto">
             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#009D4F] mb-8 sm:mb-10 lg:mb-12">
                 Présentation Bob Marley
             </h1>
                
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                 {/* Image - Apparaît en premier sur mobile */}
                 <div className="lg:col-span-1 lg:order-last">
                     <img 
                        src={bobMarley.image1}
                         alt={bobMarley.name}
                         className="w-full h-auto rounded-xl sm:rounded-2xl shadow-2xl border-4 sm:border-6 lg:border-8 border-[#f5ebf4] object-contain hover:scale-105 transition-transform duration-300"
                     />
                 </div>
                    
                 {/* Description - 2 colonnes sur desktop, pleine largeur sur mobile */}
                 <div className="lg:col-span-2">
                     <div className="bg-white/90 backdrop-blur rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 border-l-4 sm:border-l-8 border-[#009D4F] h-full">
                         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#009D4F] mb-4 sm:mb-6">
                              {bobMarley.fullName}
                         </h2>
                         <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-2">
                         Bob Marley est un chanteur, guitariste et compositeur jamaïcain, né en 1945 à Nine Mile et décédé en 1981.
                         Il est considéré comme la plus grande légende du reggae et a largement contribué à sa diffusion à l'échelle internationale.
                         À travers sa musique, il transmet des messages forts de paix, de liberté, d'égalité et de lutte contre l'oppression.
                         Très engagé, il s'inspire du mouvement rastafari, qui influence profondément ses textes et son mode de vie.
                         Des chansons comme No Woman, No Cry, One Love ou Redemption Song sont devenues intemporelles.
                         Encore aujourd'hui, Bob Marley incarne un symbole universel d'espoir, d'unité et de résistance à travers la musique.
                         Il a également utilisé sa notoriété pour encourager la paix politique en Jamaïque.
                         Son style musical mélange reggae, ska et rocksteady avec des influences africaines.
                         Malgré une vie courte, son impact culturel et musical est immense.
                         Son héritage continue de vivre à travers ses albums et l'influence qu'il exerce sur de nombreux artistes.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}