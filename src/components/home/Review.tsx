import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import image from "../../assets/girlAvatar.jpg";
const data = [
  {
    review:
      "Dr. Shumaila is a skilled and caring homeopathic doctor. Her way of communication is respectful and comforting. She listens patiently and provides effective treatment. I've seen great improvement under her care and highly recommend her services.",
    name: "Asmat Ahmad",
  },
  {
    review:
      "As a family physician, Dr Shumaila Tanveer's attitude towards the patients is considerate and empathetic.",
    name: "Sana Faheem",
  },
  {
    review:
      "I'm incredibly thankful for my doctor's expert guidance throughout my healing journey. As an experienced homeopathic doctor, she listened with empathy 😇and provided personalized care that truly made a difference. Her knowledge, support, and dedication helped me improve my health naturally. I highly recommend her for women's health concerns💯💖",
    name: "Malika",
  },
  {
    review:
      "My son had an allergic problem for four years. He had severe cough attacks. But after three months of treatment, he is fine now. Compared to allopathic medicines, the use of homeopathic medicines was also simple and easy. And the side effects of these medicines are also negligible.",
    name: "Tayaba sarwar",
  },
  {
    review:
      "Dr. Shumaila is a highly skilled and compassionate specialist in women's health, with expertise spanning both homeopathic and allopathic gynecology. With years of clinical experience, she offers a unique, integrative approach to female healthcare, addressing not just physical concerns but emotional well-being as well.",
    name: "Nazali",
  },
  {
    review:
      "When I first visited different doctors, I was diagnosed with a fatty liver and a gallbladder stone measuring around 22 to 25 mm. Other doctors had advised me to go for surgery to remove it. However, Dr. Shumaila gave me hope and confidence by telling me that surgery wasn't necessary and that I could be treated with medication. Thanks to her treatment and guidance, I'm feeling much better without having to go through an operation. I'm truly grateful for her care and expertise.",
    name: "Qirat",
  },
  {
    review:
      "I had been suffering from sinus problems for a very long time. I visited many doctors and even went through nasal surgery, but unfortunately, my condition did not improve. Then someone recommended Dr. Shumaila to me. I decided to take her treatment and completed the full course as advised. Alhamdulillah, after finishing the treatment, my sinus problems completely disappeared. I am truly thankful and would like to express my heartfelt gratitude to Dr. Shumaila for her effective treatment and support.",
    name: "Sana",
  },
  {
    review:
      "We've trusted her for 6 years, she's not only a skilled homeopathic doctor but also a genuinely kind person. She always listens with patience and gives full time to every case. Her treatments have brought real comfort and healing to our family.",
    name: "Zoha",
  },
];

const Reviews = () => {
  const [slidesToShow, setSlidesToShow] = useState(2);
  // const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef<Slider>(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
        // setIsMobile(true);
      } else {
        setSlidesToShow(2);
        // setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section className="py-14 sm:py-16 bg-[#F0FDFA]">
        <div className="max-w-5xl lg:max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl text-center font-bold text-neutral-900 mb-4">
            What our Patient Says
          </h2>

          <div className="mt-5">
            <Slider ref={sliderRef} {...settings}>
              {data.map((testimonial, idx) => (
                <div key={idx} className="flex-shrink-0 px-2 pb-8 pt-2">
                  <div className="relative h-full min-h-[20rem] rounded-xl border border-gray-200 bg-white p-4 shadow-xl sm:p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="">
                        <div className="flex justify-start items-center gap-2 mb-4">
                          <img
                            src={image}
                            alt={testimonial?.name}
                            className="h-12 w-12 rounded-full object-cover sm:h-16 sm:w-16"
                          />
                          <div className="flex-1">
                            <h3 className="text-lg font-medium text-gray-900 sm:text-xl">
                              {testimonial?.name}
                            </h3>
                            <h3 className="text-sm font-medium text-gray-500 sm:text-md">
                              Patient Feedback
                            </h3>
                          </div>
                        </div>

                        <p className="mb-5 text-[13.5px] leading-relaxed tracking-wide text-gray-600 sm:text-[16px]">
                          {testimonial?.review}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* SLIDE CONTROLS */}
          <div className="flex w-full items-center justify-center">
            <div className="flex-row gap-2 flex">
              <button
                title="Previous Slide"
                type="button"
                onClick={previous}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white shadow-md transition-colors duration-200 hover:bg-gray-100"
              >
                <ChevronLeft className="h-5 w-5 text-black" />
              </button>
              <button
                title="Next Slide"
                type="button"
                onClick={next}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white shadow-md transition-colors duration-200 hover:bg-gray-100"
              >
                <ChevronRight className="h-5 w-5 text-black" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
