
import { Heart, ShoppingBag } from 'lucide-react';

import menf2 from '../assets/men-f2.jpg';
import menf3 from '../assets/men-f3.jpg';
import womenc2 from '../assets/women-c2.jpg';
import womens1 from '../assets/women-s1.jpg';
import kidsp1 from '../assets/kids-p1.jpg';
import womenw1 from '../assets/women-w1.jpg';


const products = [
  {
    id: 1,
    name: 'Elegant Evening Dress',
    category: 'Formal Wear',
    price: 299,
    originalPrice: 399,
    image: menf2,
    isNew: true
  },
  {
    id: 2,
    name: 'Classic Business Suit',
    category: 'Formal Wear',
    price: 549,
    image: menf3,
    isNew: false
  },
  {
    id: 3,
    name: 'Casual Weekend Set',
    category: 'Casual Wear',
    price: 129,
    originalPrice: 179,
    image: womenc2,
    isNew: false
  },
  {
    id: 4,
    name: 'Performance Wear',
    category: 'Sportswear',
    price: 89,
    image: womens1,
    isNew: true
  },
  {
    id: 5,
    name: ' Party Dress',
    category: 'Party Outfits',
    price: 199,
    originalPrice: 279,
    image: kidsp1,
    isNew: false
  },
  {
    id: 6,
    name: 'Bridal Collection Gown',
    category: 'Wedding Attire',
    price: 899,
    image: womenw1,
    isNew: true
  }
];

const ProductShowcase = () => {
  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Featured Collection
          </h2>
          <p className="text-xl text-slate-600">
            Curated pieces for every occasion and style
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
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
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  {product.name}
                </h3>
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

        <div className="text-center mt-12">
          <button className="bg-slate-800 text-white px-8 py-4 rounded-lg hover:bg-slate-700 transition-colors font-medium">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;