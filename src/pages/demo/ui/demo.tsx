import { Button } from "@/shared/ui";
import { useRouter } from "@/shared/router";
export const Demo = () => {
  const history = useRouter((state) => state.history);

  return (
    <div>
      <Button onClick={() => history.push("/game")} className="text-black">
        go to game
      </Button>
    </div>
  );
};
