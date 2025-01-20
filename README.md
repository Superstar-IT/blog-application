## Description
Task: Next.js Assessment - Blog Application

## Tech stacks
-  [Next.js - 15](https://github.com/nestjs/nest)

## Approach Overview
1.	Component-Driven Design:

	•	Each UI element, like the navbar, dropdown, or post list, is created as reusable components.
	•	This promotes modularity and makes it easier to maintain or extend functionality.

2.	State Management with Context API:

	•	Global states, such as selected hashtags or search queries, are managed using React’s Context API.
	•	This eliminates prop-drilling and makes state accessible across the component tree.

3.	Dynamic Filtering:

	•	Implemented a hashtag-based filtering mechanism to display posts dynamically.
	•	Posts are filtered in-memory using JavaScript’s filter function.
	•	React’s useMemo is used to re-evaluate filtered posts when the user selects a hashtag.

4.	Tailwind CSS for Styling:

	•	Tailwind CSS simplifies creating responsive, utility-based styles.
	•	Dynamic classes (e.g., changing colors or visibility based on state) are used for dropdowns, buttons, and hover effects.

5. Static Generation with getStaticProps and getStaticPaths

	•	For individual post details page, getStaticProps and getStaticPaths are used to generate static pages at build time.

6. Dynamic Routing

    •   Dynamic routes, like /posts/[id], are used for individual post pages.
	•	The dynamic paths are defined in the file structure (e.g., pages/posts/[id].js).

7.  API Integration

    •	Posts and data can be fetched from external APIs using getServerSideProps for real-time data or getStaticProps for static data.

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
