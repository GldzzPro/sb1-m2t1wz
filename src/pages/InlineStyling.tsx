import React from 'react';

function InlineStyling() {
  // Example of problematic inline styles
  const badStyles = {
    container: {
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    button: {
      backgroundColor: '#4f46e5',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
  };

  // Example of better organized inline styles
  const goodStyles = {
    container: {
      padding: '1.5rem',
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      marginBottom: '2rem',
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '1rem',
    },
    description: {
      color: '#4b5563',
      marginBottom: '1.5rem',
    },
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Inline Styling</h2>
        <p className="text-gray-600 mb-6">
          Understanding the pros and cons of inline styling in React components.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Do's */}
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-4">Do's</h3>
            <ul className="space-y-3 text-green-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Use for truly dynamic styles
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Keep styles organized in objects
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Use for quick prototypes
              </li>
            </ul>
          </div>

          {/* Don'ts */}
          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-red-800 mb-4">Don'ts</h3>
            <ul className="space-y-3 text-red-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Don't use for large applications
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Avoid mixing with other styling approaches
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Don't repeat inline styles
              </li>
            </ul>
          </div>
        </div>

        {/* Bad Example */}
        <div style={badStyles.container} className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Bad Example</h3>
          <div style={{ marginBottom: '10px', color: '#374151' }}>
            <p style={{ fontSize: '14px', lineHeight: '1.5' }}>
              This example shows inline styles scattered throughout the JSX
            </p>
          </div>
          <button style={badStyles.button}>Inline Styled Button</button>
        </div>

        {/* Good Example */}
        <div style={goodStyles.container}>
          <h3 style={goodStyles.title}>Good Example</h3>
          <p style={goodStyles.description}>
            This example shows organized inline styles using a style object
          </p>
        </div>
      </div>
    </div>
  );
}

export default InlineStyling;