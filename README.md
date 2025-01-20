## Description
Task: Next.js Assessment - Blog Application

## Tech stacks
-  [Next.js - 15](https://github.com/nestjs/nest)

## Approach Overview
### 1. Component-Driven Design
- Each UI element, such as the navbar, dropdown, or post list, is implemented as a reusable component.
- This promotes modularity, making the application easier to maintain and extend.

### 2. State Management with Context API
- Global states, like selected hashtags or search queries, are managed using React’s Context API.
- Eliminates prop-drilling, ensuring state accessibility across the component tree.

### 3. Dynamic Filtering
- A hashtag-based filtering mechanism dynamically displays posts.
- Posts are filtered in-memory using JavaScript's `filter` function.
- `useMemo` optimizes performance by recalculating filtered posts only when hashtags change.

### 4. Tailwind CSS for Styling
- Tailwind CSS simplifies the creation of responsive, utility-based styles.
- Dynamic classes enable conditional styling for dropdowns, buttons, and hover effects.

### 5. Static Generation with `getStaticProps` and `getStaticPaths`
- Individual post detail pages are statically generated at build time.

### 6. Dynamic Routing
- Dynamic routes, such as `/posts/[id]`, are utilized for individual post pages.
- These routes are defined within the file structure (e.g., `pages/posts/[id].js`).

### 7. API Integration
- Data fetching is implemented using:
- `getServerSideProps` for real-time data fetching.
- `getStaticProps` for static data fetching during build time.

## Quick Run

```bash
$ git clone https://github.com/Superstar-IT/blog-application.git
$ cd blog-application
$ npm install
$ npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
