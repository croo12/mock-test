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
import { BoxWrapper } from "@/features/update-box/ui";

export const DemoPage = () => {
  const [mode, setMode] = React.useState<"drawing" | "update">("drawing");
  const [boxes, setBoxes] = React.useState<Box[]>([]);
  const [options, setOptions] = React.useState<BoxStyle>({});

  const handleDrawComplete = (box: Position & Size & BoxStyle) => {
    setBoxes((prevBoxes) => [...prevBoxes, new Box(box)]);
  };

  return (
    <div className="flex h-screen w-full">
      <Card className="flex h-full flex-1 flex-col">
        <CardHeader>
          <CardTitle>
            Drawing{" "}
            <Button
              variant="outline"
              onClick={() =>
                setMode((prev) => (prev === "drawing" ? "update" : "drawing"))
              }
            >
              change
            </Button>
          </CardTitle>
          <CardDescription>Draw boxes on the canvas</CardDescription>
        </CardHeader>
        <CardContent className="relative m-2 flex-1">
          {boxes.map((box) => (
            <BaseBoxComponent key={box.id} box={box}>
              <BoxWrapper box={box} />
            </BaseBoxComponent>
          ))}
          {mode === "drawing" && (
            <DrawingLayer
              onDrawComplete={handleDrawComplete}
              drawingOptions={options}
            />
          )}
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
