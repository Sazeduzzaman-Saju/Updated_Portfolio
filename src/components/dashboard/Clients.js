import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const Clients = () => {
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
      const response = await fetch("http://localhost:5000/clients", {
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
      toast.success("Client submitted successfully!");
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
        <h2 className="pb-[20px]">Add Client</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="client_name">Company/Client Name:</label>
            <input
              className="w-full mb-[20px]"
              id="client_name"
              type="text"
              {...register("client_name", {
                required: "Client name is required",
              })}
            />
            {errors.client_name && (
              <p className="text-red-500">{errors.client_name.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="client_url">Company/Client URL:</label>
            <input
              className="w-full mb-[20px]"
              id="client_url"
              type="url"
              {...register("client_url", {
                required: "Client URL is required",
              })}
            />
            {errors.client_url && (
              <p className="text-red-500">{errors.client_url.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="client_logo">Company/Client Logo URL:</label>
            <input
              className="w-full mb-[20px]"
              id="client_logo"
              type="text"
              {...register("client_logo", {
                required: "Client logo is required",
              })}
            />
            {errors.client_logo && (
              <p className="text-red-500">{errors.client_logo.message}</p>
            )}
          </div>

          <div className="tokyo_tm_button" data-position="left">
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit Client"}
            </button>
          </div>
        </form>

        {/* Display the toaster */}
        <Toaster />
      </div>
    </Fragment>
  );
};

export default Clients;
