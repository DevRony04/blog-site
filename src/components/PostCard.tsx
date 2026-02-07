import Link from 'next/link';
import { format } from 'date-fns';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BlogPost } from '@/lib/contentful';

interface PostCardProps {
  post: BlogPost;
}

export function PostCard({ post }: PostCardProps) {
  const { title, slug, excerpt, publishedDate } = post.fields;

  return (
    <Card className="flex flex-col h-full hover:bg-blue-50 transition-shadow">
      <CardHeader>
        <CardTitle className="line-clamp-2">
          <Link href={`/blog/${slug}`} className="hover:underline">
            {title}
          </Link>
        </CardTitle>
        <div className="text-sm text-muted-foreground">
          {format(new Date(publishedDate), 'MMMM d, yyyy')}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">
          {excerpt}
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="ghost" className="w-full justify-start p-0 hover:bg-transparent hover:text-primary">
          <Link href={`/blog/${slug}`}>Read More &rarr;</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
