import logo from "@/assets/logo.png";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <header className="w-full border-b border-border bg-background/80 backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo + Nome */}
        <div className="flex items-end gap-3">
          <img
            src={logo}
            alt="DM"
            className="h-12 w-auto"
          />

          <span className="text-sm text-white font-light tracking-wide">
            Soluções Digitais
          </span>
        </div>

        {/* Menu central */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLinks />
        </nav>

        {/* Botão Contato */}
        <a
          href="https://wa.me/5555991463614?text=Olá! Gostaria de solicitar um orçamento."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold px-6 py-2.5 rounded-lg hover:opacity-90 transition"
        >
          Contato
        </a>

      </div>
    </header>
  );
};

export default Navbar;