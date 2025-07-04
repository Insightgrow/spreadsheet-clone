import React, { useState } from 'react';

type Tab = 'All Customers' | 'My Customers' | 'Archived';

type Customer = {
  name: string;
  company: string;
  status: string;
  email: string;
};

const data: Customer[] = [
  { name: 'John Smith', company: 'OpenAI', status: 'Active', email: 'john@openai.com' },
  { name: 'Jane Doe', company: 'Google', status: 'Inactive', email: 'jane@google.com' },
];

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('All Customers');

  return (
    <div className="p-6 font-sans">
      <h1 className="text-xl font-bold mb-4">Hello Spreadsheet!</h1>

      {/* Toolbar */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <button
            onClick={() => console.log('Clicked: Filters')}
            className="px-4 py-1 border rounded text-sm"
          >
            Filters
          </button>
          <button
            onClick={() => console.log('Clicked: Export')}
            className="px-4 py-1 border rounded text-sm"
          >
            Export
          </button>
        </div>
        <button
          onClick={() => console.log('Clicked: New Customer')}
          className="px-4 py-2 bg-blue-600 text-white rounded text-sm"
        >
          + New Customer
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-4 text-sm">
        {['All Customers', 'My Customers', 'Archived'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as Tab)}
            className={`pb-1 border-b-2 ${
              activeTab === tab
                ? 'border-blue-600 font-semibold text-blue-600'
                : 'border-transparent text-gray-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table */}
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="border-b p-2 font-medium">Name</th>
            <th className="border-b p-2 font-medium">Company</th>
            <th className="border-b p-2 font-medium">Status</th>
            <th className="border-b p-2 font-medium">Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row: Customer, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-2 border-b">{row.name}</td>
              <td className="p-2 border-b">{row.company}</td>
              <td className="p-2 border-b">{row.status}</td>
              <td className="p-2 border-b">{row.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
