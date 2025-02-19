// DrawingLayer.tsx
import React, { useState, useRef, MouseEvent } from "react";
import type { Position, Size } from "@/entities/box";

interface DrawingLayerProps {
  onDrawComplete: (box: Position & Size) => void;
}

export const DrawingLayer: React.FC<DrawingLayerProps> = ({
  onDrawComplete,
}) => {
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [startPos, setStartPos] = useState<Position>({
    x: 0,
    y: 0,
  });
  const [currentBox, setCurrentBox] = useState<(Position & Size) | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!overlayRef.current) return;
    const rect = overlayRef.current.getBoundingClientRect();
    const startX = e.clientX - rect.left;
    const startY = e.clientY - rect.top;
    setStartPos({ x: startX, y: startY });
    setCurrentBox({ x: startX, y: startY, width: 0, height: 0 });
    setIsDrawing(true);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDrawing || !overlayRef.current) return;
    const rect = overlayRef.current.getBoundingClientRect();
    const currentX = e.clientX - rect.left;
    const currentY = e.clientY - rect.top;
    const newBox: Position & Size = {
      x: Math.min(startPos.x, currentX),
      y: Math.min(startPos.y, currentY),
      width: Math.abs(currentX - startPos.x),
      height: Math.abs(currentY - startPos.y),
    };
    setCurrentBox(newBox);
  };

  const handleMouseUp = () => {
    if (!isDrawing || !currentBox) return;
    onDrawComplete(currentBox);
    setCurrentBox(null);
    setIsDrawing(false);
  };

  return (
    <div
      ref={overlayRef}
      role="application"
      tabIndex={0}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        cursor: "crosshair",
        zIndex: 10, // BoxRenderer보다 위에 위치
      }}
    >
      {currentBox && (
        <div
          style={{
            position: "absolute",
            left: currentBox.x,
            top: currentBox.y,
            width: currentBox.width,
            height: currentBox.height,
            border: "2px dashed blue",
          }}
        />
      )}
    </div>
  );
};
