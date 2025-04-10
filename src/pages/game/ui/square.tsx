import { motion } from "motion/react";
import { CellStatus } from "@/entities/game-status";

interface SquareProps {
  status: CellStatus;
  onClick: () => void;
}

export const Square = ({ status, onClick }: SquareProps) => {
  return (
    <motion.div
      className="col-span-1 row-span-1 flex items-center justify-center cursor-pointer border border-gray-300"
      style={{
        backgroundColor: "white",
        transition: "scale 0.2s ease-in-out"
      }}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
    >
      {status}
    </motion.div>
  );
};
