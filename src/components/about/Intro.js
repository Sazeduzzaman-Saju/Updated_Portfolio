import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import AgeDisplay from "../AgeDisplay";

const Intro = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = "http://localhost:5000/about";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        if (Array.isArray(response.data) && response.data.length > 0) {
          setData(response.data[0]); // Assuming you want the first object in the array
        } else {
          console.error(
            "Unexpected data structure or empty array:",
            response.data
          );
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <Fragment>
      <div className="top_author_image w-full h-auto clear-both float-left relative mb-[35px]">
        <img
          className="min-w-full"
          src={data.banner_image} // Use fetched banner image
          alt="Banner"
        />
      </div>
      <div className="about_title w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[20px] mb-[30px]">
        <h3 className="text-[22px] font-bold">
          {data.first_name} {data.last_name}
        </h3>
        <span>{data.designation}</span>
      </div>
      <div className="about_text w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[31px] mb-[30px]">
        <p className="mb-[11px]">
          Hi, I'm{" "}
          <strong>
            {data.first_name} {data.last_name}
          </strong>
          , a passionate <strong>{data.designation}</strong> with a strong focus
          on creating visually stunning, highly responsive, and user-friendly
          web interfaces. With years of experience working with modern web
          technologies, I specialize in translating design concepts into
          interactive, functional websites that deliver exceptional user
          experiences.
        </p>

        <p className="mb-[11px]">
          Throughout my career, I've worked on a variety of projects, ranging
          from small business websites to complex web applications. My expertise
          lies in using the latest frontend frameworks and libraries, such as{" "}
          <strong>React</strong>, <strong>Next.js</strong>,{" "}
          <strong>JavaScript</strong>, <strong>HTML5</strong>, and{" "}
          <strong>CSS3</strong>, to build fast, efficient, and scalable
          solutions. I'm also proficient in using tools like{" "}
          <strong>Webpack</strong>, <strong>Babel</strong>, and{" "}
          <strong>Git</strong> to streamline development and ensure high code
          quality.
        </p>

        <p className="mb-[11px]">
          <strong>My Approach:</strong> I believe that great web development is
          about more than just code. It’s about understanding the user’s needs,
          creating a seamless user experience, and continuously learning to stay
          ahead of industry trends. I’m committed to writing clean, maintainable
          code and am always exploring new tools and techniques to improve my
          craft.
        </p>

        <p>
          Feel free to explore my work on my{" "}
          <a
            href="https://github.com/Sazeduzzaman-Saju"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            <strong>GitHub</strong>
          </a>{" "}
          page, where I regularly update my portfolio with new projects and
          contributions. If you have any questions or would like to collaborate,
          don’t hesitate to reach out!
        </p>
      </div>
      <div className="tokyo_tm_short_info w-full h-auto clear-both float-left flex border-solid border-[#DFDFDF] border-b pb-[30px] mb-[40px]">
        <div className="left w-1/2 pr-[50px]">
          <div className="tokyo_tm_info w-full h-auto clear-both float-left">
            <ul className="m-0 list-none">
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Birthday:
                </span>
                <span>{new Date(data.birthday).toLocaleDateString()}</span>
              </li>
              <AgeDisplay birthdate={data.birthday} />
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Address:
                </span>
                <span>{data.address}</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Email:
                </span>
                <span>
                  <a
                    className="text-[#767676] transition-all duration-300 hover:text-black"
                    href={`mailto:${data.email}`}
                  >
                    {data.email}
                  </a>
                </span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Phone:
                </span>
                <span>
                  <a
                    className="text-[#767676] transition-all duration-300 hover:text-black"
                    href={`tel:${data.phone}`}
                  >
                    {data.phone}
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right w-1/2 pl-[50px]">
          <div className="tokyo_tm_info">
            <ul className="m-0 list-none">
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Nationality:
                </span>
                <span>{data.nationality}</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Study:
                </span>
                <span>{data.study}</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Degree:
                </span>
                <span>{data.degree}</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Interest:
                </span>
                <span>{data.interest}</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Freelance:
                </span>
                <span>{data.freelance}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tokyo_tm_button" data-position="left">
        <a href={data.cv_download_link} download>
          <span>Download CV</span>
        </a>
      </div>
    </Fragment>
  );
};

export default Intro;
