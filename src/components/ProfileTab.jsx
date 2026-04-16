import styles from './ProfileTab.module.css';
import { CURRENT_USER } from '../data/data';
import { IconSun, IconMoon, IconLeaf, IconStar } from './Icons';

const IMPACT_STATS = [
  { value: '12', label: 'Items shared', emoji: '📦' },
  { value: '8', label: 'Items claimed', emoji: '🤝' },
  { value: '4.2 kg', label: 'Food saved', emoji: '⚖️' },
  { value: '₹640', label: 'Value saved', emoji: '💰' },
];

const BADGES = [
  { emoji: '🌱', label: 'First Share', earned: true },
  { emoji: '🤝', label: 'Good Neighbour', earned: true },
  { emoji: '♻️', label: 'Zero Waste Week', earned: true },
  { emoji: '⭐', label: 'Top Sharer', earned: false },
  { emoji: '🏆', label: 'Community Hero', earned: false },
  { emoji: '🌍', label: 'Planet Saver', earned: false },
];

const RECENT_ACTIVITY = [
  { type: 'shared', text: 'You shared Rajma curry', time: '2 days ago', emoji: '🍛' },
  { type: 'claimed', text: 'You claimed Bananas from Ravi V.', time: '3 days ago', emoji: '🍌' },
  { type: 'shared', text: 'You shared Spinach', time: '5 days ago', emoji: '🥬' },
  { type: 'collected', text: 'Priya collected your Bread', time: '1 week ago', emoji: '🍞' },
];

export function ProfileTab({ theme, onToggleTheme }) {
  return (
    <div className={styles.container}>
      {/* Profile card */}
      <div className={styles.profileCard}>
        <div className={styles.avatarWrap}>
          <div className={styles.avatar} style={{ background: CURRENT_USER.avatar.bg, color: CURRENT_USER.avatar.color }}>
            {CURRENT_USER.avatar.initials}
          </div>
          <div className={styles.levelBadge}>Lv 3</div>
        </div>
        <div className={styles.profileInfo}>
          <div className={styles.name}>{CURRENT_USER.shortName}</div>
          <div className={styles.flat}>{CURRENT_USER.flat} · {CURRENT_USER.block} · Sunrise Apts</div>
          <div className={styles.joinDate}>Member since Jan 2025</div>
        </div>
      </div>

      {/* Impact stats */}
      <div className={styles.sectionLabel}>My impact</div>
      <div className={styles.impactGrid}>
        {IMPACT_STATS.map(s => (
          <div key={s.label} className={styles.impactCard}>
            <span className={styles.impactEmoji}>{s.emoji}</span>
            <span className={styles.impactVal}>{s.value}</span>
            <span className={styles.impactLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* Eco progress */}
      <div className={styles.ecoCard}>
        <div className={styles.ecoHeader}>
          <IconLeaf size={16} />
          <span>Eco progress</span>
          <span className={styles.ecoLevel}>Level 3 → 4</span>
        </div>
        <div className={styles.progressTrack}>
          <div className={styles.progressFill} style={{ width: '68%' }} />
        </div>
        <div className={styles.ecoSub}>68 of 100 points to next level. Keep sharing! 🌿</div>
      </div>

      {/* Badges */}
      <div className={styles.sectionLabel}>Badges</div>
      <div className={styles.badgeGrid}>
        {BADGES.map(b => (
          <div key={b.label} className={`${styles.badge} ${b.earned ? styles.badgeEarned : styles.badgeLocked}`}>
            <span className={styles.badgeEmoji}>{b.emoji}</span>
            <span className={styles.badgeLabel}>{b.label}</span>
            {!b.earned && <span className={styles.lockIcon}>🔒</span>}
          </div>
        ))}
      </div>

      {/* Recent activity */}
      <div className={styles.sectionLabel}>Recent activity</div>
      <div className={styles.activityList}>
        {RECENT_ACTIVITY.map((a, i) => (
          <div key={i} className={styles.activityItem}>
            <div className={styles.activityEmoji}>{a.emoji}</div>
            <div className={styles.activityText}>{a.text}</div>
            <div className={styles.activityTime}>{a.time}</div>
          </div>
        ))}
      </div>

      {/* Settings */}
      <div className={styles.sectionLabel}>Preferences</div>
      <div className={styles.settingsCard}>
        <div className={styles.settingRow}>
          <div className={styles.settingInfo}>
            <div className={styles.settingTitle}>
              {theme === 'light' ? <IconSun size={15} /> : <IconMoon size={15} />}
              {theme === 'light' ? 'Light mode' : 'Dark mode'}
            </div>
            <div className={styles.settingDesc}>Switch app appearance</div>
          </div>
          <button className={styles.toggle} onClick={onToggleTheme}
            style={{ background: theme === 'dark' ? 'var(--green)' : 'var(--border-strong)' }}>
            <div className={styles.toggleThumb} style={{ transform: theme === 'dark' ? 'translateX(18px)' : 'translateX(2px)' }} />
          </button>
        </div>

        <div className={styles.settingDivider} />

        <div className={styles.settingRow}>
          <div className={styles.settingInfo}>
            <div className={styles.settingTitle}>🔔 Urgent alerts</div>
            <div className={styles.settingDesc}>Notify when items expire today</div>
          </div>
          <button className={styles.toggle} style={{ background: 'var(--green)' }}>
            <div className={styles.toggleThumb} style={{ transform: 'translateX(18px)' }} />
          </button>
        </div>

        <div className={styles.settingDivider} />

        <div className={styles.settingRow}>
          <div className={styles.settingInfo}>
            <div className={styles.settingTitle}>🏘️ Building scope</div>
            <div className={styles.settingDesc}>Block C only</div>
          </div>
          <span className={styles.settingAction}>Change</span>
        </div>
      </div>

      <div className={styles.footer}>
        SharePlate v1.0 · Made with 🌿 for Sunrise Apartments
      </div>
    </div>
  );
}
