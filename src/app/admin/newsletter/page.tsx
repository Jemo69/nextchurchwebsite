"use client";

import { useState, useEffect } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import CustomInput from "../../components/input";
import Textarea from "../../components/textarea";
import SimpleButton from "../../components/button";
import { LogoutButton } from "../dashboard/LogoutButton";

interface NewsletterPost {
  id: number;
  title: string;
  content: string;
  status: "DRAFT" | "PUBLISHED";
  createdAt: string;
}

export default function NewsletterPage() {
  const [posts, setPosts] = useState<NewsletterPost[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingPost, setEditingPost] = useState<NewsletterPost | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    status: "DRAFT" as "DRAFT" | "PUBLISHED",
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/newsletter");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching newsletter posts:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = isEditing ? `/api/newsletter` : `/api/newsletter`;
      const method = isEditing ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ title: "", content: "", status: "DRAFT" });
        setIsEditing(false);
        setEditingPost(null);
        fetchPosts();
      }
    } catch (error) {
      console.error("Error saving newsletter post:", error);
    }
  };

  const handleEdit = (post: NewsletterPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      content: post.content,
      status: post.status,
    });
    setIsEditing(true);
  };

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this newsletter post?")) {
      try {
        const response = await fetch(`/api/newsletter`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        });

        if (response.ok) {
          fetchPosts();
        }
      } catch (error) {
        console.error("Error deleting newsletter post:", error);
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
              Newsletter Management
            </h1>
            <LogoutButton />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <div className="bg-background-200 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-text-100 mb-4">
                {isEditing
                  ? "Edit Newsletter Post"
                  : "Create New Newsletter Post"}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <CustomInput
                  name="title"
                  type="text"
                  placeholder="Newsletter Title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />

                <Textarea
                  id="content"
                  placeholder="Newsletter Content"
                  message={formData.content}
                  onChange={(value) =>
                    setFormData({ ...formData, content: value })
                  }
                />

                <select
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      status: e.target.value as "DRAFT" | "PUBLISHED",
                    })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg bg-background-100 text-text-100"
                >
                  <option value="DRAFT">Draft</option>
                  <option value="PUBLISHED">Published</option>
                </select>

                <div className="flex gap-4">
                  <SimpleButton
                    inform={isEditing ? "Update Post" : "Create Post"}
                  />
                  {isEditing && (
                    <button
                      type="button"
                      onClick={() => {
                        setIsEditing(false);
                        setEditingPost(null);
                        setFormData({
                          title: "",
                          content: "",
                          status: "DRAFT",
                        });
                      }}
                      className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Posts List */}
            <div className="bg-background-200 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-text-100 mb-4">
                All Newsletter Posts
              </h2>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="border border-gray-300 p-4 rounded-lg bg-background-100"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-text-100">
                        {post.title}
                      </h3>
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          post.status === "PUBLISHED"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {post.status}
                      </span>
                    </div>
                    <p className="text-text-400 text-xs mb-3">
                      Created: {new Date(post.createdAt).toLocaleDateString()}
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(post)}
                        className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
