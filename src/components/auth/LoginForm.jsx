import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useLoginMutation } from '../../redux/auth/authApi';
import { loginSuccess } from '../../redux/auth/authSlice';
import styles from './style.module.css';


export default function LoginForm() {
  const [successMessage, setSuccessMessage] = useState('');
  const [login, { isLoading, error }] = useLoginMutation();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const response = await login(data).unwrap();
      dispatch(loginSuccess({ token: response.token }));
      localStorage.setItem('token', response.token);
      setSuccessMessage('Успішний вхід!');
      setTimeout(() => navigate('/businesses'), 1000);
      navigate('/businesses');
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.formTitle}>Авторизація</h2>
      <input {...register('email')} className={styles.input} placeholder="Email" type="email" />
      <input {...register('password')} className={styles.input} placeholder="Пароль" type="password" />
      <button className={styles.btn} type="submit" disabled={isLoading}>
        {isLoading ? 'Входимо...' : 'Увійти'}
      </button>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {error && <p>{error.data?.message || 'Помилка входу'}</p>}
    </form>
  );
}