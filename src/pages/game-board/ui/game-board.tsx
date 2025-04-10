import { useState } from "react";

import { useGameStore } from "@/entities/game-status";

import { GameHistory } from "./game-history";
import { Board } from "./board";

export const GameBoard = () => {
  const [historyStep, setHistoryStep] = useState<number | null>(null);

  const history = useGameStore((state) => state.history);
  const { proceedGame } = useGameStore((state) => state.actions);

  const currentBoard = history[historyStep ?? history.length - 1];

  return (
    <div className="h-screen w-screen flex items-center justify-center gap-4">
      <Board
        board={currentBoard}
        onClickBoard={(index) => {
          proceedGame(index);
        }}
      />
      <GameHistory />
    </div>
  );
};
