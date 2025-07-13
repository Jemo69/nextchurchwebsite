"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import AdminSidebar from "../../components/AdminSidebar";
import CustomInput from "../../components/input";
import Textarea from "../../components/textarea";
import SimpleButton from "../../components/button";
import { LogoutButton } from "../dashboard/LogoutButton";

interface BlogPost {
  slug: string;
  title: string;
  content: string;
  Status: "DRAFT" | "PUBLISHED";
  createdAt: string;
}

export default function BlogManagementPage() {
  const queryClient = useQueryClient();
  const [isEditing, setIsEditing] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    slug: "",
    title: "",
    content: "",
    Status: "DRAFT" as "DRAFT" | "PUBLISHED",
  });

  // Fetch all posts
  const {
    data: posts = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blog", "all"],
    queryFn: async (): Promise<BlogPost[]> => {
      const response = await fetch("/api/blog");
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      return response.json();
    },
  });

  // Create/Update post mutation
  const createUpdateMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const method = isEditing ? "PUT" : "POST";
      const response = await fetch("/api/blog", {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to save post");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog"] });
      setFormData({ slug: "", title: "", content: "", Status: "DRAFT" });
      setIsEditing(false);
      setEditingPost(null);
    },
  });

  // Delete post mutation
  const deleteMutation = useMutation({
    mutationFn: async (slug: string) => {
      const response = await fetch("/api/blog", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ slug }),
      });
      if (!response.ok) {
        throw new Error("Failed to delete post");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blog"] });
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    createUpdateMutation.mutate(formData);
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      slug: post.slug,
      title: post.title,
      content: post.content,
      Status: post.Status,
    });
    setIsEditing(true);
  };

  const handleDelete = async (slug: string) => {
    if (confirm("Are you sure you want to delete this post?")) {
      deleteMutation.mutate(slug);
    }
  };

  return (
    <div className="flex h-screen bg-background-100">
      <AdminSidebar />
      <div className="flex-1 md:ml-72">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-text-100">
              Blog Management
            </h1>
            <LogoutButton />
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500 mb-4"></div>
              <p className="text-text-300">Loading posts...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              <p className="text-lg">Error loading posts: {error.message}</p>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <div className="bg-background-200 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-text-100 mb-4">
                {isEditing ? "Edit Post" : "Create New Post"}
              </h2>

              {/* Mutation Error */}
              {createUpdateMutation.error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  <p>Error: {createUpdateMutation.error.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <CustomInput
                  name="slug"
                  type="text"
                  placeholder="Post Slug (URL-friendly)"
                  value={formData.slug}
                  onChange={(e) =>
                    setFormData({ ...formData, slug: e.target.value })
                  }
                />

                <CustomInput
                  name="title"
                  type="text"
                  placeholder="Post Title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />

                <Textarea
                  id="content"
                  placeholder="Post Content"
                  message={formData.content}
                  onChange={(value) =>
                    setFormData({ ...formData, content: value })
                  }
                />

                <select
                  value={formData.Status}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      Status: e.target.value as "DRAFT" | "PUBLISHED",
                    })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg bg-background-100 text-text-900"
                >
                  <option value="DRAFT">Draft</option>
                  <option value="PUBLISHED">Published</option>
                </select>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={createUpdateMutation.isPending}
                    className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {createUpdateMutation.isPending
                      ? "Saving..."
                      : isEditing
                      ? "Update Post"
                      : "Create Post"}
                  </button>
                  {isEditing && (
                    <button
                      type="button"
                      onClick={() => {
                        setIsEditing(false);
                        setEditingPost(null);
                        setFormData({
                          slug: "",
                          title: "",
                          content: "",
                          Status: "DRAFT",
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
                All Posts
              </h2>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {posts.map((post) => (
                  <div
                    key={post.slug}
                    className="border border-gray-300 p-4 rounded-lg bg-background-100"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-text-700">
                        {post.title}
                      </h3>
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          post.Status === "PUBLISHED"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {post.Status}
                      </span>
                    </div>
                    <p className="text-text-300 text-sm mb-2">{post.slug}</p>
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
                        onClick={() => handleDelete(post.slug)}
                        disabled={deleteMutation.isPending}
                        className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 disabled:opacity-50"
                      >
                        {deleteMutation.isPending ? "Deleting..." : "Delete"}
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
