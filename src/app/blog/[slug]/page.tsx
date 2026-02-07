import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { getPostBySlug } from '@/lib/contentful';
import { RichText } from '@/components/RichText';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { formatImageUrl } from '@/lib/utils';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// ISR: Revalidate every hour
export const revalidate = 3600;

export async function generateMetadata(props: BlogPostPageProps) {
  const params = await props.params;
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.fields.title} | Marketing Insights`,
    description: post.fields.excerpt,
  };
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const params = await props.params;
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const { title, publishedDate, coverImage, content } = post.fields;

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="mb-8">
        <Button asChild variant="ghost" className="pl-0 hover:pl-0 hover:bg-transparent text-muted-foreground hover:text-foreground">
          <Link href="/blog" className="flex items-center gap-2">
            <ChevronLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </Button>
      </div>

      <article>
        <header className="mb-10 text-center">
          <div className="text-sm text-muted-foreground mb-4">
            {format(new Date(publishedDate), 'MMMM d, yyyy')}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
            {title}
          </h1>
        </header>

        {coverImage && coverImage.fields && coverImage.fields.file && (
          <div className="relative aspect-video w-full mb-12 rounded-xl overflow-hidden shadow-sm">
            <Image
              src={formatImageUrl(coverImage.fields.file.url)}
              alt={coverImage.fields.title || title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <RichText content={content} />
        </div>
      </article>

      <div className="mt-16 pt-8 border-t text-center">
         <p className="text-muted-foreground mb-4">Enjoyed this article?</p>
         <Button asChild>
            <Link href="/blog">Read More Articles</Link>
         </Button>
      </div>
    </div>
  );
}
