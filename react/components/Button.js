// Button Component - ES Module (Browser-native)
import { createElement as h } from 'https://esm.sh/react@18';

/**
 * @typedef {Object} ButtonProps
 * @property {'primary' | 'secondary' | 'tertiary' | 'destructive' | 'success' | 'remotecontrol'} [type]
 * @property {'hover' | 'focus' | 'selected'} [interactionState]
 * @property {boolean} [disabled]
 * @property {React.ReactNode} [icon]
 * @property {string} [label]
 * @property {Function} [onClick]
 * @property {string} [className]
 * @property {string} [size]
 */

/**
 * Button component using design tokens
 * @param {ButtonProps} props
 */
export function Button({
  type = 'primary',
  interactionState,
  disabled = false,
  icon,
  label,
  onClick,
  className = '',
  size = 'md',
  ...rest
}) {
  const classes = [
    'btn',
    `btn-${type}`,
    `btn-${size}`,
    interactionState && `btn-${interactionState}`,
    disabled && 'btn-disabled',
    className
  ].filter(Boolean).join(' ');

  return h('button', {
    type: 'button',
    className: classes,
    disabled,
    onClick,
    ...rest
  },
    icon && h('span', { className: 'btn-icon' }, icon),
    label
  );
}

export default Button;
