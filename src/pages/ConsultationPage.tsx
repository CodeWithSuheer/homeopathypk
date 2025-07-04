import { motion } from "framer-motion";
import {
  Clock,
  Video,
  MapPin,
  CheckCircle,
  User,
  Phone,
  FileText,
  Heart,
  Shield,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import { PHONE_NUMBER } from "../constants/constant";

const ConsultationPage = () => {
  const consultationProcess = [
    {
      step: 1,
      title: "Initial Assessment",
      description:
        "Comprehensive evaluation of your health history, current symptoms, and lifestyle factors.",
      duration: "30-45 minutes",
      icon: FileText,
    },
    {
      step: 2,
      title: "Detailed Case Taking",
      description:
        "In-depth discussion about your physical, mental, and emotional state to understand your unique constitution.",
      duration: "45-60 minutes",
      icon: User,
    },
    {
      step: 3,
      title: "Treatment Plan",
      description:
        "Personalized homeopathic remedy selection and comprehensive treatment strategy.",
      duration: "15-20 minutes",
      icon: Heart,
    },
    {
      step: 4,
      title: "Follow-up Care",
      description:
        "Regular monitoring and treatment adjustments to ensure optimal healing progress.",
      duration: "Ongoing",
      icon: Shield,
    },
  ];

  const faqs = [
    {
      question: "How long is the initial consultation?",
      answer:
        "Initial consultations typically last 15-20 minutes to ensure we have a complete understanding of your health condition and constitution.",
    },
    {
      question: "What should I bring to my consultation?",
      answer:
        "Please bring any recent medical reports, current medications list, and a detailed history of your symptoms and previous treatments.",
    },
    {
      question: "Do you offer online consultations?",
      answer:
        "Yes, we provide secure video consultations for patients who cannot visit our clinic in person. The quality of care remains the same.",
    },
    {
      question: "How soon can I expect to see results?",
      answer:
        "Response time varies by condition and individual. Acute conditions may improve within days, while chronic conditions typically show progress within 2-4 weeks.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Schedule Your Consultation
            </h1>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Take the first step towards natural healing. Dr. Shumaila Tanveer
              is here to guide you on your journey to optimal health through
              personalized homeopathic care.
            </p>
          </motion.div>

          {/* Consultation Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="min-w-16 min-h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900">
                    In-Person Consultation
                  </h3>
                  <p className="text-neutral-600">Visit our clinic in Lahore</p>
                </div>
              </div>
              <p className="text-neutral-600 mb-6">
                Traditional face-to-face consultation at our clinic with
                complete physical examination and assessment. Ideal for
                first-time patients and complex cases requiring detailed
                evaluation.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-neutral-600">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Complete physical examination</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-neutral-600">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Immediate remedy dispensing</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-neutral-600">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Personal interaction with Dr</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="min-w-16 min-h-16 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-2xl flex items-center justify-center">
                  <Video className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900">
                    Online Consultation
                  </h3>
                  <p className="text-neutral-600">Secure video consultation</p>
                </div>
              </div>
              <p className="text-neutral-600 mb-6">
                Convenient video consultation from the comfort of your home with
                the same quality care. Perfect for follow-ups and patients
                unable to visit the clinic.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-neutral-600">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Secure video platform</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-neutral-600">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Digital prescription delivery</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-neutral-600">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Flexible scheduling</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-semibold text-md sm:text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now: {PHONE_NUMBER}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Consultation Process */}
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
              Our Consultation Process
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Understanding what to expect during your consultation helps ensure
              the best possible outcome for your homeopathic treatment journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultationProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-primary-600">
                      0{step.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="flex items-center space-x-2 text-xs text-primary-600">
                    <Clock className="h-4 w-4" />
                    <span className="font-medium">{step.duration}</span>
                  </div>
                </div>

                {/* Connector line */}
                {index < consultationProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-300 to-secondary-300"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <HelpCircle className="h-16 w-16 text-primary-600 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Consultation FAQs
            </h2>
            <p className="text-lg text-neutral-600">
              Common questions about our consultation process and what to
              expect.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6"
              >
                <h3 className="font-bold text-neutral-900 mb-3 flex items-start space-x-2">
                  <ArrowRight className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-neutral-600 leading-relaxed ml-7">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              For urgent health concerns or if you have questions about the
              consultation process, don't hesitate to contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center space-x-2 bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now: {PHONE_NUMBER}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationPage;
