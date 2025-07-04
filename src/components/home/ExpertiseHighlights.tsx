import { motion } from "framer-motion";
import {
  CheckCircle,
  Target,
  Leaf,
  Heart,
  Stethoscope,
  Shield,
  Brain,
  Activity,
  Flower,
} from "lucide-react";
import { EXPERIENCE } from "../../constants/constant";

const ExpertiseHighlights = () => {
  const highlights = [
    {
      icon: Target,
      title: "Personalized Treatment",
      description:
        "Each patient receives a customized treatment plan based on their unique constitution and symptoms.",
      stats: "95% Effective",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Leaf,
      title: "Natural Remedies",
      description:
        "Using only natural homeopathic medicines with no side effects or chemical dependency.",
      stats: "100% Natural",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Heart,
      title: "Holistic Approach",
      description:
        "Treating the whole person - mind, body, and spirit - not just the symptoms.",
      stats: "360° Care",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: CheckCircle,
      title: "Proven Results",
      description: `Over ${EXPERIENCE} of successful practice with hundreds of satisfied patients.`,
      stats: "500+ Patients",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  const specializations = [
    {
      icon: Activity,
      name: "Chronic Kidney Diseases",
      description:
        "Advanced treatment for kidney stones, renal failure, and urinary disorders",
      experience: "15+ years",
      successRate: "92%",
    },
    {
      icon: Flower,
      name: "Skin Disorders",
      description:
        "Specialized care for vitiligo, eczema, acne, and dermatological conditions",
      experience: "12+ years",
      successRate: "88%",
    },
    {
      icon: Brain,
      name: "Mental Health",
      description:
        "Holistic treatment for anxiety, depression, and emotional wellness",
      experience: "10+ years",
      successRate: "90%",
    },
    {
      icon: Shield,
      name: "Women's Health",
      description:
        "Comprehensive care for hormonal issues, PCOS, and reproductive health",
      experience: "14+ years",
      successRate: "94%",
    },
    {
      icon: Heart,
      name: "Cardiovascular Health",
      description:
        "Natural solutions for hypertension, heart conditions, and circulation",
      experience: "11+ years",
      successRate: "89%",
    },
    {
      icon: Stethoscope,
      name: "Digestive Disorders",
      description:
        "Effective treatment for IBS, gastritis, and metabolic conditions",
      experience: "13+ years",
      successRate: "91%",
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            Why Choose Our Homeopathic Care?
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Our expertise combines traditional homeopathic principles with
            modern understanding to deliver exceptional healthcare outcomes.
          </p>
        </motion.div>

        {/* Main Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group text-center relative overflow-hidden"
            >
              {/* Background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl transform scale-0 group-hover:scale-100 transition-transform duration-500 opacity-50"></div>

              <div className="relative p-6">
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${highlight.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                >
                  <highlight.icon className="h-10 w-10 text-white" />
                </div>

                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary-600 group-hover:text-primary-700 transition-colors duration-300">
                    {highlight.stats}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors duration-300">
                  {highlight.title}
                </h3>

                <p className="text-neutral-600 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-3 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
              Our Areas of Specialization
            </h3>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Dr. Shumaila Tanveer has extensive experience treating various
              conditions with remarkable success rates using classical
              homeopathic principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {specializations.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-transparent hover:border-primary-200"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="min-w-12 min-h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <spec.icon className="h-6 w-6 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex sm:items-center flex-col gap-y-1 gap-x-2 sm:flex-row justify-start items-start sm:justify-start mb-2">
                      <span className="text-xs font-semibold text-primary-600 bg-primary-100 px-2 py-1 rounded-full text-nowrap">
                        {spec.experience}
                      </span>
                      <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full text-nowrap">
                        {spec.successRate} Success
                      </span>
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {spec.name}
                </h4>

                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  {spec.description}
                </p>

                {/* Progress bar */}
                <div className="w-full bg-neutral-200 rounded-full h-2 mb-2">
                  <motion.div
                    className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: spec.successRate }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>

                <div className="flex items-center justify-between text-xs text-neutral-500">
                  <span>Success Rate</span>
                  <span className="font-semibold">{spec.successRate}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseHighlights;
