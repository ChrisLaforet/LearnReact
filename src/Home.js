import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    // Json server startup: npx json-server --watch data/db.json --port 8000

    const { isPending, error, data: blogs} = useFetch("http://localhost:8000/blogs");

  return (
      <div className="home">
          {error && <div>{ error }</div>}
          {isPending && <div>Loading...</div>}
          {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      </div>
  );
}

export default Home;
