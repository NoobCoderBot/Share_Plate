import { useState } from 'react';
import styles from './PostCard.module.css';
import { IconHeart, IconBookmark, IconCheck, IconWarning, IconShare, IconMap } from './Icons';
import { getExpiryInfo } from '../data/data';

export function PostCard({ post, onClaim, onSave, onLike, style, compact = false }) {
  const [expanded, setExpanded] = useState(false);
  const expiry = getExpiryInfo(post.expiryDays);

  const handleShare = () => {
    const text = `${post.emoji} ${post.name} available at ${post.flat} — check SharePlate!`;
    if (navigator.share) navigator.share({ text });
    else navigator.clipboard?.writeText(text);
  };

  return (
    <div className={`${styles.card} ${post.claimed ? styles.claimed : ''}`} style={style}>
      {/* Urgent banner */}
      {post.expiryDays <= 1 && !post.claimed && (
        <div className={styles.urgentBanner}>
          <IconWarning size={12} />
          <span>Needs to go today — claim fast!</span>
        </div>
      )}

      {/* Header */}
      <div className={styles.header}>
        <div className={styles.posterRow}>
          <div className={styles.avatar} style={{ background: post.avatar.bg, color: post.avatar.color }}>
            {post.avatar.initials}
          </div>
          <div>
            <div className={styles.posterName}>{post.poster}</div>
            <div className={styles.posterMeta}>
              <IconMap size={10} />
              {post.flat} · {post.block}
            </div>
          </div>
        </div>
        <span className={styles.time}>{post.time}</span>
      </div>

      {/* Food */}
      <div className={styles.foodRow}>
        <div className={styles.foodEmoji}>{post.emoji}</div>
        <div className={styles.foodInfo}>
          <div className={styles.foodName}>{post.name}</div>
          <div className={styles.foodQty}>{post.qty}</div>
          <div className={styles.tags}>
            <span className={`${styles.tag} ${styles[expiry.color]}`}>{expiry.label}</span>
            <span className={`${styles.tag} ${styles.category}`}>{post.category}</span>
            <span className={`${styles.tag} ${styles.free}`}>Free</span>
            {post.isVeg && <span className={`${styles.tag} ${styles.veg}`}>🌿 Veg</span>}
          </div>
        </div>
      </div>

      {/* Allergens */}
      {post.allergens?.length > 0 && (
        <div className={styles.allergens}>
          ⚠️ Contains: {post.allergens.join(', ')}
        </div>
      )}

      {/* Note */}
      {post.note && (
        <div className={styles.note} onClick={() => setExpanded(e => !e)}>
          <span className={expanded ? styles.noteExpanded : styles.noteCollapsed}>
            "{post.note}"
          </span>
        </div>
      )}

      {/* Divider */}
      <div className={styles.divider} />

      {/* Actions */}
      {post.claimed ? (
        <div className={styles.claimedRow}>
          <div className={styles.claimedBadge}>
            <IconCheck size={13} />
            Claimed{post.claimedBy ? ` by ${post.claimedBy}` : ''}
          </div>
          <div className={styles.socialActions}>
            <button className={`${styles.iconBtn} ${post.liked ? styles.liked : ''}`} onClick={() => onLike(post.id)}>
              <IconHeart size={14} filled={post.liked} />
              <span>{post.likes}</span>
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.actions}>
          <button className={styles.claimBtn} onClick={() => onClaim(post.id)}>
            <IconCheck size={15} />
            I'll take this
          </button>
          <div className={styles.iconActions}>
            <button className={`${styles.iconBtn} ${post.liked ? styles.liked : ''}`} onClick={() => onLike(post.id)}>
              <IconHeart size={14} filled={post.liked} />
              <span>{post.likes}</span>
            </button>
            <button className={`${styles.iconBtn} ${post.saved ? styles.saved : ''}`} onClick={() => onSave(post.id)}>
              <IconBookmark size={14} filled={post.saved} />
            </button>
            <button className={styles.iconBtn} onClick={handleShare}>
              <IconShare size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
