import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const EdicatonExperience = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Handle form submission
  const onSubmit = async (data) => {
    setIsLoading(true);
    setIsError(null);
    setIsSuccess(false);

    try {
      const response = await fetch("http://localhost:5000/educations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setIsSuccess(true);
      reset(); // Reset the form after successful submission
      toast.success("Data submitted successfully!");
    } catch (error) {
      setIsError(error.message);
      toast.error(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Fragment>
      <div className="about-form">
        <h2 className="pb-[20px]">Add Education & Experience</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="tokyo_tm_short_info w-full h-auto clear-both flex">
            <div className="left w-full pr-[20px]">
              <div className="w-full">
                <label htmlFor="title">Study Organization Name:</label>
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

              {/* Add education section */}
              <div>
                <label htmlFor="study_title">Study Title:</label>
                <input
                  className="w-full mb-[20px]"
                  id="study_title"
                  type="text"
                  {...register("study_title", { required: "Study title is required" })}
                />
                {errors.study_title && (
                  <p className="text-red-500">{errors.study_title.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="education_start">Education Start Year:</label>
                <input
                  className="w-full mb-[20px]"
                  id="education_start"
                  type="number"
                  {...register("education_start", { required: "Start year is required" })}
                />
                {errors.education_start && (
                  <p className="text-red-500">{errors.education_start.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="education_end">Education End Year:</label>
                <input
                  className="w-full mb-[20px]"
                  id="education_end"
                  type="number"
                  {...register("education_end")}
                />
              </div>
            </div>

            {/* Right column */}
            <div className="right w-full pl-[20px]">
              <div className="w-full">
                <label htmlFor="title">Experience Organization Name:</label>
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

              {/* Add education section */}
              <div>
                <label htmlFor="experience_title">Experience Title:</label>
                <input
                  className="w-full mb-[20px]"
                  id="experience_title"
                  type="text"
                  {...register("experience_title", { required: "experience title is required" })}
                />
                {errors.study_title && (
                  <p className="text-red-500">{errors.study_title.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="education_start">Experience Start Year:</label>
                <input
                  className="w-full mb-[20px]"
                  id="education_start"
                  type="number"
                  {...register("education_start", { required: "Start year is required" })}
                />
                {errors.education_start && (
                  <p className="text-red-500">{errors.education_start.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="education_end">Experience End Year:</label>
                <input
                  className="w-full mb-[20px]"
                  id="education_end"
                  type="number"
                  {...register("education_end")}
                />
              </div>
            </div>
          </div>

          <div className="tokyo_tm_button" data-position="left">
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>

        {/* Display the toaster */}
        <Toaster />
      </div>
    </Fragment>
  );
};

export default EdicatonExperience;
