import { Card } from "@/shared/ui";
import { Square } from "./square";
import { GameHistory } from "./game-history";

export const GameBoard = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center gap-4">
      <Card className="grid grid-cols-3 grid-rows-3 w-96 h-96 overflow-hidden border-black">
        {Array.from({ length: 9 }, (_, index) => {
          return <Square key={index} index={index} />;
        })}
      </Card>
      <GameHistory />
    </div>
  );
};
