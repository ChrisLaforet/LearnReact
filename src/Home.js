
import { useState, useEffect } from 'react';
import BlogList from "./BlogList";

const Home = () => {

    // Json server startup: npx json-server --watch data/db.json --port 8000

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // runs every time there is a re-render (data changes) - do not change state INSIDE effect because this can trigger a loop
    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then(response => {
                if (!response.ok) {
                    throw Error('Could not fetch the data for that resource');
                }
                return response.json();
            })
            .then((data) => {
                setBlogs(data);
                setError(null);
                setIsPending(false);
            })
            .catch(err => {
                setError(err.message);
                setIsPending(false);
            })
    }, []);

  return (
      <div className="home">
          {error && <div>{ error }</div>}
          {isPending && <div>Loading...</div>}
          {/* we don't want to pass blogs if it is null otherwise we will have an error with blogs.map() in the BlogList */}
          {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      </div>
  );
}

export default Home;
