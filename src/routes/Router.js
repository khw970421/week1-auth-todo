import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Todos from '../pages/Todos';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute>
            <Home />
          </PublicRoute>
        }
      />
      <Route
        path="/todo"
        element={
          <PrivateRoute>
            <Todos />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
      {/* TODO: Error boundary 확인  */}
    </Routes>
  );
}

export default Router;
