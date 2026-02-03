import {
  Smartphone,
  UserCheck,
  Scale,
  Banknote,
  Calendar,
  MapPin,
  CheckCircle,
  Download,
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Smartphone,
      number: 1,
      title: "Book Pickup",
      description:
        "Download our app and schedule a pickup at your convenient time and location.",
      details: [
        "Select pickup date & time",
        "Add your location details",
        "Choose material types",
        "Get instant quote estimate",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      icon: UserCheck,
      number: 2,
      title: "Agent Visits",
      description:
        "Our verified agent arrives at your location at the scheduled time with proper equipment.",
      details: [
        "Professional & verified team",
        "Punctual service",
        "Proper equipment & tools",
        "Courteous behavior",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Scale,
      number: 3,
      title: "Weigh & Price",
      description:
        "Materials are weighed accurately, and you get transparent pricing on the spot.",
      details: [
        "Accurate digital weighing",
        "Current market rates",
        "Complete transparency",
        "No hidden charges",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Banknote,
      number: 4,
      title: "Instant Payment",
      description:
        "Receive immediate payment through your preferred method and materials are recycled responsibly.",
      details: [
        "Cash or digital payment",
        "Instant transaction",
        "Payment confirmation",
        "Eco-friendly recycling",
      ],
      color: "from-orange-500 to-orange-600",
    },
  ];

  const features = [
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Choose pickup time that works best for you",
    },
    {
      icon: MapPin,
      title: "Track Your Agent",
      description: "Real-time tracking of agent location",
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Professional and reliable service guaranteed",
    },
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How It <span className="text-green-600">Works</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Simple, transparent, and hassle-free scrap collection in just 4
              easy steps
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-8 items-center`}
                >
                  <div className="lg:w-1/2">
                    <div
                      className={`bg-gradient-to-br ${step.color} rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all`}
                    >
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center">
                          <Icon className="w-8 h-8" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold mb-1">
                            Step {step.number}
                          </div>
                          <h3 className="text-3xl font-bold">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-white/90 text-lg mb-6">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="lg:w-1/2">
                    <div className="bg-gray-50 rounded-2xl p-8">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">
                        What Happens:
                      </h4>
                      <ul className="space-y-3">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
              Additional Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              More reasons to choose SplGain Money for your scrap collection
              needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-2 text-center"
                >
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Download className="w-16 h-16 mx-auto mb-6 animate-bounce" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-green-50 mb-8">
              Download our mobile app now and schedule your first pickup in
              minutes. It's fast, easy, and completely free to use!
            </p>
           
            <button
              onClick={() =>
                window.open(  // APP LINK NEEDS TO ADD 
                  "#",
                  "_blank",
                )
              }
              className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 flex items-center space-x-2 mx-auto"
            >
              <Smartphone className="w-5 h-5" />
              <span>Download App Now</span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How quickly can I get a pickup?
                </h3>
                <p className="text-gray-600">
                  We offer same-day pickup in most locations. You can also
                  schedule for a future date at your convenience.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Is there a minimum quantity required?
                </h3>
                <p className="text-gray-600">
                  No minimum quantity required for home pickups. We collect
                  scrap of any amount from your doorstep.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How do you determine pricing?
                </h3>
                <p className="text-gray-600">
                  Our pricing is based on current market rates for different
                  materials. You can see estimated rates in the app before
                  booking.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-600">
                  We support cash, UPI, bank transfer, and digital wallets for
                  your convenience. Payment is made instantly after weighing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
