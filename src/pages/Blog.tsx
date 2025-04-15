import { Link } from 'react-router-dom';
import { posts } from '../blog/posts';

const BlogIndex = () => (
  <div style={{ padding: '2rem', maxWidth: '720px', margin: '0 auto' }}>
    <h1>Blog</h1>
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link to={`/posts/${post.slug}`}>{post.title}</Link> <span>({post.date})</span>
        </li>
      ))}
    </ul>
  </div>
);

export default BlogIndex;