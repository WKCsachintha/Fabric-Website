import  { useState } from 'react';
import { MapPin, Plus, Edit, Trash2, Home, Building } from 'lucide-react';

interface Address {
  id: string;
  type: 'home' | 'work' | 'other';
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  isDefault: boolean;
}

const Addresses = () => {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: '1',
      type: 'home',
      firstName: 'John',
      lastName: 'Doe',
      address: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      isDefault: true
    },
    {
      id: '2',
      type: 'work',
      firstName: 'John',
      lastName: 'Doe',
      address: '456 Business Ave',
      city: 'New York',
      state: 'NY',
      zipCode: '10002',
      isDefault: false
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newAddress, setNewAddress] = useState({
    type: 'home' as 'home' | 'work' | 'other',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault();
    const address: Address = {
      id: Date.now().toString(),
      ...newAddress,
      isDefault: addresses.length === 0
    };
    setAddresses([...addresses, address]);
    setShowAddForm(false);
    setNewAddress({
      type: 'home',
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zipCode: ''
    });
  };

  const handleDeleteAddress = (id: string) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
  };

  const handleSetDefault = (id: string) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })));
  };

  const getAddressIcon = (type: string) => {
    switch (type) {
      case 'home':
        return <Home size={20} className="text-slate-600" />;
      case 'work':
        return <Building size={20} className="text-slate-600" />;
      default:
        return <MapPin size={20} className="text-slate-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-slate-800">Shipping Addresses</h1>
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition-colors flex items-center gap-2"
          >
            <Plus size={20} />
            Add Address
          </button>
        </div>

        {/* Addresses List */}
        <div className="space-y-4 mb-8">
          {addresses.map((address) => (
            <div key={address.id} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    {getAddressIcon(address.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-medium text-slate-800 capitalize">
                        {address.type}
                      </span>
                      {address.isDefault && (
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                          Default
                        </span>
                      )}
                    </div>
                    <div className="text-slate-800">
                      <p className="font-medium">{address.firstName} {address.lastName}</p>
                      <p>{address.address}</p>
                      <p>{address.city}, {address.state} {address.zipCode}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {!address.isDefault && (
                    <button
                      onClick={() => handleSetDefault(address.id)}
                      className="text-sm text-slate-600 hover:text-slate-800 transition-colors"
                    >
                      Set as default
                    </button>
                  )}
                  <button className="text-slate-600 hover:text-slate-800 transition-colors">
                    <Edit size={16} />
                  </button>
                  <button
                    onClick={() => handleDeleteAddress(address.id)}
                    className="text-red-600 hover:text-red-700 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Address Form */}
        {showAddForm && (
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">Add New Address</h2>
            <form onSubmit={handleAddAddress} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Address Type
                </label>
                <select
                  value={newAddress.type}
                  onChange={(e) => setNewAddress({ ...newAddress, type: e.target.value as 'home' | 'work' | 'other' })}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                >
                  <option value="home">Home</option>
                  <option value="work">Work</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={newAddress.firstName}
                    onChange={(e) => setNewAddress({ ...newAddress, firstName: e.target.value })}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={newAddress.lastName}
                    onChange={(e) => setNewAddress({ ...newAddress, lastName: e.target.value })}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  value={newAddress.address}
                  onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                  required
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    value={newAddress.city}
                    onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    State
                  </label>
                  <select
                    value={newAddress.state}
                    onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                    required
                  >
                    <option value="">Select State</option>
                    <option value="CA">California</option>
                    <option value="NY">New York</option>
                    <option value="TX">Texas</option>
                    <option value="FL">Florida</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    value={newAddress.zipCode}
                    onChange={(e) => setNewAddress({ ...newAddress, zipCode: e.target.value })}
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
                  Add Address
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
      </div>
    </div>
  );
};

export default Addresses;