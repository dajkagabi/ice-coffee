import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import VisaLogo from '../../assets/footer-card-1.png';
import MastercardLogo from '../../assets/footer-card-2.png';
import PayPalLogo from '../../assets/footer-card-3.png';
import DiscoverLogo from '../../assets/footer-card-4.png';


export default function Footer() {
  return (
    <footer className="mt-24 border-t bg-secondary/40" aria-labelledby="footer-heading">
  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
        
        
        <div className="space-y-3">
          <p className="text-xl font-extrabold">ICE COFFEE</p>
          <p className="text-sm text-foreground/70">Hideg kávé újragondolva – természetes összetevőkkel, tiszta energiával.</p>
          <div className="flex items-center gap-3">
            <a href="#newsletter" aria-label="Feliratkozás" className="inline-flex items-center gap-2 rounded-full bg-primary text-black px-4 py-2 text-sm shadow-sm hover:shadow-lg transition-all">Feliratkozás</a>
          </div>
        </div>
        
       
        <div className="space-y-3">
          <p className="font-semibold">Közösségi</p>
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="p-2 rounded-full border hover:bg-background"><Instagram className="w-5 h-5" /></a>
            <a href="#" aria-label="Facebook" className="p-2 rounded-full border hover:bg-background"><Facebook className="w-5 h-5" /></a>
            <a href="#" aria-label="Twitter" className="p-2 rounded-full border hover:bg-background"><Twitter className="w-5 h-5" /></a>
            <a href="mailto:hello@icecoffee.app" className="p-2 rounded-full border hover:bg-background"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
        
      
        <div className="space-y-3">
          <p className="font-semibold">Fizetés</p>
          <div className="flex items-center gap-4">
            
            <img src={VisaLogo} alt="VISA" loading="lazy" className="h-6 object-contain" />
            
            
            <img src={MastercardLogo} alt="Mastercard" loading="lazy" className="h-6 object-contain" />
            
            
            <img src={PayPalLogo} alt="PayPal" loading="lazy" className="h-6 object-contain" />
            
           
            <img src={DiscoverLogo} alt="Discover" loading="lazy" className="h-6 object-contain" />
          </div>
        </div>
      </div>
      
      <div className="border-t py-6 text-center text-sm text-foreground/60">© {new Date().getFullYear()} ICE COFFEE. Minden jog fenntartva.</div>
    </footer>
  );
}