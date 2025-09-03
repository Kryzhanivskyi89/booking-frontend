import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { loginSuccess } from '../redux/auth/authSlice';

function PrivateRoute({ children }) {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken && !token) {
      dispatch(loginSuccess({ token: storedToken }));
    }
  }, [dispatch, token]);

  if (!token && !localStorage.getItem('token')) {
    return <Navigate to="/auth" />;
  }

  return children;
}

export default PrivateRoute;