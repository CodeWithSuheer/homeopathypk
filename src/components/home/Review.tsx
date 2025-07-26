import Marquee from "react-fast-marquee";

const data = [
  {
    review:
      "Dr. Shumaila is a skilled and caring homeopathic doctor. Her way of communication is respectful and comforting. She listens patiently and provides effective treatment. I’ve seen great improvement under her care and highly recommend her services.",
    name: "Asmat Ahmad",
    url: "/assets/prod/quote.png",
  },
  {
    review:
      "As a family physician, Dr Shumaila Tanveer's attitude towards the patients is considerate and empathetic.",
    name: "Sana Faheem",
    url: "/assets/prod/quote.png",
  },
  {
    review:
      "I’m incredibly thankful for my doctor’s expert guidance throughout my healing journey. As an experienced homeopathic doctor, she listened with empathy 😇and provided personalized care that truly made a difference. Her knowledge, support, and dedication helped me improve my health naturally. I highly recommend her for women’s health concerns💯💖",
    name: "Malika",
    url: "/assets/prod/quote.png",
  },
  {
    review:
      "My son had an allergic problem for four years. He had severe cough attacks. But after three months of treatment, he is fine now. Compared to allopathic medicines, the use of homeopathic medicines was also simple and easy. And the side effects of these medicines are also negligible.",
    name: "Tayaba sarwar",
    url: "/assets/prod/quote.png",
  },
  {
    review:
      "Dr. Shumaila is a highly skilled and compassionate specialist in women’s health, with expertise spanning both homeopathic and allopathic gynecology. With years of clinical experience, she offers a unique, integrative approach to female healthcare, addressing not just physical concerns but emotional well-being as well.",
    name: "Nazali",
    url: "/assets/prod/quote.png",
  },
  {
    review:
      "When I first visited different doctors, I was diagnosed with a fatty liver and a gallbladder stone measuring around 22 to 25 mm. Other doctors had advised me to go for surgery to remove it. However, Dr. Shumaila gave me hope and confidence by telling me that surgery wasn't necessary and that I could be treated with medication. Thanks to her treatment and guidance, I’m feeling much better without having to go through an operation. I’m truly grateful for her care and expertise.",
    name: "Qirat",
    url: "/assets/prod/quote.png",
  },
  {
    review:
      "I had been suffering from sinus problems for a very long time. I visited many doctors and even went through nasal surgery, but unfortunately, my condition did not improve. Then someone recommended Dr. Shumaila to me. I decided to take her treatment and completed the full course as advised. Alhamdulillah, after finishing the treatment, my sinus problems completely disappeared. I am truly thankful and would like to express my heartfelt gratitude to Dr. Shumaila for her effective treatment and support.",
    name: "Sana",
    url: "/assets/prod/quote.png",
  },
  {
    review:
      "We’ve trusted her for 6 years, she’s not only a skilled homeopathic doctor but also a genuinely kind person. She always listens with patience and gives full time to every case. Her treatments have brought real comfort and healing to our family.",
    name: "Zoha",
    url: "/assets/prod/quote.png",
  },
];

const Reviews = () => {
  return (
    <>
      <section className="py-14 sm:py-16 bg-[#F0FDFA]">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl text-center font-bold text-neutral-900 mb-4">
            What our Client Says
          </h2>
        </div>

        <Marquee
          speed={35}
          // pauseOnClick
          // pauseOnHover
          direction="left"
          className="testimonial_marquee mt-5 sm:mt-14"
        >
          {data.map((data, i) => (
            <article
              className="group mx-8 flex justify-center items-center px-6 py-8 min-h-[18rem] bg-white max-w-xs sm:max-w-md border border-gray-300 rounded-2xl"
              key={i}
            >
              <div className="card">
                <img className="mb-2 size-8" src={data.url} alt="quote" />

                <p className="text-sm sm:text-[15px] leading-6">
                  {data.review}
                </p>

                <div className="mt-5 flex justify-start items-center gap-3">
                  <div className="img w-10">
                    <img
                      className="rounded-full w-full"
                      src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/user.png?v=1718392709"
                      alt=""
                    />
                  </div>

                  <div className="profile">
                    <h3 className="mb-0.5 text-md sm:text-lg font-medium text-gray-900">
                      {data.name}
                    </h3>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </Marquee>
      </section>
    </>
  );
};

export default Reviews;
