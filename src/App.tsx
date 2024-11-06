import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import InlineStyling from './pages/InlineStyling';
import CssModules from './pages/CssModules';
import StyledComponents from './pages/StyledComponents';
import TailwindExample from './pages/TailwindExample';
import GlobalStyles from './pages/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TailwindExample />} />
          <Route path="inline" element={<InlineStyling />} />
          <Route path="css-modules" element={<CssModules />} />
          <Route path="styled-components" element={<StyledComponents />} />
          <Route path="global-styles" element={<GlobalStyles />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;