import React from "react";
import { useRouter } from 'next/router';
import Categories from "../../components/Categories";
import PostWidget from "../../components/PostWidget";
import PostDetail from "../../components/PostDetail";
import Author from "../../components/Author";
import CommentsForm from "../../components/CommentsForm";
import Comments from "../../components/Comments";
import Loader from "../../components/Loader"

import { getPostDetails, getPosts } from "../../services/index.js";




  const PostsDetail = ({post}) => {
    const router = useRouter();

    if (router.isFallback) {
      return <Loader />;
    }
    
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          <PostDetail post={post}/> 
          <Author author={post.author}/> 
          <Comments slug={post.slug}/>
          <CommentsForm slug={post.slug}/> 
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)}/>
            <Categories />  
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsDetail;

export async function getStaticProps({params}) {
  const data = await getPostDetails(params.slug)
 
  return {
    props: {post: data}
  }
}

export async function getStaticPaths() {
  const posts = await getPosts()

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true
  }
}