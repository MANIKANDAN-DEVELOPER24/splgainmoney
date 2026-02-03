import {
  Home,
  Building2,
  Laptop,
  Factory,
  FileText,
  Box,
  Hammer,
  Cable,
  CheckCircle,
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Home,
      title: "Home Scrap Pickup",
      description:
        "Convenient doorstep collection of household scrap including newspapers, bottles, cardboard, and more.",
      features: [
        "Scheduled or on-demand pickup",
        "All types of household waste",
        "Fair market pricing",
        "Instant payment",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      icon: Building2,
      title: "Bulk & Office Scrap",
      description:
        "Perfect for offices, shops, and commercial establishments with large quantities of recyclable materials.",
      features: [
        "Bulk quantity handling",
        "Regular pickup schedules",
        "Customized solutions",
        "Professional service",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Laptop,
      title: "E-Waste Collection",
      description:
        "Responsible disposal of electronic waste including computers, phones, appliances, and gadgets.",
      features: [
        "Safe e-waste handling",
        "Data security assured",
        "Certified disposal",
        "Environmental compliance",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Factory,
      title: "Industrial Scrap",
      description:
        "Comprehensive solutions for factories and manufacturing units with high-volume scrap generation.",
      features: [
        "Large-scale operations",
        "Regular contracts available",
        "Specialized equipment",
        "Competitive rates",
      ],
      color: "from-orange-500 to-orange-600",
    },
  ];

  const materials = [
    {
      icon: FileText,
      title: "Paper & Cardboard",
      description:
        "Newspapers, magazines, books, cartons, and all paper products",
    },
    {
      icon: Box,
      title: "Plastic",
      description: "Bottles, containers, bags, and various plastic materials",
    },
    {
      icon: Hammer,
      title: "Metal & Iron",
      description: "Steel, aluminum, brass, copper, and other metal scraps",
    },
    {
      icon: Cable,
      title: "Electronics",
      description:
        "Computers, phones, cables, batteries, and electronic devices",
    },
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-green-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive scrap collection solutions tailored to your needs,
              whether you're a homeowner, business, or industry.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2"
                >
                  <div
                    className={`bg-gradient-to-r ${service.color} p-8 text-white`}
                  >
                    <Icon className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-white/90">{service.description}</p>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
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
              Materials We Collect
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We accept a wide variety of recyclable materials at competitive
              market rates
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((material, index) => {
              const Icon = material.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-2"
                >
                  <div className="bg-green-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {material.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {material.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-green-50 border border-green-200 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Don't See Your Material?
            </h3>
            <p className="text-gray-600 mb-6">
              Just Upload the material image  to check if we can collect your specific type of scrap
              material. Our team will contact You . 
            </p>
           
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
              Why Choose Our Services?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-green-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Easy Booking
                </h3>
                <p className="text-gray-600">
                  Book through our app or website in just a few clicks
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Fair Pricing
                </h3>
                <p className="text-gray-600">
                  Get the best market rates with complete transparency
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Quick Service
                </h3>
                <p className="text-gray-600">
                  Fast pickup and instant payment at your doorstep
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
