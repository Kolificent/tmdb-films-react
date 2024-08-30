import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/root';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import List from './routes/List';
import FilmInfoPage from './routes/FilmInfoPage';
import ErrorPage from './routes/ErrorPage';
import { Provider } from 'react-redux';
import store from './store/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Navigate to="/list" replace />,
      },
      { path: 'list', element: <List /> },
      { path: 'film/:id', element: <FilmInfoPage /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
