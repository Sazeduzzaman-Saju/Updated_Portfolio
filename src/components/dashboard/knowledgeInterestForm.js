import React, { Fragment, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const KnowledgeInterests = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset, // Import the reset method
  } = useForm();

  // UseFieldArray for dynamic input fields
  const { fields: knowledgeFields, append: addKnowledge } = useFieldArray({
    control,
    name: "knowledge",
  });

  const { fields: interestFields, append: addInterest } = useFieldArray({
    control,
    name: "interests",
  });

  // Handle form submission
  const onSubmit = async (data) => {
    setIsLoading(true);
    setIsError(null);
    setIsSuccess(false);

    try {
      const response = await fetch("http://localhost:5000/knowledges", {
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
        <h2 className="pb-[20px]">Add Knowledge & Interests</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="tokyo_tm_short_info w-full h-auto clear-both flex">
            {/* Knowledge Fields */}
            <div className="left w-full pr-[20px]">
              <h3>Knowledge</h3>
              {knowledgeFields.map((field, index) => (
                <div key={field.id} className="mb-[20px]">
                  <label htmlFor={`knowledge_${index}`}>Knowledge Name:</label>
                  <input
                    className="w-full"
                    id={`knowledge_${index}`}
                    type="text"
                    {...register(`knowledge.${index}.name`, {
                      required: "Knowledge name is required",
                    })}
                  />
                  {errors.knowledge?.[index]?.name && (
                    <p className="text-red-500">
                      {errors.knowledge[index].name.message}
                    </p>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => addKnowledge({ name: "" })}
                className="mb-[20px] bg-blue-500 text-black px-4 py-2 rounded"
              >
                Add Knowledge
              </button>
            </div>

            {/* Interest Fields */}
            <div className="right w-full pl-[20px]">
              <h3>Interests</h3>
              {interestFields.map((field, index) => (
                <div key={field.id} className="mb-[20px]">
                  <label htmlFor={`interest_${index}`}>Interest Name:</label>
                  <input
                    className="w-full"
                    id={`interest_${index}`}
                    type="text"
                    {...register(`interests.${index}.name`, {
                      required: "Interest name is required",
                    })}
                  />
                  {errors.interests?.[index]?.name && (
                    <p className="text-red-500">
                      {errors.interests[index].name.message}
                    </p>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => addInterest({ name: "" })}
                className="mb-[20px] bg-green-500 text-black px-4 py-2 rounded"
              >
                Add Interest
              </button>
            </div>
          </div>

          <div className="tokyo_tm_button" data-position="left">
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit Knowledge & Interests"}
            </button>
          </div>
        </form>

        {/* Display the toaster */}
        <Toaster />
      </div>
    </Fragment>
  );
};

export default KnowledgeInterests;
