import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Package,
  Filter
} from 'lucide-react';
import { protectionTypesAPI } from '../services/api';

const ProtectionTypes = () => {
  const [protectionTypes, setProtectionTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [protectionTypeToDelete, setProtectionTypeToDelete] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await protectionTypesAPI.getAll();
      setProtectionTypes(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await protectionTypesAPI.delete(id);
      setProtectionTypes(protectionTypes.filter(type => type.id !== id));
      setShowDeleteModal(false);
      setProtectionTypeToDelete(null);
    } catch (error) {
      console.error('Error deleting protection type:', error);
    }
  };

  const confirmDelete = (protectionType) => {
    setProtectionTypeToDelete(protectionType);
    setShowDeleteModal(true);
  };

  const filteredProtectionTypes = protectionTypes.filter(type => {
    return type.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           type.description?.toLowerCase().includes(searchTerm.toLowerCase());
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Protection Types Management</h1>
            <p className="text-gray-600 mt-2">Manage protection types and categories</p>
          </div>
          <Link
            to="/protection-types/new"
            className="btn btn-primary flex items-center space-x-2"
          >
            <Plus className="h-4 w-4" />
            <span>Add New Protection Type</span>
          </Link>
        </div>

        {/* Filters and Search */}
        <div className="card p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search protection types..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-input pl-10"
              />
            </div>
            <button 
              onClick={() => setSearchTerm('')}
              className="btn btn-secondary flex items-center justify-center space-x-2"
            >
              <Filter className="h-4 w-4" />
              <span>Clear Search</span>
            </button>
          </div>
        </div>

        {/* Protection Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProtectionTypes.map((protectionType) => (
            <div key={protectionType.id} className="card p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-full">
                    <Shield className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{protectionType.name}</h3>
                </div>
                <div className="flex space-x-2">
                  <Link
                    to={`/protection-types/${protectionType.id}/edit`}
                    className="text-primary-600 hover:text-primary-900"
                    title="Edit"
                  >
                    <Edit className="h-4 w-4" />
                  </Link>
                  <button
                    onClick={() => confirmDelete(protectionType)}
                    className="text-red-600 hover:text-red-900"
                    title="Delete"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="text-sm text-gray-600">
                  {protectionType.description || 'No description available'}
                </div>
                
                <div className="flex items-center space-x-2">
                  <Package className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">
                    Items: {protectionType.items?.length || 0}
                  </span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">
                    Categories: {protectionType.categories?.length || 0}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <Link
                  to={`/protection-types/${protectionType.id}`}
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredProtectionTypes.length === 0 && (
          <div className="text-center py-12">
            <Shield className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No protection types found</h3>
            <p className="mt-1 text-sm text-gray-500">
              {searchTerm
                ? 'Try adjusting your search criteria.'
                : 'Get started by creating a new protection type.'}
            </p>
            {!searchTerm && (
              <div className="mt-6">
                <Link to="/protection-types/new" className="btn btn-primary">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Protection Type
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
              <div className="mt-3 text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                  <Trash2 className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mt-4">Delete Protection Type</h3>
                <div className="mt-2 px-7 py-3">
                  <p className="text-sm text-gray-500">
                    Are you sure you want to delete "{protectionTypeToDelete?.name}"? This action cannot be undone.
                  </p>
                </div>
                <div className="flex justify-center space-x-4 mt-4">
                  <button
                    onClick={() => setShowDeleteModal(false)}
                    className="btn btn-secondary"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleDelete(protectionTypeToDelete.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProtectionTypes; 