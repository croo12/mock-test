import { Box, type Position, type Size } from "@/entities/box";
import { BaseBoxComponent } from "@/entities/box/ui/base-box";
import { DrawingLayer } from "@/features/drawing";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import React from "react";

export const DemoPage = () => {
  const [boxes, setBoxes] = React.useState<Box[]>([]);

  const handleDrawComplete = (box: Position & Size) => {
    setBoxes((prevBoxes) => [...prevBoxes, new Box(box)]);
  };

  return (
    <div className="flex w-full h-screen">
      <Card className="flex flex-col flex-1 h-full">
        <CardHeader>
          <CardTitle>Drawing</CardTitle>
          <CardDescription>Draw boxes on the canvas</CardDescription>
        </CardHeader>
        <CardContent className="relative flex-1 m-2">
          {boxes.map((box) => (
            <BaseBoxComponent box={box} key={box.id} />
          ))}
          <DrawingLayer onDrawComplete={handleDrawComplete} />
        </CardContent>
      </Card>
      <Card className="flex-none w-[300px]"></Card>
    </div>
  );
};
