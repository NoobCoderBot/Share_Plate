import { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { useToast } from './hooks/useToast';
import { INITIAL_POSTS, BUILDINGS, CURRENT_USER } from './data/data';

import { Header } from './components/Header';
import { TabBar } from './components/TabBar';
import { BoardTab } from './components/BoardTab';
import { MyPostsTab } from './components/MyPostsTab';
import { SavedTab } from './components/SavedTab';
import { ProfileTab } from './components/ProfileTab';
import { PostSheet } from './components/PostSheet';
import { ToastContainer } from './components/Toast';

import { IconPlus } from './components/Icons';
import styles from './App.module.css';

export default function App() {
  const { theme, toggle: toggleTheme } = useTheme();
  const { toasts, show: showToast } = useToast();

  const [tab, setTab] = useState('board');
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [myPosts, setMyPosts] = useState([]);
  const [showPostSheet, setShowPostSheet] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBlock, setSelectedBlock] = useState('Block C');

  // Filter posts by block
  const visiblePosts = selectedBlock === 'All Blocks'
    ? posts
    : posts.filter(p => p.block === selectedBlock);

  const handleClaim = (id) => {
    setPosts(p => p.map(x => x.id === id ? { ...x, claimed: true, claimedBy: CURRENT_USER.shortName } : x));
    showToast('Item claimed! Knock on their door to collect it 🎉', 'success');
  };

  const handleSave = (id) => {
    setPosts(p => p.map(x => x.id === id ? { ...x, saved: !x.saved } : x));
    const post = posts.find(x => x.id === id);
    showToast(post?.saved ? 'Removed from saved' : 'Saved for later 🔖');
  };

  const handleLike = (id) => {
    setPosts(p => p.map(x => x.id === id
      ? { ...x, liked: !x.liked, likes: x.liked ? x.likes - 1 : x.likes + 1 }
      : x));
  };

  const handlePost = (formData) => {
    const newPost = {
      id: Date.now(),
      poster: CURRENT_USER.shortName,
      flat: CURRENT_USER.flat,
      block: CURRENT_USER.block,
      avatar: CURRENT_USER.avatar,
      emoji: formData.emoji,
      name: formData.name,
      qty: formData.qty || 'Some quantity',
      category: formData.category,
      expiryDays: formData.expiryDays,
      note: formData.note || null,
      claimed: false,
      claimedBy: null,
      saved: false,
      time: 'Just now',
      likes: 0,
      liked: false,
      allergens: formData.allergens,
      isVeg: formData.isVeg,
    };

    setPosts(p => [newPost, ...p]);
    setMyPosts(p => [{ ...newPost, status: 'available' }, ...p]);
    setShowPostSheet(false);
    showToast('Posted to the share board! 🌿', 'success');
  };

  const handleDelete = (id) => {
    setPosts(p => p.filter(x => x.id !== id));
    setMyPosts(p => p.filter(x => x.id !== id));
    showToast('Post removed');
  };

  const handleMarkCollected = (id) => {
    setMyPosts(p => p.map(x => x.id === id ? { ...x, status: 'collected' } : x));
    showToast('Marked as collected. Great sharing! 🎉', 'success');
  };

  const renderTab = () => {
    switch (tab) {
      case 'board':
        return <BoardTab posts={visiblePosts} onClaim={handleClaim} onSave={handleSave} onLike={handleLike} searchQuery={searchQuery} />;
      case 'my':
        return <MyPostsTab myPosts={myPosts} onDelete={handleDelete} onMarkCollected={handleMarkCollected} />;
      case 'saved':
        return <SavedTab posts={posts} onClaim={handleClaim} onSave={handleSave} onLike={handleLike} />;
      case 'profile':
        return <ProfileTab theme={theme} onToggleTheme={toggleTheme} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.app}>
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        posts={visiblePosts}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedBlock={selectedBlock}
        setSelectedBlock={setSelectedBlock}
        blocks={['All Blocks', ...BUILDINGS.filter(b => b !== 'All Blocks')]}
      />

      <main className={styles.main}>
        {renderTab()}
      </main>

      <TabBar activeTab={tab} setTab={setTab} />

      {/* FAB */}
      <button className={styles.fab} onClick={() => setShowPostSheet(true)}>
        <IconPlus size={18} />
        <span>Share food</span>
      </button>

      {showPostSheet && (
        <PostSheet onClose={() => setShowPostSheet(false)} onPost={handlePost} />
      )}

      <ToastContainer toasts={toasts} />
    </div>
  );
}
