import { Box, BoxStyle, type Position, type Size } from "@/entities/box";
import { BaseBoxComponent } from "@/entities/box/ui/base-box";
import { DrawingLayer } from "@/features/drawing";
import { Button } from "@/shared/ui/button";
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
  const [options, setOptions] = React.useState<BoxStyle>({});

  const handleDrawComplete = (box: Position & Size & BoxStyle) => {
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
          <DrawingLayer
            onDrawComplete={handleDrawComplete}
            drawingOptions={options}
          />
        </CardContent>
      </Card>
      <Card className="flex-none w-[300px]">
        <Button
          variant="secondary"
          size="lg"
          className="w-full bg-red-500"
          onClick={() => setOptions((prev) => ({ ...prev, color: "red" }))}
        >
          RED
        </Button>
        <Button
          variant="secondary"
          size="lg"
          className="w-full bg-blue-500"
          onClick={() => setOptions((prev) => ({ ...prev, color: "blue" }))}
        >
          BLUE
        </Button>
        <Button
          variant="secondary"
          size="lg"
          className="w-full bg-black-500"
          onClick={() => setOptions((prev) => ({ ...prev, color: "black" }))}
        >
          BLACK
        </Button>
        <Button
          variant="secondary"
          size="lg"
          className="w-full bg-gray-500"
          onClick={() => setOptions((prev) => ({ ...prev, color: "gray" }))}
        >
          GRAY
        </Button>
      </Card>
    </div>
  );
};
