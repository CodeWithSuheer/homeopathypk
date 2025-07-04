import { motion } from "framer-motion";
import {
  BookOpen,
  FileText,
  Video,
  Download,
  ArrowRight,
  Calendar,
} from "lucide-react";

const HealthResources = () => {
  const resources = [
    {
      type: "Guide",
      icon: BookOpen,
      title: "Understanding Homeopathy",
      description:
        "Complete guide to homeopathic principles and how natural healing works",
      readTime: "10 min read",
      category: "Education",
    },
    {
      type: "Article",
      icon: FileText,
      title: "Managing Kidney Stones Naturally",
      description:
        "Preventive measures and homeopathic approaches to kidney stone treatment",
      readTime: "7 min read",
      category: "Kidney Health",
    },
    {
      type: "Video",
      icon: Video,
      title: "Anxiety Relief Through Homeopathy",
      description:
        "Dr. Shumaila Tanveer explains natural approaches to managing anxiety and stress",
      readTime: "15 min watch",
      category: "Mental Health",
    },
    {
      type: "Download",
      icon: Download,
      title: "Healthy Living Checklist",
      description:
        "Daily habits and lifestyle tips for optimal health and wellness",
      readTime: "Free PDF",
      category: "Wellness",
    },
  ];

  const blogPosts = [
    {
      title: "The Science Behind Homeopathic Dilutions",
      excerpt:
        "Understanding how homeopathic remedies work at the molecular level and their effectiveness in treating chronic conditions.",
      date: "2024-01-15",
      author: "Dr. Shumaila Tanveer",
      image:
        "https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      title: "Holistic Approach to Women's Health",
      excerpt:
        "Comprehensive guide to addressing hormonal imbalances, PCOS, and reproductive health through homeopathy.",
      date: "2024-01-10",
      author: "Dr. Shumaila Tanveer",
      image:
        "https://images.pexels.com/photos/3993212/pexels-photo-3993212.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      title: "Natural Immunity Boosters",
      excerpt:
        "Discover powerful homeopathic remedies that strengthen your immune system naturally without side effects.",
      date: "2024-01-05",
      author: "Dr. Shumaila Tanveer",
      image:
        "https://images.pexels.com/photos/4047146/pexels-photo-4047146.jpeg?auto=compress&cs=tinysrgb&w=400",
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            Health Resources & Education
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Empower yourself with knowledge about homeopathy, natural healing,
            and wellness. Access our comprehensive library of educational
            resources.
          </p>
        </motion.div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <resource.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                      {resource.category}
                    </span>
                    <span className="text-xs text-neutral-500">
                      {resource.readTime}
                    </span>
                  </div>
                  <h3 className="font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {resource.title}
                  </h3>
                </div>
              </div>
              <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
                {resource.description}
              </p>
              <div className="flex items-center space-x-2 text-primary-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                <span>Access {resource.type}</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Latest Blog Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
              Latest Health Articles
            </h3>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Stay informed with our latest insights on homeopathy, natural
              healing, and wellness tips.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-neutral-500 mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span>•</span>
                    <span>{post.author}</span>
                  </div>
                  <h4 className="font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center space-x-2 text-primary-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 lg:p-12 text-center text-white"
        >
          <BookOpen className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Stay Updated with Health Tips
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Subscribe to our newsletter and receive weekly health tips, natural
            remedies, and the latest updates from our homeopathic practice.
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-full text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <button className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
            <p className="text-sm mt-4 opacity-75">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HealthResources;
