"use client";
import { useParams } from "next/navigation";
import { useBlogPost } from "@/hooks/useBlog";
import { useEffect } from "react";

export default function TitleGetter() {
  const params = useParams();
  const slug = params.slug as string;
  const { data: post } = useBlogPost(slug);

  useEffect(() => {
    if (post?.title) {
      document.title = `${post.title} | RCCG The Praise House`;
    } else {
      document.title = "Blog Post | RCCG The Praise House";
    }
  }, [post?.title]);

  return null; // This component doesn't render anything
}
