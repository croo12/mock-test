import { Button } from "@/shared/ui";
import { useGameStore } from "../model/game-status";

export const GoPreviousButton = () => {
  const { goPreviousMove } = useGameStore((state) => state.actions);

  return (
    <Button className="text-black" onClick={goPreviousMove}>
      Go Previous
    </Button>
  );
};
