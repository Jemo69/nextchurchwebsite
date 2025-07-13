"use client"
import React, { useState, useEffect } from "react";

import SpecialButton from "../components/specialButton";
import BlogInfoCard from "../components/blogInfoCard"; // Assuming component path
// import { getPublishedBlogPosts } from "../api/nonauthapi";
// Define the structure of the raw blog post data returned by the API
// Assuming API now returns 'details' consistent with blogPage.tsx
interface ApiBlogPost {
  slug: string;
  title: string;
  videoOfSermon?: string;
  imageForSermon?: string;
  creation_date: string;
  details: string; // Expecting 'details' from the API
  status: string;
  author: string;
  // Add any other fields returned by the API if necessary
}

// Define the structure expected by the BlogInfoCard component
// This already expects 'details'
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

/**
 * BlogSection Component
 *
 * Displays a list of the latest 4 blog posts fetched from an API.
 * Renamed from BlogPage to BlogSection to match filename.
 */
const BlogSection: React.FC = () => {
  // State to hold the blog posts (using the structure needed by the component)
  const [posts, setPosts] = useState<BlogPost[]>([]);
  // State to manage loading status
  const [loading, setLoading] = useState<boolean>(true);
  // State to manage potential errors
  const [error, setError] = useState<string | null>(null);

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Define an async function to fetch blog posts
    const fetchPosts = async () => {
      setLoading(true); // Ensure loading is true at the start of fetch
      setError(null); // Reset error state
      try {
        // Call the API function to get published blog posts
        // Assume getPublishedBlogPosts returns an array of ApiBlogPost with 'details'
     //    const fetchedPosts: ApiBlogPost[] = await getPublishedBlogPosts();

        // Sort posts by creation_date descending to ensure latest are first
     //    const sortedPosts = fetchedPosts.sort(
     //      (a, b) =>
     //        new Date(b.creation_date).getTime() -
     //        new Date(a.creation_date).getTime()
     //    );

        // Take only the first 4 posts (or fewer if less than 4 are available)
     //    const limitedPosts = sortedPosts.slice(0, 4);

        // Transform the raw API data if necessary, ensuring 'details' is present
        // Use 'details' directly from API, add fallback similar to blogPage.tsx
     //    const formattedPosts: BlogPost[] = limitedPosts.map((post) => ({
     //      ...post,
     //      details: post.details || "<p>Content not available.</p>", // Use API's 'details' directly
     //    }));

     //    setPosts(formattedPosts); // Set the formatted posts (max 4) to state
      } catch (e) {
        if (e instanceof Error) {
          setError(`Failed to load posts: ${e.message}`); // More specific error message
        } else {
          setError("An unknown error occurred while fetching posts.");
        }
        console.error("Failed to fetch posts:", e);
        setPosts([]); // Clear posts on error
      } finally {
        // Set loading to false regardless of success or failure
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Display loading state
  if (loading) {
    return (
      <section className="flex min-h-[300px] items-center justify-center bg-background-50 py-12">
        {" "}
        {/* Use section tag, consistent padding */}
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
        {" "}
        {/* Use section tag, consistent padding */}
        {/* Improved error message styling */}
        <div className="mx-auto max-w-md rounded-lg border border-red-300 bg-red-100 p-6 text-center text-lg text-red-700 shadow-md">
          <p className="mb-2 font-semibold">Oops! Could not load posts.</p>
          <p>{error}</p>
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
        {posts.length > 0 ? ( // Corrected condition to show grid if posts exist
          // Responsive grid layout for blog cards
          // Removed max-w-xl to allow grid to use container width
          // Simplified grid column definition for better responsiveness
          // Grid layout for blog cards, ensuring responsiveness and spacing.
          // Limits the display to the first 4 posts using slice(0, 4).
          <div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:portrait:grid-cols-2">
              {posts.slice(0, 7).map(
                (
                  post // Display only the first 4 posts
                ) => (
                  <BlogInfoCard key={post.slug} post={post} />
                )
              )}
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
          <p className="mt-10 text-center text-lg text-text-100">
            No blog posts found. Check back later!
          </p>
        )}
      </div>
    </section>
  );
};

export default BlogSection; // Renamed export to match component name
