import { motion } from "framer-motion";
import { Award, Users, Star, CheckCircle, Clock } from "lucide-react";
import { EXPERIENCE, PHONE_NUMBER } from "../constants/constant";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const qualifications = [
    "DHMS (Diploma in Homeopathic Medicine & Surgery)",
    "Advanced Certificate in Classical Homeopathy",
    "Member, Pakistan Homeopathic Medical Association",
    "Continuing Education in Modern Homeopathic Approaches",
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="text-primary-600 font-semibold">
                  About Our Practice
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mt-2 mb-6">
                  Meet Dr. Shumaila Tanveer
                </h1>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  A dedicated homeopathic physician with over {EXPERIENCE} of
                  experience in natural healing. Dr. Shumaila Tanveer is
                  passionate about providing personalized, holistic healthcare
                  that addresses the root cause of illness rather than just
                  managing symptoms.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Clock, number: "25+", label: "Years Experience" },
                  { icon: Users, number: "500+", label: "Patients Treated" },
                  { icon: Award, number: "95%", label: "Success Rate" },
                  { icon: Star, number: "4.9", label: "Patient Rating" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center p-4 bg-white rounded-xl shadow-sm"
                  >
                    <stat.icon className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-neutral-900">
                      {stat.number}
                    </div>
                    <div className="text-sm text-neutral-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dr. Shumaila Tanveer"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                Professional Journey
              </h2>
              <div className="space-y-6">
                <p className="text-neutral-600 leading-relaxed">
                  Dr. Shumaila Tanveer (DHMS, RHMP) is a qualified homeopathic
                  doctor, registered with National Council for Homeopathy,
                  Pakistan. She has been practicing homeopathy since year 2000,
                  and while she specializes in treatment of diseases related
                  with kidney, stomach, abdomen and heart, she has successfully
                  treated many other types of complicated diseases, even such
                  cases that are generally considered incurable. She also offers
                  homeopathic treatment at home.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Her practice philosophy centers on treating the individual
                  rather than the disease, understanding that each patient is
                  unique and requires personalized care. This approach has led
                  to remarkable results in treating chronic conditions that were
                  previously deemed incurable.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Dr. Shumaila Tanveer continuously updates her knowledge
                  through ongoing education and stays current with the latest
                  developments in homeopathic research and practice. Her
                  commitment to excellence has earned her recognition among
                  peers and gratitude from hundreds of patients.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                Education & Qualifications
              </h3>
              <div className="space-y-4">
                {qualifications.map((qualification, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">{qualification}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Begin Your Healing Journey?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Take the first step towards natural healing with a personalized
              consultation. Dr. Shumaila Tanveer is ready to help you achieve
              optimal health and wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultation"
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Schedule Consultation
              </Link>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                Call Now: {PHONE_NUMBER}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
