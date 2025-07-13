"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

interface BlogPost {
  slug: string;
  title: string;
  content: string;
  Status: "DRAFT" | "PUBLISHED";
  createdAt: string;
}

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (params.slug) {
      fetchPost();
    }
  }, [params.slug]);

  const fetchPost = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`/api/blog?slug=${params.slug}`);
      if (!response.ok) {
        throw new Error("Post not found");
      }
      const data = await response.json();
      if (data.Status !== "PUBLISHED") {
        throw new Error("Post not available");
      }
      setPost(data);
    } catch (error) {
      console.error("Error fetching post:", error);
      setError("Post not found or not available.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-background-50 min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center py-16">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mb-4"></div>
            <p className="text-text-300 text-lg">Loading post...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="bg-background-50 min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center py-16">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              <h2 className="text-xl font-semibold mb-2">Post Not Found</h2>
              <p className="mb-4">
                {error || "The requested blog post could not be found."}
              </p>
              <button
                onClick={() => router.push("/blog")}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
              >
                Back to Blog
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-background-50 min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-text-400">
              <li>
                <button
                  onClick={() => router.push("/blog")}
                  className="hover:text-text-200 transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </li>
              <li className="text-text-300">{post.title}</li>
            </ol>
          </nav>

          {/* Article */}
          <article className="bg-background-200 p-8 rounded-xl shadow-lg">
            {/* Header */}
            <header className="mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Blog Post
                </div>
                <span className="text-text-400 text-sm ml-4">
                  {new Date(post.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>

              <h1 className="text-4xl font-bold text-text-100 mb-4 leading-tight">
                {post.title}
              </h1>

              <div className="flex items-center space-x-4 text-text-400 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
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
                  <span>RCCG The Praise House</span>
                </div>
                <span>•</span>
                <span>
                  {new Date(post.createdAt).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </header>

            {/* Content */}
            <div className="prose prose-invert max-w-none">
              <div
                className="text-text-600 leading-relaxed text-lg"
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .replace(/\n/g, "<br>")
                    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                    .replace(/\*(.*?)\*/g, "<em>$1</em>"),
                }}
              />
            </div>

            {/* Footer */}
            <footer className="mt-12 pt-8 border-t border-background-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => router.push("/blog")}
                    className="flex items-center space-x-2 text-primary-500 hover:text-primary-400 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    <span>Back to Blog</span>
                  </button>
                </div>
              </div>
            </footer>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
