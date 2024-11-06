import React from 'react';

// Simulating CSS Modules since we can't use them directly in this environment
const styles = {
  container: 'bg-white rounded-lg shadow-md p-6 space-y-6',
  title: 'text-2xl font-bold text-gray-800 mb-4',
  description: 'text-gray-600 mb-6',
  example: 'mt-8 p-6 bg-gray-50 rounded-lg',
  button: 'px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors',
  buttonSecondary: 'px-4 py-2 border border-indigo-500 text-indigo-500 rounded hover:bg-indigo-50 transition-colors',
};

function CssModules() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>CSS Modules</h2>
      <p className={styles.description}>
        CSS Modules provide local scoping and composition in CSS.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Do's */}
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Do's</h3>
          <ul className="space-y-3 text-green-700">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Use camelCase naming
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Keep styles close to components
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Use composition
            </li>
          </ul>
        </div>

        {/* Don'ts */}
        <div className="bg-red-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-red-800 mb-4">Don'ts</h3>
          <ul className="space-y-3 text-red-700">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              Don't use global selectors
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              Avoid deep nesting
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              Don't use ID selectors
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.example}>
        <h3 className="text-lg font-semibold mb-4">Example Usage</h3>
        <pre className="bg-gray-800 text-white p-4 rounded-lg mb-4 overflow-x-auto">
          {`// Button.module.css
.button {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: all 0.2s;
}

.primary {
  background: var(--primary-color);
  color: white;
}

.secondary {
  background: transparent;
  border: 1px solid var(--primary-color);
}`}
        </pre>

        <div className="flex space-x-4">
          <button className={styles.button}>
            Primary Button
          </button>
          <button className={styles.buttonSecondary}>
            Secondary Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default CssModules;