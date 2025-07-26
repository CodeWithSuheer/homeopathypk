import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Star, Award, Leaf, Shield } from "lucide-react";
import { PHONE_NUMBER } from "../../constants/constant";
import { useState } from "react";

const FeaturedProducts = () => {
  const [expandedDescriptions, setExpandedDescriptions] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleDescription = (productId: number) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const truncateText = (text: string, maxLines: number = 2) => {
    const words = text.split(" ");
    const wordsPerLine = 6; // Approximate words per line
    const maxWords = maxLines * wordsPerLine;

    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(" ") + "...";
  };
  const products = [
    {
      id: 1,
      name: "CARESS HAIR OIL",
      description:
        "Richly infused with pure essential oils and rare herbs, this oil deeply nourishes every strand. Whether you’re battling thinning hair, dullness, or scalp issues—this oil is your complete repair therapy.",
      image: "/assets/prod/prod1.jpeg",
      features: ["No Hairfall", "No Breakage", "No Frizz"],
      badge: "Top Seller",
      category: "Pure Oils, Pure Confidence.",
      price: "Rs. 1200",
    },
    {
      id: 2,
      name: "NUTRIBOOST",
      description:
        "This bowl is your daily boost in every bite with antioxidants and slow-release energy. It lifts up your mood, satisfies your hunger, and supports your body.",
      image: "/assets/prod/prod2.jpeg",
      features: ["Stops Hair Fall", "Adds Volume", "Natural Growth"],
      badge: "Best Seller",
      category: "Tasty Meets Trusty",
      price: "Rs. 1500",
      sale_price: "Rs. 1200",
    },
    {
      id: 3,
      name: "CARESS HAIR SERUM",
      description:
        "This nourishing hair serum enriched with the restorative powers, feels incredibly light on the skin, is your all-in-one solution for combating dryness, reducing breakage, and reviving lifeless strands.",
      image: "/assets/prod/prod3.jpeg",
      features: ["Complete Kit", "Expert Selected", "Natural Healing"],
      badge: "Exclusive",
      category: "Advanced Nutrition for Every Strand",
      price: "Rs. 1200",
      sale_price: "Rs. 1000",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent flex-1 max-w-32"></div>
            <Award className="h-8 w-8 text-primary-600 mx-6" />
            <div className="h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent flex-1 max-w-32"></div>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            Exclusive Medical Solutions
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Discover our carefully curated collection of premium medical
            products, personally selected and recommended by Dr. Shumaila
            Tanveer for optimal health outcomes.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-full mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span
                  className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold ${
                    product.badge === "Top Seller"
                      ? "bg-green-500 text-white"
                      : product.badge === "Best Seller"
                      ? "bg-blue-500 text-white"
                      : "bg-purple-500 text-white"
                  }`}
                >
                  <Star className="h-3 w-3" />
                  <span>{product.badge}</span>
                </span>
              </div>

              {/* Product Image */}
              <div className="relative h-[25rem] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <div className="flex gap-2 sm:items-center flex-col-reverse sm:flex-row justify-start items-start sm:justify-between mb-3">
                  <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>

                {/* Product Name */}
                <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {product.name}
                </h3>

                {/* Price Section */}
                <div className="mb-2 flex items-center space-x-2">
                  {product.sale_price ? (
                    <>
                      <span className="text-lg font-bold text-primary-600">
                        {product.sale_price}
                      </span>
                      <span className="text-sm text-neutral-400 line-through">
                        {product.price}
                      </span>
                      <span className="ml-2 px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                        Sale
                      </span>
                    </>
                  ) : (
                    <span className="text-lg font-bold text-neutral-900">
                      {product.price}
                    </span>
                  )}
                </div>

                {/* Description */}
                <div className="mb-4">
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {expandedDescriptions[product.id]
                      ? product.description
                      : truncateText(product.description)}
                  </p>
                  {product.description.split(" ").length > 12 && (
                    <button
                      onClick={() => toggleDescription(product.id)}
                      className="text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors duration-200 mt-2"
                    >
                      {expandedDescriptions[product.id]
                        ? "Show less"
                        : "Show more"}
                    </button>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 group/btn"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call for Pricing</span>
                  </a>
                </div>
              </div>

              {/* Hover Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
        >
          {[
            {
              icon: Shield,
              title: "Quality Assured",
              description:
                "All products are carefully tested and approved by medical professionals",
            },
            {
              icon: Leaf,
              title: "Natural Ingredients",
              description:
                "Made with pure, natural components following homeopathic principles",
            },
            {
              icon: Award,
              title: "Expert Recommended",
              description:
                "Personally selected and endorsed by Dr. Shumaila Tanveer",
            },
          ].map((indicator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <indicator.icon className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-neutral-900 mb-2">
                {indicator.title}
              </h4>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {indicator.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Need Personalized Product Recommendations?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Dr. Shumaila Tanveer can recommend the most suitable products
              based on your specific health needs and conditions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultation"
                className="inline-flex items-center justify-center space-x-2 bg-white text-primary-600 px-6 sm:px-8 py-4 rounded-full font-semibold text-[15px] sm:text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span>Book Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="tel:+92123456789"
                className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
