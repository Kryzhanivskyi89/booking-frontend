import { useEffect, useState } from 'react';

import API from '../../api/axios';
import styles from './style.module.css';

export default function MyBookingsPage() {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);

  const loadBookings = async () => {
    try {
      const res = await API.get('/bookings');
      setBookings(res.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch bookings');
    }
  };

  const cancelBooking = async (id) => {
    try {
      await API.delete(`/bookings/${id}`);
      setBookings(bookings.filter((bookings) => bookings._id !== id));
    } catch (err) {
      alert('Помилка при скасуванні');
      console.error(err.response?.data || err.message);
    }
  };

  useEffect(() => {
    loadBookings();
  }, []);

  return (
    <div className='container'>
      <h2 className={styles.pageTitle}>Мої Записи</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul className={styles.cardList}>
        {bookings.map((booking) => (
          <li className={styles.wrap} key={booking._id}>
            <div className={styles.card}>
                <div className={styles.cardContent}>
                  <p className={styles.cardTitle}>До: {booking.business?.name}</p>
                  <p className={styles.cardDesc}>Дата: {new Date(booking.date).toLocaleString()}</p>
                  <button className={styles.cardLink} onClick={() => cancelBooking(booking._id)}>Скасувати</button>
                </div>
              </div>
          </li>
        ))}
      </ul>
    </div>
  );
}