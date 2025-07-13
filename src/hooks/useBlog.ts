import { useQuery } from "@tanstack/react-query";

export interface BlogPost {
  slug: string;
  title: string;
  content: string;
  Status: "DRAFT" | "PUBLISHED";
  createdAt: string;
}

// Fetch all published blog posts
export const usePublishedPosts = () => {
  return useQuery({
    queryKey: ["blog", "published"],
    queryFn: async (): Promise<BlogPost[]> => {
      const response = await fetch("/api/blog/published");
      if (!response.ok) {
        throw new Error("Failed to fetch published posts");
      }
      return response.json();
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Fetch a specific blog post by slug
export const useBlogPost = (slug: string | null) => {
  return useQuery({
    queryKey: ["blog", "post", slug],
    queryFn: async (): Promise<BlogPost> => {
      if (!slug) throw new Error("Slug is required");
      const response = await fetch(`/api/blog?slug=${slug}`);
      if (!response.ok) {
        throw new Error("Failed to fetch blog post");
      }
      return response.json();
    },
    enabled: !!slug,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

// Fetch all blog posts (for admin)
export const useAllPosts = () => {
  return useQuery({
    queryKey: ["blog", "all"],
    queryFn: async (): Promise<BlogPost[]> => {
      const response = await fetch("/api/blog");
      if (!response.ok) {
        throw new Error("Failed to fetch all posts");
      }
      return response.json();
    },
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
}; 