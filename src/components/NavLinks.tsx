import { useState } from "react";

const NavLinks = () => {
  const [active, setActive] = useState("home");

  const base =
    "text-sm font-medium transition-colors text-muted-foreground hover:text-white";

  const activeClass = "text-white";

  return (
    <div className="flex items-center gap-8">

      <a
        href="#"
        onClick={() => setActive("home")}
        className={`${base} ${active === "home" ? activeClass : ""}`}
      >
        Home
      </a>

      <a
        href="#servicos"
        onClick={() => setActive("servicos")}
        className={`${base} ${active === "servicos" ? activeClass : ""}`}
      >
        Serviços
      </a>

      <a
        href="#sobre"
        onClick={() => setActive("sobre")}
        className={`${base} ${active === "sobre" ? activeClass : ""}`}
      >
        Sobre
      </a>

    </div>
  );
};

export default NavLinks;