"use client";

import { useState } from "react";
import CustomInput from "../components/input";
import Textarea from "../components/textarea";
import SimpleButton from "../components/button";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/emailcontact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          is_subscriber: false,
        }),
      });

      if (response.ok) {
        setSubmitMessage(
          "Thank you for your message! We'll get back to you soon."
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitMessage(
          "There was an error sending your message. Please try again."
        );
      }
    } catch (error) {
      setSubmitMessage(
        "There was an error sending your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-background-200">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-text-500 mb-4">
              Contact Us
            </h2>
            <p className="text-xl text-text-400">
              Get in touch with us. We'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-text-500 mb-6">
                  Get In Touch
                </h3>
                <p className="text-secondary-900 text-lg mb-8">
                  Have questions about our services, events, or want to join our
                  community? We're here to help and would love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-text-500">
                      Address
                    </h4>
                    <p className="text-text-800">Baltimore, Maryland</p>
                  </div>
                </div>

                {/* <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  {/* <div>
                    <h4 className="text-lg font-semibold text-text-100">
                      Phone
                    </h4>
                    <p className="text-text-300">+1 (555) 123-4567</p>
                  </div> */}

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-text-600">
                      Email
                    </h4>
                    <p className="text-text-800">info@rccgthepraisehouse.org</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-text-700">
                      Service Times
                    </h4>
                    <p className="text-text-600">Sunday: 9:00 AM & 11:00 AM</p>
                    <p className="text-text-600">Wednesday: 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-background-100 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-text-100 mb-6">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <CustomInput
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />

                <CustomInput
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />

                <Textarea
                  id="message"
                  placeholder="Your Message"
                  message={formData.message}
                  onChange={(value) =>
                    setFormData({ ...formData, message: value })
                  }
                />

                <SimpleButton
                  inform={isSubmitting ? "Sending..." : "Send Message"}
                  disabled={isSubmitting}
                />

                {submitMessage && (
                  <div
                    className={`p-4 rounded-lg ${
                      submitMessage.includes("Thank you")
                        ? "bg-green-100 text-green-700 border border-green-400"
                        : "bg-red-100 text-red-700 border border-red-400"
                    }`}
                  >
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
