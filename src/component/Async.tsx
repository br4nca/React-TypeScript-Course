import { useEffect, useState } from "react";
interface AsyncProps {}
const Async: React.FC<AsyncProps> = (props) => {
  const [posts, setPosts] = useState<
    { id: string; title: string; userId: number; body: string }[]
  >([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Async;
