import { StoreAction } from "@/shared/zustand";
import { combine } from "zustand/middleware";
import { create } from "zustand/react";

type GameHistory = {
  history: Array<number>;
  currentMove: number;
};

type GameHistoryAction = StoreAction<{
  setCurrentMove: (nextCurrentMove: number) => void;
  goPreviousMove: () => void;
}>;

export const useGameStore = create<GameHistory & GameHistoryAction>()(
  combine<GameHistory, GameHistoryAction>(
    {
      history: [],
      currentMove: 0
    },
    (set) => {
      return {
        actions: {
          setCurrentMove: (nextCurrentMove: number) => {
            set((state) => ({
              currentMove: nextCurrentMove,
              history: [...state.history, nextCurrentMove]
            }));
          },
          goPreviousMove: () => {
            set((state) => {
              const newHistory = state.history.slice(0, -1);
              const newCurrentMove = newHistory[newHistory.length - 1];

              return {
                history: newHistory,
                currentMove: newCurrentMove
              };
            });
          }
        }
      };
    }
  )
);