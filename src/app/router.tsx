import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from '@/pages/HomePage';
import ButtonsPage from '@/pages/ButtonsPage';
import FormsPage from '@/pages/FormsPage';
import OverlaysPage from '@/pages/OverlaysPage';
import DataDisplayPage from '@/pages/DataDisplayPage';
import NavigationFeedbackPage from '@/pages/NavigationFeedbackPage';
import ThemingPage from '@/pages/ThemingPage';
import ComponentPlaygroundPage from '@/pages/ComponentPlaygroundPage';
import ComparisonPage from '@/pages/ComparisonPage';
import FormPlaygroundPage from '@/pages/FormPlaygroundPage';
import AccessibilityLabPage from '@/pages/AccessibilityLabPage';
import MiniDashboardPage from '@/pages/MiniDashboardPage';
import StatesLabPage from '@/pages/StatesLabPage';

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
      { path: 'playground', element: <ComponentPlaygroundPage /> },
      { path: 'playground/forms', element: <FormPlaygroundPage /> },
      { path: 'accessibility', element: <AccessibilityLabPage /> },
      { path: 'dashboard-lab', element: <MiniDashboardPage /> },
      { path: 'states', element: <StatesLabPage /> },
      { path: 'comparison', element: <ComparisonPage /> },
    ],
  },
]);
