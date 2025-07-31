import React, { useState } from 'react';
import { CreditCard, Plus, Edit, Trash2 } from 'lucide-react';

interface PaymentMethod {
  id: string;
  type: 'visa' | 'mastercard' | 'amex';
  last4: string;
  expiryMonth: string;
  expiryYear: string;
  isDefault: boolean;
}

const PaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: '1',
      type: 'visa',
      last4: '4242',
      expiryMonth: '12',
      expiryYear: '25',
      isDefault: true
    },
    {
      id: '2',
      type: 'mastercard',
      last4: '8888',
      expiryMonth: '08',
      expiryYear: '26',
      isDefault: false
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newCard, setNewCard] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });

  const handleAddCard = (e: React.FormEvent) => {
    e.preventDefault();
    // Add new card logic here
    setShowAddForm(false);
    setNewCard({ cardNumber: '', expiryDate: '', cvv: '', nameOnCard: '' });
  };

  const handleDeleteCard = (id: string) => {
    setPaymentMethods(methods => methods.filter(method => method.id !== id));
  };

  const handleSetDefault = (id: string) => {
    setPaymentMethods(methods =>
      methods.map(method => ({
        ...method,
        isDefault: method.id === id
      }))
    );
  };

  const getCardIcon = (type: string) => {
    switch (type) {
      case 'visa':
        return '💳';
      case 'mastercard':
        return '💳';
      case 'amex':
        return '💳';
      default:
        return '💳';
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-slate-800">Payment Methods</h1>
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition-colors flex items-center gap-2"
          >
            <Plus size={20} />
            Add Card
          </button>
        </div>

        {/* Payment Methods List */}
        <div className="space-y-4 mb-8">
          {paymentMethods.map((method) => (
            <div key={method.id} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-8 bg-gradient-to-r from-slate-600 to-slate-800 rounded flex items-center justify-center text-white text-xs font-bold">
                    {getCardIcon(method.type)}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-slate-800">
                        •••• •••• •••• {method.last4}
                      </span>
                      {method.isDefault && (
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                          Default
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-600">
                      Expires {method.expiryMonth}/{method.expiryYear}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {!method.isDefault && (
                    <button
                      onClick={() => handleSetDefault(method.id)}
                      className="text-sm text-slate-600 hover:text-slate-800 transition-colors"
                    >
                      Set as default
                    </button>
                  )}
                  <button className="text-slate-600 hover:text-slate-800 transition-colors">
                    <Edit size={16} />
                  </button>
                  <button
                    onClick={() => handleDeleteCard(method.id)}
                    className="text-red-600 hover:text-red-700 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Card Form */}
        {showAddForm && (
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Add New Card</h2>
            <form onSubmit={handleAddCard} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Card Number
                </label>
                <input
                  type="text"
                  value={newCard.cardNumber}
                  onChange={(e) => setNewCard({ ...newCard, cardNumber: e.target.value })}
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Name on Card
                </label>
                <input
                  type="text"
                  value={newCard.nameOnCard}
                  onChange={(e) => setNewCard({ ...newCard, nameOnCard: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    value={newCard.expiryDate}
                    onChange={(e) => setNewCard({ ...newCard, expiryDate: e.target.value })}
                    placeholder="MM/YY"
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    value={newCard.cvv}
                    onChange={(e) => setNewCard({ ...newCard, cvv: e.target.value })}
                    placeholder="123"
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  Add Card
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="border border-stone-300 text-slate-600 px-6 py-2 rounded-lg hover:bg-stone-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Security Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mt-8">
          <div className="flex items-start space-x-3">
            <CreditCard className="text-blue-600 mt-1" size={20} />
            <div>
              <h3 className="font-medium text-blue-800 mb-1">Secure Payment Processing</h3>
              <p className="text-blue-700 text-sm">
                Your payment information is encrypted and securely processed. We never store your full card details on our servers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;