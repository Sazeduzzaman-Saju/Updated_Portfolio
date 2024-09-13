// AboutUsForm.js
import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const SkillsForm = () => {
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
      const response = await fetch("http://localhost:5000/skills", {
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
        <h2 className="pb-[20px]">Add Skills & Languages</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="tokyo_tm_short_info w-full h-auto clear-both float-left flex border-solid border-[#DFDFDF] border-b pb-[30px] mb-[40px]">
            <div className="left w-full pr-[20px]">
              <div>
                <label htmlFor="skillName">Skill Name:</label>
                <input
                  className="w-full mb-[20px]"
                  id="skillName"
                  type="text"
                  {...register("skillName", { required: "Skill Name is required" })}
                />
                {errors.skillName && (
                  <p className="text-red-500">{errors.skillName.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="skillValue">Skill Value (%):</label>
                <input
                  className="w-full mb-[20px]"
                  id="skillValue"
                  type="number"
                  {...register("skillValue", { required: "Skill Value is required", min: 0, max: 100 })}
                />
                {errors.skillValue && (
                  <p className="text-red-500">{errors.skillValue.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="languageName">Language Name:</label>
                <input
                  className="w-full mb-[20px]"
                  id="languageName"
                  type="text"
                  {...register("languageName", { required: "Language Name is required" })}
                />
                {errors.languageName && (
                  <p className="text-red-500">{errors.languageName.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="languageValue">Language Value (%):</label>
                <input
                  className="w-full mb-[20px]"
                  id="languageValue"
                  type="number"
                  {...register("languageValue", { required: "Language Value is required", min: 0, max: 100 })}
                />
                {errors.languageValue && (
                  <p className="text-red-500">{errors.languageValue.message}</p>
                )}
              </div>
            </div>
          </div>

          <div className="tokyo_tm_button" data-position="left">
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Save Skills & Languages"}
            </button>
          </div>
        </form>

        {/* Display the toaster */}
        <Toaster />
      </div>
    </Fragment>
  );
};

export default SkillsForm;
