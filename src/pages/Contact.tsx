import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // This code is for sending email features

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_x23xjva", //  Put Service ID here
        "template_0g10ktn", //  Put Template ID here
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        },
        "MUoa5D4mL0ZM1espm", //  P Public Key here
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setSubmitted(true);
          setFormData({ name: "", phone: "", email: "", message: "" });
        },
        (error) => {
          console.log("Email error:", error.text);
        },
      );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      // NEED TO ADD MOBILE NUMBER NOW YES YES NUMBER IS ADDED FOR DEMO
      icon: Phone,
      title: "Phone",
      value: "+91 7305107148",
      link: "tel:+917305107148",
      description: "Mon-Sat, 9 AM - 7 PM",
    },
    {
      //WE NEED TO ADD GMAIL ID FOR SUPPORT AFTER AVAILABLE NOW DEMO MAIL ID IS USED
      icon: Mail,
      title: "Email",
      value: "support@ecoscrap.in",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=support@ecoscrap.in&su=Scrap%20Pickup%20Query&body=Hello%20SplGain%20Money%20Team,",
      description: "We reply within 24 hours",
    },
    {
      //NEED TO SUPPORT WHATSAPP NUMBER NOW YES YES NUMBER ADDED FOR DEMO
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+91 7305107148",
      link: "https://wa.me/917305107148",
      description: "Quick response available",
    },
    {
      // WE NEED TO UPDATE HEAD OFFICE LOCATION AFTER AVAILABLE NOW YES YES OFFICE LOCATION ADDED FOR DEMO
      icon: MapPin,
      title: "Head Office",
      value: "Chennai, TamilNadu",
      link: "https://maps.app.goo.gl/AvXG3Yh1jFkb2z339",
      description: "Serving 50+ cities",
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", 
      url: "#", 
      color: "hover:bg-blue-600" 
    },
    {
      icon: Instagram,
      label: "Instagram",
      url: "#",
      color: "hover:bg-pink-600",
    },

    // {
    //   icon: MessageCircle,
    //   label: "WhatsApp",
    //   url: "https://wa.me/917305107148",
    //   color: "hover:bg-green-600",
    // },
    // { icon: Linkedin, label: "LinkedIn", 
    // url: "#", 
    // color: "hover:bg-blue-700" 
    // },
    
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get in <span className="text-green-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have questions? We're here to help. Reach out to us through any of
              the channels below.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6 flex items-center space-x-2">
                  <Send className="w-5 h-5" />
                  <span>Thank you! We'll get back to you soon.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-all hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8">
                Choose the most convenient way to reach us. We're available
                across multiple channels.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                          <Icon className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {info.title}
                          </h3>
                          <p className="text-green-600 font-medium mb-1">
                            {info.value}
                          </p>
                          <p className="text-sm text-gray-500">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="mt-8 bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-green-600" />
                  <h3 className="font-semibold text-gray-900">
                    Business Hours
                  </h3>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span className="font-medium">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">10:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Connect With Us
            </h2>
            <p className="text-gray-600 mb-8">
              Follow us on social media for updates, tips, and special offers
            </p>

            <div className="flex justify-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    className={`bg-gray-800 text-white p-4 rounded-full transition-all hover:scale-110 ${social.color}`}
                    aria-label={social.label}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <MessageCircle className="w-16 h-16 mx-auto mb-6 animate-bounce" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Quick Support via WhatsApp
            </h2>
            <p className="text-lg text-green-50 mb-8">
              Get instant responses to your queries. Chat with us on WhatsApp
              now!
            </p>
            <a
              href="https://wa.me/917305107148"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How can I book a pickup?
                </h3>
                <p className="text-gray-600">
                  You can book a pickup through our mobile app, website, or by
                  calling our customer support team. It takes less than a
                  minute!
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What areas do you serve?
                </h3>
                <p className="text-gray-600">
                  We currently serve over 50 cities across India. Check the app
                  or contact us to see if we're available in your area.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How do I track my pickup?
                </h3>
                <p className="text-gray-600">
                  Once your pickup is confirmed, you can track your agent in
                  real-time through our mobile app. You'll also receive SMS
                  updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
