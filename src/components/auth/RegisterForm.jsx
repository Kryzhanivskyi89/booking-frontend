import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useRegisterMutation, useLoginMutation } from '../../redux/auth/authApi';
import { loginSuccess } from '../../redux/auth/authSlice';
import styles from './style.module.css';

export default function RegisterForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [registerUser, { isLoading: isRegistering, error: registerError }] = useRegisterMutation();
  const [loginUser, { isLoading: isLoggingIn }] = useLoginMutation();

  const onSubmit = async (data) => {
    try {
      await registerUser(data).unwrap();
      const loginRes = await loginUser({ email: data.email, password: data.password }).unwrap();
      dispatch(loginSuccess(loginRes));
      navigate('/businesses');
    } catch (err) {
      console.error('Registration/Login error:', err);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.formTitle}>Реєстрація</h2>

      <input {...register('name')} className={styles.input} placeholder="Ім’я" required />
      <input {...register('email')} className={styles.input} placeholder="Email" type="email" required />
      <input {...register('password')} className={styles.input} placeholder="Пароль" type="password" required />

      <select {...register('role')} className={styles.input} required>
        <option value="">Оберіть роль</option>
        <option value="client">Клієнт</option>
        <option value="business">Бізнес</option>
      </select>

      <button className={styles.btn} type="submit" disabled={isRegistering || isLoggingIn}>
        {(isRegistering || isLoggingIn) ? 'Обробка...' : 'Зареєструватись'}
      </button>

      {registerError && (
        <p style={{ color: 'red' }}>
          {registerError?.data?.message || 'Помилка реєстрації'}
        </p>
      )}
    </form>
  );
}