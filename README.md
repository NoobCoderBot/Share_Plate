# SharePlate 🌿

> Community food sharing board for apartment residents — reduce waste, strengthen community.

A mobile-first React web app prototype for **Concept B** from the food waste design challenge.

---

## Features

| Feature | Description |
|---|---|
| 📋 **Share Board** | Live feed of food available from neighbours |
| 🔴 **Urgent alerts** | Items expiring today highlighted with red banners |
| 🔍 **Search** | Search by food name, neighbour, category |
| 🏘️ **Block filter** | Filter by apartment block (A, B, C, D or All) |
| 🗂️ **Category filter** | Filter by Vegetables, Fruits, Dairy, Cooked, etc. |
| ↕️ **Sort** | Sort by Newest, Expiring soon, or Most liked |
| ✅ **Claim flow** | One-tap claim with status tracking |
| 🔖 **Save** | Bookmark posts to revisit later |
| ❤️ **Likes** | React to posts from neighbours |
| 📤 **Share** | Native share / copy link for any post |
| ➕ **Post food** | 2-step posting: pick food type → add details |
| 🥦 **Food picker** | 24 food emoji options across 8 categories |
| ⚠️ **Allergen tagging** | Mark Gluten, Dairy, Eggs, Nuts, Soy, Shellfish |
| 🌿 **Veg/Non-veg** | Flag food type when posting |
| 📦 **My Posts** | Track posts you've shared + mark as collected |
| 🏅 **Gamification** | Eco level, points, and 6 earnable badges |
| 📊 **Impact stats** | Items shared, claimed, kg food saved, ₹ value |
| 👤 **Profile** | Activity feed, badges, preferences |
| 🌙 **Dark mode** | Full light/dark theme with system preference detection |
| 💾 **Persistent theme** | Theme saved to localStorage |

---

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm 9+

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
npm run preview
```

---

## Project Structure

```
src/
├── components/
│   ├── BoardTab.jsx/css     # Main share feed
│   ├── MyPostsTab.jsx/css   # Your shared items
│   ├── SavedTab.jsx/css     # Bookmarked items
│   ├── ProfileTab.jsx/css   # Stats, badges, settings
│   ├── PostCard.jsx/css     # Individual food post card
│   ├── PostSheet.jsx/css    # Bottom sheet for new posts
│   ├── Header.jsx/css       # Sticky top bar
│   ├── TabBar.jsx/css       # Bottom navigation
│   ├── Toast.jsx/css        # Notification toasts
│   └── Icons.jsx            # All SVG icon components
├── data/
│   └── data.js              # Initial data, constants, helpers
├── hooks/
│   ├── useTheme.js          # Theme toggle + persistence
│   └── useToast.js          # Toast notification system
├── App.jsx                  # Root component, all state
├── App.module.css
├── index.css                # Global styles + CSS variables
└── main.jsx                 # Entry point
```

---

## Design System

- **Fonts**: Playfair Display (headings) + Plus Jakarta Sans (body)
- **Theme**: Warm cream (#F6F1EA) light / Deep forest (#0F1410) dark
- **Accent**: Forest green (#2D6A4F) primary action
- **CSS Variables**: All colours, shadows, radii defined in `:root` and `[data-theme="dark"]`

---

## Context

Built as a prototype for a UX design challenge on reducing household food waste in urban apartments. See the Assumption Map and Concept Validation dashboard for the research foundation.
