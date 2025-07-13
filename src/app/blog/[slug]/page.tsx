"use client";
import { useParams, useRouter } from "next/navigation";
import { useBlogPost } from "@/hooks/useBlog";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Link from "next/link";
import TitleGetter from "./titlegetter";

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const { data: post, isLoading, error } = useBlogPost(slug);

  if (isLoading) {
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
              <p className="text-lg">Post not found or not available.</p>
            </div>
            <Link
              href="/blog"
              className="text-primary-500 hover:text-primary-400 underline"
            >
              ← Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (post.Status !== "PUBLISHED") {
    return (
      <div className="bg-background-50 min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center py-16">
            <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-4">
              <p className="text-lg">This post is not yet published.</p>
            </div>
            <Link
              href="/blog"
              className="text-primary-500 hover:text-primary-400 underline"
            >
              ← Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-background-50 min-h-screen">
      <TitleGetter />
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link
              href="/blog"
              className="text-primary-500 hover:text-primary-400 underline"
            >
              ← Back to Blog
            </Link>
          </nav>

          {/* Article Header */}
          <article className="bg-background-200 p-8 rounded-xl shadow-lg">
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
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>

              <h1 className="text-4xl font-bold text-text-100 mb-4 leading-tight">
                {post.title}
              </h1>

              <div className="flex items-center space-x-4 text-text-300">
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
                  <span className="text-sm">RCCG The Praise House</span>
                </div>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-invert max-w-none">
              <div
                className="text-text-900 leading-relaxed text-lg"
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .replace(/\n/g, "<br>")
                    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                    .replace(/\*(.*?)\*/g, "<em>$1</em>"),
                }}
              />
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-background-300">
              <h3 className="text-lg font-semibold text-text-100 mb-4">
                Share this post
              </h3>
              <div className="flex space-x-4">
                <button
                  onClick={() => {
                    navigator.share?.({
                      title: post.title,
                      url: window.location.href,
                    });
                  }}
                  className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                >
                  Share
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                  }}
                  className="px-4 py-2 bg-background-300 text-text-100 rounded-lg hover:bg-background-400 transition-colors"
                >
                  Copy Link
                </button>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
