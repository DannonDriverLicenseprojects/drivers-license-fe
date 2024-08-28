import React, { useState } from 'react';
import { features } from '../constants';

const SchoolList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter the list based on the search term
  const filteredFeatures = features.filter(
    (feature) =>
      feature.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
      feature.school.toLowerCase().includes(searchTerm.toLowerCase()) ||
      feature.Address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          List Of Accredited Driving{' '}
          <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
            Schools
          </span>
        </h2>
      </div>

      {/* Search Input */}
      <div className="flex justify-center mt-10 lg:mt-20">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>

      <div className="mt-10 lg:mt-20 overflow-x-auto">
        <table className="w-full text-center">
          <thead>
            <tr>
              <th className="px-4 py-2">State</th>
              <th className="px-4 py-2">Driving School</th>
              <th className="px-4 py-2">Address</th>
            </tr>
          </thead>
          <tbody>
            {filteredFeatures.map((feature, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{feature.state}</td>
                <td className="px-4 py-2">{feature.school}</td>
                <td className="px-4 py-2">{feature.Address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SchoolList;
