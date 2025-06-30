import React from "react";

export type ButtonFigmaType = "Primary" | "Secondary" | "Tertiary" | "Inline";
export type ButtonFigmaSize = "md" | "lg";
export type ButtonFigmaInteraction = "Default" | "Hover" | "Selected" | "Focus";
export type ButtonFigmaSemantic = "Default" | "Destructive" | "Disabled" | "RemoteControl";

export interface ButtonFigmaProps {
  hasIcon?: boolean;
  hasLabel?: boolean;
  hasMenu?: boolean;
  type?: ButtonFigmaType;
  size?: ButtonFigmaSize;
  interactionState?: ButtonFigmaInteraction;
  semanticState?: ButtonFigmaSemantic;
  label?: string;
}

export const ButtonFigma: React.FC<ButtonFigmaProps> = ({
  hasIcon = true,
  hasLabel = true,
  hasMenu = false,
  type = "Primary",
  size = "lg",
  interactionState = "Default",
  semanticState = "Default",
  label = "A button's text",
}) => {
  // TODO: Mapping der States auf CSS-Klassen und -Variablen
  // Platzhalter-Styles für Demo
  return (
    <button className={`figma-btn figma-btn-${type.toLowerCase()} figma-btn-${size} figma-btn-${interactionState.toLowerCase()} figma-btn-${semanticState.toLowerCase()}`}
      disabled={semanticState === "Disabled"}
      style={{ fontFamily: 'Weissenhof Grotesk Variable, sans-serif', fontWeight: 390, fontSize: 14, lineHeight: '20px', borderRadius: 2, padding: '0 20px', gap: 5 }}
    >
      {hasIcon && <span className="figma-btn-icon" style={{ width: 16, height: 16, display: 'inline-block', background: '#ccc', borderRadius: 2, marginRight: hasLabel ? 5 : 0 }} />}
      {hasLabel && <span>{label}</span>}
    </button>
  );
};

export default ButtonFigma;
