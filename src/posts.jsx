import { useEffect, useState } from 'react'
import { client } from './sanityClient'
import { urlFor } from './imageBuilder'

function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    client.fetch(`
        *[_type == "post"] {
          title,
          description,
          image,
          mediumLink
        }
      `)
      .then((data) => {
        setPosts(data)
      })
      .catch((err) => console.error('SANITY ERROR:', err))
  }, [])

  return (
    <div className="blogs">
      {posts.map((post, index) => (
        <div className="blog-card" key={index}>
          {post.image && (
              <img
                src={urlFor(post.image).width(250).url()}
                alt={post.title}
                className="blog-image"
              />
          )}

          <div>
              <h2 className='blog-title'>
                <a href={post.mediumLink} target="_blank">{post.title}</a>
              </h2>
            <p className="blog-desc">{post.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Posts;