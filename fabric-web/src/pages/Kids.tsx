import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Filter } from 'lucide-react';

import kidsw1 from '../assets/kids-w1.jpg'
import kidsw2 from '../assets/kids-w2.jpg'
import kidsc1 from '../assets/kids-c1.jpg'
import kidsc2 from '../assets/kids-c2.jpg'
import kidss1 from '../assets/kids-s1.jpg'
import kidss2 from '../assets/kids-s2.jpg'
import kidsc3 from '../assets/kids-c3.jpg'

const products = [
  {
    id: 'k1',
    name: 'Playful Summer Dress',
    category: 'Casual Wear',
    price: 49,
    originalPrice: 69,
    image: kidsc1,
    isNew: true,
    ageGroup: 'Girls'
  },
  {
    id: 'k2',
    name: 'School Uniform Set',
    category: 'Formal Wear',
    price: 79,
    image: kidsw1,
    isNew: false,
    ageGroup: 'Boys'
  },
  {
    id: 'k3',
    name: 'Sports Activity Set',
    category: 'Sportswear',
    price: 59,
    image: kidss1,
    isNew: true,
    ageGroup: 'Unisex'
  },
  {
    id: 'k4',
    name: 'Party Outfit',
    category: 'Party Outfits',
    price: 89,
    image: kidsw2,
    isNew: false,
    ageGroup: 'Girls'
  },
  {
    id: 'k5',
    name: 'Casual Play Set',
    category: 'Casual Wear',
    price: 39,
    originalPrice: 59,
    image: kidsc2,
    isNew: false,
    ageGroup: 'Boys'
  },
  {
    id: 'k6',
    name: 'Winter Coat',
    category: 'Outerwear',
    price: 99,
    image: kidsc3,
    isNew: true,
    ageGroup: 'Unisex'
  }
];

const categories = ['All', 'Casual Wear', 'Formal Wear', 'Party Outfits', 'Sportswear', 'Outerwear'];
const ageGroups = ['All', 'Boys', 'Girls', 'Unisex'];

const Kids = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = products.filter(product => 
    (selectedCategory === 'All' || product.category === selectedCategory) &&
    (selectedAgeGroup === 'All' || product.ageGroup === selectedAgeGroup)
  );

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-lime-100 to-stone-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Kids Collection</h1>
            <p className="text-xl text-slate-600">Playful & Comfortable Fashion</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-slate-800 text-white'
                      : 'bg-white text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {ageGroups.map(ageGroup => (
                <button
                  key={ageGroup}
                  onClick={() => setSelectedAgeGroup(ageGroup)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedAgeGroup === ageGroup
                      ? 'bg-lime-700 text-white'
                      : 'bg-white text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {ageGroup}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
            <button className="flex items-center gap-2 px-4 py-2 border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors">
              <Filter size={16} />
              Filter
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {product.isNew && (
                    <span className="bg-lime-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                      New
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Sale
                    </span>
                  )}
                  <span className="bg-rose-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.ageGroup}
                  </span>
                </div>

                {/* Action buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Heart size={18} className="text-slate-600 hover:text-red-500" />
                  </button>
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <ShoppingBag size={18} className="text-slate-600 hover:text-slate-800" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm text-rose-400 font-medium mb-2">
                  {product.category}
                </div>
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3 hover:text-rose-400 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-slate-800">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-slate-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kids;