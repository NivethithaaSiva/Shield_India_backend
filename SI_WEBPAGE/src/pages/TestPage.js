import React from 'react';
import { Shield, Package, Users } from 'lucide-react';

const TestPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Shield India
          </h1>
          <p className="text-xl text-gray-600">
            React Frontend is Working! 🎉
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Package className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">Products</h3>
            <p className="text-gray-600">Browse our industrial protection products</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Shield className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">Protection</h3>
            <p className="text-gray-600">Comprehensive safety solutions</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <p className="text-gray-600">Expert customer support</p>
          </div>
        </div>
        
        <div className="mt-8 space-x-4">
          <a 
            href="/login" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Admin Login
          </a>
          <a 
            href="/" 
            className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
          >
            Customer View
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestPage; 