
import { useState, useEffect } from 'react';
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    };

    // runs every time there is a re-render (data changes) - do not change state INSIDE effect because this can trigger a loop
    useEffect(() => {
        console.log('use effect ran');
//        console.log(blogs);
        console.log(name);
    }, [name]);

  return (
      <div className="home">
          <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
          <button onClick={() => setName('yoshi')}>change name</button>
          <p>{name}</p>
      </div>
  );
}

export default Home;
