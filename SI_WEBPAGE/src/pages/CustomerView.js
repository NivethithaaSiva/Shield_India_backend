import React, { useState } from 'react';
import { 
  Package, 
  Search, 
  Filter, 
  Shield, 
  Eye,
  ShoppingCart,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const CustomerView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProtectionType, setSelectedProtectionType] = useState('');

  // Mock data - no database required
  const mockItems = [
    {
      id: 1,
      name: "ABC Fire Extinguisher 5kg",
      productCode: "FE-ABC-5KG",
      specifications: "5kg ABC powder fire extinguisher, suitable for Class A, B, and C fires",
      protectionType: { name: "Fire Protection" },
      categories: [{ name: "Fire Extinguishers" }],
      imageUrl: null
    },
    {
      id: 2,
      name: "Smoke Detector",
      productCode: "SD-001",
      specifications: "Ionization smoke detector with 9V battery backup",
      protectionType: { name: "Fire Protection" },
      categories: [{ name: "Fire Alarms" }],
      imageUrl: null
    },
    {
      id: 3,
      name: "MCB 32A Circuit Breaker",
      productCode: "MCB-32A",
      specifications: "32A Miniature Circuit Breaker, Type C",
      protectionType: { name: "Electrical Protection" },
      categories: [{ name: "Circuit Breakers" }],
      imageUrl: null
    },
    {
      id: 4,
      name: "Chemical Resistant Gloves",
      productCode: "CRG-001",
      specifications: "Nitrile chemical resistant gloves, size L",
      protectionType: { name: "Chemical Protection" },
      categories: [{ name: "Safety Gloves" }],
      imageUrl: null
    },
    {
      id: 5,
      name: "Safety Helmet",
      productCode: "SH-001",
      specifications: "Industrial safety helmet with chin strap",
      protectionType: { name: "Personal Protection" },
      categories: [{ name: "Head Protection" }],
      imageUrl: null
    },
    {
      id: 6,
      name: "Safety Boots",
      productCode: "SB-001",
      specifications: "Steel toe safety boots, waterproof",
      protectionType: { name: "Personal Protection" },
      categories: [{ name: "Foot Protection" }],
      imageUrl: null
    }
  ];

  const mockCategories = [
    { id: 1, name: "Fire Extinguishers" },
    { id: 2, name: "Fire Alarms" },
    { id: 3, name: "Circuit Breakers" },
    { id: 4, name: "Safety Gloves" },
    { id: 5, name: "Head Protection" },
    { id: 6, name: "Foot Protection" }
  ];

  const mockProtectionTypes = [
    { id: 1, name: "Fire Protection" },
    { id: 2, name: "Electrical Protection" },
    { id: 3, name: "Chemical Protection" },
    { id: 4, name: "Personal Protection" }
  ];

  const filteredItems = mockItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.productCode.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || 
                           item.categories?.some(cat => cat.name === selectedCategory);
    const matchesProtectionType = !selectedProtectionType || 
                                 item.protectionType?.name === selectedProtectionType;
    return matchesSearch && matchesCategory && matchesProtectionType;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Shield India</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="btn-primary flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Industrial Protection Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of industrial protection equipment and safety solutions
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="input-field pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="input-field"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {mockCategories.map(category => (
                <option key={category.id} value={category.name}>{category.name}</option>
              ))}
            </select>
            <select
              className="input-field"
              value={selectedProtectionType}
              onChange={(e) => setSelectedProtectionType(e.target.value)}
            >
              <option value="">All Protection Types</option>
              {mockProtectionTypes.map(type => (
                <option key={type.id} value={type.name}>{type.name}</option>
              ))}
            </select>
            <button 
              className="btn-secondary flex items-center justify-center"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('');
                setSelectedProtectionType('');
              }}
            >
              <Filter className="h-4 w-4 mr-2" />
              Clear Filters
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
              <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                {item.imageUrl ? (
                  <img 
                    src={item.imageUrl} 
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 flex items-center justify-center">
                    <Package className="h-12 w-12 text-gray-400" />
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {item.productCode}
                  </span>
                  {item.protectionType && (
                    <span className="text-xs font-medium text-primary-600 bg-primary-100 px-2 py-1 rounded">
                      {item.protectionType.name}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                {item.specifications && (
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {item.specifications}
                  </p>
                )}
                {item.categories && item.categories.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {item.categories.slice(0, 2).map((category, index) => (
                      <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {category.name}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex space-x-2">
                  <button className="flex-1 btn-primary flex items-center justify-center">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </button>
                  <button className="btn-secondary">
                    <ShoppingCart className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-16 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600">Get in touch with our team for expert advice and support</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Phone className="h-8 w-8 text-primary-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+91-9876543210</p>
            </div>
            <div className="text-center">
              <Mail className="h-8 w-8 text-primary-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@shieldindia.com</p>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 text-primary-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-gray-600">Mumbai, Maharashtra, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerView; 