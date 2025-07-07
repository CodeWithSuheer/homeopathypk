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
  Cookie,
  HeartHandshake,
} from "lucide-react";

const liverr = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    className="text-white"
  >
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M18 30.707a8.4 8.4 0 0 1-3.312.654c-1.835 0-2.442 1.469-3.087 3.03c-.731 1.769-1.512 3.657-4.188 3.657c-5.037 0-3.794-15.5-.794-21.5s7.106-6.5 15.5-6.5c5.143 0 6.447.784 7.457 1.392c.639.384 1.16.697 2.461.697c1.343 0 3.224-.4 5.104-.802c2.82-.602 5.642-1.203 6.649-.451c1.679 1.253-3.358 10.447-8.395 10.447c-2.592 0-4.147 1.859-5.656 3.663c-1.422 1.7-2.804 3.352-4.977 3.352c-2.092 0-3.451.659-4.762 1.36v9.842h-2zm-9.307 4.899c-.22.225-.536.442-1.28.442h-.002c-.053 0-.093 0-.198-.103c-.149-.146-.37-.468-.584-1.077c-.432-1.226-.654-3.08-.627-5.296c.054-4.443 1.086-9.49 2.406-12.13c1.316-2.63 2.735-3.84 4.61-4.51c2.073-.74 4.849-.884 9.101-.884q.475 0 .9.009c-.883 1.129-1.364 2.37-1.622 3.445a11 11 0 0 0-.293 2.195a9 9 0 0 0 .013.866l.003.039l.002.017l.001.018v.006l.001.003l.995-.098l.995-.099l-.002-.03l-.007-.132a7 7 0 0 1-.002-.529c.014-.456.07-1.09.238-1.79c.303-1.261.953-2.686 2.324-3.737c1.38.177 2.01.445 2.384.638c.167.087.31.172.501.287l.058.035c.206.124.487.291.817.441c.731.332 1.536.505 2.612.505c1.042 0 2.25-.189 3.392-.407a108 108 0 0 0 2.172-.448c.466-.1.921-.196 1.341-.282c1.148-.234 2.133-.404 2.903-.453l.112-.007c-.25.79-.766 1.84-1.497 2.909c-.751 1.098-1.66 2.115-2.606 2.837c-.964.736-1.803 1.045-2.459 1.045c-3.524 0-5.615 2.499-7 4.153l-.131.156c-.744.889-1.308 1.563-1.918 2.055c-.57.462-1.05.651-1.584.651c-2.039 0-3.54.527-4.762 1.113v-4.411c0-.395.195-.764.534-1.06c.357-.313.756-.44.966-.44v-2c-.79 0-1.64.373-2.283.935c-.644.563-1.187 1.413-1.216 2.477h-5.094c-2.39 0-5.256 1.051-2.39 3.153c2.08 1.526 5.669.312 7.483-.47v2.86c-1.019.516-1.945.858-3.312.858c-1.7 0-2.888.792-3.678 1.842c-.582.771-.982 1.749-1.269 2.449l-.115.28c-.355.847-.617 1.35-.933 1.674"
      clip-rule="evenodd"
    />
  </svg>
);

const ServicesOverview = () => {
  const services = [
    {
      icon: HeartHandshake,
      title: "Counselling & Therapy",
      description:
        "Professional psychological counselling integrated with homeopathic constitutional treatment for holistic mental wellness",
      conditions: [
        "Stress Management",
        "Grief Counselling",
        "Relationship Issues",
        "Life Transitions",
      ],
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: Cookie,
      title: "Nutrition & Metabolism",
      description:
        "Holistic nutritional guidance and metabolic disorder treatment through natural remedies and dietary optimization",
      conditions: [
        "Weight Management",
        "Diabetes Support",
        "Thyroid Issues",
        "Metabolic Syndrome",
      ],
      color: "from-green-500 to-emerald-500",
    },
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
      icon: liverr,
      title: "Respiratory Health",
      description:
        "Comprehensive treatment for breathing disorders and respiratory wellness using natural healing methods",
      conditions: ["Asthma", "Allergic Rhinitis", "Chronic Cough", "Sinusitis"],
      color: "from-sky-500 to-blue-500",
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
