import React from "react";
import SimpleButton from "./button";
import Link from "next/link";


interface BlogPost {
  slug: string;
  title: string;
  videoOfSermon?: string; // Optional field for video link/identifier
  imageForSermon?: string; // Optional field for image URL
  creation_date: string;
  details: string;
  status: string; // e.g., 'draft', 'published'
  author: string;
}

interface BlogInfoCardProps {
  post: BlogPost;
}

const BlogInfoCard: React.FC<BlogInfoCardProps> = ({ post }) => {
  const { slug, title, author, creation_date } = post;

  const formattedDate = new Date(creation_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="bg-background-100 mx-3 shadow-lg h-60 rounded-lg w-90 overflow-hidden my-6 p-5 border border-gray-700 transition-shadow duration-300 hover:shadow-xl">
      <Link
        href={`/blog/${slug}`}
        className="text-xl font-semibold text-primary-500 hover:text-primary-400 mb-2 block transition-colors duration-200"
      >
        {title}
        <p className="text-base font-normal mt-2 mb-3">{`Learn more about ${title}`}</p>
        <SimpleButton inform="Read More" />
      </Link>

      <div className="text-sm text-accent-400 border-t border-gray-700 pt-3 mt-4">
        <span>Authored by: <strong className="text-text-50">{author}</strong></span>
        <span className="mx-2">|</span>
        <span>Published on: <strong className="text-text-50">{formattedDate}</strong></span>
      </div>
    </div>
  );
};

export default BlogInfoCard;
