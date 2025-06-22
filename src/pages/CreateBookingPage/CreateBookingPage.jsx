import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './style.module.css';
import API from '../../api/axios';

export default function CreateBookingPage() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await API.post('/bookings', {
        business: id,
        date: data.date,
        note: data.note,
      });
      navigate('/bookings');
    } catch (err) {
      console.error('Помилка при створенні запису:', err);
      alert(err.response?.data?.message || 'Не вдалося створити запис');
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.pageTitle}>Запис до бізнесу</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label}>Дата та час:</label>
        <input
          type="datetime-local"
          {...register('date', { required: true })}
          className={styles.input}
        />

        <label className={styles.label}>Коментар (необов'язково):</label>
        <textarea
          {...register('note')}
          className={styles.textarea}
          placeholder="Напишіть побажання або уточнення..."
        />

        <button type="submit" className={styles.button}>Записатись</button>
      </form>
    </div>
  );
}