import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"; 
import { Menu, X, Coffee, ShoppingBag } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault(); 
    
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      window.history.pushState(null, null, `#${targetId}`);
      
      close();
    }
  };

 
  const getNavLinkClass = ({ isActive }) =>
    `text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 transition-colors ${
      isActive
        ? "text-foreground font-bold" 
        : "text-foreground/80 hover:text-foreground hover:border-b-2 hover:border-primary" 
    }`;
    
  const getMobileNavLinkClass = ({ isActive }) =>
    `block py-2 text-lg transition-colors ${
      isActive
        ? "text-primary font-bold"
        : "text-foreground/90 hover:text-foreground"
    }`;
  
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      elevated ? "backdrop-blur bg-background/70 border-b" : ""
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        <NavLink 
            to="/" 
            onClick={(e) => handleScroll(e, 'hero')} 
            className="inline-flex items-center gap-2 font-extrabold text-lg tracking-tight"
        >
          ICE COFFEE
        </NavLink>

        <div className="hidden md:flex items-center gap-8">
          
          <NavLink 
            to="#hero" 
            onClick={(e) => handleScroll(e, 'hero')} 
            className={getNavLinkClass} end
          >Kezdőlap</NavLink>
          
          <NavLink 
            to="#why" 
            onClick={(e) => handleScroll(e, 'why')} 
            className={getNavLinkClass}
          >Miért</NavLink>
          
          <NavLink 
            to="#products" 
            onClick={(e) => handleScroll(e, 'products')} 
            className={getNavLinkClass}
          >Termékek</NavLink>
          
          <NavLink 
            to="#about" 
            onClick={(e) => handleScroll(e, 'about')} 
            className={getNavLinkClass}
          >Történet</NavLink>
          
          <NavLink 
            to="#news" 
            onClick={(e) => handleScroll(e, 'news')} 
            className={getNavLinkClass}
          >Hírlevél</NavLink>
          
          <NavLink
            id="buy-btn"
            to="#products"
            onClick={(e) => handleScroll(e, 'products')} 
            className="inline-flex items-center gap-2 rounded-full bg-primary text-black px-4 py-2 text-sm shadow-sm hover:shadow-lg hover:scale-[1.02] active:scale-[.99] transition-all"
          >
            <ShoppingBag className="w-4 h-4" aria-hidden="true" /> Vásárlás
          </NavLink>
        </div>

        <button 
          aria-label="Menü" 
          className="md:hidden p-2 rounded-lg border hover:bg-secondary" 
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="max-w-7xl mx-auto px-4 py-3 grid place-items-center text-center gap-2">
           
            <NavLink 
                to="#hero" 
                onClick={(e) => handleScroll(e, 'hero')} 
                className={getMobileNavLinkClass} end
            >Kezdőlap</NavLink>
            
            <NavLink 
                to="#why" 
                onClick={(e) => handleScroll(e, 'why')} 
                className={getMobileNavLinkClass}
            >Miért</NavLink>
            
            <NavLink 
                to="#products" 
                onClick={(e) => handleScroll(e, 'products')} 
                className={getMobileNavLinkClass}
            >Termékek</NavLink>
            
            <NavLink 
                to="#about" 
                onClick={(e) => handleScroll(e, 'about')} 
                className={getMobileNavLinkClass}
            >Történet</NavLink>
            
            <NavLink 
                to="#news" 
                onClick={(e) => handleScroll(e, 'news')} 
                className={getMobileNavLinkClass}
            >Hírlevél</NavLink>

            <NavLink
              id="buy-btn"
              to="#products"
              onClick={(e) => handleScroll(e, 'products')} 
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-black px-6 py-2 text-sm shadow-sm hover:shadow-lg transition-all mt-4"
            >
              <ShoppingBag className="w-4 h-4" aria-hidden="true" /> Vásárlás
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}