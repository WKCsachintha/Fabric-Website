import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Eye } from 'lucide-react';

import menc6 from '../assets/men-c6.jpg';
import menc4 from '../assets/men-c4.jpg';

const collections = [
  {
    id: 'spring-summer-2025',
    name: 'Spring/Summer 2025',
    description: 'Fresh, vibrant pieces that celebrate the season of renewal',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
    itemCount: 24,
    releaseDate: 'March 2025',
    isNew: true
  },
  {
    id: 'professional-elegance',
    name: 'Professional Elegance',
    description: 'Sophisticated pieces for the modern professional',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800',
    itemCount: 18,
    releaseDate: 'February 2025',
    isNew: false
  },
  {
    id: 'casual-comfort',
    name: 'Casual Comfort',
    description: 'Effortless style for everyday moments',
    image: menc4,
    itemCount: 32,
    releaseDate: 'January 2025',
    isNew: false
  },
  {
    id: 'evening-glamour',
    name: 'Evening Glamour',
    description: 'Show-stopping pieces for special occasions',
    image: 'https://images.pexels.com/photos/1450114/pexels-photo-1450114.jpeg?auto=compress&cs=tinysrgb&w=800',
    itemCount: 15,
    releaseDate: 'December 2024',
    isNew: false
  },
  {
    id: 'sustainable-essentials',
    name: 'Sustainable Essentials',
    description: 'Eco-friendly basics that never go out of style',
    image: 'https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=800',
    itemCount: 20,
    releaseDate: 'November 2024',
    isNew: false
  },
  {
    id: 'winter-warmth',
    name: 'Winter Warmth',
    description: 'Cozy and stylish pieces for the colder months',
    image: menc6,
    itemCount: 28,
    releaseDate: 'October 2024',
    isNew: false
  }
];

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'seasonal', 'lifestyle', 'occasion'];

  const filteredCollections = collections.filter(collection => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'seasonal') {
      return ['spring-summer-2025', 'winter-warmth'].includes(collection.id);
    }
    if (selectedCategory === 'lifestyle') {
      return ['professional-elegance', 'casual-comfort', 'sustainable-essentials'].includes(collection.id);
    }
    if (selectedCategory === 'occasion') {
      return ['evening-glamour'].includes(collection.id);
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-stone-100 to-rose-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Our Collections</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover curated collections that tell unique stories through fashion. 
              Each collection is thoughtfully designed to celebrate different aspects of your life.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors capitalize ${
                selectedCategory === category
                  ? 'bg-slate-800 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-100'
              }`}
            >
              {category === 'all' ? 'All Collections' : category}
            </button>
          ))}
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCollections.map((collection) => (
            <div
              key={collection.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {collection.isNew && (
                    <span className="bg-lime-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                      New
                    </span>
                  )}
                </div>

                {/* View Collection Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link
                    to={`/collections/${collection.id}`}
                    className="bg-white text-slate-800 px-6 py-3 rounded-lg font-medium hover:bg-stone-100 transition-colors flex items-center gap-2"
                  >
                    <Eye size={16} />
                    View Collection
                  </Link>
                </div>

                {/* Collection Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{collection.name}</h3>
                  <p className="text-white/90 text-sm mb-2">{collection.description}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-slate-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {collection.releaseDate}
                  </div>
                  <span>{collection.itemCount} items</span>
                </div>
                
                <Link
                  to={`/collections/${collection.id}`}
                  className="w-full bg-slate-800 text-white py-3 rounded-lg hover:bg-slate-700 transition-colors font-medium text-center block"
                >
                  Explore Collection
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Collection Banner */}
        <div className="mt-16 bg-gradient-to-r from-rose-400 to-rose-500 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Spring/Summer 2025</h2>
          <p className="text-xl mb-6 opacity-90">
            Our newest collection celebrates renewal, growth, and the beauty of fresh beginnings
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/collections/spring-summer-2025"
              className="bg-white text-rose-500 px-8 py-3 rounded-lg font-medium hover:bg-stone-100 transition-colors"
            >
              Shop Now
            </Link>
            <Link
              to="/our-story"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-rose-500 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;