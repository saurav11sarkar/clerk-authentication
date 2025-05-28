"use client";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleOnSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-200 to-gray-300 p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-lg shadow-xl border border-gray-200">
        <div className="mb-6">
          <h1 className="text-3xl font-extrabold text-center text-gray-800">
            Create Account
          </h1>
          <p className="text-center text-gray-500 mt-2">
            Join us to get started!
          </p>
        </div>
        <form onSubmit={handleSubmit(handleOnSubmit)} className="space-y-5">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 ease-in-out placeholder-gray-400 text-gray-800"
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && (
              <p role="alert" className="text-red-600 text-sm mt-1">
                {errors.name.message as string}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 ease-in-out placeholder-gray-400 text-gray-800"
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p role="alert" className="text-red-600 text-sm mt-1">
                {errors.email.message as string}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 ease-in-out placeholder-gray-400 text-gray-800"
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password && (
              <p role="alert" className="text-red-600 text-sm mt-1">
                {errors.password.message as string}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;