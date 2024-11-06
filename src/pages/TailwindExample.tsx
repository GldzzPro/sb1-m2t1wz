import React from 'react';

function TailwindExample() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Tailwind CSS</h2>
        <p className="text-gray-600 mb-6">
          Utility-first CSS framework that promotes rapid development and maintainability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Do's */}
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-4">Do's</h3>
            <ul className="space-y-3 text-green-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Use consistent spacing utilities
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Leverage component extraction for repeated patterns
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Use responsive prefixes systematically
              </li>
            </ul>
          </div>

          {/* Don'ts */}
          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-red-800 mb-4">Don'ts</h3>
            <ul className="space-y-3 text-red-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Mix Tailwind with other styling approaches unnecessarily
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Write custom CSS when Tailwind utilities exist
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Overuse @apply in component styles
              </li>
            </ul>
          </div>
        </div>

        {/* Example Component */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Example Component</h3>
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center">
                <span className="text-2xl text-white">TB</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Tailwind Best Practices</h4>
                <p className="text-gray-600">Clean, maintainable, and responsive design</p>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <button className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors">
                Primary Action
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                Secondary Action
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TailwindExample;