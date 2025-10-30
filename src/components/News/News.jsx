import { Phone, ShoppingBag } from "lucide-react";
import ContactDeliveryImage from '../../assets/contact-delivery.png'; 

export default function ContactDelivery() {
  return (
    <section id="news" className="py-20 bg-white"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-12 items-center bg-gray-50/70 p-8 md:p-16 rounded-2xl shadow-lg">
          
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <img 
              src={ContactDeliveryImage} 
              alt="Futár telefonál és kávét tart" 
              className="w-full max-w-sm h-auto object-contain -mb-16 md:mb-0 transform translate-y-16 md:translate-y-0" 
            />
          </div>

          <div className="space-y-6 text-center md:text-left order-1 md:order-2">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
              Megérkezett a rendelésed?
            </h2>
            
            <p className="text-lg text-gray-600">
              Ne várj a frissítő élményre! Rendeld meg kedvenc ICE COFFEE-dat most, és mi gondoskodunk a gyors, kíméletes kiszállításról. Kérdésed van? Hívj minket!
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
              
              <a 
                href="#products" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 text-white px-6 py-3 text-lg font-medium shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[.99] transition-all"
              >
                <ShoppingBag className="w-5 h-5" /> Rendelje meg most
              </a>
              
              <a 
                href="tel:+361234567" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 text-gray-700 bg-white px-6 py-3 text-lg font-medium shadow-sm hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5" /> Kérdésem van
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}