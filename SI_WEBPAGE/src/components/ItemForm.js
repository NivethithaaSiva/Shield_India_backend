import React, { useState } from 'react';

const ItemForm = ({ item, onSave, onCancel }) => {
  const [formData, setFormData] = useState(
    item || {
      name: '',
      productCode: '',
      imageUrl: '',
      specifications: '',
      protectionType: { id: '' },
      categories: [],
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  // These would typically come from an API
  const protectionTypes = [{ id: 1, name: "Fire Protection" }, { id: 2, name: "Electrical Safety" }];
  const allCategories = [{ id: 1, name: "Category A" }, { id: 2, name: "Category B" }, { id: 3, name: "Category C" }];

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Item Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          required
        />
      </div>
      <div>
        <label htmlFor="productCode" className="block text-sm font-medium text-gray-700">Product Code</label>
        <input
          type="text"
          name="productCode"
          id="productCode"
          value={formData.productCode}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          required
        />
      </div>
      <div>
        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Image URL</label>
        <input
          type="text"
          name="imageUrl"
          id="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
      <div>
        <label htmlFor="specifications" className="block text-sm font-medium text-gray-700">Specifications</label>
        <textarea
          name="specifications"
          id="specifications"
          rows="3"
          value={formData.specifications}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        ></textarea>
      </div>
      <div>
        <label htmlFor="protectionType" className="block text-sm font-medium text-gray-700">Protection Type</label>
        <select
          name="protectionType"
          id="protectionType"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          value={formData.protectionType.id}
          onChange={(e) => setFormData({ ...formData, protectionType: { id: e.target.value } })}
        >
          <option value="">Select a protection type</option>
          {protectionTypes.map(pt => <option key={pt.id} value={pt.id}>{pt.name}</option>)}
        </select>
      </div>
      
      {/* For categories, a multi-select or a more complex component would be ideal.
          For simplicity, we'll just show the IDs. A real implementation would be more user-friendly. */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Categories</label>
        <p className="text-sm text-gray-500">Current Category IDs: {formData.categories.map(c => c.id).join(', ')}</p>
        <p className="text-xs text-gray-400">Category editing UI would be here.</p>
      </div>

      <div className="flex justify-end space-x-4">
        <button type="button" onClick={onCancel} className="btn-secondary">
          Cancel
        </button>
        <button type="submit" className="btn-primary">
          Save Item
        </button>
      </div>
    </form>
  );
};

export default ItemForm; 