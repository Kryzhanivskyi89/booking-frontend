
import { createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

let tokenFromStorage = localStorage.getItem('token');
let userFromToken = null;

if (tokenFromStorage) {
  try {
    const decoded = jwtDecode(tokenFromStorage);
    userFromToken = {
      id: decoded.id,
      role: decoded.role,
    };
  } catch (err) {
    console.error('Token decode error:', err);
    localStorage.removeItem('token');
    tokenFromStorage = null;
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: tokenFromStorage,
    user: userFromToken,
  },
  reducers: {
    loginSuccess: (state, action) => {
      const token = action.payload.token;
      state.token = token;

      try {
        const decoded = jwtDecode(token);
        const userData = {
          id: decoded.id,
          role: decoded.role,
        };
        state.user = userData;

        localStorage.setItem('token', token);
      } catch (err) {
        console.error('Token decode error on login:', err);
        state.user = null;
        localStorage.removeItem('token');
      }
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem('token');
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;