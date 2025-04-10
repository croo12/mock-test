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
        return overlay.open(({ isOpen, unmount }) => {
          const onClose = () => {
            useRouter.getState().history.push("/");
            resetGame();
            unmount();
          };

          return (
            <ResultModal result={result} open={isOpen} onClose={onClose} />
          );
        });
      }

      if (lastBoard.every((item) => item !== null)) {
        return overlay.open(({ isOpen, unmount }) => {
          const onClose = () => {
            resetGame();
            unmount();
          };

          return (
            <Dialog open={isOpen} modal onOpenChange={onClose}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Draw</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                  No winner, no loser, just a draw.
                </DialogDescription>
                <DialogFooter>
                  <Button className="text-black" onClick={onClose}>
                    Restart
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

const ResultModal = ({
  result,
  open,
  onClose
}: { result: string; open: boolean; onClose: () => void }) => (
  <Dialog open={open} modal onOpenChange={onClose}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{result} is Winner!</DialogTitle>
      </DialogHeader>
      <DialogDescription>Winner Winner Chicken Dinner!</DialogDescription>
      <DialogFooter>
        <Button className="text-black" onClick={onClose}>
          Go To Main
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
