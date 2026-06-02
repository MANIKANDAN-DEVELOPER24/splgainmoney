import {
  Smartphone,
  Star,
  Download,
  Bell,
  MapPin,
  CreditCard,
  TrendingUp,
  Shield,
  Clock,
  Users,
} from "lucide-react";

const MobileApp = () => {
  const features = [
    {
      icon: Clock,
      title: "Quick Booking",
      description: "Schedule pickup in under 60 seconds",
    },
    {
      icon: MapPin,
      title: "Real-Time Tracking",
      description: "Track your agent live on the map",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Get updates at every step",
    },
    {
      icon: CreditCard,
      title: "Multiple Payment Options",
      description: "Pay via cash, UPI, or wallet",
    },
    {
      icon: TrendingUp,
      title: "Price Calculator",
      description: "Get instant rate estimates",
    },
    {
      icon: Shield,
      title: "Secure & Safe",
      description: "Verified agents and secure payments",
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: "Easy to Use",
      description:
        "Intuitive interface designed for everyone. Book a pickup in just a few taps.",
    },
    {
      icon: Star,
      title: "Highly Rated",
      description:
        "Trusted by thousands with 4.5+ rating on app stores. Join our satisfied customers.",
    },
    {
      icon: Download,
      title: "Free Download",
      description:
        "No subscription fees or hidden charges. Download and start using immediately.",
    },
  ];

  const stats = [
    { value: "50K+", label: "Downloads" },
    { value: "4.5", label: "Rating" },
    { value: "50K+", label: "Active Users" },
    { value: "24/7", label: "Support" },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Ramesh Kumar",
      review: "Amazing app! Pickup was super fast and pricing was fair.",
      rating: 5,
    },
    {
      id: 2,
      name: "Suresh M",
      review: "Very smooth process. Agent arrived on time. Good service!",
      rating: 4,
    },
    {
      id: 3,
      name: "Priya D",
      review: "Best scrap collection service in our area. Highly trusted.",
      rating: 5,
    },
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Download the{" "}
                <span className="text-green-600">SplGain Money App</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Experience the easiest way to sell your scrap. Book pickups,
                track agents, and get instant payments all from your phone.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a // APP LINK NEEDS TO ADD
                  href="#"
                  className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all hover:scale-105 flex items-center space-x-3"
                >
                  <Download className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </a>
               
                {/* <a // app  store link
                  href="#"
                  className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all hover:scale-105 flex items-center space-x-3"
                >
                  <Download className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </a> */}

              </div>

              <div className="grid grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-green-600">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all">
                <div className="bg-white rounded-2xl p-6 mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Smartphone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        SplGain Money
                      </div>
                      <div className="text-sm text-gray-500">Mobile App</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">
                        Pickup Scheduled
                      </div>
                      <div className="font-semibold text-gray-900">
                        Tomorrow, 10:00 AM
                      </div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">
                        Estimated Value
                      </div>
                      <div className="font-semibold text-green-600 text-xl">
                        ₹450
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2 text-white">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="ml-2">4.5 / 5.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              App Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need for a seamless scrap selling experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-2"
                >
                  <div className="bg-green-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-green-600" />
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

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Download Our App?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands who have already switched to the smarter way of
              selling scrap
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center"
                >
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
              How to Get Started
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Download</h3>
                <p className="text-sm text-gray-600">
                  Get the app from Play Store
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Sign Up</h3>
                <p className="text-sm text-gray-600">
                  Create account with phone number
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Book Pickup
                </h3>
                <p className="text-sm text-gray-600">
                  Schedule your first collection
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Get Paid</h3>
                <p className="text-sm text-gray-600">Receive instant payment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Smartphone className="w-16 h-16 mx-auto mb-6 animate-bounce" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Start Your Scrap Selling Journey Today
            </h2>
            <p className="text-lg text-green-50 mb-8">
              Download the SplGain Money app now and experience hassle-free
              scrap collection with instant payments.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#" //add the splgainmoney app link when available
                className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download for Android</span>
              </a>

              {/* <a    //this will enable when ios download link available
                href="#"
                className="bg-green-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-900 transition-all hover:scale-105 flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download for iOS</span>
              </a> */}

            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
              What Our Users Say
            </h2>

           

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((user) => (
               
               <div
                  key={user.id}
                  className="bg-white rounded-xl p-6 shadow-md"
                >
                  {/* Stars */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(user.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-gray-600 mb-4">"{user.review}"</p>

                  {/* User Info */}
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {user.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        Verified Customer
                      </div>
                    </div>
                  </div>
                  
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default MobileApp;
