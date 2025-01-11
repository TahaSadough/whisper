import type { duration, position, type } from "./types";

export interface WhisperOptions {
  duration?: duration;
  position?: position;
  textAlign?: "left" | "center" | "right";
  id?: string | null;
  type?: type;
  backgroundColor?: string;
  textColor?: string;
}

export interface Icon {
  success: string;
  loading: string;
  error: string;
}
