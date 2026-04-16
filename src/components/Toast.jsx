import styles from './Toast.module.css';
import { IconCheck, IconWarning, IconX } from './Icons';

export function ToastContainer({ toasts }) {
  return (
    <div className={styles.container}>
      {toasts.map(t => (
        <div key={t.id} className={`${styles.toast} ${styles[t.type] || ''}`}>
          {t.type === 'success' && <IconCheck size={14} />}
          {t.type === 'warning' && <IconWarning size={14} />}
          {t.message}
        </div>
      ))}
    </div>
  );
}
