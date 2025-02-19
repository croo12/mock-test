import { describe, it, expect } from "vitest";
import { Box } from "./box";

describe("Box", () => {
  it("should have properties x, y, width, height, visible", () => {
    const box = new Box({ x: 10, y: 20, width: 30, height: 40 });
    expect(box).toHaveProperty("x");
    expect(box).toHaveProperty("y");
    expect(box).toHaveProperty("width");
    expect(box).toHaveProperty("height");
    expect(box).toHaveProperty("visible");
  });

  it("should initialize x, y, width, height through constructor", () => {
    const box = new Box({ x: 10, y: 20, width: 30, height: 40 });
    expect(box.x).toBe(10);
    expect(box.y).toBe(20);
    expect(box.width).toBe(30);
    expect(box.height).toBe(40);
  });

  it("should update properties and trigger rerendering", () => {
    const box = new Box({ x: 10, y: 20, width: 30, height: 40 });
    const initialReference = box;
    const updatedBox = box.update({ x: 50, y: 60, width: 70, height: 80 });
    expect(updatedBox.x).toBe(50);
    expect(updatedBox.y).toBe(60);
    expect(updatedBox.width).toBe(70);
    expect(updatedBox.height).toBe(80);
    expect(updatedBox).not.toBe(initialReference);
  });

  it("should not be visible when visible is false", () => {
    const box = new Box({ x: 10, y: 20, width: 30, height: 40 });
    const updatedBox = box.update({ visible: false });
    expect(updatedBox.visible).toBe(false);
  });

  it("should have a unique id and maintain it after update", () => {
    const box = new Box({ x: 10, y: 20, width: 30, height: 40 });
    const initialId = box.id;
    const updatedBox = box.update({ x: 50, y: 60, width: 70, height: 80 });
    expect(updatedBox.id).toBe(initialId);
  });
});
