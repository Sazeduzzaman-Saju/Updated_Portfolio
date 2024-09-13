import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const Blogs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    setIsError(null);
    setIsSuccess(false);

    try {
      const response = await fetch("http://localhost:5000/blogs", {
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
      reset();
      toast.success("Blog post submitted successfully!");
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
        <h2 className="pb-[20px]">Add Blog Post</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
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

          <div className="form-group">
            <label htmlFor="banner_image">Banner Image URL:</label>
            <input
              className="w-full mb-[20px]"
              id="banner_image"
              type="text"
              {...register("banner_image")}
            />
          </div>

          <div className="form-group">
            <label htmlFor="post_image">Post Image:</label>
            <input
              className="w-full mb-[20px]"
              id="post_image"
              type="text"
              {...register("post_image")}
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select
              className="w-full mb-[20px]"
              id="category"
              {...register("category", { required: "Category is required" })}
            >
              <option value="">Select Category</option>
              <option value="Tech">Tech</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Business">Business</option>
            </select>
            {errors.category && (
              <p className="text-red-500">{errors.category.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="tags">Tags (comma-separated):</label>
            <input
              className="w-full mb-[20px]"
              id="tags"
              type="text"
              {...register("tags")}
            />
          </div>

          <div className="form-group">
            <label htmlFor="excerpt">Excerpt (short description):</label>
            <textarea
              className="w-full mb-[20px]"
              id="excerpt"
              rows={3}
              {...register("excerpt")}
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Content:</label>
            <textarea
              className="w-full mb-[20px]"
              id="content"
              rows={6}
              {...register("content", { required: "Content is required" })}
            />
            {errors.content && (
              <p className="text-red-500">{errors.content.message}</p>
            )}
          </div>

          <div className="tokyo_tm_button" data-position="left">
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit Blog Post"}
            </button>
          </div>
        </form>

        <Toaster />
      </div>
    </Fragment>
  );
};

export default Blogs;
