"use client";

import Navbar from "../components/navbar";
import Link from "next/link";
import Footer from "../components/footer";
import { usePublishedPosts } from "@/hooks/useBlog";

interface BlogPost {
  slug: string;
  title: string;
  content: string;
  Status: "DRAFT" | "PUBLISHED";
  createdAt: string;
}

export default function BlogPage() {
  const { data: posts = [], isLoading, error, refetch } = usePublishedPosts();

  return (
    <div className="bg-background-50 min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-text-500 mb-4">Our Blog</h1>
            <p className="text-xl text-text-400 max-w-2xl mx-auto">
              Stay connected with our latest news, updates, and spiritual
              insights from RCCG The Praise House.
            </p>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="text-center py-16">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mb-4"></div>
              <p className="text-text-300 text-lg">Loading posts...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-16">
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                <p className="text-lg">{error.message}</p>
                <button
                  onClick={() => refetch()}
                  className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}

          {/* Empty State */}
          {!isLoading && !error && posts.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-background-200 p-8 rounded-xl">
                <svg
                  className="w-16 h-16 text-text-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-.586-1.414l-3.5-3.5A2 2 0 0012.586 4H7a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-text-100 mb-2">
                  No Posts Yet
                </h3>
                <p className="text-text-300">
                  Check back soon for our latest blog posts and updates.
                </p>
              </div>
            </div>
          )}

          {/* Blog Posts */}
          {!isLoading && !error && posts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <article
                  key={post.slug}
                  className="bg-background-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
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

                  <Link href={`/blog/${post.slug}`} className="block">
                    <h2 className="text-2xl font-bold text-text-100 mb-4 leading-tight hover:text-primary-400 transition-colors">
                      {post.title}
                    </h2>
                  </Link>

                  <div className="prose prose-invert max-w-none">
                    <div
                      className="text-text-200 leading-relaxed text-base line-clamp-3"
                      dangerouslySetInnerHTML={{
                        __html:
                          post.content
                            .replace(/\n/g, "<br>")
                            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                            .replace(/\*(.*?)\*/g, "<em>$1</em>")
                            .substring(0, 200) +
                          (post.content.length > 200 ? "..." : ""),
                      }}
                    />
                  </div>

                  <div className="mt-6 pt-6 border-t border-background-300">
                    <div className="flex items-center justify-between">
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
                        <span className="text-text-300 text-sm">
                          RCCG The Praise House
                        </span>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-primary-500 hover:text-primary-400 text-sm font-medium transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
