import {
  Smartphone,
  TrendingUp,
  Shield,
  Users,
  Leaf,
  Zap,
  Clock,
  IndianRupee,
  Recycle,
  Laptop,
  Factory,
  Home as HomeIcon,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";

type Page =
  | "home"
  | "about"
  | "services"
  | "how-it-works"
  | "mobile-app"
  | "contact";

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home = ({ onNavigate }: HomeProps) => {
  const services = [
    {
      icon: HomeIcon,
      title: "Home Pickup",
      description: "Convenient doorstep collection from your home",
    },
    {
      icon: Laptop,
      title: "E-Waste",
      description: "Safe disposal of electronic waste",
    },
    {
      icon: Factory,
      title: "Industrial",
      description: "Large-scale industrial scrap management",
    },
    {
      icon: Recycle,
      title: "All Materials",
      description: "Paper, plastic, metal, iron & more",
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Fast Service",
      description: "Quick pickup within 24 hours of booking",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: IndianRupee,
      title: "Transparent Pricing",
      description: "Fair market rates with instant payment",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Proper recycling for a greener future",
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      icon: Users,
      title: "Trusted Team",
      description: "Verified and professional collection agents",
      color: "bg-amber-50 text-amber-600",
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-20 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-300 rounded-full blur-3xl opacity-20 -z-10"></div>

        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeIn">
              {/* <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Easy Scrap Collection at Your{" "}
                <span className="text-green-600">Doorstep</span>
              </h1> */}

              {/* This code is for animate the word    */}

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Easy Scrap Collection at Your{" "}
                <TypeAnimation
                  sequence={[" Doorstep...", 2000]}
                  speed={5}
                  wrapper="span"
                  cursor={false}
                  repeat={5}
                  className="text-green-600"
                />
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Transform your waste into value. We collect all types of scrap
                from your location with transparent pricing and instant payment.
                Join thousands of satisfied customers across India.
              </p>

              <div className="flex flex-wrap gap-4">
      
                <button
                  onClick={() =>
                    window.open( // app link needs to add 
                      "#",
                      "_blank",
                    )
                  }
                  className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-all hover:scale-105 shadow-lg shadow-green-600/30 flex items-center space-x-2"
                >
                  <Smartphone className="w-5 h-5" />
                  <span>Download App</span>
                </button>

              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive scrap collection solutions for homes, offices, and
              industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer group"
                  onClick={() => onNavigate("services")}
                >
                  <div className="bg-green-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                    <Icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the best scrap collection service with complete
              transparency and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-2"
                >
                  <div
                    className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${benefit.color}`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <TrendingUp className="w-16 h-16 mx-auto mb-6 animate-bounce" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Turn Your Scrap into Cash?
            </h2>
            <p className="text-lg text-green-50 mb-8">
              Download our mobile app and schedule your first pickup today. Get
              instant quotes and same-day service.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
             
              <button
                onClick={() =>
                  window.open(  // app link needs to add 
                    "#",
                    "_blank",
                  )
                }
                className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-all hover:scale-105 shadow-lg shadow-green-600/30 flex items-center space-x-2"
              >
                <Smartphone className="w-5 h-5" />
                <span>Download App</span>
              </button>
              <button
                onClick={() => onNavigate("how-it-works")}
                className="bg-green-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-900 transition-all hover:scale-105 flex items-center space-x-2"
              >
                <Clock className="w-5 h-5" />
                <span>See How It Works</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 text-green-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              SplGain Money is committed to providing the best scrap collection
              experience across India. We ensure fair pricing, quick service,
              and environmentally responsible recycling.
            </p>
            <button
              onClick={() => onNavigate("about")}
              className="text-green-600 font-semibold hover:text-green-700 transition-colors flex items-center space-x-2 mx-auto"
            >
              <span>Learn More About Us</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
