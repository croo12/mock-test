import _ from "lodash";

export interface BoxConfig {
  x: number;
  y: number;
  width: number;
  height: number;
  visible?: boolean;
  id?: string;
}

export class Box {
  readonly id: string;
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;

  readonly visible: boolean;

  constructor(params: BoxConfig) {
    const { id = _.uniqueId(), x, y, width, height, visible = true } = params;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.visible = visible;

    this.id = id;
  }

  update(params: Partial<BoxConfig>) {
    return new Box({ ...this, ...params });
  }
}
