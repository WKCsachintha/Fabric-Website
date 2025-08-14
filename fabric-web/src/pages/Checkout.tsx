import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, MapPin, Truck, Lock } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process order
    alert('Order placed successfully!');
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-stone-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Your cart is empty</h2>
            <Link to="/" className="text-rose-400 hover:text-rose-500">
              Continue shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">
                    1
                  </div>
                  <h2 className="text-xl font-semibold text-slate-800">Contact Information</h2>
                </div>
                <div className="space-y-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">
                    2
                  </div>
                  <h2 className="text-xl font-semibold text-slate-800">Shipping Address</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                    required
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="md:col-span-2 px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                    required
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                    required
                  />
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                    required
                  >
                    <option value="">Select State</option>
                    <option value="CA">California</option>
                    <option value="NY">New York</option>
                    <option value="TX">Texas</option>
                  </select>
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="ZIP Code"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">
                    3
                  </div>
                  <h2 className="text-xl font-semibold text-slate-800">Payment Information</h2>
                  <Lock size={16} className="ml-2 text-slate-600" />
                </div>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card number"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                    required
                  />
                  <input
                    type="text"
                    name="nameOnCard"
                    placeholder="Name on card"
                    value={formData.nameOnCard}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                    required
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                      required
                    />
                    <input
                      type="text"
                      name="cvv"
                      placeholder="CVV"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-slate-800 text-white py-4 rounded-lg hover:bg-slate-700 transition-colors font-medium text-lg"
              >
                Complete Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl p-6 shadow-sm h-fit">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.size}-${item.color}`} className="flex items-center space-x-3">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                  <div className="flex-1">
                    <h3 className="font-medium text-slate-800">{item.name}</h3>
                    <p className="text-sm text-slate-600">{item.size} • {item.color}</p>
                    <p className="text-sm text-slate-600">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-6 border-t border-stone-200 pt-4">
              <div className="flex justify-between">
                <span className="text-slate-600">Subtotal</span>
                <span className="font-medium">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Shipping</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Tax</span>
                <span className="font-medium">${(totalPrice * 0.08).toFixed(2)}</span>
              </div>
              <div className="border-t border-stone-200 pt-3">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold text-slate-800">Total</span>
                  <span className="text-lg font-bold text-slate-800">
                    ${(totalPrice * 1.08).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-center">
                <Truck size={16} className="mr-2" />
                Free shipping on orders over $100
              </div>
              <div className="flex items-center">
                <Lock size={16} className="mr-2" />
                Secure checkout with SSL encryption
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;