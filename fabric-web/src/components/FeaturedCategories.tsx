
import React from 'react';
import { Link } from 'react-router-dom';

import womenImg from '../assets/women-f1.jpg';
import menImg from '../assets/men-f1.jpg';
import kidsImg from '../assets/kids-c1.jpg';

const categories = [
  {
    title: 'Women',
    description: 'Elegant & Contemporary',
    image: womenImg,
    link: '/women'
  },
  {
    title: 'Men',
    description: 'Classic & Modern',
    image: menImg,
    link: '/men'
  },
  {
    title: 'Kids',
    description: 'Playful & Comfortable',
    image: kidsImg,
    link: '/kids'
  }
];
const FeaturedCategories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-slate-600">
            Discover fashion for every member of your family
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.title}
              to={category.link}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-stone-100 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-1">{category.title}</h3>
                <p className="text-white/90">{category.description}</p>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-4 h-4 border-2 border-white rounded-full" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;




