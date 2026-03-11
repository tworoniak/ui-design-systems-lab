import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/app/router';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme='system' storageKey='ui-systems-theme'>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
