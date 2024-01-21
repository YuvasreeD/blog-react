import { useHistory } from "react-router-dom";
const Blogs = ({ blogs }) => {
  const router = useHistory();

  const openSummary = (blogId) => {
    router.push(`blogs/${blogId}`);
  };
  return (
    <div className="blogs-list">
      <div style={{ padding: "32px", fontWeight: "600", fontSize: "24px" }}>
        All Blogs
      </div>

      {blogs.map((blog) => (
        <div
          style={{ padding: "32px" }}
          className="blog-element"
          key={blog.id}
          onClick={() => openSummary(blog.id)}
        >
          <div className="blog-title">{blog.title}</div>
          <div className="blog-author">Written By - {blog.author}</div>
          <div>Read more...</div>
        </div>
      ))}
    </div>
  );
};
export default Blogs;
