import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from '@/pages/HomePage';
import ButtonsPage from '@/pages/ButtonsPage';
import FormsPage from '@/pages/FormsPage';
import OverlaysPage from '@/pages/OverlaysPage';
import DataDisplayPage from '@/pages/DataDisplayPage';
import NavigationFeedbackPage from '@/pages/NavigationFeedbackPage';
import ThemingPage from '@/pages/ThemingPage';
import ComparisonPage from '@/pages/ComparisonPage';

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
      { path: 'navigation-feedback', element: <NavigationFeedbackPage /> },
      { path: 'theming', element: <ThemingPage /> },
      { path: 'comparison', element: <ComparisonPage /> },
    ],
  },
]);
