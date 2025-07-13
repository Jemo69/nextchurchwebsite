"use client";

import { useState, useEffect } from "react";

interface AboutMe {
  id: number;
  name: string;
  message: string;
}

export default function AboutMeSection() {
  const [aboutMe, setAboutMe] = useState<AboutMe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAboutMe();
  }, []);

  const fetchAboutMe = async () => {
    try {
      const response = await fetch("/api/aboutme");
      if (response.ok) {
        const data = await response.json();
        setAboutMe(data);
      }
    } catch (error) {
      console.error("Error fetching about me:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-16 bg-background-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
          </div>
        </div>
      </section>
    );
  }

  if (aboutMe.length === 0) {
    return null; // Don't show section if no content
  }

  return (
    <section id="about" className="py-16 bg-background-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-text-100 mb-4">About Us</h2>
            <p className="text-xl text-text-300">
              Get to know our church and mission
            </p>
          </div>

          <div className="grid gap-8">
            {aboutMe.map((item) => (
              <div
                key={item.id}
                className="bg-background-200 p-8 rounded-xl shadow-lg"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-text-100 mb-2">
                    {item.name}
                  </h3>
                </div>
                <div className="text-center">
                  <p className="text-text-200 leading-relaxed text-lg">
                    {item.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
