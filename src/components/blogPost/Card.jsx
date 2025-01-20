import Link from "next/link";
import React from "react";

const Card = ({ post }) => {
  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 h-auto">
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {post.title}
        </h5>
        <p>{post.body.slice(0, 100)}</p>
      </div>
      <div className="p-6 pt-0 mt-auto">
        <button
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button"
        >
          <Link
            href={{
              pathname: `/post/${post.id}`,
            }}
          >
            Read More
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Card;
