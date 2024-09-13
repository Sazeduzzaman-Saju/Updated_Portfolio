import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const ServiceForm = () => {
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
      const response = await fetch("http://localhost:5000/services", {
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
      reset();
      toast.success("Service submitted successfully!");
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
        <h2 className="pb-4">Add Service</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="title">Service Title:</label>
            <input
              className="w-full mb-4"
              id="title"
              type="text"
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && (
              <p className="text-red-500">{errors.title.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="service_image">Service Image URL:</label>
            <input
              className="w-full mb-4"
              id="service_image"
              type="text"
              {...register("service_image", {
                required: "Image URL is required",
              })}
            />
            {errors.service_image && (
              <p className="text-red-500">{errors.service_image.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="service_description">Service Description:</label>
            <textarea
              className="w-full mb-4"
              id="service_description"
              rows={4}
              {...register("service_description", {
                required: "Service description is required",
              })}
            />
            {errors.service_description && (
              <p className="text-red-500">
                {errors.service_description.message}
              </p>
            )}
          </div>
          <div className="tokyo_tm_button" data-position="left">
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit Service"}
            </button>
          </div>
        </form>

        <Toaster />
      </div>
    </Fragment>
  );
};

export default ServiceForm;
