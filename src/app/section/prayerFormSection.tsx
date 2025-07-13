"use client";
import React, { useState } from "react"; // Added React import
import SimpleButton from "../components/button";
import CustomInput from "../components/input"; // Import the CustomInput component
import { METHODS } from "http";
import { TryCatch } from "@/util/TryCatch";
// Renamed function to follow React component naming conventions
interface Prayerformprop {
  for_prayer: boolean;
}
function PrayerForm(for_prayer: Prayerformprop) {
  // ? route of api http://127.0.0.1:8000/pr/postPrayer
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [request, setRequest] = useState("");
  const [message, setMessage] = useState("");
  interface PrayerRequest {
    name: string;
    email: string;
  }
  // Added type annotation for the event object
  const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages on new submission attempt
    const response = await TryCatch(
      fetch("api/prayer-request/", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          for_prayer: for_prayer,
          message: request,
        }),
      })
    );
    if (response.Data) {
      setMessage("Your prayer request has been submitted successfully."); // Set success message

      setName("");
      setEmail("");
      setRequest("");
    } else {
      setMessage(
        "We Experience techinal diffcult try again later God bless you"
      );
    }
    // Clear form fields on successful submission
  };

  // Added JSX return statement for the form component
  return (
    <div className="max-w-md mx-auto  my-20 p-8 bg-background-200 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold text-center text-accent-500 mb-8">
        {for_prayer ? "Prayer request" : "Concact form"}
      </h2>
      <form onSubmit={handleSumbit} className="space-y-6">
        <div>
          <label
            htmlFor="prayer-name"
            className="block text-sm font-medium text-accent-500 mb-1"
          >
            Name:
          </label>
          <CustomInput
            name="prayer-name" // Use name prop for CustomInput
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            // Removed required as it's not a prop of CustomInput, handle validation in form logic if needed
            // Use CustomInput's default className or pass a new one if needed
            // className="w-full px-4 py-2 border border-accent-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="prayer-email"
            className="block text-sm font-medium text-accent-500 mb-1"
          >
            Email:
          </label>
          <CustomInput
            name="prayer-email" // Use name prop for CustomInput
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // Removed required
            // className="w-full px-4 py-2 border border-accent-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="prayer-request"
            className="block text-sm font-medium text-accent-500 mb-1"
          >
            Request:
          </label>
          <textarea
            id="prayer-request"
            placeholder="Your Prayer Request"
            value={request}
            onChange={(e) => setRequest(e.target.value)}
            required // Keep required for textarea if needed
            rows={5}
            // Consider creating a CustomTextarea or styling this consistently
            className="bg-[#222630] px-4 py-3 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040] sm:text-sm" // Apply similar styling as CustomInput
          />
        </div>
        <SimpleButton inform="Request for Prayer" />
        <div></div>
      </form>
      {/* Display success or error messages */}
      {message && (
        <p
          className={`mt-4 text-center text-sm ${
            message.includes("successfully")
              ? "text-green-800 font-bold text-md"
              : "text-red-600 font-bold text-md"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}

// Added default export for the component
export default PrayerForm;
