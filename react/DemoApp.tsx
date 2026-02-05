import React, { useState, useEffect } from 'react';
import { Button } from './button/button';
import './DemoApp.css';

const semantics = [
  'primary', 'secondary', 'destructive', 'success', 'remotecontrol', 'tertiary'
] as const;

const states = [
  { cls: undefined, label: 'Default', interactionState: undefined, disabled: false },
  { cls: 'hover', label: 'Hover', interactionState: 'hover', disabled: false },
  { cls: 'focus', label: 'Focus', interactionState: 'focus', disabled: false },
  { cls: 'selected', label: 'Selected', interactionState: 'selected', disabled: false },
  { cls: 'disabled', label: 'Disabled', interactionState: undefined, disabled: true },
];

const sizes = [
  { cls: 'btn-md', label: 'atom-size-md' },
  { cls: 'btn-lg', label: 'atom-size-lg' },
];

const icon = <span className="btn-icon">★</span>;

type Theme = 'bright-desktop' | 'bright-mobile' | 'dark-desktop' | 'dark-mobile';

const themes: { name: string; value: Theme }[] = [
  { name: '🌞 Bright Desktop', value: 'bright-desktop' },
  { name: '🌞 Bright Mobile', value: 'bright-mobile' },
  { name: '🌙 Dark Desktop', value: 'dark-desktop' },
  { name: '🌙 Dark Mobile', value: 'dark-mobile' },
];

export const DemoApp: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('bright-desktop');

  useEffect(() => {
    // Theme CSS laden
    const themeLink = document.getElementById('theme-link') as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = `../styles/css/themes/mds-base-${currentTheme}.css`;
    } else {
      // Wenn kein Theme-Link existiert, erstellen wir einen
      const link = document.createElement('link');
      link.id = 'theme-link';
      link.rel = 'stylesheet';
      link.href = `../styles/css/themes/mds-base-${currentTheme}.css`;
      document.head.appendChild(link);
    }

    // Body-Klasse für Dark/Bright umschalten
    document.body.className = currentTheme.includes('dark') ? 'dark' : '';
  }, [currentTheme]);

  const toggleTheme = () => {
    const currentIndex = themes.findIndex(t => t.value === currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setCurrentTheme(themes[nextIndex].value);
  };

  const currentThemeName = themes.find(t => t.value === currentTheme)?.name || '';

  return (
    <div className="demo-app">
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {currentThemeName}
      </button>
      
      <h1>MCP Agent Demo - React Version</h1>
      
      <div className="demo-grid">
        {semantics.map((sem) => (
          <div className="demo-card" key={sem}>
            <h3>{sem}</h3>
            {sizes.map((size) => (
              <div key={size.cls}>
                <div className="demo-size-label">{size.label}</div>
                <table className="demo-table">
                  <thead>
                    <tr>
                      <th>State</th>
                      <th>Icon + Text</th>
                      <th>Icon only</th>
                      <th>Text only</th>
                    </tr>
                  </thead>
                  <tbody>
                    {states.map((state) => (
                      <tr key={state.label}>
                        <td className="demo-state-label">{state.label}</td>
                        <td>
                          <Button
                            type={sem as any}
                            interactionState={state.interactionState as any}
                            disabled={state.disabled}
                            icon={icon}
                            label="Button"
                            className={size.cls + (state.cls ? ` btn-${state.cls}` : '')}
                          />
                        </td>
                        <td>
                          <Button
                            type={sem as any}
                            interactionState={state.interactionState as any}
                            disabled={state.disabled}
                            icon={icon}
                            className={size.cls + (state.cls ? ` btn-${state.cls}` : '')}
                          />
                        </td>
                        <td>
                          <Button
                            type={sem as any}
                            interactionState={state.interactionState as any}
                            disabled={state.disabled}
                            label="Button"
                            className={size.cls + (state.cls ? ` btn-${state.cls}` : '')}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        ))}
      </div>
      
      <div className="demo-label">
        Alle Permutationen: Nur relevante semantische States (primary, secondary, destructive, success, remotecontrol, tertiary), 
        atom-size-md / atom-size-lg, alle Varianten (Icon+Text, Icon only, Text only)
      </div>
    </div>
  );
};

export default DemoApp;
