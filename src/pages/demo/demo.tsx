import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Button,
} from "@/shared/ui";
import { Box, BoxStyle, type Position, type Size } from "@/entities/box";
import { BaseBoxComponent } from "@/entities/box/ui/base-box";
import { DrawingLayer } from "@/features/drawing";
import React from "react";

export const DemoPage = () => {
  const [boxes, setBoxes] = React.useState<Box[]>([]);
  const [options, setOptions] = React.useState<BoxStyle>({});

  const handleDrawComplete = (box: Position & Size & BoxStyle) => {
    setBoxes((prevBoxes) => [...prevBoxes, new Box(box)]);
  };

  return (
    <div className="flex h-screen w-full">
      <Card className="flex h-full flex-1 flex-col">
        <CardHeader>
          <CardTitle>Drawing</CardTitle>
          <CardDescription>Draw boxes on the canvas</CardDescription>
        </CardHeader>
        <CardContent className="relative m-2 flex-1">
          {boxes.map((box) => (
            <BaseBoxComponent box={box} key={box.id} />
          ))}
          <DrawingLayer
            onDrawComplete={handleDrawComplete}
            drawingOptions={options}
          />
        </CardContent>
      </Card>
      <Card className="w-[300px] flex-none">
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
          className="bg-black-500 w-full"
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
