import { Card } from "@/shared/ui";
import { useGameStore } from "@/entities/game-status";
import { cn } from "@/shared/ui/utils";
import { motion } from "motion/react";

interface GameHistoryProps {
  historyStep: number | null;
  onClickHistoryStep: (step: number) => void;
}

export const GameHistory = ({
  historyStep,
  onClickHistoryStep
}: GameHistoryProps) => {
  const history = useGameStore((state) => state.history);

  const highlightedStep = historyStep ?? history.length - 1;

  return (
    <Card className="w-40 h-96">
      <div className="flex flex-col gap-2 h-full">
        <div className="text-lg font-bold text-center">Game History</div>
        <div className="text-center">{/* <GoPreviousButton /> */}</div>
        <div className="grid grid-rows-10 grid-cols-1 flex-1 overflow-hidden">
          {history
            .slice()
            .reverse()
            .map((_, index) => {
              const step = history.length - index - 1;
              console.log(highlightedStep, step);

              return (
                <motion.div
                  key={step}
                  className={cn(
                    "row-span-1 col-span-1 text-center cursor-pointer",
                    highlightedStep === step && "bg-blue-500"
                  )}
                  onClick={() => onClickHistoryStep(step)}
                  initial={{ opacity: 0, translateX: "100%" }}
                  animate={{ opacity: 1, translateX: 0 }}
                  exit={{ opacity: 0, translateX: "-50%" }}
                  transition={{ duration: 0.5 }}
                >
                  Turn: {step}
                </motion.div>
              );
            })}
        </div>
      </div>
    </Card>
  );
};