export function ukfThemeToCss(parts: {
    colorSettings?: any;
    typographySettings?: any;
    styleSettings?: any;
}) {
    const color = parts.colorSettings ?? {};
    const typography = parts.typographySettings ?? {};
    const style = parts.styleSettings ?? {};

    const primary = color.primary ?? "#3b82f6";
    const surface = color.surface ?? "#ffffff";
    const bg = color.background ?? "#f6f7fb";
    const text = color.text ?? "#111827";
    const border = color.border ?? "rgba(0,0,0,.12)";

    const radius = style.radius ?? 12;
    const space = style.space ?? 8;

    const h1Family = typography.h1?.font?.family ?? "system-ui";
    const h1Size = typography.h1?.size ?? 32;
    const h1Track = typography.h1?.spacing ?? 0;

    return `
.ukf-theme {
  --ukf-primary: ${primary};
  --ukf-bg: ${bg};
  --ukf-surface: ${surface};
  --ukf-text: ${text};
  --ukf-border: ${border};

  --ukf-radius: ${radius}px;
  --ukf-space: ${space}px;

  --ukf-h1-font: "${h1Family}", system-ui;
  --ukf-h1-size: ${h1Size}px;
  --ukf-h1-tracking: ${h1Track}px;
}

.ukf-theme { background: var(--ukf-bg); color: var(--ukf-text); }
.ukf-container { max-width: 1080px; margin: 0 auto; padding: calc(var(--ukf-space) * 2); }

.ukf-card {
  background: var(--ukf-surface);
  border: 1px solid var(--ukf-border);
  border-radius: var(--ukf-radius);
  padding: calc(var(--ukf-space) * 2);
}

.ukf-btn-row { display:flex; gap: var(--ukf-space); flex-wrap:wrap; }
.ukf-btn {
  padding: calc(var(--ukf-space) * 1.25) calc(var(--ukf-space) * 1.75);
  border-radius: calc(var(--ukf-radius) - 4px);
  border: 1px solid transparent;
  cursor: pointer;
  font: inherit;
}
.ukf-btn--primary { background: var(--ukf-primary); color: #fff; }
.ukf-btn--secondary { background: transparent; border-color: var(--ukf-border); color: var(--ukf-text); }

.ukf-h1 { font-family: var(--ukf-h1-font); font-size: var(--ukf-h1-size); letter-spacing: var(--ukf-h1-tracking); margin:0 0 var(--ukf-space); }

.ukf-media { border:1px solid var(--ukf-border); border-radius: var(--ukf-radius); overflow:hidden; background: rgba(0,0,0,.03); }
.ukf-media__ph { aspect-ratio: 16/9; display:flex; align-items:center; justify-content:center; color: rgba(0,0,0,.45); }
`;
}
