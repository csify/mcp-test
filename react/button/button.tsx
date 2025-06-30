import React from 'react';
import './button.css';

export type ButtonProps = {
  type?: 'primary' | 'secondary' | 'destructive' | 'remotecontrol';
  interactionState?: 'hover' | 'focus' | 'selected';
  disabled?: boolean;
  icon?: React.ReactNode;
  label?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  style?: React.CSSProperties;
};

export const Button: React.FC<ButtonProps> = ({
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

  return (
    <button
      type="button"
      className={btnClass}
      disabled={disabled}
      onClick={onClick}
      style={style}
      {...rest}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {label}
    </button>
  );
};
