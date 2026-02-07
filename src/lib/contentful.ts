import { createClient, Entry, EntrySkeletonType } from 'contentful';
import { Document } from '@contentful/rich-text-types';
import { MOCK_POSTS } from './mock-data';

export interface BlogPost {
    sys: {
        id: string;
        createdAt: string;
        updatedAt: string;
    };
    fields: {
        title: string;
        slug: string;
        excerpt: string;
        content: Document;
        coverImage: {
            fields: {
                file: {
                    url: string;
                    details: {
                        image: {
                            width: number;
                            height: number;
                        };
                    };
                };
                title: string;
            };
        };
        publishedDate: string;
    };
}

export interface BlogPostSkeleton extends EntrySkeletonType {
    contentTypeId: 'blogPost';
    fields: {
        title: import('contentful').EntryFieldTypes.Text;
        slug: import('contentful').EntryFieldTypes.Text;
        excerpt: import('contentful').EntryFieldTypes.Text;
        content: import('contentful').EntryFieldTypes.RichText;
        coverImage: import('contentful').EntryFieldTypes.AssetLink;
        publishedDate: import('contentful').EntryFieldTypes.Date;
    };
}

// Client is no longer needed but kept specifically for type extraction if ever needed
const client = null;

export const getPosts = async (): Promise<BlogPost[]> => {
    // Simulating network delay
    // await new Promise(resolve => setTimeout(resolve, 100));
    return MOCK_POSTS.sort((a, b) =>
        new Date(b.fields.publishedDate).getTime() - new Date(a.fields.publishedDate).getTime()
    );
};

export const getPostBySlug = async (slug: string): Promise<BlogPost | null> => {
    // await new Promise(resolve => setTimeout(resolve, 100));
    return MOCK_POSTS.find(post => post.fields.slug === slug) || null;
};
