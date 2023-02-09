import "./PostItem.css";

interface PostItemProps {
  post: { id: string; title: string; body: string };
}
const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <article className="item">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
};

export default PostItem;
