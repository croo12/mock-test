import { Box, type Position, type Size } from "@/entities/box";
import { BaseBoxComponent } from "@/entities/box/ui/base-box";
import { DrawingLayer } from "@/features/drawing";
import React from "react";

export const DemoPage = () => {
  const [boxes, setBoxes] = React.useState<Box[]>([]);

  const handleDrawComplete = (box: Position & Size) => {
    setBoxes((prevBoxes) => [...prevBoxes, new Box(box)]);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        border: "1px solid black",
      }}
    >
      {boxes.map((box) => (
        <BaseBoxComponent box={box} key={box.id} />
      ))}
      <DrawingLayer onDrawComplete={handleDrawComplete} />
    </div>
  );
};
