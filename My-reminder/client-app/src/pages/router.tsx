import { Route, Routes } from 'react-router-dom';
import { routerType } from '../types/router.types';
import pagesData from './pagesData';

const renderRoutes = (routes: routerType[]) => {
  return routes.map(({ title, path, element, children = [] }) => {
    return (
      <Route key={title} path={path} element={element}>
        {children.length > 0 && <Route>{renderRoutes(children)}</Route>}
      </Route>
    );
  });
};

const Router = () => {
  const pageRoutes = renderRoutes(pagesData);
  return <Routes>{pageRoutes}</Routes>;
};

export default Router;
