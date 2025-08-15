import  { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star, Truck, Shield, RotateCcw } from 'lucide-react';
import { useCart } from '../context/CartContext';

// Mock product data - in a real app, this would come from an API
const getProductById = (id: string) => {
  const products = {
    'w1': {
      id: 'w1',
      name: 'Elegant Evening Dress',
      category: 'Formal Wear',
      price: 299,
      originalPrice: 399,
      images: [
        'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      description: 'A stunning evening dress perfect for special occasions. Made from premium materials with exquisite attention to detail.',
      features: ['Premium fabric', 'Elegant design', 'Perfect fit', 'Dry clean only'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Navy', 'Burgundy'],
      rating: 4.8,
      reviews: 124,
      isNew: true
    }
  };
  return products[id as keyof typeof products];
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  const product = getProductById(id || '');

  if (!product) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Product not found</h2>
          <Link to="/" className="text-rose-400 hover:text-rose-500">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor
    });
  };

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link to="/" className="text-slate-600 hover:text-slate-800">Home</Link></li>
            <li className="text-slate-400">/</li>
            <li><Link to="/women" className="text-slate-600 hover:text-slate-800">Women</Link></li>
            <li className="text-slate-400">/</li>
            <li className="text-slate-800">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-2xl overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-rose-400' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              {product.isNew && (
                <span className="inline-block bg-lime-700 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                  New
                </span>
              )}
              <h1 className="text-3xl font-bold text-slate-800">{product.name}</h1>
              <p className="text-rose-400 font-medium">{product.category}</p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-slate-300'}
                  />
                ))}
                <span className="ml-2 text-slate-600">({product.reviews} reviews)</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-slate-800">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-slate-500 line-through">${product.originalPrice}</span>
              )}
            </div>

            <p className="text-slate-600 leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            <div>
              <h3 className="font-medium text-slate-800 mb-3">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg font-medium transition-colors ${
                      selectedSize === size
                        ? 'border-slate-800 bg-slate-800 text-white'
                        : 'border-stone-300 hover:border-slate-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-medium text-slate-800 mb-3">Color</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-lg font-medium transition-colors ${
                      selectedColor === color
                        ? 'border-slate-800 bg-slate-800 text-white'
                        : 'border-stone-300 hover:border-slate-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-medium text-slate-800 mb-3">Quantity</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-100 transition-colors"
                >
                  -
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-100 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-slate-800 text-white py-3 rounded-lg hover:bg-slate-700 transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <ShoppingBag size={20} />
                <span>Add to Cart</span>
              </button>
              <button className="w-12 h-12 border border-stone-300 rounded-lg flex items-center justify-center hover:bg-stone-100 transition-colors">
                <Heart size={20} />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-200">
              <div className="text-center">
                <Truck size={24} className="mx-auto text-slate-600 mb-2" />
                <p className="text-sm text-slate-600">Free Shipping</p>
              </div>
              <div className="text-center">
                <RotateCcw size={24} className="mx-auto text-slate-600 mb-2" />
                <p className="text-sm text-slate-600">Easy Returns</p>
              </div>
              <div className="text-center">
                <Shield size={24} className="mx-auto text-slate-600 mb-2" />
                <p className="text-sm text-slate-600">Secure Payment</p>
              </div>
            </div>

            {/* Product Features */}
            <div className="pt-6 border-t border-stone-200">
              <h3 className="font-medium text-slate-800 mb-3">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-slate-600">
                    <div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;