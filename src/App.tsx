import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';

// Route components
import MainLayout from './pages/MainLayout';
import NotFound from './pages/NotFound';

// Define app routes
const router = createBrowserRouter([
  { path: '/', element: <MainLayout /> },
  { path: '*', element: <NotFound /> },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
