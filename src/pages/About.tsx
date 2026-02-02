import {
  Target,
  Eye,
  Award,
  MapPin,
  Users,
  TrendingUp,
  Leaf,
  Heart,
} from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "5,000+", label: "Happy Customers" },
    { icon: TrendingUp, value: "10,000+", label: "Pickups Completed" },
    { icon: MapPin, value: "50+", label: "Cities Covered" },
    { icon: Award, value: "2 Years", label: "Experience" },
  ];

  const values = [
    {
      icon: Leaf,
      title: "Environmental Responsibility",
      description:
        "We ensure every piece of scrap is properly recycled, reducing waste and protecting our planet.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description:
        "Your satisfaction is our priority. We provide transparent, fair, and reliable service every time.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description:
        "Using technology to make scrap collection easier, faster, and more convenient for everyone.",
    },
    {
      icon: Users,
      title: "Community Impact",
      description:
        "Building a network that benefits customers, recyclers, and the environment together.",
    },
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-green-600">SplGain Money</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're on a mission to make scrap collection easy, transparent, and
              beneficial for everyone while contributing to a cleaner, greener
              India.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  SplGain Money was founded with a simple vision: to
                  revolutionize the way India handles scrap collection and
                  recycling. We recognized the challenges faced by both
                  individuals and businesses in disposing of their recyclable
                  materials responsibly.
                </p>
                <p>
                  Starting from a single city, we've grown to serve over 50
                  cities across India, completing more than 10,000 successful
                  pickups. Our journey has been driven by our commitment to
                  transparency, reliability, and environmental sustainability.
                </p>
                <p>
                  Today, we're proud to be a trusted partner for thousands of
                  homes, offices, and industries, helping them turn their waste
                  into value while contributing to a circular economy.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-2"
                  >
                    <Icon className="w-10 h-10 text-green-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To make scrap collection accessible, transparent, and rewarding
                for everyone while promoting responsible recycling practices. We
                strive to build a cleaner India by ensuring every piece of
                recyclable material reaches the right destination.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To create a sustainable future where waste is minimized,
                resources are maximized, and every citizen actively participates
                in building a greener nation. We envision becoming India's most
                trusted platform for scrap management.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-2"
                >
                  <div className="bg-green-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <MapPin className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Serving Across India
            </h2>
            <p className="text-lg text-green-50 mb-2">
              Available in 50+ cities including Chennai, Coimbatore, Madurai,
              Thanjavur, Salem, Pudukkotai, Karur, and many more.
            </p>
            <p className="text-green-50">
              Expanding to new cities every month to serve you better.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
