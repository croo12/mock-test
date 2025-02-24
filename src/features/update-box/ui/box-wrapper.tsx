import type { Box } from "@/entities/box";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui";

interface BoxWrapperProps {
  box: Box;
  children: React.ReactNode;
}

export const BoxWrapper: React.FC<BoxWrapperProps> = ({ box, children }) => {
  return (
    <Popover>
      {/* Box content goes here */}
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent>
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
