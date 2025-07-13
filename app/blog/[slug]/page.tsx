import BlogPostCard from "../../components/BlogPostCard";
import {blogPosts} from "../page";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
const post = blogPosts.find((p) => p.link === `/blog/${params.slug}`);

  if (!post) {
    return <div className="p-8 text-center text-red-500">Post not found.</div>;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-12">
      <div className="container mx-auto mt-5 px-4 max-w-3xl">
            <BlogPostCard post={post} readmore={false} imageHeight='h-72' />
      </div>
    </div>
  );
}
