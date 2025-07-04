import { Star, Leaf, Heart, Award, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 lg:px-8">
        <div className="flex min-h-screen flex-col justify-center lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Trust indicator */}
            <div className="mb-6 flex items-center justify-center gap-2 lg:justify-start lg:mb-8">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400 lg:h-5 lg:w-5"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 lg:text-base">
                Trusted by 500+ patients
              </span>
            </div>

            {/* Main Heading */}
            <div className="mb-6 lg:mb-8">
              <h1 className="text-center text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-left lg:text-5xl xl:text-6xl">
                Your Path To <span className="text-teal-500">Wellness</span>{" "}
                Starts Here
              </h1>
            </div>

            {/* Description */}
            <p className="mb-8 text-center text-base leading-relaxed text-gray-600 lg:text-left lg:text-lg xl:text-xl lg:mb-10">
              Experience the healing power of homeopathy with Dr. Shumaila
              Tanveer. Our personalized natural treatments address the root
              cause of your health concerns, promoting lasting wellness and
              vitality.
            </p>

            {/* Features */}
            <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start lg:gap-8 lg:mb-10">
              <div className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-teal-500" />
                <span className="text-sm font-medium text-gray-700 lg:text-base">
                  Natural Healing
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-teal-500" />
                <span className="text-sm font-medium text-gray-700 lg:text-base">
                  Personalized Care
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-teal-500" />
                <span className="text-sm font-medium text-gray-700 lg:text-base">
                  Proven Results
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <button className="flex w-full items-center justify-center gap-2 rounded-full bg-teal-500 px-6 py-3 text-white transition-colors hover:bg-teal-600 sm:w-auto lg:px-8 lg:py-4">
                <span className="font-medium">Book Your Consultation</span>
                <ArrowRight className="h-4 w-4 lg:h-5 lg:w-5" />
              </button>
              <button className="w-full rounded-full border-2 border-teal-500 px-6 py-3 font-medium text-teal-500 transition-colors hover:bg-teal-50 sm:w-auto lg:px-8 lg:py-4">
                Learn More About Us
              </button>
            </div>
          </div>

          {/* Right Content - Doctor Image with Badges */}
          <div className="order-1 mb-8 flex justify-center lg:order-2 lg:mb-0">
            <div className="relative">
              {/* Experience Badge */}
              <div className="absolute -left-4 top-8 z-10 rounded-2xl bg-white px-3 py-2 shadow-lg lg:-left-8 lg:top-16 lg:px-4 lg:py-3">
                <div className="text-xl font-bold text-teal-500 lg:text-2xl">
                  25+
                </div>
                <div className="text-xs text-gray-600">Years Experience</div>
              </div>

              {/* Doctor Image */}
              <div className="relative h-80 w-64 overflow-hidden rounded-3xl bg-gray-200 sm:h-96 sm:w-80 lg:h-[500px] lg:w-96">
                <img
                  src="https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Dr. Shumaila Tanveer - Professional Healthcare Provider"
                  className="object-cover object-center"
                />
              </div>

              {/* Happy Patients Badge */}
              <div className="absolute -right-4 bottom-8 z-10 rounded-2xl bg-white px-3 py-2 shadow-lg lg:-right-8 lg:bottom-16 lg:px-4 lg:py-3">
                <div className="text-xl font-bold text-teal-500 lg:text-2xl">
                  500+
                </div>
                <div className="text-xs text-gray-600">Happy Patients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
