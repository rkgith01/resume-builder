
import { BadgeCheck } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let features = [
  {
    title: "Edit and Update",
    description: "Edit and update your resume with ease.",
    icon: BadgeCheck,
    image: "/resume_1.png",
  },

  {
    title: "Browser Side Print",
    description: "Print your resume on the browser side.",
    icon: BadgeCheck,
    image: "/resume_2.png",
    // image: "https://source.unsplash.com/640x480/",
  },
  {
    title: "Choose standard font",
    description: "Choose font style you want to use for your resume.",
    icon: BadgeCheck,
    image: "/resume_3.png",
  },
  {
    title: "One click print",
    description: "Print your resume in just one click.",
    icon: BadgeCheck,
    image: "/resume_2.png",
  },
];
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const Features = () => {
  return (
    <>
      <section className="mb-4 py-6" id="feature">
        <div className="container flex flex-col-reverse mx-auto lg:flex-row">
          <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 text-gray-50 bg-sky-600">
            {features.map((feature, index) => (
              <div key={index} className="flex space-x-2 sm:space-x-4">
                <feature.icon className="w-10 h-10" />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold mb-2 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="leading-snug">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:w-1/2 xl:w-3/5">
            <div className="mt-8">
              <Slider {...settings}>
                {features.map((feature, index) => (
                  <div key={index}>
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="mx-auto w-full sm:max-w-lg lg:max-w-xl xl:max-w-2xl"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
