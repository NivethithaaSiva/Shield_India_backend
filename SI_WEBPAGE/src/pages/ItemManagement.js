import React, { useState } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';

const initialItems = [
  {
    id: 1,
    name: "Sample Item 1",
    productCode: "ITEM123",
    imageUrl: "http://example.com/image.jpg",
    specifications: "Sample specifications for item 1",
    protectionType: { id: 1, name: "Fire Protection" },
    categories: [
      { id: 1, name: "Category A" },
      { id: 2, name: "Category B" }
    ]
  },
  {
    id: 2,
    name: "Sample Item 2",
    productCode: "ITEM456",
    imageUrl: "http://example.com/image2.jpg",
    specifications: "Sample specifications for item 2",
    protectionType: { id: 2, name: "Electrical Safety" },
    categories: [
      { id: 3, name: "Category C" }
    ]
  }
];

const ItemManagement = () => {
  const [items, setItems] = useState(initialItems);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Item Management</h1>
        <button className="btn-primary flex items-center">
          <Plus className="h-4 w-4 mr-2" />
          Add New Item
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Code</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Protection Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categories</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {items.map(item => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src={item.imageUrl} alt={item.name} />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{item.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.productCode}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.protectionType.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.categories.map(cat => cat.name).join(', ')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-primary-600 hover:text-primary-900 mr-4">
                      <Edit className="h-5 w-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ItemManagement; 