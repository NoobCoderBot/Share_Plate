import { useState } from 'react';
import styles from './PostSheet.module.css';
import { FOOD_OPTIONS } from '../data/data';
import { IconX, IconCheck } from './Icons';

const ALLERGEN_OPTIONS = ['Gluten', 'Dairy', 'Eggs', 'Nuts', 'Soy', 'Shellfish'];
const EXPIRY_OPTIONS = [
  { label: 'Today', days: 1 },
  { label: '2 days', days: 2 },
  { label: '3 days', days: 3 },
  { label: '1 week', days: 7 },
];

const FOOD_CATEGORIES = [...new Set(FOOD_OPTIONS.map(f => f.category))];

export function PostSheet({ onClose, onPost }) {
  const [selectedFood, setSelectedFood] = useState(null);
  const [form, setForm] = useState({
    name: '', qty: '', note: '', expiryDays: 2,
    isVeg: true, allergens: [], category: ''
  });
  const [filterCat, setFilterCat] = useState('All');
  const [step, setStep] = useState(1); // 1=pick food, 2=details

  const filtered = filterCat === 'All' ? FOOD_OPTIONS : FOOD_OPTIONS.filter(f => f.category === filterCat);

  const handleFoodPick = (food) => {
    setSelectedFood(food);
    setForm(f => ({ ...f, name: food.label, category: food.category }));
    setStep(2);
  };

  const toggleAllergen = (a) => {
    setForm(f => ({
      ...f,
      allergens: f.allergens.includes(a) ? f.allergens.filter(x => x !== a) : [...f.allergens, a]
    }));
  };

  const canSubmit = selectedFood && form.name.trim() && form.qty.trim();

  const handleSubmit = () => {
    if (!canSubmit) return;
    onPost({ ...form, emoji: selectedFood.emoji });
  };

  return (
    <div className={styles.overlay} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className={styles.sheet}>
        <div className={styles.handle} />
        <div className={styles.sheetHeader}>
          <div>
            <h2 className={styles.title}>Share surplus food</h2>
            <p className={styles.sub}>Help your neighbours, reduce waste 🌱</p>
          </div>
          <button className={styles.closeBtn} onClick={onClose}><IconX size={16} /></button>
        </div>

        {/* Step indicator */}
        <div className={styles.steps}>
          <div className={`${styles.step} ${step >= 1 ? styles.stepActive : ''}`}>
            <span>1</span> Pick item
          </div>
          <div className={styles.stepLine} />
          <div className={`${styles.step} ${step >= 2 ? styles.stepActive : ''}`}>
            <span>2</span> Details
          </div>
        </div>

        {step === 1 && (
          <div className={styles.stepContent}>
            {/* Category filter */}
            <div className={styles.catScroll}>
              {['All', ...FOOD_CATEGORIES].map(c => (
                <button key={c} className={`${styles.catBtn} ${filterCat === c ? styles.catActive : ''}`}
                  onClick={() => setFilterCat(c)}>{c}</button>
              ))}
            </div>
            <div className={styles.foodGrid}>
              {filtered.map(f => (
                <button key={f.emoji} className={`${styles.foodOption} ${selectedFood?.emoji === f.emoji ? styles.foodSelected : ''}`}
                  onClick={() => handleFoodPick(f)}>
                  <span className={styles.foodMoji}>{f.emoji}</span>
                  <span className={styles.foodLbl}>{f.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className={styles.stepContent}>
            {/* Selected food header */}
            <div className={styles.selectedFood}>
              <span className={styles.selEmoji}>{selectedFood?.emoji}</span>
              <div>
                <div className={styles.selName}>{form.name}</div>
                <button className={styles.changeBtn} onClick={() => setStep(1)}>Change item</button>
              </div>
            </div>

            {/* Name */}
            <div className={styles.field}>
              <label className={styles.label}>Item name *</label>
              <input className={styles.input} type="text" placeholder="e.g. Homegrown tomatoes, Fresh coriander..."
                value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
            </div>

            {/* Quantity */}
            <div className={styles.field}>
              <label className={styles.label}>Quantity *</label>
              <input className={styles.input} type="text" placeholder="e.g. 3 pieces, 2 cups, 1 packet..."
                value={form.qty} onChange={e => setForm(f => ({ ...f, qty: e.target.value }))} />
            </div>

            {/* Expiry */}
            <div className={styles.field}>
              <label className={styles.label}>Best before</label>
              <div className={styles.expiryGrid}>
                {EXPIRY_OPTIONS.map(e => (
                  <button key={e.days}
                    className={`${styles.expiryBtn} ${form.expiryDays === e.days ? styles.expiryActive : ''}`}
                    onClick={() => setForm(f => ({ ...f, expiryDays: e.days }))}>
                    {e.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Veg toggle */}
            <div className={styles.field}>
              <label className={styles.label}>Type</label>
              <div className={styles.vegRow}>
                <button className={`${styles.vegBtn} ${form.isVeg ? styles.vegActive : ''}`}
                  onClick={() => setForm(f => ({ ...f, isVeg: true }))}>🌿 Vegetarian</button>
                <button className={`${styles.vegBtn} ${!form.isVeg ? styles.nonVegActive : ''}`}
                  onClick={() => setForm(f => ({ ...f, isVeg: false }))}>🍗 Non-Veg</button>
              </div>
            </div>

            {/* Allergens */}
            <div className={styles.field}>
              <label className={styles.label}>Allergens <span className={styles.optional}>(optional)</span></label>
              <div className={styles.allergenGrid}>
                {ALLERGEN_OPTIONS.map(a => (
                  <button key={a}
                    className={`${styles.allergenBtn} ${form.allergens.includes(a) ? styles.allergenActive : ''}`}
                    onClick={() => toggleAllergen(a)}>
                    {form.allergens.includes(a) && <IconCheck size={11} />}
                    {a}
                  </button>
                ))}
              </div>
            </div>

            {/* Note */}
            <div className={styles.field}>
              <label className={styles.label}>Message for neighbours <span className={styles.optional}>(optional)</span></label>
              <textarea className={styles.textarea}
                placeholder="Condition, how to use, pickup instructions, anything helpful..."
                value={form.note}
                onChange={e => setForm(f => ({ ...f, note: e.target.value }))} />
            </div>

            <div className={styles.submitRow}>
              <button className={styles.backBtn} onClick={() => setStep(1)}>← Back</button>
              <button className={styles.submitBtn} onClick={handleSubmit} disabled={!canSubmit}>
                <IconCheck size={15} />
                Post to board
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
