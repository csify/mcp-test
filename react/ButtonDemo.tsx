import React from 'react';
import { Button } from './button/button';
import '../styles/button.css';

const variants = [
  { type: 'primary', label: 'Primary' },
  { type: 'secondary', label: 'Secondary' },
  { type: 'destructive', label: 'Destructive' },
  { type: 'remotecontrol', label: 'Remote' },
];
const states = [
  { interactionState: undefined, label: 'Default' },
  { interactionState: 'hover', label: 'Hover' },
  { interactionState: 'focus', label: 'Focus' },
  { interactionState: 'selected', label: 'Selected' },
  { disabled: true, label: 'Disabled' },
];

export default function ButtonDemo() {
  return (
    <div style={{ fontFamily: 'sans-serif', margin: '2rem' }}>
      <h1>React Button Demo – Live</h1>
      <h2>Varianten</h2>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        {variants.map(v => (
          <Button key={v.type} type={v.type} label={v.label} />
        ))}
      </div>
      <h2>States</h2>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        {states.map((s, i) => (
          <Button key={i} type="primary" label={s.label} interactionState={s.interactionState} disabled={s.disabled} />
        ))}
      </div>
      <h2>Mit Icon</h2>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <Button type="primary" label="Icon" icon={<span style={{fontSize:'1.2em'}}>★</span>} />
      </div>
    </div>
  );
}
