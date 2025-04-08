import { useCallback } from "react";
import { useGameStore } from "../model/game-status";
import { motion } from "motion/react";

interface SquareProps {
  index: number;
}

export const Square = ({ index }: SquareProps) => {
  const now = useGameStore((state) => state.history.indexOf(index));
  const { setCurrentMove } = useGameStore((state) => state.actions);

  const handleClick = useCallback(() => {
    if (now !== -1) return;

    setCurrentMove(index);
  }, [index, setCurrentMove]);

  return (
    <motion.div
      className="col-span-1 row-span-1 flex items-center justify-center cursor-pointer border border-gray-300"
      onClick={handleClick}
    >
      {now === -1 ? "Empty" : now % 2 === 0 ? "X" : "O"}
    </motion.div>
  );
};
