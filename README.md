# Vlog Site - Marketing & Blog

A production-ready Next.js application driven by Contentful, built with TypeScript, Tailwind CSS, and shadcn/ui.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, shadcn/ui
- **CMS:** Contentful (Delivery API)
- **Deployment:** Vercel

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/vlog-site.git
   cd vlog-site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory:
   ```env
   CONTENTFUL_SPACE_ID=your_space_id
   CONTENTFUL_ACCESS_TOKEN=your_access_token
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.

### Local Data Handling
The application currently uses **Local Mock Data** found in `src/lib/mock-data.ts`.
This means no Contentful API Keys are required to run the project.

To add or edit posts, simply modify the `MOCK_POSTS` array in `src/lib/mock-data.ts`.

### Contentful Integration (Optional)
If you wish to switch back to real Contentful data in the future:
1. Uncomment the client creation code in `src/lib/contentful.ts`.
2. Add your credentials to `.env.local`.
3. Restore the API fetching logic in `getPosts` and `getPostBySlug`.

### BlogPost Model
| Field | Type | ID | Required |
|-------|------|----|----------|
| Title | Short text | `title` | Yes |
| Slug | Short text | `slug` | Yes (Unique) |
| Excerpt | Long text | `excerpt` | No |
| Content | Rich text | `content` | Yes |
| Cover Image | Media | `coverImage` | No |
| Published Date | Date and time | `publishedDate` | No |

![Contentful Model Screenshot](https://via.placeholder.com/800x400?text=Contentful+Model+Screenshot)

## Deployment

The project is designed to be deployed on Vercel.

1. Push your code to GitHub.
2. Import the project in Vercel.
3. Add the `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN` environment variables in Vercel project settings.
4. Deploy!

**Production URL:** [https://your-vlog-site.vercel.app](https://your-vlog-site.vercel.app)

## Project Structure

- `src/app`: App Router pages and layouts
- `src/components`: UI components (Hero, PostCard, RichText)
- `src/components/ui`: shadcn/ui primitives
- `src/lib`: Contentful client and data fetching utilities

## Features

- **Home Page:** Hero section and latest 3 blog posts.
- **Blog List:** List of all blog posts with pagination support (future).
- **Blog Detail:** Rich text rendering, cover images, and responsive layout.
- **Responsive Design:** Optimized for mobile, tablet, and desktop.
- **Performance:** Uses ISR (Incremental Static Regeneration) for high performance.
