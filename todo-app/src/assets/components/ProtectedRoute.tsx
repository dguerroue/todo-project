import { Navigate } from 'react-router';

const ProtectedRoute = ({ children }: {children: React.ReactNode}) => {
  const token = localStorage.getItem('token');
  return token ? children : Navigate({ to: '/auth' });
};

export default ProtectedRoute;