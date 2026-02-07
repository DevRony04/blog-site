# 📝 Blog Site - Marketing & Blog

A production-ready Next.js application built with TypeScript, Tailwind CSS, and shadcn/ui, designed with scalable architecture, strict type safety, and real-world frontend best practices.

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, shadcn/ui
- **Data Source:** In-memory JSON (Default) / Contentful (Optional)
- **Deployment:** Vercel

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/blog-site.git
   cd blog-site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```


3. **Configure Environment Variables (Contentful):**
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

### 🗂️ Data Handling
The application uses in-memory data found in `src/lib/mock-data.ts`.

To add or edit posts, modify the `MOCK_POSTS` array in `src/lib/mock-data.ts`.

### 📐 Data Model
| Field | Type | Required |
|-------|------|----------|
| Title | String | Yes |
| Slug | String | Yes (Unique) |
| Excerpt | String | No |
| Content | Rich Text / HTML | Yes |
| Cover Image | String (URL) | No |
| Published Date | Date String | No |

## ☁️ Deployment

The project is designed to be deployed on Vercel.

1. Push your code to GitHub.
2. Import the project in Vercel.
3. Deploy!

**Production URL:** https://blog-site-seven-sigma.vercel.app

## 🧱 Project Structure

- `src/app`: App Router pages and layouts
- `src/components`: UI components (Hero, PostCard, RichText)
- `src/components/ui`: shadcn/ui primitives
- `src/lib`: Data fetching utilities

## ✨ Features

- **Home Page:** Hero section and latest 3 blog posts.
- **Blog List:** List of all blog posts with pagination support (future).
- **Blog Detail:** Rich text rendering, cover images, and responsive layout.
- **Responsive Design:** Optimized for mobile, tablet, and desktop.
- **Performance:** Uses ISR (Incremental Static Regeneration) for high performance.
