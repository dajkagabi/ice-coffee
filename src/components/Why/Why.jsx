import { Leaf, Clock, Shield, Zap } from "lucide-react";


const features = [
  {
    icon: Leaf,
    title: "Természetes ízek",
    description: "Valódi alapanyagok, kompromisszumok nélkül.",
  },
  {
    icon: Clock,
    title: "Gyors frissesség",
    description: "Hidegen készítve a tökéletesen sima kortyért.",
  },
  {
    icon: Shield,
    title: "Megbízható minőség",
    description: "Szigorú minőség-ellenőrzés minden adagban.",
  },
  {
    icon: Zap,
    title: "Könnyed energia",
    description: "Kíméletes ébredés, hosszan tartó lendület.",
  },
];

export default function Why() {
  return (
    <section id="why" className="py-20 bg-gray-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CÍM ÉS BEVEZETŐ SZÖVEG */}
        <div className="max-w-3xl mx-auto text-center md:text-left md:max-w-full">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
            Miért az ICE COFFEE?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Nem csak ital. Tapasztalat, ami felébreszt és hűsít. Természetes, kiegyensúlyozott és ellenállhatatlan.
          </p>
        </div>

        {/* KÁRTYÁK ELRENDEZÉSE */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100/70 space-y-4 transition-all hover:shadow-xl hover:scale-[1.01]"
            >
              {/* IKON KONTÉNER */}
              <div className="inline-flex items-center justify-center p-3 rounded-xl bg-green-50/70 border border-green-100 text-emerald-600">
                <feature.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              
              {/* TARTALOM */}
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}