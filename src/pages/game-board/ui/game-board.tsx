import { useState } from "react";

import { useGameStore } from "@/entities/game-status";

import { GameHistory } from "./game-history";
import { Board } from "./board";

export const GameBoard = () => {
  const [historyStep, setHistoryStep] = useState<number | null>(null);

  const board = useGameStore(
    (state) => state.history[historyStep ?? state.history.length - 1]
  );
  const { proceedGame } = useGameStore((state) => state.actions);

  return (
    <div className="h-screen w-screen flex items-center justify-center gap-4">
      <Board
        board={board}
        onClickBoard={(index) => {
          proceedGame(index);
        }}
      />
      <GameHistory
        historyStep={historyStep}
        onClickHistoryStep={(step) => setHistoryStep(step)}
      />
    </div>
  );
};
