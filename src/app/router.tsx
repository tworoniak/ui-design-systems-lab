import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from '@/pages/HomePage';
import ButtonsPage from '@/pages/ButtonsPage';
import FormsPage from '@/pages/FormsPage';
import OverlaysPage from '@/pages/OverlaysPage';
import ComparisonPage from '@/pages/ComparisonPage';
import DataDisplayPage from '@/pages/DataDisplayPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'buttons', element: <ButtonsPage /> },
      { path: 'forms', element: <FormsPage /> },
      { path: 'overlays', element: <OverlaysPage /> },
      { path: 'data-display', element: <DataDisplayPage /> },
      { path: 'comparison', element: <ComparisonPage /> },
    ],
  },
]);
