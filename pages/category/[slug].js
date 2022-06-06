import React from "react";
import { useRouter } from 'next/router';

import Categories from "../../components/Categories";
import PostWidget from "../../components/PostWidget";
import PostCard from "../../components/PostCard"
import Loader from "../../components/Loader"
import { getCategoryPost, getCategories } from "../../services/index.js";

const CategoryPost = ({posts}) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

    return (
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
        {posts.map((post, index) =>  <PostCard post={post.node} key={post.title} />)}
        </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />  
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default CategoryPost;

  export async function getStaticProps({params}) {
    const data = await getCategoryPost(params.slug)
  
    return {
      props: {posts: data}
    }
  }

  export async function getStaticPaths() {
    const categories = await getCategories();
    return {
      paths: categories.map(({ slug }) => ({ params: { slug } })),
      fallback: true,
    };
  }
