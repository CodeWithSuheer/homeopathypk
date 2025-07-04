import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Calendar } from "lucide-react";
import {
  ADDRESS,
  EMAIL_ADDRESS,
  OFFICE_HOURS,
  PHONE_NUMBER,
} from "../../constants/constant";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Phone,
      title: "Call Us",
      primary: PHONE_NUMBER,
      action: PHONE_NUMBER ? `tel:${PHONE_NUMBER}` : null,
    },
    {
      icon: Mail,
      title: "Email Us",
      primary: EMAIL_ADDRESS,
      action: `mailto:${EMAIL_ADDRESS}`,
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: ADDRESS,
      action: null,
    },
    {
      icon: Clock,
      title: "Office Hours",
      primary: OFFICE_HOURS,
      action: null,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Ready to start your journey to better health? Contact us today to
            schedule your consultation and take the first step towards natural
            healing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <detail.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                {detail.title}
              </h3>
              <div className="space-y-1">
                {detail.action ? (
                  <a
                    href={detail.action}
                    className="block text-primary-600 font-medium hover:text-primary-700 transition-colors"
                  >
                    {detail.primary}
                  </a>
                ) : (
                  <p className="text-neutral-900 font-medium">
                    {detail.primary}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 mb-12 border border-red-100"
        >
          <div className="text-center">
            <h3 className="text-lg font-bold text-red-800 mb-2">
              Emergency Consultations
            </h3>
            <p className="text-red-600 text-sm mb-4">
              For urgent health concerns, emergency consultations are available
              by appointment
            </p>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-2 rounded-full font-medium hover:bg-red-700 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Emergency Contact</span>
            </a>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 lg:p-12 text-center text-white"
        >
          <Calendar className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Schedule Your Consultation Today
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Take the first step towards natural healing. Book your personalized
            consultation and discover how homeopathy can transform your health.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center space-x-2 bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-nowrap"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
