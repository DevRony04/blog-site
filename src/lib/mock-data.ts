import { BlogPost } from './contentful';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

export const MOCK_POSTS: BlogPost[] = [
    {
        sys: {
            id: '1',
            createdAt: '2026-02-07T10:00:00Z',
            updatedAt: '2026-02-07T10:00:00Z',
        },
        fields: {
            title: 'The Future of Digital Marketing in 2026',
            slug: 'future-of-digital-marketing-2026',
            excerpt: 'Explore the emerging trends that are reshaping the digital value chain and how businesses can adapt to stay ahead.',
            publishedDate: '2026-01-15T09:00:00Z',
            coverImage: {
                fields: {
                    file: {
                        url: 'https://plus.unsplash.com/premium_photo-1661425715124-310ec1b49b8a?q=80&w=1282&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        details: {
                            image: {
                                width: 800,
                                height: 600
                            }
                        }
                    },
                    title: 'Digital Marketing'
                }
            },
            content: {
                nodeType: BLOCKS.DOCUMENT,
                data: {},
                content: [
                    {
                        nodeType: BLOCKS.PARAGRAPH,
                        data: {},
                        content: [
                            {
                                nodeType: 'text',
                                value: 'The digital marketing landscape is shifting rapidly. As we move through 2026, AI-driven personalization and immersive experiences are becoming the norm rather than the exception.',
                                marks: [],
                                data: {}
                            }
                        ]
                    },
                    {
                        nodeType: BLOCKS.PARAGRAPH,
                        data: {},
                        content: [
                            {
                                nodeType: 'text',
                                value: 'Brands that leverage real-time data to create hyper-personalized customer journeys will see the highest engagement rates. It\'s no longer just about reaching the audience; it\'s about resonating with them on a deeper, more emotional level.',
                                marks: [],
                                data: {}
                            }
                        ]
                    }
                ]
            }
        }
    },
    {
        sys: {
            id: '2',
            createdAt: '2026-02-07T11:00:00Z',
            updatedAt: '2026-02-07T11:00:00Z',
        },
        fields: {
            title: 'Why Content is Still King',
            slug: 'why-content-is-still-king',
            excerpt: 'Despite the rise of new technologies, high-quality, valuable content remains the cornerstone of any successful marketing strategy.',
            publishedDate: '2026-02-01T14:30:00Z',
            coverImage: {
                fields: {
                    file: {
                        url: 'https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        details: {
                            image: {
                                width: 800,
                                height: 600
                            }
                        }
                    },
                    title: 'Content Creation'
                }
            },
            content: {
                nodeType: BLOCKS.DOCUMENT,
                data: {},
                content: [
                    {
                        nodeType: BLOCKS.PARAGRAPH,
                        data: {},
                        content: [
                            {
                                nodeType: 'text',
                                value: 'In an era of information overload, clarity and value stand out. Content marketing is not just about producing volume; it\'s about producing value.',
                                marks: [],
                                data: {}
                            }
                        ]
                    },
                    {
                        nodeType: BLOCKS.PARAGRAPH,
                        data: {},
                        content: [
                            {
                                nodeType: 'text',
                                value: 'Whether it\'s blog posts, videos, or podcasts, the core principle remains: educate, entertain, and inspire your audience. Trust is built through consistency and authority.',
                                marks: [],
                                data: {}
                            }
                        ]
                    }
                ]
            }
        }
    },
    {
        sys: {
            id: '3',
            createdAt: '2026-02-07T12:00:00Z',
            updatedAt: '2026-02-07T12:00:00Z',
        },
        fields: {
            title: '5 Strategies for Growth Hacking',
            slug: '5-strategies-for-growth-hacking',
            excerpt: 'Unlock rapid growth with these proven strategies designed for startups and scale-ups looking to maximize their impact.',
            publishedDate: '2026-02-07T10:00:00Z',
            coverImage: {
                fields: {
                    file: {
                        url: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        details: {
                            image: {
                                width: 800,
                                height: 600
                            }
                        }
                    },
                    title: 'Growth Hacking'
                }
            },
            content: {
                nodeType: BLOCKS.DOCUMENT,
                data: {},
                content: [
                    {
                        nodeType: BLOCKS.PARAGRAPH,
                        data: {},
                        content: [
                            {
                                nodeType: 'text',
                                value: 'Growth hacking is a mindset, not just a set of tools. It requires rapid experimentation across marketing channels and product development.',
                                marks: [],
                                data: {}
                            }
                        ]
                    },
                    {
                        nodeType: BLOCKS.UL_LIST,
                        data: {},
                        content: [
                            {
                                nodeType: BLOCKS.LIST_ITEM,
                                data: {},
                                content: [
                                    {
                                        nodeType: BLOCKS.PARAGRAPH,
                                        data: {},
                                        content: [
                                            {
                                                nodeType: 'text',
                                                value: 'Optimize your conversion funnel.',
                                                marks: [],
                                                data: {}
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                nodeType: BLOCKS.LIST_ITEM,
                                data: {},
                                content: [
                                    {
                                        nodeType: BLOCKS.PARAGRAPH,
                                        data: {},
                                        content: [
                                            {
                                                nodeType: 'text',
                                                value: 'Leverage viral loops.',
                                                marks: [],
                                                data: {}
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                nodeType: BLOCKS.LIST_ITEM,
                                data: {},
                                content: [
                                    {
                                        nodeType: BLOCKS.PARAGRAPH,
                                        data: {},
                                        content: [
                                            {
                                                nodeType: 'text',
                                                value: 'Focus on retention, not just acquisition.',
                                                marks: [],
                                                data: {}
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    },
    {
        sys: {
            id: '4',
            createdAt: '2026-02-08T09:00:00Z',
            updatedAt: '2026-02-08T09:00:00Z',
        },
        fields: {
            title: 'A Day in the Life of a Digital Nomad',
            slug: 'day-in-life-digital-nomad',
            excerpt: 'From sunrise yoga in Bali to late-night coding sessions, discover the reality behind the Instagram photos.',
            publishedDate: '2026-02-05T08:00:00Z',
            coverImage: {
                fields: {
                    file: {
                        url: 'https://images.unsplash.com/photo-1654355252504-42c1c9dd1fe0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        details: {
                            image: {
                                width: 800,
                                height: 600
                            }
                        }
                    },
                    title: 'Digital Nomad Life'
                }
            },
            content: {
                nodeType: BLOCKS.DOCUMENT,
                data: {},
                content: [
                    {
                        nodeType: BLOCKS.PARAGRAPH,
                        data: {},
                        content: [
                            {
                                nodeType: 'text',
                                value: 'The freedom to work from anywhere is liberating, but it requires discipline. Routine is my anchor in a life of constant movement.',
                                marks: [],
                                data: {}
                            }
                        ]
                    },
                    {
                        nodeType: BLOCKS.PARAGRAPH,
                        data: {},
                        content: [
                            {
                                nodeType: 'text',
                                value: 'Finding good Wi-Fi is often more important than finding good food. But the cultural experiences make every connection struggle worth it.',
                                marks: [],
                                data: {}
                            }
                        ]
                    }
                ]
            }
        }
    },
    {
        sys: {
            id: '5',
            createdAt: '2026-02-08T10:00:00Z',
            updatedAt: '2026-02-08T10:00:00Z',
        },
        fields: {
            title: 'Top 5 Hidden Gems in Kyoto',
            slug: 'hidden-gems-kyoto',
            excerpt: 'Beyond the Golden Pavilion and Fushimi Inari, explore the quiet corners of Japan\'s ancient capital.',
            publishedDate: '2026-02-06T09:30:00Z',
            coverImage: {
                fields: {
                    file: {
                        url: 'https://images.unsplash.com/photo-1762698092759-d3f6548fb842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        details: {
                            image: {
                                width: 800,
                                height: 600
                            }
                        }
                    },
                    title: 'Kyoto Streets'
                }
            },
            content: {
                nodeType: BLOCKS.DOCUMENT,
                data: {},
                content: [
                    {
                        nodeType: BLOCKS.PARAGRAPH,
                        data: {},
                        content: [
                            {
                                nodeType: 'text',
                                value: 'Kyoto is a city of layers. Peel back the tourist crowds, and you find serene temples, traditional tea houses, and moss-covered gardens that feel like another world.',
                                marks: [],
                                data: {}
                            }
                        ]
                    },
                    {
                        nodeType: BLOCKS.PARAGRAPH,
                        data: {},
                        content: [
                            {
                                nodeType: 'text',
                                value: 'My favorite spot is a small bamboo grove in Arashiyama that most people miss because they stick to the main path.',
                                marks: [],
                                data: {}
                            }
                        ]
                    }
                ]
            }
        }
    },
    {
        sys: {
            id: '6',
            createdAt: '2026-02-08T11:00:00Z',
            updatedAt: '2026-02-08T11:00:00Z',
        },
        fields: {
            title: 'Minimalist Setup for 2026',
            slug: 'minimalist-desk-setup-2026',
            excerpt: 'How I streamlined my workspace to maximize productivity and creativity. Less clutter, more focus.',
            publishedDate: '2026-02-08T10:00:00Z',
            coverImage: {
                fields: {
                    file: {
                        url: 'https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        details: {
                            image: {
                                width: 800,
                                height: 600
                            }
                        }
                    },
                    title: 'Minimalist Desk'
                }
            },
            content: {
                nodeType: BLOCKS.DOCUMENT,
                data: {},
                content: [
                    {
                        nodeType: BLOCKS.PARAGRAPH,
                        data: {},
                        content: [
                            {
                                nodeType: 'text',
                                value: 'Your environment dictates your focus. By removing visual noise, I realized I could think more clearly and work for longer deep-work sessions.',
                                marks: [],
                                data: {}
                            }
                        ]
                    },
                    {
                        nodeType: BLOCKS.UL_LIST,
                        data: {},
                        content: [
                            {
                                nodeType: BLOCKS.LIST_ITEM,
                                data: {},
                                content: [
                                    {
                                        nodeType: BLOCKS.PARAGRAPH,
                                        data: {},
                                        content: [
                                            {
                                                nodeType: 'text',
                                                value: 'Wireless everything.',
                                                marks: [],
                                                data: {}
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                nodeType: BLOCKS.LIST_ITEM,
                                data: {},
                                content: [
                                    {
                                        nodeType: BLOCKS.PARAGRAPH,
                                        data: {},
                                        content: [
                                            {
                                                nodeType: 'text',
                                                value: 'Single monitor focus.',
                                                marks: [],
                                                data: {}
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }
];
