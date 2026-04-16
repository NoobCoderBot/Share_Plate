import { useState } from 'react';
import styles from './BoardTab.module.css';
import { PostCard } from './PostCard';
import { IconFilter, IconChevron } from './Icons';

const SORT_OPTIONS = ['Newest', 'Expiring soon', 'Most liked'];
const FILTER_OPTIONS = ['All', 'Vegetables', 'Fruits', 'Dairy', 'Bakery', 'Cooked', 'Staples', 'Beverages'];

export function BoardTab({ posts, onClaim, onSave, onLike, searchQuery }) {
  const [sortBy, setSortBy] = useState('Newest');
  const [filterCat, setFilterCat] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [showClaimed, setShowClaimed] = useState(false);

  let filtered = posts.filter(p => {
    if (!showClaimed && p.claimed) return false;
    if (filterCat !== 'All' && p.category !== filterCat) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return p.name.toLowerCase().includes(q) ||
        p.poster.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.flat.toLowerCase().includes(q);
    }
    return true;
  });

  if (sortBy === 'Expiring soon') filtered = [...filtered].sort((a, b) => a.expiryDays - b.expiryDays);
  else if (sortBy === 'Most liked') filtered = [...filtered].sort((a, b) => b.likes - a.likes);

  const urgentItems = filtered.filter(p => p.expiryDays <= 1 && !p.claimed);
  const regularItems = filtered.filter(p => !(p.expiryDays <= 1 && !p.claimed));

  return (
    <div className={styles.container}>
      {/* Filter toolbar */}
      <div className={styles.toolbar}>
        <div className={styles.filterScroll}>
          {FILTER_OPTIONS.map(f => (
            <button
              key={f}
              className={`${styles.filterBtn} ${filterCat === f ? styles.filterActive : ''}`}
              onClick={() => setFilterCat(f)}
            >{f}</button>
          ))}
        </div>
        <button className={`${styles.sortBtn} ${showFilters ? styles.sortActive : ''}`} onClick={() => setShowFilters(s => !s)}>
          <IconFilter size={13} />
        </button>
      </div>

      {/* Sort & options drawer */}
      {showFilters && (
        <div className={styles.sortDrawer}>
          <div className={styles.sortLabel}>Sort by</div>
          <div className={styles.sortRow}>
            {SORT_OPTIONS.map(s => (
              <button key={s} className={`${styles.sortOption} ${sortBy === s ? styles.sortSelected : ''}`}
                onClick={() => setSortBy(s)}>{s}</button>
            ))}
          </div>
          <label className={styles.toggleRow}>
            <input type="checkbox" checked={showClaimed} onChange={e => setShowClaimed(e.target.checked)} />
            <span>Show claimed items</span>
          </label>
        </div>
      )}

      {/* Urgent section */}
      {urgentItems.length > 0 && (
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionDot} style={{ background: 'var(--red)' }} />
            <span className={styles.sectionTitle}>Urgent — going today</span>
            <span className={styles.sectionCount}>{urgentItems.length}</span>
          </div>
          {urgentItems.map((p, i) => (
            <PostCard key={p.id} post={p} onClaim={onClaim} onSave={onSave} onLike={onLike}
              style={{ animationDelay: `${i * 0.04}s` }} />
          ))}
        </div>
      )}

      {/* Regular section */}
      {regularItems.length > 0 && (
        <div className={styles.section}>
          {urgentItems.length > 0 && (
            <div className={styles.sectionHeader}>
              <span className={styles.sectionDot} style={{ background: 'var(--green)' }} />
              <span className={styles.sectionTitle}>Available now</span>
              <span className={styles.sectionCount}>{regularItems.length}</span>
            </div>
          )}
          {regularItems.map((p, i) => (
            <PostCard key={p.id} post={p} onClaim={onClaim} onSave={onSave} onLike={onLike}
              style={{ animationDelay: `${i * 0.04}s` }} />
          ))}
        </div>
      )}

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>
            {searchQuery ? '🔍' : '🌱'}
          </div>
          <div className={styles.emptyTitle}>
            {searchQuery ? 'No results found' : 'Nothing here yet'}
          </div>
          <div className={styles.emptySub}>
            {searchQuery
              ? `No food matching "${searchQuery}". Try a different search.`
              : 'Be the first to share something with your neighbours!'}
          </div>
        </div>
      )}
    </div>
  );
}
