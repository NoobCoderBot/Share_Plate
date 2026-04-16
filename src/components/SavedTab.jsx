import styles from './SavedTab.module.css';
import { PostCard } from './PostCard';

export function SavedTab({ posts, onClaim, onSave, onLike }) {
  const saved = posts.filter(p => p.saved);

  if (saved.length === 0) {
    return (
      <div className={styles.empty}>
        <div className={styles.emptyIcon}>🔖</div>
        <div className={styles.emptyTitle}>No saved items</div>
        <div className={styles.emptySub}>
          Tap the bookmark icon on any post to save it here for quick access later.
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.count}>{saved.length} saved item{saved.length !== 1 ? 's' : ''}</span>
      </div>
      {saved.map((p, i) => (
        <PostCard key={p.id} post={p} onClaim={onClaim} onSave={onSave} onLike={onLike}
          style={{ animationDelay: `${i * 0.05}s` }} />
      ))}
    </div>
  );
}
