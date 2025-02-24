import { motion } from "motion/react";
// DrawingLayer.tsx
import React, { useState, useRef, MouseEvent } from "react";
import type { BoxStyle, Position, Size } from "@/entities/box";

interface DrawingLayerProps {
  onDrawComplete: (box: Position & Size & BoxStyle) => void;
  drawingOptions?: BoxStyle;
  disabled?: boolean;
}

export const DrawingLayer: React.FC<DrawingLayerProps> = ({
  onDrawComplete,
  drawingOptions,
  disabled,
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
    onDrawComplete({ ...currentBox, ...drawingOptions });
    setCurrentBox(null);
    setIsDrawing(false);
  };

  return (
    <motion.div
      ref={overlayRef}
      role="application"
      tabIndex={0}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      className={`absolute top-0 right-0 bottom-0 left-0 z-10 cursor-crosshair rounded-md border border-black ${disabled ? "pointer-events-none" : ""}`}
    >
      {currentBox && (
        <motion.div
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
    </motion.div>
  );
};
