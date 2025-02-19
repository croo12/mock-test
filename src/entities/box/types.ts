export interface Position {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface BoxConfig extends Position, Size {
  id?: string;
  visible?: boolean;
}
