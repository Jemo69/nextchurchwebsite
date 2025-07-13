"use client";
import React from "react";
import { usePublishedPosts } from "@/hooks/useBlog";
import SpecialButton from "../components/specialButton";
import BlogInfoCard from "../components/blogInfoCard";

// Define the structure expected by the BlogInfoCard component
interface BlogPost {
  slug: string;
  title: string;
  videoOfSermon?: string;
  imageForSermon?: string;
  creation_date: string;
  details: string; // BlogInfoCard expects 'details'
  status: string;
  author: string;
}

// API response structure
interface ApiBlogPost {
  slug: string;
  title: string;
  content: string;
  Status: "DRAFT" | "PUBLISHED";
  createdAt: string;
}

/**
 * BlogSection Component
 *
 * Displays a list of the latest 4 blog posts fetched using React Query.
 */
const BlogSection: React.FC = () => {
  const { data: posts = [], isLoading, error } = usePublishedPosts();

  // Transform the API data to match BlogInfoCard expectations
  const transformedPosts: BlogPost[] = posts.slice(0, 7).map((post) => ({
    slug: post.slug,
    title: post.title,
    videoOfSermon: undefined,
    imageForSermon: undefined,
    creation_date: post.createdAt,
    details: post.content || "<p>Content not available.</p>",
    status: post.Status,
    author: "Admin", // Default author since it's not in the schema
  }));

  // Display loading state
  if (isLoading) {
    return (
      <section className="flex min-h-[300px] items-center justify-center bg-background-50 py-12">
        <div className="text-center text-xl text-text-100">
          Loading latest posts...
        </div>
      </section>
    );
  }

  // Display error state
  if (error) {
    return (
      <section className="flex min-h-[300px] items-center justify-center bg-background-50 py-12">
        <div className="mx-auto max-w-md rounded-lg border border-red-300 bg-red-100 p-6 text-center text-lg text-red-700 shadow-md">
          <p className="mb-2 font-semibold">Oops! Could not load posts.</p>
          <p>{error.message}</p>
        </div>
      </section>
    );
  }

  // Display the list of blog posts (max 4)
  return (
    <section className="bg-background-50 mx-auto py-16 md:py-20">
      {" "}
      {/* Increased padding for better spacing */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Standard container padding */}
        <h2 className="mb-12 text-center text-3xl font-bold text-primary-500 md:mb-16 md:text-4xl">
          {" "}
          {/* Adjusted heading size and margin */}
          Our Latest Blog Posts
        </h2>
        {transformedPosts.length > 0 ? (
          <div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:portrait:grid-cols-2">
              {transformedPosts.map((post) => (
                <BlogInfoCard key={post.slug} post={post} />
              ))}
            </div>
            <div className="flex justify-center">
              <a
                href="/blog"
                className="mt-12 inline-flex flex-col items-center gap-3 text-center transition-all hover:transform hover:scale-105"
              >
                <p className="text-lg font-medium text-text-500">
                  Explore All Our Blog Posts
                </p>
                <SpecialButton inform="View More" />
              </a>
            </div>
          </div>
        ) : (
          // Message displayed when no posts are available
          <p className="mt-10 text-center text-lg text-text-500">
            No blog posts found. Check back later!
          </p>
        )}
      </div>
    </section>
  );
};

export default BlogSection; // Renamed export to match component name
