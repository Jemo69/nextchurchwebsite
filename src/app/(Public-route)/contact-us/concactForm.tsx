"use client"
import CustomInput from "@/app/components/input";
import SimpleButton from "@/app/components/button";
import React, { useState } from "react";

export default function ConcactForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [notifcation, setNotifcation] = useState<string>("");

  const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setNotifcation("it successful");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error: any) {
      setNotifcation("something is wrong");
      if (error.response) {
        console.error("Error response:", error.response.data);
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  return (
    <div className="bg-background-300 p-10 rounded-2xl max-w-md">
      <h2 className="text-secondary-500 text-2xl font-black">Drop Us a Line</h2>
      <form
        onSubmit={handleSumbit}
        className="flex rounded-2xl space-y-6 flex-col"
      >
        <CustomInput
          name="name"
          placeholder="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <CustomInput
          name="email"
          placeholder="email"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          id="message-request"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="bg-[#222630] px-4 py-3 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040] sm:text-sm"
        />
        <SimpleButton inform="Send Message" />
        <div>
          {notifcation && (
            <p
              className={`mt-4 text-center text-sm ${
                notifcation.includes("successful")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {notifcation}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
