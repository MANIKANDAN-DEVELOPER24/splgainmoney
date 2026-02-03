import { MessageCircle, Smartphone } from "lucide-react";
import { useState } from "react";

const FloatingButtons = () => {
  const [showTooltip, setShowTooltip] = useState({
    whatsapp: false,
    app: false,
  });

  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-40">
      <div className="relative">
        <a
          href="#" //add the splgainmoney app link when available
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            onMouseEnter={() => setShowTooltip({ ...showTooltip, app: true })}
            onMouseLeave={() => setShowTooltip({ ...showTooltip, app: false })}
            className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all hover:scale-110 animate-bounce"
          >
            <Smartphone className="w-6 h-6" />
          </button>
        </a>
        {showTooltip.app && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">
            Download App
          </div>
        )}
      </div>

      <div className="relative">
        <a
          href="https://wa.me/917305107148"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() =>
            setShowTooltip({ ...showTooltip, whatsapp: true })
          }
          onMouseLeave={() =>
            setShowTooltip({ ...showTooltip, whatsapp: false })
          }
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        {showTooltip.whatsapp && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">
            Chat on WhatsApp
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingButtons;
