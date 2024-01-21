import { useState } from "react";
import { useHistory } from "react-router-dom";
const CreateBlog = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogAuthor, setBlogAuthor] = useState("");
  const [blogBody, setBlogBody] = useState("");
  const router = useHistory();
  const createBlog = (e) => {
    e.preventDefault();

    const blog = {
      title: blogTitle,
      body: blogBody,
      author: blogAuthor,
    };
    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      router.push("/");
    });
  };

  return (
    <form onSubmit={createBlog}>
      <div className="form-blog">
        <div className="form-element">
          <label style={{ fontWeight: "700" }}> Title</label>
          <input
            required
            style={{ padding: "6px" }}
            value={blogTitle}
            onChange={(e) => {
              setBlogTitle(e.target.value);
            }}
          ></input>
        </div>
        <div className="form-element">
          <label style={{ fontWeight: "700" }}> Author</label>
          <input
            required
            style={{ padding: "6px" }}
            value={blogAuthor}
            onChange={(e) => {
              setBlogAuthor(e.target.value);
            }}
          ></input>
        </div>
        <div className="form-element">
          <label style={{ fontWeight: "700" }}> Content</label>
          <textarea
            required
            style={{ padding: "6px" }}
            rows={10}
            value={blogBody}
            onChange={(e) => {
              setBlogBody(e.target.value);
            }}
          ></textarea>
        </div>
        <button>Add Blog</button>
      </div>
    </form>
  );
};
export default CreateBlog;
