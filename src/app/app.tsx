import { lazy, Suspense } from "react";
import "./app.css";
import { useRouter } from "@/shared/router";
import { OverlayProvider } from "overlay-kit";

const Demo = lazy(() => import("@/pages/demo"));
const GameBoard = lazy(() => import("@/pages/game"));

export function App() {
  const path = useRouter((state) => state.path);

  return (
    <OverlayProvider>
      <Suspense fallback={<div>Loading...</div>}>
        {(() => {
          switch (path) {
            case "/":
              return <Demo />;
            case "/game":
              return <GameBoard />;
            default:
              return <div>Not Found</div>;
          }
        })()}
      </Suspense>
    </OverlayProvider>
  );
}
