import { Card } from "@/shared/ui";
import { useGameStore } from "../model/game-status";
import { GoPreviousButton } from "./go-previous-button";

export const GameHistory = () => {
  const history = useGameStore((state) => state.history);

  return (
    <Card className="w-40 h-96">
      <div className="flex flex-col gap-2 h-full">
        <div className="text-lg font-bold text-center">Game History</div>
        <div className="text-center">
          <GoPreviousButton />
        </div>
        <div className="grid grid-rows-9 grid-cols-1 flex-1">
          {history
            .slice()
            .reverse()
            .map((move, index) => {
              return (
                <div key={index} className="row-span-1 col-span-1 text-center">
                  {move}
                </div>
              );
            })}
        </div>
      </div>
    </Card>
  );
};