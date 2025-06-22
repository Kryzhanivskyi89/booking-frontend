import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import { useRegisterMutation } from '../../redux/auth/authApi';
import { loginSuccess } from '../../redux/auth/authSlice';
import styles from './style.module.css';

export default function RegisterForm() {
  const [successMessage, setSuccessMessage] = useState('');
  const [registerUser, { isLoading, error }] = useRegisterMutation();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const response = await registerUser(data).unwrap();
      dispatch(loginSuccess({ token: response.token }));
      setSuccessMessage('Реєстрація пройшла успішно!');
      setTimeout(() => navigate('/businesses'), 1000);
    } catch (err) {
      console.error('Registration error:', err);
    }
  };

  return (
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.formTitle}>Реєстрація</h2>
        <input {...register('name')} className={styles.input} placeholder="Імя" />
        <input {...register('email')} className={styles.input} placeholder="Email" type="email" />
        <input {...register('password')} className={styles.input} placeholder="Пароль" type="password" />
        <select style={{ display: 'block', marginBottom: '10px' }}{...register('role')}>
          <option value="client">Клієнт</option>
          <option value="business">Бізнес</option>
        </select>
        <button className={styles.btn} type="submit" disabled={isLoading}>
          {isLoading ? 'Реєструю...' : 'Зареєструватись'}
        </button>
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        {error && <p>{error.data?.message || 'Помилка реєстрації'}</p>}
        
      </form>
  );
}