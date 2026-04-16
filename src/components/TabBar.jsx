import styles from './TabBar.module.css';
import { IconGrid, IconBookmark, IconUser, IconList } from './Icons';

const TABS = [
  { id: 'board', label: 'Board', Icon: IconGrid },
  { id: 'my', label: 'My Posts', Icon: IconList },
  { id: 'saved', label: 'Saved', Icon: IconBookmark },
  { id: 'profile', label: 'Profile', Icon: IconUser },
];

export function TabBar({ activeTab, setTab }) {
  return (
    <nav className={styles.tabBar}>
      {TABS.map(({ id, label, Icon }) => (
        <button
          key={id}
          className={`${styles.tab} ${activeTab === id ? styles.active : ''}`}
          onClick={() => setTab(id)}
        >
          <Icon size={20} />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}
