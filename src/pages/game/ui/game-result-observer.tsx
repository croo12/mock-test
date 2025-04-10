import { useGameStore } from "@/entities/game-status";
import { calculateWinner } from "@/entities/game-status/lib/calculate-winner";
import { useRouter } from "@/shared/router";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/shared/ui";
import { overlay } from "overlay-kit";
import { useEffect } from "react";

export const GameResultObserver = () => {
  const { resetGame } = useGameStore((state) => state.actions);

  useEffect(() => {
    const unsubscribe = useGameStore.subscribe((state) => {
      const lastBoard = state.history[state.history.length - 1];
      const result = calculateWinner(lastBoard);

      if (result) {
        overlay.open(({ isOpen, close, unmount }) => {
          const onClose = () => {
            useRouter.getState().history.push("/");
            resetGame();
            close();
            unmount();
          };

          return (
            <Dialog open={isOpen} modal onOpenChange={onClose}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{result} is Winner!</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                  Winner Winner Chicken Dinner!
                </DialogDescription>
                <DialogFooter>
                  <Button className="text-black" onClick={onClose}>
                    Go To Main
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          );
        });
      }
    });

    return unsubscribe;
  }, []);

  return null;
};
