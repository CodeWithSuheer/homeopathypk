import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Ahmed",
      condition: "Kidney Health",
      image:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150",
      testimonial:
        "Dr. Shumaila completely transformed my health. Her homeopathic treatment dissolved my kidney stones naturally.",
      rating: 5,
      department: "Nephrology",
    },
    {
      id: 2,
      name: "Muhammad Hassan",
      condition: "Mental Wellness",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      testimonial:
        "The holistic approach addressed my anxiety root cause. I feel more confident and emotionally balanced now.",
      rating: 5,
      department: "Mental Health",
    },
    {
      id: 3,
      name: "Fatima Khan",
      condition: "Skin Care",
      image:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150",
      testimonial:
        "My vitiligo patches are fading significantly. Her patient approach and effective remedies restored my confidence.",
      rating: 5,
      department: "Dermatology",
    },
    {
      id: 4,
      name: "Ali Raza",
      condition: "Heart Health",
      image:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150",
      testimonial:
        "My blood pressure normalized naturally without side effects. I feel healthier and more energetic than ever.",
      rating: 5,
      department: "Cardiology",
    },
    {
      id: 5,
      name: "Aisha Malik",
      condition: "Women's Health",
      image:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150",
      testimonial:
        "Avoided surgery for fibroids through gentle homeopathic treatment. Dr. Shumaila gave me my life back.",
      rating: 5,
      department: "Gynecology",
    },
    {
      id: 6,
      name: "Omar Sheikh",
      condition: "Skin Disorders",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      testimonial:
        "Chronic eczema cleared completely. No more dependence on harsh medications - natural healing works!",
      rating: 5,
      department: "Dermatology",
    },
    {
      id: 7,
      name: "Zainab Hussain",
      condition: "Hormonal Balance",
      image:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150",
      testimonial:
        "PCOS symptoms managed holistically. Regulated cycles and improved mood - I finally feel like myself again.",
      rating: 5,
      department: "Endocrinology",
    },
    {
      id: 8,
      name: "Ahmed Khan",
      condition: "Digestive Health",
      image:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150",
      testimonial:
        "Chronic IBS symptoms resolved naturally. The personalized treatment approach made all the difference.",
      rating: 5,
      department: "Gastroenterology",
    },
  ];

  const cardsToShow = 2;

  useEffect(() => {
    if (!isAutoPlaying || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = testimonials.length - cardsToShow;
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isPaused, testimonials.length]);

  const nextSlide = () => {
    const maxIndex = testimonials.length - cardsToShow;
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    const maxIndex = testimonials.length - cardsToShow;
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const totalDots = Math.max(0, testimonials.length - cardsToShow + 1);

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Real stories from patients who have experienced the healing power of
            homeopathic medicine.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={containerRef}
        >
          {/* Main Slider Container */}
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / cardsToShow)
                }%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="flex-shrink-0 px-4 py-5"
                  style={{ width: `${100 / cardsToShow}%` }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full max-w-lg mx-auto">
                    {/* Patient Avatar */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full object-cover shadow-md"
                          loading="lazy"
                        />
                        <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-neutral-900 text-xl">
                          {testimonial.name}
                        </h4>
                        <p className="text-primary-600 font-medium">
                          {testimonial.condition}
                        </p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-neutral-700 leading-relaxed mb-6 text-base">
                      "{testimonial.testimonial}"
                    </blockquote>

                    {/* Department Tag */}
                    <div className="flex items-center justify-between">
                      <span className="inline-block bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 font-semibold px-4 py-2 rounded-full">
                        {testimonial.department}
                      </span>
                      <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-primary-600 flex items-center justify-center z-10"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-primary-600 flex items-center justify-center z-10"
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Dots Indicator Only */}
        <div className="flex justify-center items-center mt-8">
          <div className="flex space-x-3">
            {Array.from({ length: totalDots }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? "w-10 h-3 bg-primary-500 rounded-full"
                    : "w-3 h-3 bg-neutral-300 rounded-full hover:bg-primary-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {[
            { number: "500+", label: "Happy Patients", icon: "👥" },
            { number: "95%", label: "Success Rate", icon: "🏆" },
            { number: "25+", label: "Years Experience", icon: "⭐" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-neutral-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 768px) {
            .flex-shrink-0 {
              width: 100% !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Testimonials;
