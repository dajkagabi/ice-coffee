import AboutCoffee from '../../assets/about-coffee.png';

export default function History() {
  return (
    <section id="about" className="py-20 bg-gray-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="flex justify-center md:justify-end">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-md">
            
              <img 
                src={AboutCoffee} 
                alt="Zsák kávébabokkal" 
                className="w-full h-auto object-cover rounded-2xl" 
              />
            </div>
          </div>

           <div className="space-y-6">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
              Történetünk
            </h2>
            
            <p className="text-lg text-gray-600">
              Egy forró napon kezdődött – vágytunk valamire, ami egyszerre frissít, inspirál és elmos minden zajt. Így született meg az ICE COFFEE: kiváló arabica, tiszta víz, természetes tej és a gondosan időzített hideg kivonatolás. Minden poharunk egy hűs pillanat – a város ritmusában.
            </p>
            
          
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-start">
               
                <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-emerald-600 flex-shrink-0"></span>
                Etikus beszerzés, helyi pörkölés
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-emerald-600 flex-shrink-0"></span>
                Finomított cukor nélkül, kiegyensúlyozott kalóriákkal
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-emerald-600 flex-shrink-0"></span>
                Újrahasznosítható pohár opció
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}