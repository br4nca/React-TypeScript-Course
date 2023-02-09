import { Link } from "react-router-dom";

import "./PostList.css";

interface PostListProps {
  posts: { id: string; title: string; body: string }[];
}
const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <ul className="list">
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={post.id.toString()}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
