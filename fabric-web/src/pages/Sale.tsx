import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Filter, Clock } from 'lucide-react';

import womenc3 from '../assets/women-c3.jpg';
import menf1 from '../assets/men-f1.jpg';
import menc2 from '../assets/men-c2.jpg';
import womenc2 from '../assets/women-c2.jpg';
import womenp2 from '../assets/women-p2.jpg';
import kidss1 from '../assets/kids-s1.jpg';

const saleProducts = [
  {
    id: 's1',
    name: 'Elegant Evening Dress',
    category: 'Women',
    price: 199,
    originalPrice: 299,
    discount: 33,
    image: womenc3,
    timeLeft: '2 days'
  },
  {
    id: 's2',
    name: 'Classic Business Suit',
    category: 'Men',
    price: 399,
    originalPrice: 549,
    discount: 27,
    image: menf1,
    timeLeft: '5 days'
  },
  {
    id: 's3',
    name: 'Casual Weekend Set',
    category: 'Women',
    price: 89,
    originalPrice: 129,
    discount: 31,
    image: womenc2,
    timeLeft: '1 day'
  },
  {
    id: 's4',
    name: 'Kids Play Set',
    category: 'Kids',
    price: 39,
    originalPrice: 59,
    discount: 34,
    image: kidss1,
    timeLeft: '3 days'
  },
  {
    id: 's5',
    name: 'Cocktail Party Dress',
    category: 'Women',
    price: 149,
    originalPrice: 199,
    discount: 25,
    image: womenp2,
    timeLeft: '4 days'
  },
  {
    id: 's6',
    name: 'Casual Polo Shirt',
    category: 'Men',
    price: 49,
    originalPrice: 79,
    discount: 38,
    image: menc2,
    timeLeft: '6 days'
  }
];

const categories = ['All', 'Women', 'Men', 'Kids'];

const Sale = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('discount');

  const filteredProducts = saleProducts.filter(product => 
    selectedCategory === 'All' || product.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-100 to-rose-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">
              <span className="text-red-600">SALE</span> - Up to 50% Off
            </h1>
            <p className="text-xl text-slate-600">Limited time offers on selected items</p>
            <div className="mt-6 inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-semibold">
              <Clock size={20} />
              Flash Sale Ends Soon!
            </div>
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
                    ? 'bg-red-600 text-white'
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
              className="px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent"
            >
              <option value="discount">Highest Discount</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="time">Time Left</option>
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
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-red-200"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                
                {/* Sale Badge */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{product.discount}%
                  </span>
                  <span className="bg-slate-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>

                {/* Time Left */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-slate-800">
                  <Clock size={14} className="inline mr-1" />
                  {product.timeLeft} left
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
                <div className="text-sm text-red-600 font-medium mb-2">
                  {product.category} • Sale
                </div>
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3 hover:text-red-600 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-red-600">
                    ${product.price}
                  </span>
                  <span className="text-slate-500 line-through">
                    ${product.originalPrice}
                  </span>
                  <span className="text-sm text-green-600 font-medium">
                    Save ${product.originalPrice - product.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sale Banner */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-rose-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Don't Miss Out!</h2>
          <p className="text-xl mb-6">These deals won't last long. Shop now and save big on your favorite items.</p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-stone-100 transition-colors">
            Shop All Sale Items
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sale;