import React, { useState } from 'react';
import { 
  Shield, 
  Flame, 
  Zap, 
  Eye, 
  HardHat, 
  Search,
  Filter
} from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products', icon: Shield },
    { id: 'fire', name: 'Fire Protection', icon: Flame },
    { id: 'electrical', name: 'Electrical Safety', icon: Zap },
    { id: 'ppe', name: 'Personal Protection', icon: HardHat },
    { id: 'monitoring', name: 'Monitoring Systems', icon: Eye }
  ];

  const products = [
    {
      id: 1,
      name: "Fire Extinguisher - ABC Type",
      category: "fire",
      description: "Multi-purpose fire extinguisher for Class A, B, and C fires",
      features: ["6kg capacity", "ABC powder", "BS EN3 certified", "5-year warranty"],
      image: "fire-extinguisher",
      price: "₹2,500"
    },
    {
      id: 2,
      name: "Safety Helmet - Industrial Grade",
      category: "ppe",
      description: "High-quality safety helmet with adjustable headband",
      features: ["IS 2925 certified", "Adjustable headband", "UV resistant", "Lightweight"],
      image: "safety-helmet",
      price: "₹450"
    },
    {
      id: 3,
      name: "Circuit Breaker - MCB 32A",
      category: "electrical",
      description: "Miniature circuit breaker for electrical protection",
      features: ["32A rating", "Type C curve", "IEC 60898 certified", "Quick trip"],
      image: "circuit-breaker",
      price: "₹180"
    },
    {
      id: 4,
      name: "Safety Glasses - Anti-Fog",
      category: "ppe",
      description: "Anti-fog safety glasses with UV protection",
      features: ["Anti-fog coating", "UV400 protection", "Lightweight frame", "Clear lens"],
      image: "safety-glasses",
      price: "₹350"
    },
    {
      id: 5,
      name: "Smoke Detector - Photoelectric",
      category: "fire",
      description: "Advanced smoke detection system with alarm",
      features: ["Photoelectric sensor", "Battery backup", "Test button", "LED indicator"],
      image: "smoke-detector",
      price: "₹1,200"
    },
    {
      id: 6,
      name: "Safety Gloves - Cut Resistant",
      category: "ppe",
      description: "Cut-resistant safety gloves for industrial use",
      features: ["Level 5 cut resistance", "Comfortable fit", "Breathable", "Grip enhanced"],
      image: "safety-gloves",
      price: "₹280"
    },
    {
      id: 7,
      name: "Emergency Light - LED",
      category: "fire",
      description: "LED emergency lighting system with battery backup",
      features: ["LED technology", "3-hour backup", "Auto switch", "Wall mounted"],
      image: "emergency-light",
      price: "₹1,800"
    },
    {
      id: 8,
      name: "Voltage Tester - Digital",
      category: "electrical",
      description: "Digital voltage tester for electrical safety",
      features: ["12-1000V range", "Digital display", "Auto power off", "CAT III 600V"],
      image: "voltage-tester",
      price: "₹950"
    },
    {
      id: 9,
      name: "Safety Boots - Steel Toe",
      category: "ppe",
      description: "Steel toe safety boots with slip resistance",
      features: ["Steel toe cap", "Slip resistant", "Waterproof", "Comfortable"],
      image: "safety-boots",
      price: "₹1,500"
    },
    {
      id: 10,
      name: "Fire Alarm Panel - 4 Zone",
      category: "fire",
      description: "4-zone fire alarm control panel",
      features: ["4 zones", "LCD display", "Battery backup", "Fault monitoring"],
      image: "fire-alarm-panel",
      price: "₹8,500"
    },
    {
      id: 11,
      name: "Ear Protection - Noise Cancelling",
      category: "ppe",
      description: "Noise cancelling ear protection for industrial use",
      features: ["SNR 25dB", "Adjustable headband", "Lightweight", "Comfortable"],
      image: "ear-protection",
      price: "₹420"
    },
    {
      id: 12,
      name: "Gas Detector - Multi-Gas",
      category: "monitoring",
      description: "Multi-gas detection system for hazardous environments",
      features: ["4-gas detection", "Rechargeable", "Data logging", "Alarm system"],
      image: "gas-detector",
      price: "₹15,000"
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Products
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            High-quality industrial safety equipment and protection products 
            designed to keep your workplace safe and compliant.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg border transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white border-primary-600'
                      : 'bg-white text-gray-600 border-gray-300 hover:border-primary-300 hover:text-primary-600'
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'all' ? 'All Products' : 
                categories.find(cat => cat.id === selectedCategory)?.name}
            </h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <button className="flex items-center px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <Shield className="h-16 w-16 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Product Image</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {product.description}
                  </p>
                  <div className="mb-4">
                    <ul className="space-y-1">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <li key={index} className="flex items-center text-xs text-gray-600">
                          <div className="w-1 h-1 bg-primary-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary-600">
                      {product.price}
                    </span>
                    <button className="btn-primary text-sm px-4 py-2">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Product Categories
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive range of safety equipment and protection products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.slice(1).map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.id} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {category.id === 'fire' && "Fire detection, suppression, and prevention equipment"}
                    {category.id === 'electrical' && "Electrical safety and protection devices"}
                    {category.id === 'ppe' && "Personal protective equipment for workplace safety"}
                    {category.id === 'monitoring' && "Safety monitoring and detection systems"}
                  </p>
                  <button 
                    onClick={() => setSelectedCategory(category.id)}
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    View Products →
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Custom Safety Solutions?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Contact our team for customized safety equipment and bulk orders
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Request Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products; 