import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import AuthPage from './pages/AuthPage/AuthPage';
import BusinessListPage from './pages/BusinessListPage/BusinessListPage';
import MyBookingsPage from './pages/MyBookingsPage/MyBookingsPage';
import CreateBookingPage from './pages/CreateBookingPage/CreateBookingPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import PrivateRoute from './utils/privateRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth" />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route path="/businesses" element={<BusinessListPage />} />
        <Route path="/bookings" element={<MyBookingsPage />} />
        <Route path="/book/:id" element={<CreateBookingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>

      <Route path="*" element={<Navigate to="/auth" />} />
    </Routes>
  );
}

export default App;

// import { Routes, Route, Navigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect} from 'react';

// import Layout from './components/Layout/Layout';
// import AuthPage from './pages/AuthPage/AuthPage';
// import BusinessListPage from './pages/BusinessListPage/BusinessListPage';
// import MyBookingsPage from './pages/MyBookingsPage/MyBookingsPage';
// import CreateBookingPage from './pages/CreateBookingPage/CreateBookingPage';
// import ProfilePage from './pages/ProfilePage/ProfilePage';
// import { loginSuccess } from './redux/auth/authSlice';

// function App() {
//   const token = useSelector((state) => state.auth.token);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const storedToken = localStorage.getItem('token');
//     if (storedToken && !token) {
//       dispatch(loginSuccess({ token: storedToken }));
//     }
//   }, [dispatch, token]);

//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to="/auth" />} />
//       <Route path="/auth" element={<AuthPage />} />
//       {token && (
//           <Route element={<Layout />}>
//             <Route path="/businesses" element={<BusinessListPage />} />
//             <Route path="/bookings" element={<MyBookingsPage />} />
//             <Route path="/book/:id" element={<CreateBookingPage />} />
//             <Route path="/profile" element={<ProfilePage />} />
//           </Route>
//       )}
//       <Route path="*" element={<Navigate to={token ? "/businesses" : "/auth"} />} />
//     </Routes>
//   );
// }

// export default App;

