import { Navigate } from 'react-router-dom';
import { getLocalStorageToken } from '../utils/local-storage-fn';

const PrivateRoute = ({ children }) => {
  const isLogined = getLocalStorageToken();
  return isLogined ? children : <Navigate to="/" />;
};

export default PrivateRoute;
