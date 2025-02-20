export interface Position {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface BoxStyle {
  color?: string;
}

export interface BoxConfig extends Position, Size, BoxStyle {
  id?: string;
  visible?: boolean;
}
