import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "/src/sanityClient";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    client
        .fetch(`
            *[_type == "post"] | order(date desc){
            title,
            date,
            mediumLink,
            description,
            image
            }
        `)
      .then((data) => setBlogs(data))
      .catch((err) => console.error("SANITY ERROR:", err));
  }, []);

  return (
    <div className="blogs-page">
      <section className="blogs-hero fade-up">
        <div className="event-title-wrap">
          <h2>Latest Blogs</h2>
        </div>
      </section>

      <section className="blogs-list-section fade-up delay-1">
        <div className="blogs-list">
          {blogs.map((blog, index) => (
            <article className="blog-row" key={index}>
                <div className="blog-date">
                    {(index + 1).toString().padStart(2, "0")}
                    <span>Published Date: {blog.date}</span>
                </div>

                <div className="blog-main">
                    <h2>{blog.title}</h2>
                    {blog.description && (
                        <p className="blog-preview">{blog.description}</p>
                    )}
                </div>

                <a
                    href={blog.mediumLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blog-readmore"
                    >
                    Read more →
                </a>

            </article>
            ))}

        </div>

      </section>
    </div>
  );
}

export default Blogs;