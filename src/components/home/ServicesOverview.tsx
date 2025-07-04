import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Droplets,
  Heart,
  Brain,
  Flower,
  Shield,
  ArrowRight,
  Stethoscope,
  ChevronRight,
} from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: Droplets,
      title: "Kidney & Urinary Health",
      description:
        "Specialized treatment for kidney stones, UTIs, and renal disorders using natural homeopathic remedies",
      conditions: [
        "Hematuria",
        "Kidney Stones",
        "Kidney Failure",
        "Urinary Infections",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Flower,
      title: "Skin & Dermatology",
      description:
        "Natural solutions for various skin conditions and disorders with proven results",
      conditions: ["Vitiligo", "Freckles", "Acne", "Eczema"],
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Brain,
      title: "Mental Health",
      description:
        "Holistic approach to emotional and psychological well-being through natural healing",
      conditions: [
        "Anxiety",
        "Depression",
        "Stress Management",
        "Sleep Disorders",
      ],
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Heart,
      title: "Cardiovascular Health",
      description:
        "Comprehensive support for heart health and circulation issues",
      conditions: [
        "Hypertension",
        "Hypotension",
        "Heart Palpitations",
        "Circulation",
      ],
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Women's Health",
      description:
        "Specialized care for women's specific health needs and hormonal balance",
      conditions: [
        "Uterine Fibroids",
        "Hormonal Issues",
        "Menstrual Disorders",
        "PCOS",
      ],
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Stethoscope,
      title: "General Medicine",
      description:
        "Treatment for common ailments and chronic conditions with natural remedies",
      conditions: [
        "Allergies",
        "Digestive Issues",
        "Respiratory Problems",
        "Pain Management",
      ],
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            Our Specialized Services
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Comprehensive homeopathic treatment for a wide range of health
            conditions, focusing on natural healing and long-term wellness
            solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Background gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              {/* Icon with subtle animation */}
              <div className="relative mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Subtle expanding circle effect */}
                <div
                  className={`absolute top-0 left-0 w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl opacity-20 scale-0 group-hover:scale-150 transition-transform duration-700`}
                ></div>
              </div>

              <div className="relative">
                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-neutral-600 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Conditions tags */}
                <div className="space-y-2 mb-6">
                  {service.conditions.map((condition, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                      viewport={{ once: true }}
                      className="inline-block bg-primary-50 text-primary-700 text-xs px-3 py-1 rounded-full mr-2 mb-2 group-hover:bg-primary-100 transition-colors duration-300"
                    >
                      {condition}
                    </motion.span>
                  ))}
                </div>

                {/* Learn More button with professional hover effect */}
                <Link
                  to="/consultation"
                  className="inline-flex items-center space-x-2 text-primary-600 font-medium hover:text-primary-700 transition-all duration-300 group/link"
                >
                  <span className="relative">
                    Learn More
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover/link:w-full transition-all duration-300"></span>
                  </span>
                  <ChevronRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/consultation"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group text-nowrap"
          >
            <span>Book Your Consultation</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
