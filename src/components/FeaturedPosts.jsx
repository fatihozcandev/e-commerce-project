import React from "react";
import ProductCard from "./reusableComponents/ProductCard";
import { posts } from "../data/data";

const FeaturedPosts = () => {
  return (
    <div className="bg-gray-100 p-10">
      <div className="text-center">
        <h6 className="text-h6 text-primary-text-color">Practice Advice</h6>
        <h2 className="text-h2 font-bold mb-4 text-text-color">
          Featured Posts
        </h2>
        <p className="text-lg mb-10 text-second-text-color">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {posts.map((post, index) => (
          <ProductCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
