import useFetch from "./useFetch";
import Blogs from "./Blogs";
const Home = () => {
  const url = "http://localhost:8000/blogs";
  const { data, error, isLoading } = useFetch(url);
  return (
    <div className="blog-list">
      {error && <div>{error}</div>}
      {isLoading && <div className="loading">Loading...</div>}
      {data && (
        <div>
          <Blogs blogs={data}></Blogs>
        </div>
      )}
    </div>
  );
};
export default Home;
