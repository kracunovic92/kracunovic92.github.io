import { useParams } from 'react-router-dom';
import { posts } from './posts';
import MDXProviderWrapper from './MDXProvider';
import PostLayout from './components/PostLayout';

const BlogPostPage = () => {
  const { slug } = useParams();
  console.log('Slug from route:', slug);

  const post = posts.find((p) => p.slug === slug);
  console.log('Found post object:', post);

  if (!post) return <p>Post not found.</p>;

  const PostComponent = post.component;
  console.log('Post component:', PostComponent);

  return (
    <PostLayout title={post.title} date={post.date} tags={post.tags}>
    <MDXProviderWrapper>
      <PostComponent />
    </MDXProviderWrapper>
  </PostLayout>
  );
};

export default BlogPostPage;
