import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"; 
import { Menu, X, Coffee, ShoppingBag } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  // Görgetésfigyelő a fejléc vizuális kiemeléséhez görgetés közben
  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  // Stílusfunkció az asztali NavLink-hez az aktív állapot kezelésével
  const getNavLinkClass = ({ isActive }) =>
    `text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 transition-colors ${
      isActive
        ? "text-foreground font-bold border-b-2 border-primary"
        : "text-foreground/80 hover:text-foreground"
    }`;
    
  // Stílusfunkció a mobil NavLink-hez
  const getMobileNavLinkClass = ({ isActive }) =>
    `block py-2 text-lg transition-colors ${
      isActive
        ? "text-primary font-bold"
        : "text-foreground/90 hover:text-foreground"
    }`;

  return (
    // Fejléc osztályai: fix pozíció, görgetés animáció (elevated state)
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      elevated ? "backdrop-blur bg-background/70 border-b" : ""
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* LOGÓ - NavLink-ként a főoldalra */}
        <NavLink to="/" className="inline-flex items-center gap-2 font-extrabold text-lg tracking-tight">
          <span className="inline-grid place-items-center w-8 h-8 rounded-full bg-primary text-white">
            <Coffee className="w-4 h-4" aria-hidden="true" />
          </span>
          ICE COFFEE
        </NavLink>

        {/* ASZTALI NAVIGÁCIÓ ÉS VÁSÁRLÁS GOMB (md mérettől látható) */}
        <div className="hidden md:flex items-center gap-8">
          {/* Linkek NavLink-kel és to-val */}
          <NavLink to="/" className={getNavLinkClass} end>Kezdőlap</NavLink>
          <NavLink to="/why" className={getNavLinkClass}>Miért</NavLink>
          <NavLink to="/products" className={getNavLinkClass}>Termékek</NavLink>
          <NavLink to="/about" className={getNavLinkClass}>Történet</NavLink>
          <NavLink to="/newsletter" className={getNavLinkClass}>Hírlevél</NavLink>
          
          {/* Vásárlás gomb - NavLink-ként */}
          <NavLink
            id="buy-btn"
            to="/products"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-black px-4 py-2 text-sm shadow-sm hover:shadow-lg hover:scale-[1.02] active:scale-[.99] transition-all"
          >
            <ShoppingBag className="w-4 h-4" aria-hidden="true" /> Vásárlás
          </NavLink>
        </div>

        {/* MOBIL MENÜ GOMB (md méret alatt látható) */}
        <button 
          aria-label="Menü" 
          className="md:hidden p-2 rounded-lg border hover:bg-secondary" 
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* MOBIL MENÜ TARTALOM (Csak ha nyitva van és md méret alatt) */}
      {open && (
        <div className="md:hidden border-t bg-background">
          <div className="max-w-7xl mx-auto px-4 py-3 grid gap-2">
            {/* Mobil linkek NavLink-kel */}
            <NavLink to="/" onClick={close} className={getMobileNavLinkClass} end>Kezdőlap</NavLink>
            <NavLink to="/why" onClick={close} className={getMobileNavLinkClass}>Miért</NavLink>
            <NavLink to="/products" onClick={close} className={getMobileNavLinkClass}>Termékek</NavLink>
            <NavLink to="/about" onClick={close} className={getMobileNavLinkClass}>Történet</NavLink>
            <NavLink to="/newsletter" onClick={close} className={getMobileNavLinkClass}>Hírlevél</NavLink>

            {/* Mobil Vásárlás gomb */}
            <NavLink
              id="buy-btn"
              to="/products"
              onClick={close}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-black px-4 py-2 text-sm shadow-sm hover:shadow-lg transition-all mt-4"
            >
              <ShoppingBag className="w-4 h-4" aria-hidden="true" /> Vásárlás
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}