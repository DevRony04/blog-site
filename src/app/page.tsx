import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { PostCard } from '@/components/PostCard';
import { getPosts } from '@/lib/contentful';
import { Button } from '@/components/ui/button';

export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  const posts = await getPosts();
  const latestPosts = posts.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      
      <section className="py-16 container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Latest Updates</h2>
          <Button asChild variant="outline">
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div>

        {latestPosts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <PostCard key={post.sys.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-muted/30 rounded-lg">
            <p className="text-muted-foreground">No posts found. Add some content in Contentful!</p>
          </div>
        )}
      </section>
    </div>
  );
}
