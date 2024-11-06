import React from 'react';

function GlobalStyles() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Global Styles</h2>
        <p className="text-gray-600 mb-6">
          Understanding the impact of global styles and CSS specificity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Do's */}
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-4">Do's</h3>
            <ul className="space-y-3 text-green-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Use CSS reset/normalize
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Define consistent typography
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Set base variables (colors, spacing)
              </li>
            </ul>
          </div>

          {/* Don'ts */}
          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-red-800 mb-4">Don'ts</h3>
            <ul className="space-y-3 text-red-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Avoid high specificity selectors
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Don't use !important
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Avoid deep nesting
              </li>
            </ul>
          </div>
        </div>

        {/* Examples */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Examples of Style Conflicts</h3>
          
          {/* Bad Example */}
          <div className="bg-red-50 p-4 rounded-lg mb-4">
            <h4 className="text-red-800 font-medium mb-2">Bad Example (Global Styles)</h4>
            <pre className="bg-white p-4 rounded text-sm overflow-x-auto">
              {`/* 🚫 Don't do this in global.css */
.button {
  background: blue !important;
  color: white !important;
}

/* Overly specific selectors */
.header .nav .menu .item a {
  color: red;
}`}
            </pre>
          </div>

          {/* Good Example */}
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="text-green-800 font-medium mb-2">Good Example (Global Styles)</h4>
            <pre className="bg-white p-4 rounded text-sm overflow-x-auto">
              {`/* ✅ Do this instead */
:root {
  --primary-color: #4f46e5;
  --text-color: #1f2937;
  --spacing-unit: 1rem;
}

/* Use BEM naming convention */
.button {
  background: var(--primary-color);
  padding: var(--spacing-unit);
}

.button--secondary {
  background: transparent;
  border: 1px solid var(--primary-color);
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GlobalStyles;