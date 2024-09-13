import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const Technologies = () => {
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
      const response = await fetch("http://localhost:5000/technology", {
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
      toast.success("Technology added successfully!");
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
        <h2 className="pb-5">Add Technology</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="technology_name">Technology Name:</label>
            <input
              className="w-full mb-5"
              id="technology_name"
              type="text"
              {...register("technology_name", {
                required: "Technology Name is required",
              })}
            />
            {errors.technology_name && (
              <p className="text-red-500">{errors.technology_name.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="technology_image">Technology Image URL:</label>
            <input
              className="w-full mb-5"
              id="technology_image"
              type="text"
              {...register("technology_image", {
                required: "Technology Image is required",
              })}
            />
            {errors.technology_image && (
              <p className="text-red-500">{errors.technology_image.message}</p>
            )}
          </div>

          <div className="tokyo_tm_button" data-position="left">
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Add Technology"}
            </button>
          </div>
        </form>

        {/* Display the toaster */}
        <Toaster />
      </div>
    </Fragment>
  );
};

export default Technologies;
