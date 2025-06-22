import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


import styles from './style.module.css';
import { logout } from '../../redux/auth/authSlice';

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className={styles.nav}>
      
      <div>
        <a 
          href="https://kryzhanivskyi89.github.io/portfolio/"
          className={styles.develop} 
          rel="noreferrer" 
          target="_blank" 
        > 
          &lt;AndrewDev/&gt;
        </a>
      </div>

      <div className={styles.navLinks}>
        <NavLink 
          to="/businesses" 
          className={({ isActive }) => 
            `${styles.navLink} ${isActive ? styles.active : ''}`
          }
        >
          Бізнеси
        </NavLink>

        <NavLink 
          to="/bookings" 
          className={({ isActive }) => 
            `${styles.navLink} ${isActive ? styles.active : ''}`
          }
        >
          Мої записи
        </NavLink>
      </div>
      
      <button onClick={handleLogout} className={styles.logoutButton}>
        Вийти
      </button>
    </nav>
  );
}