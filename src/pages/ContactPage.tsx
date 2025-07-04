import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import {
  ADDRESS,
  EMAIL_ADDRESS,
  OFFICE_HOURS,
  PHONE_NUMBER,
} from "../constants/constant";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      details: [PHONE_NUMBER],
      action: null,
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [EMAIL_ADDRESS],
      action: null,
    },
    {
      icon: MapPin,
      title: "Clinic Address",
      details: [ADDRESS],
      action: null,
    },
    {
      icon: Clock,
      title: "Clinic Hours",
      details: [OFFICE_HOURS],
      action: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Get In Touch With Us
            </h1>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Ready to start your journey to better health? Contact us today to
              schedule your consultation or ask any questions about our
              homeopathic treatments.
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-neutral-600 text-sm">
                      {info.action && idx === 0 ? (
                        <a
                          href={info.action}
                          className="text-primary-600 hover:text-primary-700 transition-colors"
                        >
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
