import { routerType } from '../types/router.types';
import About from './About';
import Signin from './Auth/Signin';
import Signup from './Auth/Signup';
import Contact from './Contact';
import Error from './Error';
import Home from './Home';
import Landing from './Landing';
import Repo from './Repo';

const pagesData: routerType[] = [
  {
    title: 'Error',
    path: '*',
    element: <Error />,
  },
  {
    title: 'home',
    path: '/',
    element: <Home />,
  },
  {
    title: 'about',
    path: 'about',
    element: <About />,
  },
  {
    title: 'contact',
    path: 'contact',
    element: <Contact />,
  },
  {
    title: 'repo',
    path: 'repo',
    element: <Repo />,
  },
  {
    title: 'auth',
    path: 'auth',
    element: <Landing />,
    children: [
      {
        path: 'sign-in',
        element: <Signin />,
        title: 'sign-in',
      },
      {
        path: 'sign-up',
        element: <Signup />,
        title: 'sign-up',
      },
    ],
  },
];

export default pagesData;
