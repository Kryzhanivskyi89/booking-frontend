import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import API from '../../api/axios';
import { logout } from '../../redux/auth/authSlice';
import styles from './style.module.css';

export default function ProfilePage() {
  const { user, token } = useSelector((state) => state.auth);
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({ name: '', email: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get(`/users/${user.id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setProfile(res.data);
        setForm({ name: res.data.name, email: res.data.email });
      } catch (err) {
        console.error(err);
        setError(err.response?.data?.message || 'Failed to fetch');
      }
    };

    if (user?.id) fetchProfile();
  }, [user, token]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/users/${user.id}`, form, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Профіль оновлено');
    } catch (err) {
      alert('Помилка при оновленні');
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Ви впевнені, що хочете видалити акаунт?')) return;
    try {
      await API.delete(`/users/${user.id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      dispatch(logout());
      navigate('/');
    } catch (err) {
      alert('Помилка при видаленні');
    }
  };

  if (!profile) return <p>Завантаження...</p>;

  return (
    <div className='container'>
      <h2 className={styles.pageTitle}>Мій Профіль</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleUpdate} className={styles.form}>
        <label>Ім’я:</label>
        <input name="name" value={form.name} onChange={handleChange} required />
        <label>Email:</label>
        <input name="email" value={form.email} onChange={handleChange} required />
        <p>Роль: <strong>{profile.role}</strong></p>
        <button type="submit">Оновити</button>
      </form>
      <button onClick={handleDelete} className={styles.deleteButton}>Видалити акаунт</button>
    </div>
  );
}