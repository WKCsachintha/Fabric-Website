import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu, X, Bell } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const handleUserClick = () => {
    if (user) {
      navigate('/account');
    } else {
      navigate('/login');
    }
  };

  return (
    <header className="bg-stone-50 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-slate-800">
              Pattern & Piece
            </h1>
            <p className="text-xs text-stone-600 -mt-1">Fashion for Every Story</p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/women" className="text-slate-800 hover:text-rose-400 transition-colors font-medium">
              Women
            </Link>
            <Link to="/men" className="text-slate-800 hover:text-rose-400 transition-colors font-medium">
              Men
            </Link>
            <Link to="/kids" className="text-slate-800 hover:text-rose-400 transition-colors font-medium">
              Kids
            </Link>
            <Link to="/sale" className="text-lime-700 hover:text-lime-600 transition-colors font-medium">
              Sale
            </Link>
            <Link to="/collections" className="text-slate-800 hover:text-rose-400 transition-colors font-medium">
              Collections
            </Link>
            <Link to="/our-story" className="text-slate-800 hover:text-rose-400 transition-colors font-medium">
              Our Story
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-slate-800 hover:text-rose-400 transition-colors">
              <Search size={20} />
            </button>
            {user && (
              <Link to="/notifications" className="text-slate-800 hover:text-rose-400 transition-colors">
                <Bell size={20} />
              </Link>
            )}
            <button 
              onClick={handleUserClick}
              className="text-slate-800 hover:text-rose-400 transition-colors"
            >
              <User size={20} />
            </button>
            <Link to="/cart" className="text-slate-800 hover:text-rose-400 transition-colors relative">
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-800 hover:text-rose-400 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-stone-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/women" className="text-slate-800 hover:text-rose-400 transition-colors font-medium">
                Women
              </Link>
              <Link to="/men" className="text-slate-800 hover:text-rose-400 transition-colors font-medium">
                Men
              </Link>
              <Link to="/kids" className="text-slate-800 hover:text-rose-400 transition-colors font-medium">
                Kids
              </Link>
              <Link to="/sale" className="text-lime-700 hover:text-lime-600 transition-colors font-medium">
                Sale
              </Link>
              <Link to="/collections" className="text-slate-800 hover:text-rose-400 transition-colors font-medium">
                Collections
              </Link>
              <Link to="/our-story" className="text-slate-800 hover:text-rose-400 transition-colors font-medium">
                Our Story
              </Link>
              <div className="flex items-center space-x-4 pt-4 border-t border-stone-200">
                <button className="text-slate-800 hover:text-rose-400 transition-colors">
                  <Search size={20} />
                </button>
                {user && (
                  <Link to="/notifications" className="text-slate-800 hover:text-rose-400 transition-colors">
                    <Bell size={20} />
                  </Link>
                )}
                <button 
                  onClick={handleUserClick}
                  className="text-slate-800 hover:text-rose-400 transition-colors"
                >
                  <User size={20} />
                </button>
                <Link to="/cart" className="text-slate-800 hover:text-rose-400 transition-colors relative">
                  <ShoppingBag size={20} />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-rose-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;