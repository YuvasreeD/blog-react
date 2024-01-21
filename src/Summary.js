import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";
const Summary = () => {
  let { id } = useParams();
  let router = useHistory();
  const url = `http://localhost:8000/blogs/${id}`;
  const { data: blog, error, isLoading } = useFetch(url);
  const deleteBlog = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      router.push("/");
    });
  };
  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading && <div className="loading">Loading...</div>}
      {blog && (
        <div
          style={{
            padding: "32px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <div className="blog-title">{blog.title}</div>
          <div className="blog-author">Written By - {blog.author}</div>
          <div>{blog.body}</div>
          <div>
            <button onClick={deleteBlog}>Delete Blog</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Summary;
