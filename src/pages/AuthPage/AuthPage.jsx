
import React, { useState } from 'react';
import LoginForm from '../../components/auth/LoginForm';
import RegisterForm from '../../components/auth/RegisterForm';
import styles from './style.module.css';
import clsx from 'clsx';

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className={clsx(styles.container)}>
      
      <div className={clsx(
        styles.containerForm,
        styles.containerSignup,
        isSignUp && styles.activeSignup
      )}>
        <RegisterForm />
      </div>

      
      <div className={clsx(
        styles.containerForm,
        styles.containerSignin,
      )}>
        <LoginForm />
      </div>

      <div className={clsx(styles.containerOverlay, isSignUp && styles.activeOverlay)}>
        <div className={clsx(styles.overlay, isSignUp && styles.overlayMoved)}>
          <div className={clsx(
            styles.overlayPanel,
            styles.overlayLeft,
            isSignUp && styles.overlayLeftActive
          )}>
            <button className={styles.btn} onClick={() => setIsSignUp(false)}>
              Авторизація
            </button>
          </div>
          <div className={clsx(
            styles.overlayPanel,
            styles.overlayRight,
            isSignUp && styles.overlayRightActive
          )}>
            <button className={styles.btn} onClick={() => setIsSignUp(true)}>
              Реєстрація
            </button>
          </div>
        </div>
      </div>
    </div>
  );}
