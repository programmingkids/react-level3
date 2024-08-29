import { Layout } from './../layouts/Layout';
import { Home } from './../pages/Home';
import { MemoCompleted } from './../pages/MemoCompleted';
import { MemoAdd } from './../pages/MemoAdd';
import { MemoEdit } from './../pages/MemoEdit';
import { About } from './../pages/About';
import { NotFound } from './../pages/NotFound';

export const routeData = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'add',
        element: <MemoAdd />,
      },
      {
        path: 'edit/:id',
        element: <MemoEdit />,
      },
      {
        path: 'completed',
        element: <MemoCompleted />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
