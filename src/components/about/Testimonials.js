import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../../sliderProps";
const testimonialData = [
  {
    id: 1,
    text: "Sazeduzzaman is an exceptional frontend developer. His ability to create clean, responsive designs is outstanding. We were impressed with his professionalism and attention to detail.",
    authorImage: "assets/img/testimonials/rashed.jpg",
    authorName: "Rasheduzzaman Raju",
    authorDesignation: "SEO Engineer",
    authorCompany: "Arsuk EUR LTD.",
    authorCompanyUrl: "https://www.arsuk.co.uk/",
  },
  {
    id: 2,
    text: "Sazeduzzaman's frontend development skills are top-notch. His designs are modern and user-friendly, and he worked with us to ensure everything met our needs.",
    authorImage: "assets/img/testimonials/akash.jpg",
    authorName: "Mirza Ryhan Akash",
    authorDesignation: "Software Tester (QA)",
    authorCompany: "Brothers IT",
    authorCompanyUrl: "#",
  },
  {
    id: 3,
    text: "It was a pleasure working with Sazeduzzaman. His ability to transform design concepts into fully functional web pages is impressive.",
    authorImage: "assets/img/testimonials/nahid.jpg",
    authorName: "Nahidul Islam",
    authorDesignation: "Graphic Designer",
    authorCompany: "NGen IT LTD",
    authorCompanyUrl: "http://ngenitltd.com/",
  },
  {
    id: 4,
    text: "Sazeduzzaman is an outstanding frontend developer with a deep understanding of modern web technologies. His work was delivered on time, and he exceeded our expectations.",
    authorImage: "assets/img/testimonials/shahed.jpg",
    authorName: "Khandakar Shahed",
    authorDesignation: "Full Stack Developer (PHP, Laravel)",
    authorCompany: "NGen IT LTD",
    authorCompanyUrl: "http://ngenitltd.com/",
  },
];
const Testimonials = () => {
  return (
    <div className="tokyo_tm_testimonials w-full h-auto clear-both float-left py-[100px] px-0">
      <div className="container">
        <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
          <h3 className="text-[20px] font-bold">Testimonials</h3>
        </div>
        <div className="list w-full h-auto clear-both float-left overflow-hidden">
          <Swiper
            {...sliderProps.testimonial}
            className="m-0 list-none cursor-e-resize"
          >
            {testimonialData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="list_inner w-full h-auto clear-both float-left relative">
                  <div className="text w-full h-auto clear-both float-left border-solid border-[#E5EDF4] border-2 p-[40px] mb-[30px] relative">
                    <p>{item.text}</p>
                  </div>
                  <div className="details w-full h-auto clear-both float-left flex items-center pl-[20px]">
                    <div className="image relative w-[60px] h-[60px]">
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full"
                        data-img-url={item.authorImage}
                        style={{ backgroundImage: `url(${item.authorImage})` }}
                      />
                    </div>
                    <div className="info pl-[20px]">
                      <h3 className="text-[16px] mb-[2px] font-semibold">
                        {item.authorName}
                      </h3>
                      <span className="text-[14px]">
                        {item.authorDesignation}
                      </span>{" "}
                      <br />
                      <span className="text-[14px]">{item.authorCompany}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
