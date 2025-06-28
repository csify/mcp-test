// Button1.tsx
// Generiert aus Figma-Komponente (node-id: 8391-13499)
// Tailwind wurde in Vanilla CSS umgewandelt, keine externen Abhängigkeiten benötigt.

import React from "react";
import "./Button1.css";

const img = "http://localhost:3845/assets/d59c1271f22b1f3af5fcc4266bafee367552852c.svg";
const img1 = "http://localhost:3845/assets/7c33596b35d3d044fac9eab224d324277a7cb2fd.svg";
const img2 = "http://localhost:3845/assets/6d3c5bc1e13ae5b6244a9bf5d51247ccc15f3b76.svg";
const img3 = "http://localhost:3845/assets/58dbbfb28cf56bb432bc5af265b03bb15e69929b.svg";

interface ButtonProps {
  hasIcon?: boolean;
  hasLabel?: boolean;
  hasMenu?: boolean;
  type?: "Primary" | "Secondary" | "Tertiary" | "Inline";
  size?: "md" | "lg";
  interactionState?: "Default" | "Hover" | "Selected" | "Focus" | "Pressed" | "Disabled";
  semanticState?: "Default" | "Destructive" | "Disabled" | "RemoteControl";
}

export function Button({
  hasIcon = true,
  hasLabel = true,
  hasMenu = false,
  type = "Primary",
  size = "lg",
  interactionState = "Default",
  semanticState = "Default",
}: ButtonProps) {
  // Dynamische CSS-Klassen generieren
  const classNames = [
    "button1-root",
    "btn",
    `btn-${type.toLowerCase()}`,
    `btn-${size}`,
    `btn-${interactionState.toLowerCase()}`,
    `btn-sem-${semanticState.toLowerCase()}`,
    semanticState === "Disabled" ? "btn-disabled" : "",
    interactionState === "Hover" ? "btn-hover" : "",
    interactionState === "Selected" ? "btn-selected" : "",
    interactionState === "Focus" ? "btn-focus" : "",
    interactionState === "Pressed" ? "btn-pressed" : "",
  ].join(" ");

  return (
    <div className={classNames} tabIndex={semanticState !== "Disabled" ? 0 : -1}>
      <div className="btn-main">
        <div className="btn-content">
          <div className="btn-inner">
            {hasIcon && (
              <span className="btn-icon">
                <img src={img} alt="icon1" />
                <img src={img1} alt="icon2" />
              </span>
            )}
            {hasLabel && (
              <span className="btn-label">
                <span>A button's text</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Button1() {
  return <Button />;
}
