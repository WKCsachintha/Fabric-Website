
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Pattern & Piece</h3>
            <p className="text-white/70">
              Fashion for Every Story - Crafting timeless pieces that celebrate your unique journey.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Women</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Men</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Kids</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Sale</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">New Arrivals</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © 2025 Pattern & Piece. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
              Terms
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;