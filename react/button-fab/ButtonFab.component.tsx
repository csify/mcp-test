// Floating Action Button (FAB) – React-Implementierung nach Figma
import React from "react";
import "./ButtonFab.component.css";

export interface ButtonFabProps {
  iconSrc: string;
  label?: string;
  size?: "md" | "lg";
  interactionState?: "default" | "hover" | "focus" | "pressed" | "disabled";
  semanticState?: "default" | "destructive" | "disabled";
}

export const ButtonFab: React.FC<ButtonFabProps> = ({
  iconSrc,
  label,
  size = "lg",
  interactionState = "default",
  semanticState = "default",
}) => {
  const classNames = [
    "fab-root",
    `fab-${size}`,
    `fab-${interactionState}`,
    `fab-sem-${semanticState}`
  ].join(" ");

  return (
    <button className={classNames} tabIndex={interactionState !== "disabled" ? 0 : -1} disabled={interactionState === "disabled" || semanticState === "disabled"}>
      <span className="fab-icon">
        <img src={iconSrc} alt="FAB Icon" />
      </span>
      {label && <span className="fab-label">{label}</span>}
    </button>
  );
};

export default ButtonFab;
