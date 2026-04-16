export const IconLeaf = ({ size = 18, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...p}>
    <path d="M10 2C6 2 3 5.5 3 9c0 3 1.8 5.5 4.5 6.8L7 18h6l-.5-2.2C15.2 14.5 17 12 17 9c0-3.5-3-7-7-7z" fill="currentColor" fillOpacity=".9"/>
    <path d="M7 10c.6-1.2 2.2-1.8 3 0 .8 1.8 2.4 1.2 3 0" stroke="var(--bg-card)" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
  </svg>
);

export const IconBell = ({ size = 18, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...p}>
    <path d="M10 2.5a6 6 0 016 6v3l1.5 2.5h-15L4 11.5v-3a6 6 0 016-6z" stroke="currentColor" strokeWidth="1.4" fill="none"/>
    <path d="M8 15a2 2 0 004 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
  </svg>
);

export const IconPlus = ({ size = 18, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...p}>
    <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const IconHeart = ({ size = 16, filled = false, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...p}>
    <path d="M10 16.5L3.5 10a4 4 0 010-5.6 4 4 0 015.6 0l.9.9.9-.9a4 4 0 015.6 0 4 4 0 010 5.6L10 16.5z"
      stroke="currentColor" strokeWidth="1.4"
      fill={filled ? 'currentColor' : 'none'}/>
  </svg>
);

export const IconBookmark = ({ size = 16, filled = false, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...p}>
    <path d="M5 3h10a1 1 0 011 1v13l-6-3.5L4 17V4a1 1 0 011-1z"
      stroke="currentColor" strokeWidth="1.4"
      fill={filled ? 'currentColor' : 'none'}/>
  </svg>
);

export const IconCheck = ({ size = 16, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...p}>
    <path d="M4 10l4.5 4.5L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IconX = ({ size = 16, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...p}>
    <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

export const IconSearch = ({ size = 16, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...p}>
    <circle cx="8.5" cy="8.5" r="5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12.5 12.5L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const IconFilter = ({ size = 16, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...p}>
    <path d="M3 5h14M5.5 10h9M8 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const IconChevron = ({ size = 12, dir = 'down', ...p }) => {
  const r = { up: 180, down: 0, left: 90, right: -90 }[dir];
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" style={{ transform: `rotate(${r}deg)` }} {...p}>
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export const IconSun = ({ size = 18, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...p}>
    <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M14.36 5.64l-1.42 1.42M5.64 14.36l-1.42 1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const IconMoon = ({ size = 18, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...p}>
    <path d="M17 11.5A7 7 0 018.5 3a7 7 0 000 14 7 7 0 008.5-5.5z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
  </svg>
);

export const IconStar = ({ size = 14, filled = false, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...p}>
    <path d="M10 2l2.4 5h5.2l-4.2 3.1 1.6 5.1L10 12.3l-5 2.9 1.6-5.1L2.4 7h5.2L10 2z"
      stroke="currentColor" strokeWidth="1.3"
      fill={filled ? 'currentColor' : 'none'}/>
  </svg>
);

export const IconMap = ({ size = 16, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...p}>
    <path d="M10 2C7.2 2 5 4.2 5 7c0 3.8 5 11 5 11s5-7.2 5-11c0-2.8-2.2-5-5-5z" stroke="currentColor" strokeWidth="1.4" fill="none"/>
    <circle cx="10" cy="7" r="1.8" stroke="currentColor" strokeWidth="1.3"/>
  </svg>
);

export const IconShare = ({ size = 16, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...p}>
    <path d="M15 2a2.5 2.5 0 110 1.5L7.5 8a2.5 2.5 0 010 4l7.5 4.5a2.5 2.5 0 11-.7 1.2L6.8 13.2a2.5 2.5 0 110-6.4l7.5-4.5A2.5 2.5 0 0115 2z" stroke="currentColor" strokeWidth="1.3" fill="none"/>
  </svg>
);

export const IconTrash = ({ size = 16, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...p}>
    <path d="M4 6h12l-1 11H5L4 6z" stroke="currentColor" strokeWidth="1.3" fill="none"/>
    <path d="M8 9v5M12 9v5M7 6V4a1 1 0 011-1h4a1 1 0 011 1v2M2 6h16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);

export const IconWarning = ({ size = 14, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...p}>
    <path d="M10 2L2 17h16L10 2z" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinejoin="round"/>
    <path d="M10 8v4M10 14.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const IconGrid = ({ size = 16, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...p}>
    <rect x="3" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
    <rect x="11" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
    <rect x="3" y="11" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
    <rect x="11" y="11" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
  </svg>
);

export const IconList = ({ size = 16, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...p}>
    <path d="M4 6h12M4 10h12M4 14h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const IconUser = ({ size = 16, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...p}>
    <circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M3 18c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);
