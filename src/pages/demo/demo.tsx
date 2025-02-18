import { BaseBox } from "@/entities/box";
import { BaseBoxComponent } from "@/entities/box/ui/base-box";
import { DrawingLayer } from "@/features/drawing";
import React from "react";

export const DemoPage = () => {
  const [boxes, setBoxes] = React.useState<BaseBox[]>([]);

  const handleDrawComplete = (box: BaseBox) => {
    setBoxes((prevBoxes) => [...prevBoxes, box]);
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
      {boxes.map((box, index) => (
        <BaseBoxComponent {...box} key={index} />
      ))}
      <DrawingLayer onDrawComplete={handleDrawComplete} />
    </div>
  );
};
