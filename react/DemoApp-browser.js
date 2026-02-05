// React Demo App für Browser-Verwendung
const DemoApp = () => {
  const [currentTheme, setCurrentTheme] = React.useState('bright-desktop');

  const semantics = [
    'primary', 'secondary', 'destructive', 'success', 'remotecontrol', 'tertiary'
  ];

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

  const themes = [
    { name: '🌞 Bright Desktop', value: 'bright-desktop' },
    { name: '🌞 Bright Mobile', value: 'bright-mobile' },
    { name: '🌙 Dark Desktop', value: 'dark-desktop' },
    { name: '🌙 Dark Mobile', value: 'dark-mobile' },
  ];

  const icon = React.createElement('span', { className: 'btn-icon' }, '★');

  React.useEffect(() => {
    // Theme CSS laden
    const themeLink = document.getElementById('theme-link');
    if (themeLink) {
      themeLink.href = `../styles/css/themes/mds-base-${currentTheme}.css`;
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

  return React.createElement('div', { className: 'demo-app' },
    React.createElement('button', { 
      className: 'theme-toggle-btn', 
      onClick: toggleTheme 
    }, currentThemeName),
    
    React.createElement('h1', null, 'MCP Agent Demo - React Version'),
    
    React.createElement('div', { className: 'demo-grid' },
      semantics.map((sem) =>
        React.createElement('div', { className: 'demo-card', key: sem },
          React.createElement('h3', null, sem),
          sizes.map((size) =>
            React.createElement('div', { key: size.cls },
              React.createElement('div', { className: 'demo-size-label' }, size.label),
              React.createElement('table', { className: 'demo-table' },
                React.createElement('thead', null,
                  React.createElement('tr', null,
                    React.createElement('th', null, 'State'),
                    React.createElement('th', null, 'Icon + Text'),
                    React.createElement('th', null, 'Icon only'),
                    React.createElement('th', null, 'Text only')
                  )
                ),
                React.createElement('tbody', null,
                  states.map((state) =>
                    React.createElement('tr', { key: state.label },
                      React.createElement('td', { className: 'demo-state-label' }, state.label),
                      React.createElement('td', null,
                        React.createElement(Button, {
                          type: sem,
                          interactionState: state.interactionState,
                          disabled: state.disabled,
                          icon: icon,
                          label: 'Button',
                          className: size.cls + (state.cls ? ` btn-${state.cls}` : '')
                        })
                      ),
                      React.createElement('td', null,
                        React.createElement(Button, {
                          type: sem,
                          interactionState: state.interactionState,
                          disabled: state.disabled,
                          icon: icon,
                          className: size.cls + (state.cls ? ` btn-${state.cls}` : '')
                        })
                      ),
                      React.createElement('td', null,
                        React.createElement(Button, {
                          type: sem,
                          interactionState: state.interactionState,
                          disabled: state.disabled,
                          label: 'Button',
                          className: size.cls + (state.cls ? ` btn-${state.cls}` : '')
                        })
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    ),
    
    React.createElement('div', { className: 'demo-label' },
      'Alle Permutationen: Nur relevante semantische States (primary, secondary, destructive, success, remotecontrol, tertiary), atom-size-md / atom-size-lg, alle Varianten (Icon+Text, Icon only, Text only)'
    )
  );
};
