// Demo App - ES Module (Browser-native)
import { createElement as h, useState, useEffect } from 'https://esm.sh/react@18';
import { Button } from './components/Button.js';

const SEMANTICS = ['primary', 'secondary', 'tertiary', 'destructive', 'success', 'remotecontrol'];
const SIZES = [
  { value: 'md', label: 'Medium (md)' },
  { value: 'lg', label: 'Large (lg)' }
];
const STATES = [
  { key: 'default', label: 'Default', interactionState: null, disabled: false },
  { key: 'hover', label: 'Hover', interactionState: 'hover', disabled: false },
  { key: 'focus', label: 'Focus', interactionState: 'focus', disabled: false },
  { key: 'selected', label: 'Selected', interactionState: 'selected', disabled: false },
  { key: 'disabled', label: 'Disabled', interactionState: null, disabled: true }
];
const THEMES = [
  { value: 'bright-desktop', label: '🌞 Bright Desktop' },
  { value: 'bright-mobile', label: '📱 Bright Mobile' },
  { value: 'dark-desktop', label: '🌙 Dark Desktop' },
  { value: 'dark-mobile', label: '📱 Dark Mobile' }
];

function ThemeSwitcher({ currentTheme, onThemeChange }) {
  return h('div', { className: 'theme-switcher' },
    h('label', { htmlFor: 'theme-select' }, 'Theme: '),
    h('select', {
      id: 'theme-select',
      value: currentTheme,
      onChange: (e) => onThemeChange(e.target.value)
    },
      THEMES.map(t => h('option', { key: t.value, value: t.value }, t.label))
    )
  );
}

function ButtonVariantCard({ semantic, size }) {
  return h('div', { className: 'variant-card' },
    h('h3', null, `${semantic} / ${size.label}`),
    h('table', { className: 'demo-table' },
      h('thead', null,
        h('tr', null,
          h('th', null, 'State'),
          h('th', null, 'Icon + Label'),
          h('th', null, 'Icon only'),
          h('th', null, 'Label only')
        )
      ),
      h('tbody', null,
        STATES.map(state =>
          h('tr', { key: state.key },
            h('td', { className: 'state-label' }, state.label),
            // Icon + Label
            h('td', null,
              h(Button, {
                type: semantic,
                size: size.value,
                interactionState: state.interactionState,
                disabled: state.disabled,
                icon: '★',
                label: 'Button'
              })
            ),
            // Icon only
            h('td', null,
              h(Button, {
                type: semantic,
                size: size.value,
                interactionState: state.interactionState,
                disabled: state.disabled,
                icon: '★'
              })
            ),
            // Label only
            h('td', null,
              h(Button, {
                type: semantic,
                size: size.value,
                interactionState: state.interactionState,
                disabled: state.disabled,
                label: 'Button'
              })
            )
          )
        )
      )
    )
  );
}

export function App() {
  const [theme, setTheme] = useState('bright-desktop');

  useEffect(() => {
    // Update theme CSS - GitHub Pages absolute path
    const link = document.getElementById('theme-css');
    if (link) {
      link.href = `/mcp-test/styles/css/themes/mds-base-${theme}.css`;
    }
    // Update body class for dark mode
    document.body.classList.toggle('dark', theme.includes('dark'));
  }, [theme]);

  return h('div', { className: 'demo-app' },
    h('header', { className: 'demo-header' },
      h('h1', null, 'MDS Button Demo'),
      h('p', null, 'React ES Module Version – Design Tokens basiert'),
      h(ThemeSwitcher, { currentTheme: theme, onThemeChange: setTheme })
    ),
    h('main', { className: 'demo-grid' },
      SEMANTICS.flatMap(semantic =>
        SIZES.map(size =>
          h(ButtonVariantCard, {
            key: `${semantic}-${size.value}`,
            semantic,
            size
          })
        )
      )
    )
  );
}

export default App;
