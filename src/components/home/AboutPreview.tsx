import { Link } from "react-router-dom";
import { Award, BookOpen, Users, ArrowRight } from "lucide-react";
import { EXPERIENCE } from "../../constants/constant";

const AboutPreview = () => {
  const achievements = [
    {
      icon: Award,
      title: `${EXPERIENCE} Experience`,
      description: "Dedicated to homeopathic medicine",
    },
    {
      icon: BookOpen,
      title: "Expert Knowledge",
      description: "Advanced training in classical homeopathy",
    },
    {
      icon: Users,
      title: "500+ Patients Treated",
      description: "Successful treatment outcomes",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Dr. Shumaila Tanveer consulting with patient"
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-transparent rounded-2xl"></div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                Meet Dr. Shumaila Tanveer
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                A passionate homeopathic practitioner dedicated to providing
                personalized, natural healthcare solutions. With over{" "}
                {EXPERIENCE} of experience, Dr. Shumaila Tanveer specializes in
                treating chronic conditions through classical homeopathy.
              </p>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg"
                >
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <achievement.icon className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-neutral-600">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
            >
              <span>Learn More About Dr. Shumaila Tanveer</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
