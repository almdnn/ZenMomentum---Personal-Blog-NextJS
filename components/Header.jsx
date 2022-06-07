import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services/index.js";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((category) => setCategories(category));
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-gray-300  p-3 lg:py-8">
        <div className="md:float-left block sm:text-center">
          <Link href="/">
            <span className="hidden md:contents lg:contents cursor-pointer fond-bold text-3xl lg:text-4xl ml-3">
              ZenMomentum
            </span>
          </Link>
        </div>
        <div className=" md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slugh} href={`/category/${category.slug}`}>
              <ul>
                <li className="md:float-right my-3 align-middle ml-4 text-center text-xl lg:text-lg font-semibold lg:font-semibold  transition duration-200 cursor-pointer hover:text-blue-500">
                  {category.name}
                </li>
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
