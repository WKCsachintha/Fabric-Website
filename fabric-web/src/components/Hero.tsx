import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-stone-50 to-rose-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Your Story
                <span className="text-rose-400 block">Starts Here</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Discover fashion that speaks to every chapter of your life. From professional elegance to casual comfort, we craft pieces that tell your unique story.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/collections"
                className="bg-slate-800 text-white px-8 py-4 rounded-lg hover:bg-slate-700 transition-colors flex items-center justify-center gap-2 font-medium"
              >
                Shop Collection
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/our-story"
                className="border-2 border-slate-800 text-slate-800 px-8 py-4 rounded-lg hover:bg-slate-800 hover:text-white transition-colors font-medium text-center"
              >
                Our Story
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800">10K+</div>
                <div className="text-sm text-slate-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800">500+</div>
                <div className="text-sm text-slate-600">Unique Pieces</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800">24/7</div>
                <div className="text-sm text-slate-600">Support</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-rose-100 to-stone-100 rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fashion Model"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-sm text-slate-600">New Collection</div>
              <div className="font-bold text-slate-800">Spring/Summer 2025</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;