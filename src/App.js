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