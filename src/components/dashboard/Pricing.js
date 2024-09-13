import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const Pricing = () => {
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
      const response = await fetch("http://localhost:5000/pricing", {
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
      toast.success("Data submitted successfully!");
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
        <h2 className="pb-[20px]">Add Pricing</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="tokyo_tm_short_info w-full h-auto clear-both  flex">
            <div className="left w-full pr-[20px]">
              {/* Existing fields */}
              {/* Add the new fields here */}
              <div>
                <label htmlFor="price_badge">Price Badge:</label>
                <input
                  className="w-full mb-[20px]"
                  id="price_badge"
                  type="text"
                  {...register("price_badge")}
                />
              </div>
              <div>
                <label htmlFor="price">Price:</label>
                <input
                  className="w-full mb-[20px]"
                  id="price"
                  type="number"
                  {...register("price", { required: "Price is required" })}
                />
                {errors.price && (
                  <p className="text-red-500">{errors.price.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="pricing_plan_name">Pricing Plan Name:</label>
                <input
                  className="w-full mb-[20px]"
                  id="pricing_plan_name"
                  type="text"
                  {...register("pricing_plan_name", {
                    required: "Pricing Plan Name is required",
                  })}
                />
                {errors.pricing_plan_name && (
                  <p className="text-red-500">
                    {errors.pricing_plan_name.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="feature">Features:</label>
                <textarea
                  className="w-full mb-[20px]"
                  id="feature"
                  rows={4}
                  {...register("feature", {
                    required: "Features are required",
                  })}
                />
                {errors.feature && (
                  <p className="text-red-500">{errors.feature.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="link">Link:</label>
                <input
                  className="w-full mb-[20px]"
                  id="link"
                  type="text"
                  {...register("link", { required: "Link is required" })}
                />
                {errors.link && (
                  <p className="text-red-500">{errors.link.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="tokyo_tm_button" data-position="left">
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Add Pricing"}
            </button>
          </div>
        </form>

        {/* Display the toaster */}
        <Toaster />
      </div>
    </Fragment>
  );
};

export default Pricing;
