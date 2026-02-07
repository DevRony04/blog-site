import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document, BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import Image from 'next/image';
import { formatImageUrl } from '@/lib/utils';

interface RichTextProps {
  content: Document;
}

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => <span className="font-bold text-foreground">{text}</span>,
    [MARKS.ITALIC]: (text: React.ReactNode) => <span className="italic">{text}</span>,
    [MARKS.CODE]: (text: React.ReactNode) => (
      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-primary">{text}</code>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node: any, children: React.ReactNode) => (
      <h1 className="text-4xl font-bold mt-12 mb-6 text-foreground tracking-tight">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => (
      <h2 className="text-3xl font-bold mt-10 mb-5 text-foreground tracking-tight border-b pb-2">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => (
      <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">{children}</h3>
    ),
    [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => (
      <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-muted-foreground">{children}</ol>
    ),
    [BLOCKS.QUOTE]: (node: any, children: React.ReactNode) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-8 text-xl text-muted-foreground bg-muted/20 py-4 pr-4 rounded-r">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="my-10 border-muted" />,
    [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
      >
        {children}
      </a>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { file, title } = node.data.target.fields;
      return (
        <div className="my-8 rounded-lg overflow-hidden border bg-muted">
          <Image
            src={formatImageUrl(file.url)}
            alt={title || 'Embedded image'}
            width={file.details.image.width}
            height={file.details.image.height}
            className="w-full h-auto object-cover"
          />
          {title && <p className="text-center text-sm text-muted-foreground py-2">{title}</p>}
        </div>
      );
    },
  },
};

export function RichText({ content }: RichTextProps) {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      {documentToReactComponents(content, options)}
    </div>
  );
}
