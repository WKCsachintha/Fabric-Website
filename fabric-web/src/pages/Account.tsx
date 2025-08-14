import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Package, Heart, CreditCard, MapPin, Bell, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Account = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  const menuItems = [
    { icon: Package, label: 'Orders', href: '/orders', description: 'Track your orders' },
    { icon: Heart, label: 'Wishlist', href: '/wishlist', description: 'Saved items' },
    { icon: CreditCard, label: 'Payment Methods', href: '/payment-methods', description: 'Manage cards' },
    { icon: MapPin, label: 'Addresses', href: '/addresses', description: 'Shipping addresses' },
    { icon: Bell, label: 'Notifications', href: '/notifications', description: 'Alerts & updates' },
    { icon: Settings, label: 'Settings', href: '/settings', description: 'Account preferences' },
  ];

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-rose-500 rounded-full flex items-center justify-center">
              {user.avatar ? (
                <img src={user.avatar} alt={user.name} className="w-20 h-20 rounded-full object-cover" />
              ) : (
                <User size={32} className="text-white" />
              )}
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-slate-800">{user.name}</h1>
              <p className="text-slate-600">{user.email}</p>
              <p className="text-sm text-slate-500 mt-1">Member since 2024</p>
            </div>
            <button className="bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition-colors">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-slate-800">12</div>
            <div className="text-slate-600">Total Orders</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-slate-800">5</div>
            <div className="text-slate-600">Wishlist Items</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-slate-800">$1,250</div>
            <div className="text-slate-600">Total Spent</div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-stone-200">
            <h2 className="text-xl font-semibold text-slate-800">Account Management</h2>
          </div>
          <div className="divide-y divide-stone-200">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center p-6 hover:bg-stone-50 transition-colors group"
              >
                <div className="w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                  <item.icon size={24} className="text-slate-600 group-hover:text-rose-500" />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="font-medium text-slate-800 group-hover:text-rose-500 transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
                <div className="text-slate-400 group-hover:text-rose-500 transition-colors">
                  →
                </div>
              </Link>
            ))}
          </div>
          
          <div className="p-6 border-t border-stone-200">
            <button
              onClick={handleLogout}
              className="flex items-center text-red-600 hover:text-red-700 transition-colors"
            >
              <LogOut size={20} className="mr-2" />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;