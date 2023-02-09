import { useLoaderData } from "react-router-dom";

import PostItem from "../components/PostItem";
interface PostPageProps {}
const PostPage: React.FC<PostPageProps> = () => {
  const post = useLoaderData() as { id: string; title: string; body: string };

  return <PostItem post={post} />;
};

export default PostPage;

export function loader({ params }: any) {
  const postId = params.id;
  return fetch("https://jsonplaceholder.typicode.com/posts/" + postId);
}
