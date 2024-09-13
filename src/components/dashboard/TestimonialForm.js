import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const TestimonialForm = () => {
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
      const response = await fetch("http://localhost:5000/testimonials", {
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
        <h2 className="pb-[20px]">Add Testimonial</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap">

            <div className="w-full">
              <label htmlFor="author_name">Author Name:</label>
              <input
                className="w-full mb-[20px]"
                id="author_name"
                type="text"
                {...register("author_name", {
                  required: "Author name is required",
                })}
              />
              {errors.author_name && (
                <p className="text-red-500">{errors.author_name.message}</p>
              )}
            </div>

            <div className="w-full">
              <label htmlFor="author_company">
                Author Company/Designation:
              </label>
              <input
                className="w-full mb-[20px]"
                id="author_company"
                type="text"
                {...register("author_company")}
              />
            </div>

            <div className="w-full">
              <label htmlFor="image_url">Image URL:</label>
              <input
                className="w-full mb-[20px]"
                id="image_url"
                type="text"
                {...register("image_url")}
              />
            </div>
            
            <div className="w-full mb-[20px]">
              <label htmlFor="testimonial_details">Testimonial Details:</label>
              <textarea
                className="w-full mb-[20px]"
                id="testimonial_details"
                rows={4}
                {...register("testimonial_details", {
                  required: "Testimonial details are required",
                })}
              />
              {errors.testimonial_details && (
                <p className="text-red-500">
                  {errors.testimonial_details.message}
                </p>
              )}
            </div>
          </div>

          <div className="tokyo_tm_button" data-position="left">
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit Testimonial"}
            </button>
          </div>
        </form>

        {/* Display the toaster */}
        <Toaster />
      </div>
    </Fragment>
  );
};

export default TestimonialForm;
