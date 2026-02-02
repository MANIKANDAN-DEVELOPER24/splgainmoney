import { Menu, X, Recycle } from "lucide-react";
import { useState, useEffect } from "react";

type Page =
  | "home"
  | "about"
  | "services"
  | "how-it-works"
  | "mobile-app"
  | "contact";

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Header = ({ currentPage, onNavigate }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", page: "home" as Page },
    { label: "About Us", page: "about" as Page },
    { label: "Our Services", page: "services" as Page },
    { label: "How It Works", page: "how-it-works" as Page },
    { label: "Mobile App", page: "mobile-app" as Page },
    { label: "Contact Us", page: "contact" as Page },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-white/95 py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => handleNavClick("home")}
          >
            <div className="bg-green-600 p-2 rounded-lg group-hover:bg-green-700 transition-colors">
              <Recycle className="w-6 h-6 text-white" />
            </div>

            <div>
              <h1 className="text-xl font-bold text-gray-900">SplGain Money</h1>
              <p className="text-xs text-green-600">
                Collect. Recycle. Prosper.
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`text-sm font-medium transition-colors hover:text-green-600 ${
                  currentPage === item.page ? "text-green-600" : "text-gray-700"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* <button                        //it only goes to mobile app section so disabled and now working code is writen
            onClick={() => handleNavClick("mobile-app")}
            className="hidden lg:block bg-green-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-green-700 transition-all hover:scale-105 shadow-lg shadow-green-600/30"
          >
            Download App
          </button> */}

          <button //we need to add the app link when available
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.flipkart.android",
                "_blank",
              )
            }
            className="hidden lg:block bg-green-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-green-700 transition-all hover:scale-105 shadow-lg shadow-green-600/30"
          >
            Download App
          </button>

          <button
            className="lg:hidden text-gray-700 hover:text-green-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4 animate-fadeIn">
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`text-left text-sm font-medium transition-colors hover:text-green-600 py-2 ${
                    currentPage === item.page
                      ? "text-green-600"
                      : "text-gray-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              {/* <button
                onClick={() => handleNavClick("mobile-app")}
                className="bg-green-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-green-700 transition-colors text-center mt-2"
              >
                Download App
              </button> */}
              <button //we need to add the app link when available
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.flipkart.android",
                    "_blank",
                  )
                }
                className="hidden lg:block bg-green-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-green-700 transition-all hover:scale-105 shadow-lg shadow-green-600/30"
              >
                Download App
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
