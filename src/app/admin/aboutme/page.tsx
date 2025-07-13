"use client";

import { useState, useEffect } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import CustomInput from "../../components/input";
import Textarea from "../../components/textarea";
import SimpleButton from "../../components/button";
import { LogoutButton } from "../dashboard/LogoutButton";

interface AboutMe {
  id: number;
  name: string;
  message: string;
}

export default function AboutMePage() {
  const [aboutMe, setAboutMe] = useState<AboutMe[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingAboutMe, setEditingAboutMe] = useState<AboutMe | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  useEffect(() => {
    fetchAboutMe();
  }, []);

  const fetchAboutMe = async () => {
    try {
      const response = await fetch("/api/aboutme");
      const data = await response.json();
      setAboutMe(data);
    } catch (error) {
      console.error("Error fetching about me:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = isEditing ? `/api/aboutme` : `/api/aboutme`;
      const method = isEditing ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", message: "" });
        setIsEditing(false);
        setEditingAboutMe(null);
        fetchAboutMe();
      }
    } catch (error) {
      console.error("Error saving about me:", error);
    }
  };

  const handleEdit = (aboutMeItem: AboutMe) => {
    setEditingAboutMe(aboutMeItem);
    setFormData({
      name: aboutMeItem.name,
      message: aboutMeItem.message,
    });
    setIsEditing(true);
  };

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this about me entry?")) {
      try {
        const response = await fetch(`/api/aboutme`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        });

        if (response.ok) {
          fetchAboutMe();
        }
      } catch (error) {
        console.error("Error deleting about me:", error);
      }
    }
  };

  return (
    <div className="flex h-screen bg-background-100">
      <AdminSidebar />
      <div className="flex-1 md:ml-72">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-text-100">
              About Me Management
            </h1>
            <LogoutButton />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <div className="bg-background-200 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-text-100 mb-4">
                {isEditing ? "Edit About Me" : "Add New About Me"}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <CustomInput
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />

                <Textarea
                  id="message"
                  placeholder="Message"
                  message={formData.message}
                  onChange={(value) =>
                    setFormData({ ...formData, message: value })
                  }
                />

                <div className="flex gap-4">
                  <SimpleButton
                    inform={isEditing ? "Update About Me" : "Add About Me"}
                  />
                  {isEditing && (
                    <button
                      type="button"
                      onClick={() => {
                        setIsEditing(false);
                        setEditingAboutMe(null);
                        setFormData({ name: "", message: "" });
                      }}
                      className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* About Me List */}
            <div className="bg-background-200 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-text-100 mb-4">
                All About Me Entries
              </h2>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {aboutMe.length === 0 ? (
                  <p className="text-text-300 text-center py-8">
                    No about me entries found.
                  </p>
                ) : (
                  aboutMe.map((item) => (
                    <div
                      key={item.id}
                      className="border border-gray-300 p-4 rounded-lg bg-background-100"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-text-100">
                            {item.name}
                          </h3>
                          <p className="text-text-200 text-sm leading-relaxed mt-2">
                            {item.message}
                          </p>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <button
                            onClick={() => handleEdit(item)}
                            className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
