import React from 'react';
import { Button } from './button/button';
import './button/button.css';

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

export const ButtonDemo: React.FC = () => (
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
                        label={undefined}
                        className={size.cls + (state.cls ? ` btn-${state.cls}` : '')}
                      />
                    </td>
                    <td>
                      <Button
                        type={sem as any}
                        interactionState={state.interactionState as any}
                        disabled={state.disabled}
                        icon={undefined}
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
);

export default ButtonDemo;
