import { GameBoard } from "@/entities/game-status";
import { Card } from "@/shared/ui";
import { Square } from "./square";

interface BoardProps {
  board: GameBoard;
  onClickBoard: (index: number) => void;
}

export const Board = ({ board, onClickBoard }: BoardProps) => {
  return (
    <Card className="grid grid-cols-3 grid-rows-3 w-96 h-96 overflow-hidden border-black">
      {board.map((item, index) => {
        return (
          <Square
            key={`current-${item}-${index}`}
            status={item}
            onClick={() => onClickBoard(index)}
          />
        );
      })}
    </Card>
  );
};