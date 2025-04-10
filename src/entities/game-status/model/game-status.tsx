import { StoreAction } from "@/shared/zustand";
import { combine } from "zustand/middleware";
import { create } from "zustand/react";
import { GameBoard } from "../types";
import { overlay } from "overlay-kit";
import { Dialog, DialogContent } from "@/shared/ui";

type GameHistory = {
  history: Array<GameBoard>;
  currentMove: number;
};

type GameHistoryAction = StoreAction<{
  proceedGame: (nextCurrentMove: number) => void;
}>;

const isXTurn = (history: GameBoard[]) => {
  return history.length % 2 !== 0;
};

export const useGameStore = create<GameHistory & GameHistoryAction>()(
  combine<GameHistory, GameHistoryAction>(
    {
      history: [Array.from({ length: 9 }, () => null)],
      currentMove: 0
    },
    (set) => {
      return {
        actions: {
          proceedGame: (nextCurrentMove: number) => {
            set((state) => {
              const currentBoard = state.history[state.history.length - 1];
              const nextBoard = currentBoard.slice();

              if (currentBoard[nextCurrentMove] !== null) {
                overlay.open(({ isOpen, unmount }) => (
                  <Dialog
                    open={isOpen}
                    onOpenChange={(open) => (open ? null : unmount())}
                  >
                    <DialogContent>Invalid move</DialogContent>
                  </Dialog>
                ));
                return {};
              }

              const mark = isXTurn(state.history) ? "X" : "O";
              nextBoard[nextCurrentMove] = mark;

              return {
                currentMove: nextCurrentMove,
                history: [...state.history, nextBoard]
              };
            });
          }
        }
      };
    }
  )
);