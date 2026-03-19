import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { Instagram, Mail } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5555991463614";

const Footer = () => (
  <footer className="border-t border-border py-12 bg-card/50">
    <div className="container mx-auto px-6">

      <div className="grid md:grid-cols-3 gap-8 mb-8">

        {/* Marca */}
        <div>
          <Link to="/" className="font-display font-bold text-lg text-gradient">
            DM
          </Link>

          <p className="text-sm text-muted-foreground leading-relaxed mt-3">
            Soluções digitais, sites profissionais e assistentes de IA para WhatsApp que ajudam empresas a crescer.
          </p>
        </div>

        {/* Serviços */}
        <div>
          <h4 className="font-display font-semibold mb-4">Serviços</h4>

          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Criação de Sites</li>
            <li>Logotipos</li>
            <li>Assistentes de IA</li>
            <li>Google Meu Negócio</li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h4 className="font-display font-semibold mb-4">Contato</h4>

          <div className="flex gap-3">

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <FaWhatsapp size={18} />
            </a>

            <a
              href="https://www.instagram.com/dmsolucoes.digitais/"
              className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <Instagram size={18} />
            </a>

           

          </div>
        </div>

      </div>

      <div className="border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} DM – Soluções Digitais. Todos os direitos reservados.
      </div>

    </div>
  </footer>
);

export default Footer;