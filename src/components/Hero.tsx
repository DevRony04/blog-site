import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="py-20 text-center bg-blue-200">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Welcome to Our Marketing Blog
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover the latest trends, insights, and strategies to grow your business.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/blog">Read the Blog</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="https://github.com/deepyaman/vlog-site" target="_blank">
              View on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
