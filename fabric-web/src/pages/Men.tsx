import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Filter } from 'lucide-react';

import menf2 from '../assets/men-f2.jpg';
import menf3 from '../assets/men-f3.jpg';
import menc2 from '../assets/men-c2.jpg';
import menc3 from '../assets/men-c3.jpg';
import menw1 from '../assets/men-w1.jpg';
import menw2 from '../assets/men-w2.jpg';
import mens1 from '../assets/men-s1.jpg';
import mens2 from '../assets/men-s2.jpg';
import mens3 from '../assets/men-s3.jpg';
import menc1 from '../assets/men-c1.jpg';
import menp1 from '../assets/men-p1.jpg';
import menp2 from '../assets/men-p2.jpg';
import menp3 from '../assets/men-p3.jpg';

const products = [
  {
    id: 'm1',
    name: 'Classic Business Suit',
    category: 'Formal Wear',
    price: 549,
    image: menf2,
    isNew: false
  },
  {
    id: 'm1',
    name: 'Classic Business Suit',
    category: 'Formal Wear',
    price: 549,
    image: menf3,
    isNew: false
  },
  {
    id: 'm2',
    name: 'Casual Polo Shirt',
    category: 'Casual Wear',
    price: 59,
    originalPrice: 79,
    image:menc2,
    isNew: true
  },
   {
    id: 'm2',
    name: 'Casual Polo Shirt',
    category: 'Casual Wear',
    price: 59,
    originalPrice: 79,
    image:menc3,
    isNew: true
  },
  {
    id: 'm3',
    name: 'Athletic Performance Wear',
    category: 'Sportswear',
    price: 89,
    image: mens2,
    isNew: true
  },
  {
    id: 'm3',
    name: 'Athletic Performance Wear',
    category: 'Sportswear',
    price: 89,
    image: mens1,
    isNew: true
  },
  {
    id: 'm3',
    name: 'Athletic Performance Wear',
    category: 'Sportswear',
    price: 89,
    image: mens3,
    isNew: true
  },
  {
    id: 'm4',
    name: 'Formal Tuxedo',
    category: 'Wedding Attire',
    price: 699,
    image: menw1,
    isNew: false
  },
   {
    id: 'm4',
    name: 'Formal Tuxedo',
    category: 'Wedding Attire',
    price: 599,
    image: menw2,
    isNew: false
  },
  {
    id: 'm5',
    name: 'Weekend Casual Set',
    category: 'Casual Wear',
    price: 129,
    originalPrice: 179,
    image: menc1,
    isNew: false
  },
  {
    id: 'm6',
    name: 'Party Blazer',
    category: 'Party Outfits',
    price: 299,
    image: menp1,
    isNew: true
  },
  {
    id: 'm6',
    name: 'Party Blazer',
    category: 'Party Outfits',
    price: 279,
    image: menp3,
    isNew: true
  }
];

const categories = ['All', 'Formal Wear', 'Casual Wear', 'Party Outfits', 'Wedding Attire', 'Sportswear'];

const Men = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = products.filter(product => 
    selectedCategory === 'All' || product.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-stone-100 to-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Men's Collection</h1>
            <p className="text-xl text-slate-600">Classic & Modern Style</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
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

export default Men;