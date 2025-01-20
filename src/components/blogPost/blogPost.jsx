import React from "react";
import Card from "./Card";

const BlogPost = ({ posts }) => {
  const renderedPosts = posts.map((post) => <Card key={post.id} post={post} />);
  return (
    <div>
      <div className="flex flex-wrap gap-7 w-full justify-center lg:justify-between">
        {renderedPosts}
      </div>
    </div>
  );
};

export default BlogPost;
