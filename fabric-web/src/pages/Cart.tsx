
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-stone-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <ShoppingBag size={64} className="mx-auto text-slate-400 mb-4" />
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Your cart is empty</h2>
            <p className="text-slate-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
            <Link
              to="/"
              className="bg-slate-800 text-white px-8 py-3 rounded-lg hover:bg-slate-700 transition-colors font-medium"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={`${item.id}-${item.size}-${item.color}`} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-800">{item.name}</h3>
                    <p className="text-sm text-slate-600">Size: {item.size} • Color: {item.color}</p>
                    <p className="text-lg font-bold text-slate-800 mt-1">${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(`${item.id}-${item.size}-${item.color}`, item.quantity - 1)}
                      className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-100 transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(`${item.id}-${item.size}-${item.color}`, item.quantity + 1)}
                      className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-100 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(`${item.id}-${item.size}-${item.color}`)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl p-6 shadow-sm h-fit">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
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

            <Link
              to="/checkout"
              className="w-full bg-slate-800 text-white py-3 rounded-lg hover:bg-slate-700 transition-colors font-medium text-center block"
            >
              Proceed to Checkout
            </Link>

            <Link
              to="/"
              className="w-full text-center text-slate-600 hover:text-slate-800 transition-colors mt-4 block"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;