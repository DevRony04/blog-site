import { getPosts } from '@/lib/contentful';
import { PostCard } from '@/components/PostCard';

export const revalidate = 3600;

export const metadata = {
  title: 'Blog | Marketing Insights',
  description: 'Read our latest articles on marketing trends and strategies.',
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Our Blog</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Insights, thoughts, and trends from our team.
        </p>
      </div>

      {posts.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.sys.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-muted/30 rounded-lg">
          <p className="text-lg text-muted-foreground">No posts found yet. Check back soon!</p>
        </div>
      )}
    </div>
  );
}
