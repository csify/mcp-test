// Einfache Button-Komponente für Browser-Verwendung ohne Build-System
const Button = ({ 
  type = 'primary',
  interactionState,
  disabled = false,
  icon,
  label,
  onClick,
  className = '',
  style = {},
  ...rest
}) => {
  let btnClass = `btn btn-${type}`;
  if (interactionState) btnClass += ` btn-${interactionState}`;
  if (disabled) btnClass += ' btn-disabled';
  if (className) btnClass += ` ${className}`;

  return React.createElement(
    'button',
    {
      type: 'button',
      className: btnClass,
      disabled: disabled,
      onClick: onClick,
      style: style,
      ...rest
    },
    icon && React.createElement('span', { className: 'btn-icon' }, icon),
    label
  );
};
