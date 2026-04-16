import styles from './Header.module.css';
import { IconLeaf, IconBell, IconSun, IconMoon, IconSearch, IconX, IconChevron } from './Icons';

export function Header({ theme, onToggleTheme, posts, searchQuery, setSearchQuery, selectedBlock, setSelectedBlock, blocks }) {
  const urgent = posts.filter(p => p.expiryDays <= 1 && !p.claimed).length;
  const available = posts.filter(p => !p.claimed).length;
  const saved = posts.filter(p => p.saved).length;

  return (
    <header className={styles.header}>
      {/* Top bar */}
      <div className={styles.topBar}>
        <div className={styles.logo}>
          <div className={styles.logoMark}>
            <IconLeaf size={17} color="#fff" />
          </div>
          <div>
            <div className={styles.logoText}>SharePlate</div>
            <div className={styles.logoSub}>Sunrise Apartments</div>
          </div>
        </div>
        <div className={styles.topActions}>
          <button className={styles.iconBtn} onClick={onToggleTheme} title="Toggle theme">
            {theme === 'light' ? <IconMoon size={17} /> : <IconSun size={17} />}
          </button>
          <button className={styles.iconBtn} style={{ position: 'relative' }}>
            <IconBell size={17} />
            {urgent > 0 && <span className={styles.notifDot} />}
          </button>
        </div>
      </div>

      {/* Block selector */}
      <div className={styles.blockRow}>
        <div className={styles.blockScroll}>
          {blocks.map(b => (
            <button key={b}
              className={`${styles.blockBtn} ${selectedBlock === b ? styles.blockActive : ''}`}
              onClick={() => setSelectedBlock(b)}>
              {b}
            </button>
          ))}
        </div>
      </div>

      {/* Search */}
      <div className={styles.searchRow}>
        <div className={styles.searchBox}>
          <IconSearch size={15} />
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search food, neighbours..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className={styles.clearBtn} onClick={() => setSearchQuery('')}>
              <IconX size={13} />
            </button>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className={styles.statsRow}>
        <div className={styles.stat}>
          <span className={styles.statNum}>{available}</span>
          <span className={styles.statLabel}>Available</span>
        </div>
        <div className={`${styles.stat} ${urgent > 0 ? styles.statUrgent : ''}`}>
          <span className={styles.statNum}>{urgent}</span>
          <span className={styles.statLabel}>Urgent</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum}>{saved}</span>
          <span className={styles.statLabel}>Saved</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum} style={{ color: 'var(--green)' }}>47</span>
          <span className={styles.statLabel}>Total shared</span>
        </div>
      </div>
    </header>
  );
}
