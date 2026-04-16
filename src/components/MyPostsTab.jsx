import styles from './MyPostsTab.module.css';
import { IconTrash, IconCheck, IconWarning } from './Icons';
import { getExpiryInfo, CURRENT_USER } from '../data/data';

const STATUS_CONFIG = {
  available: { label: 'Available', cls: 'available' },
  claimed:   { label: 'Claimed — awaiting pickup', cls: 'claimed' },
  collected: { label: 'Collected ✓', cls: 'collected' },
};

export function MyPostsTab({ myPosts, onDelete, onMarkCollected }) {
  if (myPosts.length === 0) {
    return (
      <div className={styles.empty}>
        <div className={styles.emptyIcon}>📦</div>
        <div className={styles.emptyTitle}>Nothing shared yet</div>
        <div className={styles.emptySub}>
          Tap <strong>Share food</strong> to post something surplus for your neighbours.
        </div>
        <div className={styles.tip}>
          💡 Even one leftover item can make a neighbour's day!
        </div>
      </div>
    );
  }

  const active = myPosts.filter(p => p.status !== 'collected');
  const history = myPosts.filter(p => p.status === 'collected');

  return (
    <div className={styles.container}>
      {/* My profile chip */}
      <div className={styles.profileChip}>
        <div className={styles.avatar} style={{ background: CURRENT_USER.avatar.bg, color: CURRENT_USER.avatar.color }}>
          {CURRENT_USER.avatar.initials}
        </div>
        <div>
          <div className={styles.profileName}>{CURRENT_USER.shortName}</div>
          <div className={styles.profileFlat}>{CURRENT_USER.flat} · {CURRENT_USER.block}</div>
        </div>
        <div className={styles.karmaChip}>🌿 {myPosts.length} shared</div>
      </div>

      {active.length > 0 && (
        <div className={styles.section}>
          <div className={styles.sectionLabel}>Active posts</div>
          {active.map((p, i) => (
            <MyPostCard key={p.id} post={p} onDelete={onDelete} onMarkCollected={onMarkCollected}
              style={{ animationDelay: `${i * 0.05}s` }} />
          ))}
        </div>
      )}

      {history.length > 0 && (
        <div className={styles.section}>
          <div className={styles.sectionLabel}>History</div>
          {history.map((p, i) => (
            <MyPostCard key={p.id} post={p} onDelete={onDelete} onMarkCollected={onMarkCollected}
              style={{ animationDelay: `${i * 0.05}s` }} />
          ))}
        </div>
      )}
    </div>
  );
}

function MyPostCard({ post, onDelete, onMarkCollected, style }) {
  const expiry = getExpiryInfo(post.expiryDays);
  const status = STATUS_CONFIG[post.status] || STATUS_CONFIG.available;

  return (
    <div className={`${styles.card} ${post.status === 'collected' ? styles.cardDim : ''}`} style={style}>
      <div className={styles.cardTop}>
        <div className={styles.foodRow}>
          <div className={styles.emoji}>{post.emoji}</div>
          <div>
            <div className={styles.foodName}>{post.name}</div>
            <div className={styles.foodQty}>{post.qty}</div>
          </div>
        </div>
        <span className={`${styles.statusBadge} ${styles[status.cls]}`}>{status.label}</span>
      </div>

      <div className={styles.meta}>
        <span className={`${styles.expiryTag} ${styles[expiry.color]}`}>{expiry.label}</span>
        <span className={styles.time}>{post.time}</span>
      </div>

      {post.status !== 'collected' && (
        <div className={styles.cardActions}>
          {post.status === 'claimed' && (
            <button className={styles.collectBtn} onClick={() => onMarkCollected(post.id)}>
              <IconCheck size={13} />
              Mark as collected
            </button>
          )}
          <button className={styles.deleteBtn} onClick={() => onDelete(post.id)}>
            <IconTrash size={13} />
          </button>
        </div>
      )}
    </div>
  );
}
