import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import { getRecentPosts, getSimilarPosts } from "../services/index.js";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="border-b font-semibold pb-1 mb-8">
        {slug ? "Similar Posts" : "Recent Posts"}
      </h3>

      {relatedPosts.map((post) => (
        <div key={post.title} className="flex items-center mb-4">
          <div className="w-16 flex-none">
            <img
              alt={post.title}
              src={post.featuredImage.url}
              height="60px"
              width="60px"
              className="rounded-full align-middle"
            />
          </div>
          <div className="whitespace-pre-line flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <h3 className="transition duration-200 cursor-pointer line-clamp-2 hover:line-clamp-none hover:text-blue-500">
              <Link key={post.title} href={`/post/${post.slug}`}>
                {post.title}
              </Link>
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
