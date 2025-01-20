"use client";
import { Geist, Geist_Mono } from "next/font/google";
import BlogPost from "@/components/blogPost/blogPost";
import { useSearchContext } from "@/context/SearchContext";
import { useMemo } from "react";
import { hashtags } from "@/constants.js/hashtags";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts: posts.map((post, index) => {
        const tags = [];
        const randomId = Math.floor(Math.random() * (hashtags.length - 1));
        if (randomId !== index) tags.push(hashtags[randomId]);
        return { ...post, tags };
      }),
    },
  };
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home({ posts }) {
  const { selectedHashtag } = useSearchContext();

  const data = useMemo(() => {
    if (!selectedHashtag) return posts;
    console.log({ posts: posts.length });

    return posts.filter((post) => {
      const tagsSet = new Set(post.tags);
      return tagsSet.has(selectedHashtag);
    });
  }, [posts, selectedHashtag]);

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} `}>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <BlogPost posts={data} />
        </div>
      </main>
    </div>
  );
}
