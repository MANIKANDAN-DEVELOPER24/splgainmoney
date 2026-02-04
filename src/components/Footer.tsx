import { Facebook, Instagram, Recycle } from "lucide-react";
import { MessageCircle } from "lucide-react";

type Page =
  | "home"
  | "about"
  | "services"
  | "how-it-works"
  | "mobile-app"
  | "contact";

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  const quickLinks = [
    { label: "Home", page: "home" as Page },
    { label: "About Us", page: "about" as Page },
    { label: "Our Services", page: "services" as Page },
    { label: "How It Works", page: "how-it-works" as Page },
    { label: "Mobile App", page: "mobile-app" as Page },
    { label: "Contact Us", page: "contact" as Page },
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", url: "#" },
    { icon: Instagram, label: "Instagram", url: "#" },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      url: "https://wa.me/917305107148",
    },
    // { icon: Linkedin, label: "LinkedIn", url: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-green-600 p-2 rounded-lg">
                <Recycle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">SplGain Money</h3>
                <p className="text-xs text-green-400">
                  Collect. Recycle. Prosper.
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Making scrap collection easy, transparent, and eco-friendly.
              Building a cleaner, greener India one pickup at a time.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Home Scrap Pickup</li>
              <li>Bulk & Office Scrap</li>
              <li>E-Waste Collection</li>
              <li>Industrial Scrap</li>
              <li>Paper & Plastic</li>
              <li>Metal & Iron Scrap</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-3 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    className="bg-gray-800 p-2.5 rounded-full hover:bg-green-600 transition-all hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
            <div className="text-sm text-gray-400">
              <p className="mb-1">📞 +91 73051 07148</p>
              <p>📧 support@ecoscrap.in</p>
            </div>
          </div>
        </div>


        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} SplGain Money. All rights
            reserved. Designed & Developed By{" "}
            <a 
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 font-medium underline underline-offset-4"
            >
              Idea2Designs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
