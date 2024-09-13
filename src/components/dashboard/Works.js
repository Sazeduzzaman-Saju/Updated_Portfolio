import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const Works = () => {
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
      const response = await fetch("http://localhost:5000/works", {
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
      toast.success("Work data submitted successfully!");
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
        <h2 className="pb-[20px]">Add Service & Works</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-section w-full h-auto clear-both flex">
            <div className="left w-full pr-[20px]">
              <div className="mb-[20px]">
                <label htmlFor="work_name">Work Name:</label>
                <input
                  className="w-full"
                  id="work_name"
                  type="text"
                  {...register("work_name", {
                    required: "Work name is required",
                  })}
                />
                {errors.work_name && (
                  <p className="text-red-500">{errors.work_name.message}</p>
                )}
              </div>

              <div className="mb-[20px]">
                <label htmlFor="work_image">Work Image URL:</label>
                <input
                  className="w-full"
                  id="work_image"
                  type="text"
                  {...register("work_image")}
                />
              </div>

              <div className="mb-[20px]">
                <label htmlFor="work_banner">Work Banner URL:</label>
                <input
                  className="w-full"
                  id="work_banner"
                  type="text"
                  {...register("work_banner")}
                />
              </div>

              <div className="mb-[20px]">
                <label htmlFor="work_title">Work Title:</label>
                <input
                  className="w-full"
                  id="work_title"
                  type="text"
                  {...register("work_title")}
                />
              </div>

              <div className="mb-[20px]">
                <label htmlFor="work_link_live">Live Link:</label>
                <input
                  className="w-full"
                  id="work_link_live"
                  type="text"
                  {...register("work_link_live")}
                />
              </div>
              <div className="mb-[20px]">
                <label htmlFor="start">Start Date:</label>
                <input
                  className="w-full"
                  id="start"
                  type="date"
                  {...register("start")}
                />
              </div>
            </div>

            <div className="right w-full pl-[20px]">
              <div className="mb-[20px]">
                <label htmlFor="technology">Technology Used:</label>
                <input
                  className="w-full"
                  id="technology"
                  type="text"
                  {...register("technology", {
                    required: "Technology is required",
                  })}
                />
                {errors.technology && (
                  <p className="text-red-500">{errors.technology.message}</p>
                )}
              </div>

              <div className="w-full">
                <label htmlFor="description">Description:</label>
                <textarea
                  className="w-full mb-[10px]"
                  id="description"
                  rows={4}
                  {...register("description")}
                />
              </div>
              <div className="mb-[20px]">
                <label htmlFor="work_git_link">GitHub Link:</label>
                <input
                  className="w-full"
                  id="work_git_link"
                  type="text"
                  {...register("work_git_link")}
                />
              </div>

              <div className="mb-[20px]">
                <label htmlFor="behance_link">Behance Link:</label>
                <input
                  className="w-full"
                  id="behance_link"
                  type="text"
                  {...register("behance_link")}
                />
              </div>

              <div className="mb-[20px]">
                <label htmlFor="end">End Date:</label>
                <input
                  className="w-full"
                  id="end"
                  type="date"
                  {...register("end")}
                />
              </div>
            </div>
          </div>

          <div className="tokyo_tm_button" data-position="left">
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit Work"}
            </button>
          </div>
        </form>

        {/* Display the toaster */}
        <Toaster />
      </div>
    </Fragment>
  );
};

export default Works;
