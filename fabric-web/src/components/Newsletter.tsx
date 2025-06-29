import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-rose-400 to-rose-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Mail size={48} className="mx-auto mb-6 text-white" />
          <h2 className="text-4xl font-bold text-white mb-4">
            Stay in Style
          </h2>
          <p className="text-xl text-white/90">
            Be the first to know about new collections, exclusive offers, and fashion insights
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg border-0 focus:ring-4 focus:ring-white/30 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-slate-800 text-white px-8 py-4 rounded-lg hover:bg-slate-700 transition-colors font-medium whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
        </form>

        <p className="text-white/70 text-sm mt-4">
          No spam, unsubscribe at any time
        </p>
      </div>
    </section>
  );
};

export default Newsletter;