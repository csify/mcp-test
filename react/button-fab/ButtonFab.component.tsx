// Floating Action Button (FAB) – React-Implementierung nach Figma
import React from "react";
import "./ButtonFab.component.css";

export interface ButtonFabProps {
  iconSrc: string;
  label?: string;
  size?: "md" | "lg";
  interactionState?: "default" | "hover" | "focus" | "focus-visible" | "pressed" | "disabled";
  semanticState?: "default" | "destructive" | "disabled" | "remotecontrol";
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
    `fab-sem-${semanticState}`,
    semanticState === "disabled" ? "fab-disabled" : "",
    interactionState === "hover" ? "fab-hover" : "",
    interactionState === "focus" ? "fab-focus" : "",
    interactionState === "focus-visible" ? "fab-focus-visible" : "",
    interactionState === "pressed" ? "fab-pressed" : "",
  ].join(" ");

  return (
    <button
      className={classNames}
      tabIndex={interactionState !== "disabled" && semanticState !== "disabled" ? 0 : -1}
      disabled={interactionState === "disabled" || semanticState === "disabled"}
    >
      <span className="fab-icon">
        <img src={iconSrc} alt="FAB Icon" />
      </span>
      {label && <span className="fab-label">{label}</span>}
    </button>
  );
};

export default ButtonFab;
