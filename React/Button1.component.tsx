// Button1.tsx
// Generiert aus Figma-Komponente (node-id: 8391-13499)
// Tailwind wurde in Vanilla CSS umgewandelt, keine externen Abhängigkeiten benötigt.

import React from "react";

const img = "http://localhost:3845/assets/d59c1271f22b1f3af5fcc4266bafee367552852c.svg";
const img1 = "http://localhost:3845/assets/7c33596b35d3d044fac9eab224d324277a7cb2fd.svg";
const img2 = "http://localhost:3845/assets/6d3c5bc1e13ae5b6244a9bf5d51247ccc15f3b76.svg";
const img3 = "http://localhost:3845/assets/58dbbfb28cf56bb432bc5af265b03bb15e69929b.svg";

import "./Button1.css";

interface ButtonProps {
  hasIcon?: boolean;
  hasLabel?: boolean;
  hasMenu?: boolean;
  type?: "Primary" | "Secondary" | "Tertiary" | "Inline";
  size?: "md" | "lg";
  interactionState?: "Default" | "Hover" | "Selected" | "Focus";
  semanticState?: "Default" | "Destructive" | "Disabled" | "RemoteControl";
}

function Button({
  hasIcon = true,
  hasLabel = true,
  hasMenu = false,
  type = "Primary",
  size = "lg",
  interactionState = "Default",
  semanticState = "Default",
}: ButtonProps) {
  // Beispiel: Ein Zustand, Vanilla CSS-Klassen werden verwendet
  if (
    type === "Tertiary" &&
    size === "lg" &&
    interactionState === "Default" &&
    semanticState === "Default"
  ) {
    return (
      <div className="btn-tertiary-lg-default">
        <div className="btn-main">
          <div className="btn-content">
            <div className="btn-inner">
              {hasIcon && (
                <div className="btn-icon">
                  <img src={img} alt="icon1" />
                  <img src={img1} alt="icon2" />
                </div>
              )}
              {hasLabel && (
                <div className="btn-label">
                  <p>A button's text</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
  // ...weitere Zustände analog wie oben, mit passenden CSS-Klassen
  return null;
}

export default function Button1() {
  return (
    <div className="button1-root">
      <Button />
    </div>
  );
}
