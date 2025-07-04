import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { PHONE_NUMBER } from "../../constants/constant";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is homeopathy and how does it work?",
      answer:
        "Homeopathy is a natural system of medicine based on the principle of \"like cures like.\" It uses highly diluted substances to stimulate the body's natural healing processes. Our remedies are safe, gentle, and work by enhancing your body's own ability to heal itself without side effects.",
    },
    {
      question: "How long does homeopathic treatment take to show results?",
      answer:
        "The timeframe varies depending on the condition, its severity, and how long you've had it. Acute conditions may respond within hours or days, while chronic conditions typically require several weeks to months. During your consultation, Dr. Shumaila Tanveer will discuss realistic expectations based on your specific case.",
    },
    {
      question:
        "Are homeopathic medicines safe for children and pregnant women?",
      answer:
        "Yes, homeopathic medicines are completely safe for all ages, including infants, children, pregnant women, and elderly patients. They are made from natural substances and are non-toxic. However, we always recommend consulting with Dr. Shumaila Tanveer before starting any treatment during pregnancy.",
    },
    {
      question: "What conditions can be treated with homeopathy?",
      answer:
        "Homeopathy can treat a wide range of conditions including chronic diseases like kidney stones, skin disorders (vitiligo, eczema), mental health issues (anxiety, depression), women's health problems, cardiovascular conditions, digestive disorders, and many acute illnesses. Dr. Shumaila Tanveer specializes in complex chronic cases.",
    },
    {
      question:
        "Can I take homeopathic medicines with conventional medications?",
      answer:
        "In most cases, yes. Homeopathic medicines can be safely taken alongside conventional medications as they work differently and don't interact with pharmaceutical drugs. However, it's important to inform Dr. Shumaila Tanveer about all medications you're taking during your consultation.",
    },
    {
      question: "How do I book a consultation with Dr. Shumaila Tanveer?",
      answer: `You can book a consultation by calling us at ${PHONE_NUMBER}, emailing info@drshumailatanveer.com, or using our online booking system. We offer both in-person and online consultations to accommodate your needs. Initial consultations typically last 60-90 minutes.`,
    },
    {
      question: "What should I expect during my first consultation?",
      answer:
        "Your first consultation will be comprehensive, lasting 60-90 minutes. Dr. Shumaila Tanveer will discuss your medical history, current symptoms, lifestyle, emotional state, and any factors affecting your health. This detailed approach helps identify the most suitable homeopathic remedy for your unique constitution.",
    },
    {
      question: "Do you provide online consultations?",
      answer:
        "Yes, we offer secure online consultations via video calls for patients who cannot visit our clinic in person. Online consultations are just as effective as in-person visits for homeopathic treatment. Technical support is available to help you set up your virtual appointment.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Get answers to common questions about homeopathic treatment, our
            services, and what you can expect from your healing journey.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-neutral-50 rounded-2xl overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-neutral-100 transition-colors focus:outline-none focus:bg-neutral-100"
              >
                <h3 className="font-semibold text-neutral-900 pr-4">
                  {faq.question}
                </h3>
                <div className="">
                  {openFAQ === index ? (
                    <Minus className="h-5 w-5 text-primary-600" />
                  ) : (
                    <Plus className="h-5 w-5 text-neutral-500" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-neutral-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;