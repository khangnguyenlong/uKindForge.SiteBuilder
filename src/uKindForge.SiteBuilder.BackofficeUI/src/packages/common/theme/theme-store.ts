import type { ThemeParts } from "./types";

class UkfThemeStore extends EventTarget {
  private _state: ThemeParts = {};

  get snapshot() {
    return this._state;
  }

  setColorSettings(v: any) {
    this._state = { ...this._state, colorSettings: v };
    this.dispatchEvent(new CustomEvent("ukf-theme-change", { detail: this._state }));
  }

  setTypographySettings(v: any) {
    this._state = { ...this._state, typographySettings: v };
    this.dispatchEvent(new CustomEvent("ukf-theme-change", { detail: this._state }));
  }

  setStyleSettings(v: any) {
    this._state = { ...this._state, styleSettings: v };
    this.dispatchEvent(new CustomEvent("ukf-theme-change", { detail: this._state }));
  }

  subscribe(cb: (s: ThemeParts) => void) {
    const h = (e: Event) => cb((e as CustomEvent).detail);
    this.addEventListener("ukf-theme-change", h);
    cb(this._state); // push initial
    return () => this.removeEventListener("ukf-theme-change", h);
  }
}

export const ukfThemeStore = new UkfThemeStore();
