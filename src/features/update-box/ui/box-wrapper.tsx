import type { Box } from "@/entities/box";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui";
import React from "react";
import { motion } from "motion/react";

interface BoxWrapperProps {
  box: Box;
}

export const BoxWrapper: React.FC<BoxWrapperProps> = ({ box }) => {
  const [open, setOpen] = React.useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      {/* Box content goes here */}
      <PopoverTrigger
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        asChild
      >
        <motion.div className="absolute h-full w-full bg-transparent" />
      </PopoverTrigger>
      <PopoverContent
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* You can add the content of the box here using box variable */}
        <div>Box ID: {box.id}</div>
        <div>Box Color: {box.color}</div>
        <div>
          Box Position: {box.x}, {box.y}
        </div>
        <div>
          Box Size: {box.width} x {box.height}
        </div>
      </PopoverContent>
    </Popover>
  );
};
