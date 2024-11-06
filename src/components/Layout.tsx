import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Palette, Code2, Layers, Paintbrush, Globe } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Tailwind CSS', icon: Palette },
  { path: '/inline', label: 'Inline Styling', icon: Code2 },
  { path: '/css-modules', label: 'CSS Modules', icon: Layers },
  { path: '/styled-components', label: 'Styled Components', icon: Paintbrush },
  { path: '/global-styles', label: 'Global Styles', icon: Globe },
];

function Layout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-indigo-600">Styling Guide</h1>
          <p className="text-sm text-gray-600 mt-2">React Styling Approaches</p>
        </div>
        <nav className="mt-6">
          {navItems.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center px-6 py-3 text-sm ${
                location.pathname === path
                  ? 'bg-indigo-50 text-indigo-600 border-r-4 border-indigo-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              {label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;