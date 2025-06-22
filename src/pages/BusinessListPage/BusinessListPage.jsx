import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './style.module.css';
import API from '../../api/axios';

export default function BusinessListPage() {
  const [businessUsers, setBusinessUsers] = useState([]);
  const [error, setError] = useState(null);
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const res = await API.get('/users');
        const businessOnly = res.data.filter((user) => user.role === 'business');
        setBusinessUsers(businessOnly);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch');
      }
    };

    fetchBusinesses();
  }, []);

  return (
    <div className='container'>
      <h2 className={styles.pageTitle}>Бізнес Користувачі</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul className={styles.cardList}>
        {businessUsers.map((user) => (
          <li className={styles.wrap} key={user._id}>
            <div className={styles.card}>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{user.name}</h3>
                  <p className={styles.cardDesc}>{user.email}</p>
                  <button 
                    className={styles.cardLink}  
                    onClick={() => {navigate(`/book/${user._id}`);}}>
                      Записатись
                  </button>
                </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
