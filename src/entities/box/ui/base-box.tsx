import type { Box } from "../model/box";
import { motion } from "motion/react";

interface BaseBoxComponentProps {
  box: Box;
  children?: React.ReactNode;
}

export const BaseBoxComponent: React.FC<BaseBoxComponentProps> = (props) => {
  const {
    box: { x, y, width, height, visible, color, onHoverStart, onHoverEnd },
  } = props;

  return (
    <motion.div
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      style={{
        display: visible ? "block" : "none",
        position: "absolute",
        left: x,
        top: y,
        width: width,
        height: height,
        border: "2px solid",
        borderColor: color,
      }}
    >
      <div className="relative h-full w-full">{props.children}</div>
    </motion.div>
  );
};
