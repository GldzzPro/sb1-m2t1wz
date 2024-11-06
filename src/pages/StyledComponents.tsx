import React from 'react';
import styled from 'styled-components';

// Styled Components examples
const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
`;

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;

  ${({ variant = 'primary' }) =>
    variant === 'primary'
      ? `
    background: #4f46e5;
    color: white;
    &:hover {
      background: #4338ca;
    }
  `
      : `
    background: white;
    color: #4f46e5;
    border: 1px solid #4f46e5;
    &:hover {
      background: #f3f4f6;
    }
  `}
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

function StyledComponents() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Styled Components</h2>
        <p className="text-gray-600 mb-6">
          CSS-in-JS solution that allows you to write actual CSS in your JavaScript.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Do's */}
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-4">Do's</h3>
            <ul className="space-y-3 text-green-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Use props for dynamic styling
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Create reusable styled components
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Use composition patterns
              </li>
            </ul>
          </div>

          {/* Don'ts */}
          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-red-800 mb-4">Don'ts</h3>
            <ul className="space-y-3 text-red-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Don't create too many small components
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Avoid nested selectors when possible
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Don't mix with other styling solutions
              </li>
            </ul>
          </div>
        </div>

        {/* Example Components */}
        <Card>
          <h3 className="text-lg font-semibold mb-4">Example Components</h3>
          <FlexContainer>
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
          </FlexContainer>
        </Card>
      </div>
    </div>
  );
}

export default StyledComponents;