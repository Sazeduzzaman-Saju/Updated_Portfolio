// AboutUsForm.js
import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const AboutUsForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Import the reset method
  } = useForm();

  // Handle form submission
  const onSubmit = async (data) => {
    setIsLoading(true);
    setIsError(null);
    setIsSuccess(false);

    try {
      const response = await fetch("http://localhost:5000/about", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Handle successful submission
      setIsSuccess(true);
      reset(); // Reset the form after successful submission
      toast.success("Data submitted success50y!");
    } catch (error) {
      // Handle errors
      setIsError(error.message);
      toast.error(`Error: ${error.message}`);
    } finally {
      // Stop loading state
      setIsLoading(false);
    }
  };

  return (
    <Fragment>
      <div className="about-form">
        <h2 className="pb-[20px]">Add About & Intro</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="tokyo_tm_short_info w-full h-auto clear-both  flex">
            <div className="left w-full pr-[20px]">
              <div className="w-1\/3">
                <label htmlFor="title">Title (about me):</label>
                <input
                  className="w-full mb-[20px]"
                  id="title"
                  type="text"
                  {...register("title", { required: "Title is required" })}
                />
                {errors.title && (
                  <p className="text-red-500">{errors.title.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="banner_image">Banner Image URL:</label>
                <input
                  className="w-full mb-[20px]"
                  id="banner_image"
                  type="text"
                  {...register("banner_image")}
                />
              </div>
              <div>
                <label htmlFor="first_name">First Name:</label>
                <input
                  className="w-full mb-[20px]"
                  id="first_name"
                  type="text"
                  {...register("first_name")}
                />
              </div>
              <div>
                <label htmlFor="last_name">Last Name:</label>
                <input
                  className="w-full mb-[20px]"
                  id="last_name"
                  type="text"
                  {...register("last_name")}
                />
              </div>
              <div>
                <label htmlFor="designation">Designation:</label>
                <input
                  className="w-full mb-[20px]"
                  id="designation"
                  type="text"
                  {...register("designation")}
                />
              </div>
              <div>
                <label htmlFor="interest">Interest:</label>
                <input
                  className="w-full mb-[20px]"
                  id="interest"
                  type="text"
                  {...register("interest")}
                />
              </div>
              <div>
                <label htmlFor="interest">Facebook Profile</label>
                <input
                  className="w-full mb-[20px]"
                  id="interest"
                  type="text"
                  {...register("fb-profile")}
                />
              </div>
            </div>
            <div className="right w-full pl-[20px]">
              <div>
                <label htmlFor="age">Age:</label>
                <input
                  className="w-full mb-[20px]"
                  id="age"
                  type="number"
                  {...register("age")}
                />
              </div>
              <div>
                <label htmlFor="address">Address:</label>
                <input
                  className="w-full mb-[20px]"
                  id="address"
                  type="text"
                  {...register("address")}
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  className="w-full mb-[20px]"
                  id="email"
                  type="email"
                  {...register("email")}
                />
              </div>
              <div>
                <label htmlFor="phone">Phone:</label>
                <input
                  className="w-full mb-[20px]"
                  id="phone"
                  type="tel"
                  {...register("phone")}
                />
              </div>
              <div>
                <label htmlFor="freelance">Freelance:</label>
                <input
                  className="w-full mb-[20px]"
                  id="freelance"
                  type="text"
                  {...register("freelance")}
                />
              </div>
              <div>
                <label htmlFor="degree">Degree:</label>
                <input
                  className="w-full mb-[20px]"
                  id="degree"
                  type="text"
                  {...register("degree")}
                />
              </div>
              <div>
                <label htmlFor="interest">Github Profile</label>
                <input
                  className="w-full mb-[20px]"
                  id="interest"
                  type="text"
                  {...register("git-profile")}
                />
              </div>
            </div>
            <div className="right w-full pl-[20px]">
              <div>
                <label htmlFor="birthday">Birthday:</label>
                <input
                  className="w-full mb-[20px]"
                  id="birthday"
                  type="date"
                  {...register("birthday")}
                />
              </div>
              <div>
                <label htmlFor="cv_download_link">CV Download Link:</label>
                <input
                  className="w-full mb-[20px]"
                  id="cv_download_link"
                  type="text"
                  {...register("cv_download_link")}
                />
              </div>
              <div>
                <label htmlFor="nationality">Nationality:</label>
                <input
                  className="w-full mb-[20px]"
                  id="nationality"
                  type="text"
                  {...register("nationality")}
                />
              </div>
              <div>
                <label htmlFor="study">Study:</label>
                <input
                  className="w-full mb-[20px]"
                  id="study"
                  type="text"
                  {...register("study")}
                />
              </div>
              <div className="w-full ">
                <div>
                  <label htmlFor="intro_description">Intro Description:</label>
                  <textarea
                    className="w-full mb-[10px]"
                    id="intro_description"
                    rows={4}
                    {...register("bio_description")}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="interest">Linkedin Profile</label>
                <input
                  className="w-full mb-[20px]"
                  id="interest"
                  type="text"
                  {...register("li-profile")}
                />
              </div>
            </div>
          </div>
          <div className="tokyo_tm_short_info w-full h-auto clear-both float-left flex border-solid border-[#DFDFDF] border-b pb-[30px] mb-[40px]">
            <div className="w-full">
              <div>
                <label htmlFor="bio_description">Intro Description:</label>
                <textarea
                  className="w-full mb-[10px]"
                  id="bio_description"
                  rows={4}
                  {...register("bio_description")}
                />
              </div>
            </div>
          </div>
          <div className="tokyo_tm_button" data-position="left">
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Submitting..." : "About & Intro"}
            </button>
          </div>
        </form>

        {/* Display the toaster */}
        <Toaster />
      </div>
    </Fragment>
  );
};

export default AboutUsForm;
