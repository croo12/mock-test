import _ from "lodash";
import { BoxConfig } from "../types";
import { HoverHandlers } from "motion/react";

interface IBox extends Readonly<BoxConfig>, HoverHandlers {
  readonly id: string;
  readonly visible: boolean;
  readonly update: (params: Partial<BoxConfig>) => Box;
  readonly color: string;
}

export class Box implements IBox {
  readonly id: string;
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;

  readonly visible: boolean;
  readonly color: string;

  readonly onHoverStart = () => {
    console.log("hover start");
  };
  readonly onHoverEnd = () => {
    console.log("hover end");
  };

  constructor(params: BoxConfig) {
    const {
      id = _.uniqueId(),
      x,
      y,
      width,
      height,
      visible = true,
      color = "red",
    } = params;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.visible = visible;
    this.color = color;

    this.id = id;
  }

  update(params: Partial<BoxConfig>) {
    return new Box({ ...this, ...params });
  }
}
