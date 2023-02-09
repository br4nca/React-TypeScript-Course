import React from "react";
import { useLoaderData } from "react-router-dom";

import PostList from "../components/PostList";
interface BlogPageProps {}
const BlogPage: React.FC<BlogPageProps> = (props) => {
  const posts = useLoaderData() as {
    id: string;
    title: string;
    body: string;
  }[];
  return <PostList posts={posts} />;
};

export default BlogPage;

export function loader() {
  return fetch("https://jsonplaceholder.typicode.com/posts");
}
